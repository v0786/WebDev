import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  Globe, 
  Phone, 
  MessageSquare, 
  AlertCircle, 
  Plus, 
  Filter,
  RefreshCw,
  Zap,
  Building2,
  Star,
  Trash2,
  Server,
  Upload,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Clock
} from 'lucide-react';
import { soundFx } from '../audio/SoundEffects';
import { salesService } from '../../services/salesService';
import { getScraperApiUrl, SCRAPER_API_URL } from '../../config/scraper';
import { ScraperConnection } from './ScraperConnection';
import { ScraperLogs, LogEntry } from './ScraperLogs';
import { scraperClient } from '../../services/scraper/client';


// Normalized Scraped Lead Interface
export interface ScrapedLead {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  state?: string;
  country?: string;
  phone: string | null;
  email?: string | null;
  website: string | null;
  rating: string | null;
  reviewCount: string | null;
  latitude?: string | null;
  longitude?: string | null;
  googleMapsUrl: string | null;
  hasWebsite: boolean;
  source: 'google_maps' | 'import';
  scrapedAt: string;
}

interface LeadScraperPortalProps {
  onBackToPortalChoice: () => void;
  onImportLeadToDashboard?: (leadName: string, phone: string, email: string, category: string) => void;
}

// Predefined City Coordinates for legitimate geocoding
const CITY_COORDINATES: Record<string, { lat: string; lon: string }> = {
  'nagpur': { lat: '21.1458', lon: '79.0882' },
  'mumbai': { lat: '19.0760', lon: '72.8777' },
  'pune': { lat: '18.5204', lon: '73.8567' },
  'delhi': { lat: '28.6139', lon: '77.2090' },
  'bangalore': { lat: '12.9716', lon: '77.5946' },
  'bengaluru': { lat: '12.9716', lon: '77.5946' },
  'hyderabad': { lat: '17.3850', lon: '78.4867' },
  'chennai': { lat: '13.0827', lon: '80.2707' },
  'kolkata': { lat: '22.5726', lon: '88.3639' },
  'ahmedabad': { lat: '23.0225', lon: '72.5714' },
  'surat': { lat: '21.1702', lon: '72.8311' },
  'jaipur': { lat: '26.9124', lon: '75.7873' },
  'austin': { lat: '30.2672', lon: '-97.7431' },
  'new york': { lat: '40.7128', lon: '-74.0060' },
  'london': { lat: '51.5074', lon: '-0.1278' },
};

// Comprehensive Industry Category Options for Dropdown & Quick Search
export const FEATURED_CATEGORIES = [
  { id: 'gyms', label: 'Gyms & Fitness Centers', icon: '🏋️', query: 'gyms' },
  { id: 'salons', label: 'Salons, Beauty & Spas', icon: '💇', query: 'salons' },
  { id: 'dentists', label: 'Dentists & Dental Clinics', icon: '🦷', query: 'dentists' },
  { id: 'restaurants', label: 'Restaurants & Cafes', icon: '🍕', query: 'restaurants' },
  { id: 'realestate', label: 'Real Estate Agencies', icon: '🏬', query: 'real estate' },
  { id: 'autorepair', label: 'Auto Repair & Garages', icon: '🚗', query: 'car repair' },
  { id: 'hotels', label: 'Hotels & Lodging', icon: '🏨', query: 'hotels' },
  { id: 'software', label: 'IT & Software Studios', icon: '💻', query: 'it companies' },
  { id: 'lawfirms', label: 'Law Firms & Attorneys', icon: '⚖️', query: 'lawyers' },
  { id: 'boutiques', label: 'Boutiques & Clothing Stores', icon: '🛍️', query: 'boutiques' },
  { id: 'healthcare', label: 'Hospitals & Healthcare', icon: '🏥', query: 'hospitals' },
  { id: 'coaching', label: 'Schools & Coaching Academies', icon: '🏫', query: 'coaching classes' },
  { id: 'services', label: 'Plumbers & Electricians', icon: '🔧', query: 'plumbers' },
  { id: 'studios', label: 'Photography & Media Studios', icon: '📸', query: 'photo studio' },
  { id: 'vet', label: 'Vet Clinics & Pet Shops', icon: '🐾', query: 'vet clinics' },
];

// Non-Business Exclusion Filter
const NON_BUSINESS_KEYWORDS = [
  'bus stop', 'bus stand', 'bus depot', 'bus terminal', 'railway station', 
  'train station', 'metro station', 'subway station', 'station road', 'highway', 'expressway', 
  'flyover', 'bridge', 'bypass', 'junction', 'crossroad', 'intersection', 'circle', 'square',
  'ring road', 'toll booth', 'toll plaza', 'parking lot', 'public parking', 'public toilet', 
  'rest area', 'footover bridge', 'underpass', 'street stop',
  'post office', 'police station', 'police outpost', 'police chowki', 
  'court', 'district court', 'high court', 'collectorate', 'collector office', 'tehsil', 
  'taluka office', 'municipal corporation', 'panchayat', 'government quarters', 'govt quarters', 
  'passport office', 'rto office', 'income tax office', 'public library',
  'fire station', 'fire brigade', 'water tank',
  'public park', 'city park', 'children park', 'garden', 'lake', 'river', 'pond', 'dam', 
  'cemetery', 'graveyard', 'crematorium', 'shamshan',
  'housing society', 'residential colony', 'apartment building', 'residence', 'private home',
  'chawl', 'slum', 'staff quarters', 'sector boundary'
];

export function isCommercialBusiness(name: string, category: string = '', address: string = ''): boolean {
  if (!name || name.trim().length < 2) return false;
  const combined = `${name.toLowerCase()} ${category.toLowerCase()} ${address.toLowerCase()}`;
  for (const kw of NON_BUSINESS_KEYWORDS) {
    if (combined.includes(kw)) return false;
  }
  return true;
}

// Strict Website Validator
function isValidWebsite(site: string | null | undefined): boolean {
  if (!site) return false;
  const clean = site.trim().toLowerCase().replace(/^"(.*)"$/, '$1');

  if (
    clean.length === 0 ||
    clean === 'none' ||
    clean === 'null' ||
    clean === 'undefined' ||
    clean === 'http://' ||
    clean === 'https://' ||
    clean === 'n/a' ||
    clean === '#'
  ) {
    return false;
  }

  const NON_CUSTOM_DOMAINS = [
    'google.com', 'maps.google', 'g.co/', 'goo.gl/', 'facebook.com', 'fb.com',
    'instagram.com', 'justdial.com', 'indiamart.com', 'sulekha.com', 'whatsapp.com',
    'wa.me', 'twitter.com', 'x.com', 'linkedin.com', 'youtube.com', 'zomato.com',
    'swiggy.com', 'tripadvisor.com', 'wikipedia.org', 'wikimedia.org', 'openstreetmap.org'
  ];

  for (const domain of NON_CUSTOM_DOMAINS) {
    if (clean.includes(domain)) return false;
  }

  return /\.[a-z]{2,}/.test(clean);
}

// RFC 4180 Compliant CSV Parser (Handles quotes and commas correctly)
export function parseRFC4180CSV(csvText: string): Record<string, string>[] {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const parseLine = (line: string): string[] => {
    const result: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseLine(lines[i]);
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] ? values[idx].replace(/^"(.*)"$/, '$1').trim() : '';
    });
    rows.push(row);
  }
  return rows;
}

// Normalize Scraper CSV Rows into ScrapedLead Interface
export function normalizeScraperRows(rows: Record<string, string>[], targetCity: string): ScrapedLead[] {
  const leads: ScrapedLead[] = [];

  rows.forEach((row, idx) => {
    const name = row.title || row.name || row.business_name || row.company || row.store_name || '';
    if (!name || name.trim().length < 2) return;

    const rawCategory = row.category || row.type || row.business_type || 'Local Business';
    const address = row.address || row.location || row.full_address || '';

    if (!isCommercialBusiness(name, rawCategory, address)) return;

    const rawWebsite = row.website || row.site || row.url || row.domain || '';
    const hasWebsite = isValidWebsite(rawWebsite);

    const rawPhone = row.phone || row.telephone || row.mobile || row.contact_number || '';
    const phone = rawPhone && rawPhone.length > 4 ? rawPhone : null;

    const rawRating = row.review_rating || row.rating || row.stars || '';
    const rating = rawRating && !isNaN(parseFloat(rawRating)) ? parseFloat(rawRating).toFixed(1) : null;

    const rawReviews = row.review_count || row.reviews || row.user_ratings_total || '';
    const reviewCount = rawReviews && !isNaN(parseInt(rawReviews, 10)) ? String(parseInt(rawReviews, 10)) : null;

    const googleMapsUrl = row.link || row.maps_url || row.google_maps_link || row.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address || targetCity}`)}`;

    leads.push({
      id: `gmaps-${Date.now()}-${idx}`,
      name,
      category: rawCategory,
      address: address || `${targetCity}, India`,
      city: targetCity,
      phone,
      email: row.emails || row.email || null,
      website: hasWebsite ? rawWebsite : null,
      rating,
      reviewCount,
      googleMapsUrl,
      hasWebsite,
      source: 'google_maps',
      scrapedAt: new Date().toISOString()
    });
  });

  return leads;
}

const getStoredScrapedLeads = (): ScrapedLead[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('gmaps_scraped_leads');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

export const LeadScraperPortal: React.FC<LeadScraperPortalProps> = ({
  onBackToPortalChoice,
  onImportLeadToDashboard,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('salons');
  const [keyword, setKeyword] = useState('salons in Nagpur');
  const [city, setCity] = useState('Nagpur');
  const [depth, setDepth] = useState(3);
  const [radius, setRadius] = useState(10000);
  const [fastMode, setFastMode] = useState(true);
  
  const [customApiUrl, setCustomApiUrl] = useState<string>(() => {
    return localStorage.getItem('gmaps_cloud_api') || SCRAPER_API_URL;
  });
  const [showConfig, setShowConfig] = useState(false);
  const [isScraperConnected, setIsScraperConnected] = useState<boolean>(true);
  
  // Scraper Progress State
  const [isScraping, setIsScraping] = useState(false);
  const [scrapePhase, setScrapePhase] = useState<'idle' | 'preparing' | 'creating' | 'scraping' | 'processing' | 'completed'>('idle');
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  
  const [filterMode, setFilterMode] = useState<'all' | 'nowebsite' | 'haswebsite'>('nowebsite');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<any>(null);

  const [leads, setLeads] = useState<ScrapedLead[]>(getStoredScrapedLeads);

  useEffect(() => {
    try {
      localStorage.setItem('gmaps_scraped_leads', JSON.stringify(leads));
    } catch {}
  }, [leads]);

  // Unique categories list
  const uniqueCategories = Array.from(
    new Set(leads.map((l) => l.category).filter(Boolean))
  ).sort();

  // Summary Metrics
  const totalBusinesses = leads.length;
  const businessesWithPhone = leads.filter(l => Boolean(l.phone)).length;
  const businessesWithWebsite = leads.filter(l => l.hasWebsite).length;
  const businessesWithoutWebsite = leads.filter(l => !l.hasWebsite).length;
  const ratingsList = leads.map(l => parseFloat(l.rating || '0')).filter(r => r > 0);
  const avgRating = ratingsList.length > 0 ? (ratingsList.reduce((a, b) => a + b, 0) / ratingsList.length).toFixed(1) : 'N/A';



  const handleClearLeads = () => {
    if (confirm('Clear all saved scraped leads?')) {
      setLeads([]);
      localStorage.removeItem('gmaps_scraped_leads');
      setSelectedCategoryFilter('all');
      setStatusMessage('Cleared saved lead list.');
    }
  };

  const handleCategoryDropdownChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId !== 'custom') {
      const catObj = FEATURED_CATEGORIES.find((c) => c.id === catId);
      if (catObj) {
        setKeyword(`${catObj.query} in ${city}`.trim());
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const rows = parseRFC4180CSV(content);
        const imported = normalizeScraperRows(rows, city);
        if (imported.length > 0) {
          setLeads((prev) => [...imported, ...prev]);
          setStatusMessage(`✅ Successfully imported ${imported.length} leads from '${file.name}'!`);
          soundFx.playClick();
        } else {
          alert('Could not parse business leads from file. Check CSV format.');
        }
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  // Resolve Geolocation Coordinates (Legitimate lookup)
  const getCityCoordinates = async (cityName: string): Promise<{ lat: string; lon: string }> => {
    const clean = cityName.trim().toLowerCase();
    if (CITY_COORDINATES[clean]) {
      return CITY_COORDINATES[clean];
    }
    try {
      const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(cityName)}&limit=1`);
      if (res.ok) {
        const data = await res.json();
        if (data?.features?.[0]?.geometry?.coordinates) {
          const coords = data.features[0].geometry.coordinates;
          return { lon: String(coords[0]), lat: String(coords[1]) };
        }
      }
    } catch {}
    return { lat: '21.1458', lon: '79.0882' }; // Default Nagpur
  };

  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (level: LogEntry['level'], message: string) => {
    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs((prev) => [
      ...prev.slice(-999),
      { id: `${Date.now()}-${Math.random()}`, timestamp: timeStr, level, message },
    ]);
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  // Centralized Scrape Orchestrator (Local-First Scraper Client)
  const runScraperQuery = async (searchKeyword: string, searchCity: string) => {
    soundFx.playModalReveal();
    setIsScraping(true);
    setScrapePhase('preparing');
    setElapsedSeconds(0);
    setActiveJobId(null);

    let finalQuery = searchKeyword.trim();
    if (selectedCategory !== 'custom') {
      const catObj = FEATURED_CATEGORIES.find((c) => c.id === selectedCategory);
      if (catObj) {
        finalQuery = `${catObj.query} in ${searchCity}`.trim();
      }
    }
    if (!finalQuery) finalQuery = `businesses in ${searchCity}`;

    const currentUrl = customApiUrl.trim() || getScraperApiUrl();

    addLog('info', `Connecting to scraper at ${currentUrl || 'configured URL'}...`);
    setStatusMessage('🟡 Connecting to scraper...');

    // Health check
    const health = await scraperClient.health(currentUrl);
    if (!health.ok) {
      setIsScraping(false);
      setScrapePhase('idle');
      addLog('error', health.message);
      setStatusMessage(health.message);
      return;
    }

    addLog('success', '✓ API connected');
    setStatusMessage('🟡 Creating job...');

    // Geocoding + Job Creation
    setScrapePhase('creating');
    const coords = await getCityCoordinates(searchCity);

    addLog('info', `Target coords for ${searchCity}: ${coords.lat}, ${coords.lon}`);
    addLog('info', `Creating job payload for '${finalQuery}'...`);

    let job;
    try {
      job = await scraperClient.createJob(
        {
          name: `sales-lead-scrape-${Date.now()}`,
          keywords: [finalQuery],
          lat: coords.lat,
          lon: coords.lon,
          radius: radius,
          depth: depth,
          fastMode: fastMode,
        },
        currentUrl
      );
    } catch (createErr: any) {
      setIsScraping(false);
      setScrapePhase('idle');
      addLog('error', createErr.message || 'Job creation failed');
      setStatusMessage(`🔴 Scraping Failed: ${createErr.message || 'Could not create job.'}`);
      return;
    }

    const jobId = job.id;
    setActiveJobId(jobId);
    addLog('info', `Job ID: ${jobId}`);
    addLog('info', 'Status: QUEUED');
    setStatusMessage('🟡 Job queued');
    setScrapePhase('scraping');

    // Timer
    const startTime = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Polling loop
    const maxPollTimeMs = 10 * 60 * 1000;
    const pollIntervalMs = 3000;
    let completedSuccess = false;

    while (Date.now() - startTime < maxPollTimeMs) {
      await new Promise((r) => setTimeout(r, pollIntervalMs));
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      try {
        const pollJob = await scraperClient.getJob(jobId, currentUrl);
        const status = pollJob.status;

        if (status === 'queued') {
          setStatusMessage(`🟡 Job queued... (Elapsed: ${elapsed}s)`);
        } else if (status === 'starting' || status === 'working') {
          setStatusMessage(`🟡 Scraper working... Searching Google Maps & collecting businesses (${elapsed}s)`);
          addLog('info', `Status: WORKING (${elapsed}s) - Searching Google Maps for ${finalQuery}`);
        } else if (status === 'completed') {
          completedSuccess = true;
          addLog('success', `Status: COMPLETED (${elapsed}s)`);
          addLog('info', 'Extracting contact information & business listings...');
          setStatusMessage('🟢 Scraping completed! Fetching results...');
          break;
        } else if (status === 'failed' || status === 'cancelled') {
          addLog('error', `Status: ${status.toUpperCase()}`);
          throw new Error(`Scraper reported job status: ${status}`);
        }
      } catch (pollErr: any) {
        addLog('warn', pollErr.message || 'Polling attempt warning');
      }
    }

    clearInterval(timerRef.current);

    if (!completedSuccess) {
      setIsScraping(false);
      setScrapePhase('idle');
      addLog('error', '⏱️ Connection Timeout or Job Failed');
      setStatusMessage('🔴 Scraping Failed or Timed Out');
      return;
    }

    // Results Fetching
    setScrapePhase('processing');
    try {
      const rawRows = await scraperClient.getResults(jobId, currentUrl);
      addLog('info', `Downloaded ${rawRows.length} raw business rows`);

      const normalizedLeads = normalizeScraperRows(rawRows, searchCity);
      addLog('success', `✓ Processed ${normalizedLeads.length} valid business leads`);

      if (normalizedLeads.length > 0) {
        setLeads(normalizedLeads);
        setScrapePhase('completed');
        setStatusMessage(`🟢 Scraping completed! Found ${normalizedLeads.length} leads.`);
        addLog('success', '🟢 Lead generation completed successfully!');
      } else {
        setLeads([]);
        setScrapePhase('completed');
        setStatusMessage('⚠️ Scraping completed, but 0 commercial business leads were returned.');
        addLog('warn', '0 business leads returned.');
      }
    } catch (resErr: any) {
      addLog('error', resErr.message || 'Failed to retrieve results');
      setStatusMessage(`🔴 Scraping Failed: ${resErr.message}`);
    } finally {
      setIsScraping(false);
    }
  };

  const handleRunScraper = (e: React.FormEvent) => {
    e.preventDefault();
    runScraperQuery(keyword, city);
  };

  // Filter leads
  const filteredLeads = leads.filter((item) => {
    let passWebsite = true;
    if (filterMode === 'nowebsite') passWebsite = !item.hasWebsite;
    if (filterMode === 'haswebsite') passWebsite = item.hasWebsite;

    let passCategory = true;
    if (selectedCategoryFilter !== 'all') {
      passCategory = item.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
    }

    return passWebsite && passCategory;
  });

  const generateWhatsAppLink = (lead: ScrapedLead) => {
    if (!lead.phone) return '#';
    const rawPhone = lead.phone.replace(/[^0-9]/g, '');
    const targetPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
    const msg = encodeURIComponent(
      `Hi ${lead.name},\n\nI came across your business listing on Google Maps in ${lead.address || city}! I noticed you don't have a modern interactive website listed yet.\n\nWe build high-converting websites & SaaS web apps for business owners. Check out our interactive portfolio here:\nhttps://v0786.github.io/WebDev/\n\nWould you be open to a quick 5-min demo?`
    );
    return `https://wa.me/${targetPhone}?text=${msg}`;
  };

  const handleImportToDashboard = async (lead: ScrapedLead) => {
    soundFx.playClick();
    const reqNum = `REQ-2026-0${Math.floor(100 + Math.random() * 900)}`;
    const newReq: any = {
      id: `req-${Date.now()}`,
      requestNumber: reqNum,
      clientName: lead.name,
      clientEmail: lead.email || `prospect@${lead.name.toLowerCase().replace(/[^a-z]/g, '')}.com`,
      clientPhone: lead.phone || '',
      businessName: lead.name,
      requestType: 'Custom Web App',
      budget: '$2,500 – $5,000',
      status: 'New',
      dateSubmitted: new Date().toISOString().split('T')[0],
      deadline: '2026-11-30',
      requirementsSummary: `Prospect extracted from Google Maps (${city}). Status: ${lead.hasWebsite ? 'HAS WEBSITE' : 'NO WEBSITE'}. Category: ${lead.category}`,
      detailedRequirements: [
        `Google Maps Listing: ${lead.name}`,
        `Category: ${lead.category}`,
        `Address: ${lead.address}`,
        `Phone: ${lead.phone || 'N/A'}`,
        `Rating: ${lead.rating || 'N/A'} (${lead.reviewCount || '0'} reviews)`
      ],
      techStackPreference: ['React', 'TypeScript', 'Tailwind CSS'],
      attachedFilesCount: 0,
      channel: 'WhatsApp Inquiry'
    };

    try {
      await salesService.createRequest(newReq);
      if (onImportLeadToDashboard) {
        onImportLeadToDashboard(lead.name, lead.phone || '', lead.email || '', lead.category);
      }
      alert(`✅ Lead '${lead.name}' (${lead.category}) imported to Sales Dashboard!`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-white p-4 sm:p-8 font-sans">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".csv,.json,.txt"
        className="hidden"
      />

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <button
            onClick={onBackToPortalChoice}
            className="text-xs font-mono text-[#D4AF37] hover:underline flex items-center gap-1.5 mb-2 cursor-pointer"
          >
            ← BACK TO PORTAL SELECTION
          </button>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#D4AF37]" />
            <span>Google Maps Lead Generation Scraper</span>
          </h1>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Local-First Portable Google Maps Scraper Engine for PC, LAN & Cloudflare Tunnels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Upload className="w-3.5 h-3.5 text-purple-400" />
            <span>Import CSV File</span>
          </button>

          <button
            onClick={() => setShowConfig(!showConfig)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all ${
              isScraperConnected
                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                : 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-400'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>{isScraperConnected ? '🟢 Connected' : '🔴 Connection Offline'}</span>
          </button>

          {leads.length > 0 && (
            <button
              onClick={handleClearLeads}
              className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Leads</span>
            </button>
          )}
        </div>
      </div>

      {/* Scraper Connection Drawer */}
      {showConfig && (
        <div className="max-w-7xl mx-auto my-4">
          <ScraperConnection
            onConnectionStatusChange={(ok, url) => {
              setCustomApiUrl(url);
              setIsScraperConnected(ok);
            }}
          />
        </div>
      )}

      {/* Summary Metrics Cards Bar */}
      {leads.length > 0 && (
        <div className="max-w-7xl mx-auto my-5 grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
            <div className="text-[10px] text-gray-400">TOTAL BUSINESSES</div>
            <div className="text-xl font-bold text-white mt-0.5">{totalBusinesses}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
            <div className="text-[10px] text-gray-400">WITH PHONE NUMBER</div>
            <div className="text-xl font-bold text-sky-400 mt-0.5">{businessesWithPhone}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
            <div className="text-[10px] text-gray-400">NO WEBSITE (TARGETS)</div>
            <div className="text-xl font-bold text-red-400 mt-0.5">{businessesWithoutWebsite}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
            <div className="text-[10px] text-gray-400">HAS CUSTOM WEBSITE</div>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">{businessesWithWebsite}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
            <div className="text-[10px] text-gray-400">AVERAGE RATING</div>
            <div className="text-xl font-bold text-amber-400 mt-0.5">⭐ {avgRating}</div>
          </div>
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
        
        {/* Left Column: Form Controls (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-2">
              <Search className="w-4 h-4 text-[#D4AF37]" />
              <span>CONFIGURE GOOGLE MAPS SCRAPE</span>
            </h2>

            <form onSubmit={handleRunScraper} className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  SELECT TARGET CATEGORY *
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryDropdownChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14161F] border border-[#D4AF37]/50 focus:border-[#D4AF37] text-white text-xs font-mono focus:outline-none appearance-none cursor-pointer pr-10"
                  >
                    <option value="custom">🔍 Custom Keyword Search...</option>
                    {FEATURED_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  SEARCH KEYWORD / QUERY *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. dentists in Mumbai"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setSelectedCategory('custom');
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  TARGET CITY / REGION *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, Nagpur, Austin"
                  value={city}
                  onChange={(e) => {
                    const newCity = e.target.value;
                    setCity(newCity);
                    if (selectedCategory !== 'custom') {
                      const catObj = FEATURED_CATEGORIES.find(c => c.id === selectedCategory);
                      if (catObj) setKeyword(`${catObj.query} in ${newCity}`.trim());
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center justify-between">
                    <span>DEPTH</span>
                    <span className="text-[#D4AF37] font-bold">{depth}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={depth}
                    onChange={(e) => setDepth(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center justify-between">
                    <span>RADIUS (M)</span>
                    <span className="text-[#D4AF37] font-bold">{radius / 1000}km</span>
                  </label>
                  <input
                    type="range"
                    min={1000}
                    max={30000}
                    step={1000}
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-gray-300">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Fast Mode Scraping</span>
                </span>
                <input
                  type="checkbox"
                  checked={fastMode}
                  onChange={(e) => setFastMode(e.target.checked)}
                  className="accent-[#D4AF37] cursor-pointer w-4 h-4"
                />
              </div>

              <button
                type="submit"
                disabled={isScraping}
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.25)] disabled:opacity-50"
              >
                {isScraping ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>SCRAPING GOOGLE MAPS ({elapsedSeconds}s)...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>START GOOGLE MAPS SCRAPE</span>
                  </>
                )}
              </button>
            </form>

            {statusMessage && (
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30 text-xs font-mono space-y-1.5">
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold">
                  {scrapePhase === 'scraping' ? (
                    <Clock className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                  ) : scrapePhase === 'completed' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  )}
                  <span className="uppercase text-[11px]">{scrapePhase.toUpperCase()} PHASE</span>
                </div>
                <div className="text-gray-300 leading-relaxed">{statusMessage}</div>
                {activeJobId && (
                  <div className="text-[10px] text-gray-400 pt-1 border-t border-white/10">
                    Active Job ID: <span className="text-white font-bold">{activeJobId}</span> | Elapsed: {elapsedSeconds}s
                  </div>
                )}
              </div>
            )}

            {/* Live Terminal Log Panel */}
            <div className="pt-2">
              <ScraperLogs logs={logs} onClearLogs={handleClearLogs} />
            </div>
          </div>
        </div>

        {/* Right Column: Scraped Results Table (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Filter Bar */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Status Filter:</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setFilterMode('nowebsite')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    filterMode === 'nowebsite'
                      ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                      : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  🔴 NO WEBSITE ({leads.filter((l) => !l.hasWebsite).length})
                </button>

                <button
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    filterMode === 'all'
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] font-bold'
                      : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  ALL LEADS ({leads.length})
                </button>

                <button
                  onClick={() => setFilterMode('haswebsite')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    filterMode === 'haswebsite'
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  🟢 HAS WEBSITE ({leads.filter((l) => l.hasWebsite).length})
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1">
              <span className="text-xs font-mono text-gray-400 font-bold flex items-center gap-1.5 shrink-0">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>FILTER RESULTS BY CATEGORY:</span>
              </span>
              
              <div className="relative w-full sm:w-64">
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#14161F] border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer pr-8"
                >
                  <option value="all">All Categories ({leads.length})</option>
                  {uniqueCategories.map((cat) => {
                    const count = leads.filter((l) => l.category === cat).length;
                    return (
                      <option key={cat} value={cat}>
                        {cat} ({count} leads)
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Lead Cards */}
          <div className="space-y-3">
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <AlertCircle className="w-8 h-8 text-[#D4AF37] mx-auto opacity-70" />
                <div className="text-sm font-mono text-white font-bold">No real business lead results to display</div>
                <p className="text-xs text-gray-400 font-mono max-w-sm mx-auto">
                  Select a category from the dropdown above and click <strong>START GOOGLE MAPS SCRAPE</strong> to extract verified business listings!
                </p>
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className={`p-5 rounded-2xl border transition-all space-y-4 ${
                    !lead.hasWebsite
                      ? 'bg-gradient-to-r from-red-950/20 via-white/[0.03] to-white/[0.02] border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white font-sans">{lead.name}</h3>
                        {!lead.hasWebsite ? (
                          <span className="px-2.5 py-0.5 rounded-md bg-red-500/20 border border-red-500/50 text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                            NO WEBSITE ❌
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                            HAS WEBSITE 🟢
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-[9px]">
                          {lead.source}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mt-1">
                        <span className="flex items-center gap-1 text-[#D4AF37]">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{lead.category}</span>
                        </span>
                        {lead.rating && (
                          <>
                            <span>&bull;</span>
                            <span className="flex items-center gap-1 text-[#D4AF37]">
                              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                              <span>{lead.rating} {lead.reviewCount ? `(${lead.reviewCount} reviews)` : ''}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleImportToDashboard(lead)}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-[#D4AF37] hover:text-black border border-white/15 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>ADD TO CRM</span>
                    </button>
                  </div>

                  {/* Business Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                      <span className="truncate">{lead.address}</span>
                    </div>

                    {lead.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{lead.phone}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                      {lead.hasWebsite && lead.website ? (
                        <a 
                          href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-semibold underline truncate hover:text-white flex items-center gap-1"
                        >
                          <span>{lead.website}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-red-400 font-semibold">
                          No custom website listed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Outreach Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    {lead.googleMapsUrl && (
                      <a
                        href={lead.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-[#D4AF37] hover:text-[#000000] border border-white/15 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span>OPEN GOOGLE MAPS →</span>
                      </a>
                    )}

                    {lead.phone && (
                      <a
                        href={generateWhatsAppLink(lead)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>WHATSAPP OUTREACH →</span>
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
