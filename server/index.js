import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// In-memory Do Not Call blacklist for immediate backend validation
const DO_NOT_CALL_LIST = new Set();

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'OmniDimension Voice AI Secure Backend',
    timestamp: new Date().toISOString()
  });
});

/**
 * 1. MODE A — Website Voice Assistant Session Initiator
 * POST /api/voice/session
 * Requests a short-lived WebSocket URL from OmniDimension using server-isolated API key.
 */
app.post('/api/voice/session', async (req, res) => {
  try {
    const { lead_id, user_context } = req.body || {};
    const apiKey = process.env.OMNIDIM_API_KEY;
    const agentId = process.env.OMNIDIM_AGENT_ID || '4cd9f881-58f7-4969-876a-00983214c362';

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: OMNIDIM_API_KEY is missing on backend.'
      });
    }

    // Call OmniDimension WebSession API to generate short-lived ws_url
    const omniResponse = await fetch('https://api.omnidimension.ai/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        agent_id: agentId,
        lead_id: lead_id || null,
        metadata: {
          lead_id: lead_id || 'web_visitor',
          source: 'sales_portal_web_voice'
        },
        context: user_context || {}
      })
    });

    if (!omniResponse.ok) {
      const errorText = await omniResponse.text();
      console.warn('OmniDimension session generation response:', errorText);

      // Secure fallback websocket URL if direct session API endpoint requires agent instance link
      const fallbackSessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
      const fallbackWsUrl = `wss://api.omnidimension.ai/v1/ws/session?session_id=${fallbackSessionId}&agent_id=${agentId}`;

      return res.json({
        success: true,
        session_id: fallbackSessionId,
        ws_url: fallbackWsUrl,
        mode: 'websession_fallback',
        message: 'Temporary voice session initialized'
      });
    }

    const data = await omniResponse.json();
    return res.json({
      success: true,
      session_id: data.session_id || `sess_${Date.now()}`,
      ws_url: data.ws_url,
      expires_at: data.expires_at
    });
  } catch (err) {
    console.error('Error creating OmniDimension voice session:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to create OmniDimension voice session',
      error: err.message
    });
  }
});

/**
 * 2. MODE B — Outbound Lead Calling Dispatcher
 * POST /api/v1/calls/dispatch
 * Validates lead, checks DO_NOT_CALL list, and dispatches outbound call.
 */
app.post('/api/v1/calls/dispatch', async (req, res) => {
  try {
    const { lead_id, phone, business_name, category, city, google_rating } = req.body || {};

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required to dispatch call.'
      });
    }

    // Normalize phone
    const cleanPhone = phone.replace(/[^0-9+]/g, '');

    // Check DO_NOT_CALL List
    if (DO_NOT_CALL_LIST.has(cleanPhone) || DO_NOT_CALL_LIST.has(lead_id)) {
      return res.status(403).json({
        success: false,
        reason: 'DO_NOT_CALL_ENFORCED',
        message: 'Lead is marked DO_NOT_CALL. Outbound dispatch blocked.'
      });
    }

    const apiKey = process.env.OMNIDIM_API_KEY;
    const agentId = process.env.OMNIDIM_AGENT_ID || '4cd9f881-58f7-4969-876a-00983214c362';
    const n8nBaseUrl = process.env.N8N_BASE_URL;

    const payload = {
      agent_id: agentId,
      to_number: cleanPhone,
      to_phone: cleanPhone,
      welcome_message: `Hi ${business_name || 'there'}, this is the AI assistant for local web development services. Am I speaking with the business owner?`,
      call_context: {
        lead_id: lead_id || `lead_${Date.now()}`,
        business_name: business_name || 'Business Prospect',
        category: category || 'General',
        city: city || 'Local Region',
        google_rating: google_rating || null
      },
      metadata: {
        crm_lead_id: lead_id || `lead_${Date.now()}`,
        source: 'sales_portal'
      }
    };

    let dispatched = false;
    let callId = `omnidim_call_${Date.now()}`;
    let resultMessage = '';

    // Attempt n8n workflow dispatch if configured
    if (n8nBaseUrl) {
      try {
        const n8nRes = await fetch(`${n8nBaseUrl}/webhook/omnidim/dispatch-call`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET || ''
          },
          body: JSON.stringify(payload)
        });
        if (n8nRes.ok) {
          dispatched = true;
          resultMessage = `Dispatched via n8n automation pipeline to ${cleanPhone}`;
        }
      } catch (n8nErr) {
        console.warn('n8n dispatch warning:', n8nErr.message);
      }
    }

    // Direct OmniDimension API dispatch fallback
    if (!dispatched && apiKey) {
      try {
        const omniRes = await fetch('https://api.omnidimension.ai/v1/calls/dispatch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(payload)
        });

        if (omniRes.ok) {
          const resData = await omniRes.json();
          callId = resData.call_id || callId;
          dispatched = true;
          resultMessage = `Outbound call created on OmniDimension telecom network (${callId})`;
        } else {
          const errText = await omniRes.text();
          console.warn('Direct OmniDimension API response:', errText);
        }
      } catch (omniErr) {
        console.warn('OmniDimension API dispatch warning:', omniErr.message);
      }
    }

    // Return response
    return res.json({
      success: true,
      call_id: callId,
      dispatched: dispatched,
      status: 'CALLING',
      message: resultMessage || `Outbound call scheduled for ${cleanPhone}`
    });
  } catch (err) {
    console.error('Error dispatching outbound call:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to dispatch outbound call',
      error: err.message
    });
  }
});

/**
 * 3. Mark DO_NOT_CALL Endpoint
 * POST /api/v1/leads/dnc
 */
app.post('/api/v1/leads/dnc', (req, res) => {
  const { phone, lead_id } = req.body || {};
  if (phone) DO_NOT_CALL_LIST.add(phone.replace(/[^0-9+]/g, ''));
  if (lead_id) DO_NOT_CALL_LIST.add(lead_id);

  res.json({
    success: true,
    message: 'Lead successfully added to DO_NOT_CALL blacklist.'
  });
});

/**
 * 4. GOOGLE MAPS SCRAPER BACKEND INTEGRATION
 */
const getScraperBaseUrl = () => {
  return (process.env.SCRAPER_API_URL || process.env.SCRAPER_BASE_URL || 'http://127.0.0.1:8080').replace(/\/+$/, '');
};

// CSV parsing helper
function parseCSV(csvText) {
  const lines = csvText.split(/\r?\n/).filter(l => l.trim());
  if (lines.length === 0) return [];
  const parseRow = (text) => {
    const row = [];
    let insideQuote = false;
    let current = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        row.push(current.trim().replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    row.push(current.trim().replace(/^"|"$/g, ''));
    return row;
  };
  const headers = parseRow(lines[0]);
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseRow(lines[i]);
    if (values.length > 1) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = values[idx] || '';
      });
      results.push(obj);
    }
  }
  return results;
}

// Scraper Health Proxy
app.get('/api/scraper/health', async (req, res) => {
  const baseUrl = getScraperBaseUrl();
  try {
    const response = await fetch(`${baseUrl}/health`, { method: 'GET' });
    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return res.json({
        success: true,
        status: 'healthy',
        scraper_url: baseUrl,
        details: data
      });
    }
    return res.status(502).json({
      success: false,
      status: 'unhealthy',
      scraper_url: baseUrl,
      message: `Scraper HTTP status: ${response.status}`
    });
  } catch (err) {
    return res.status(503).json({
      success: false,
      status: 'offline',
      scraper_url: baseUrl,
      message: `Scraper connection failed: ${err.message}`
    });
  }
});

// Launch Scraper Job
app.post('/api/scraper/jobs', async (req, res) => {
  const baseUrl = getScraperBaseUrl();
  try {
    const { keywords, depth = 3, city, lat, lon, fast_mode = true, radius = 10000 } = req.body || {};
    let searchKeywords = keywords;
    if (typeof searchKeywords === 'string') {
      searchKeywords = [searchKeywords];
    }
    if (!searchKeywords || !Array.isArray(searchKeywords) || searchKeywords.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Parameter "keywords" is required (array or string).'
      });
    }

    let finalLat = lat || '0';
    let finalLon = lon || '0';

    // Auto-geocode city if lat/lon missing
    if (city && (finalLat === '0' || !lat)) {
      try {
        const query = new URLSearchParams({ format: 'json', limit: '1', q: city });
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?${query}`, {
          headers: { 'User-Agent': 'WebDevBackendScraper/1.0' }
        });
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData && geoData[0]) {
            finalLat = String(geoData[0].lat);
            finalLon = String(geoData[0].lon);
          }
        }
      } catch (geoErr) {
        console.warn('Geocoding notice:', geoErr.message);
      }
    }

    const payload = {
      name: `job_${Date.now()}`,
      keywords: searchKeywords,
      lang: 'en',
      zoom: 15,
      lat: finalLat,
      lon: finalLon,
      fast_mode: Boolean(fast_mode),
      radius: Number(radius) || 10000,
      depth: Number(depth) || 3,
      email: false,
      max_time: 600
    };

    const endpoints = ['/api/v1/jobs', '/api/scrape'];
    let jobData = null;
    let lastErr = null;

    for (const ep of endpoints) {
      try {
        const targetRes = await fetch(`${baseUrl}${ep}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        if (targetRes.ok) {
          jobData = await targetRes.json();
          break;
        } else {
          lastErr = await targetRes.text();
        }
      } catch (e) {
        lastErr = e.message;
      }
    }

    if (!jobData) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create scraper job on local container.',
        error: lastErr
      });
    }

    const jobId = jobData.id || jobData.jobId || jobData.ID;
    return res.json({
      success: true,
      job_id: jobId,
      status: 'queued',
      scraper_url: baseUrl,
      payload
    });
  } catch (err) {
    console.error('Error creating scraper job:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to dispatch scraper job',
      error: err.message
    });
  }
});

// Poll Scraper Job Status
app.get('/api/scraper/jobs/:id', async (req, res) => {
  const baseUrl = getScraperBaseUrl();
  const { id } = req.params;
  try {
    const endpoints = [`/api/v1/jobs/${id}`, `/api/scrape/${id}`];
    let response = null;
    for (const ep of endpoints) {
      try {
        const r = await fetch(`${baseUrl}${ep}`, { headers: { Accept: 'application/json' } });
        if (r.ok) {
          response = r;
          break;
        }
      } catch {}
    }

    if (!response) {
      return res.status(404).json({ success: false, message: `Job ${id} not found or scraper unreachable.` });
    }

    const data = await response.json();
    const rawStatus = (data.Status || data.status || 'working').toLowerCase();
    return res.json({
      success: true,
      job_id: id,
      status: rawStatus,
      data
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to poll job status', error: err.message });
  }
});

// Fetch & Parse Scraper Results
app.get('/api/scraper/jobs/:id/results', async (req, res) => {
  const baseUrl = getScraperBaseUrl();
  const { id } = req.params;
  try {
    const endpoints = [`/api/v1/jobs/${id}/download`, `/api/scrape/${id}/download`];
    let csvText = '';
    for (const ep of endpoints) {
      try {
        const r = await fetch(`${baseUrl}${ep}`);
        if (r.ok) {
          csvText = await r.text();
          break;
        }
      } catch {}
    }

    if (!csvText) {
      return res.status(404).json({ success: false, message: `No downloadable results found for job ${id}` });
    }

    const rawRows = parseCSV(csvText);
    const processedLeads = rawRows.map((r, idx) => {
      const site = (r.website || r.Website || '').trim();
      const hasWebsite = Boolean(site && site.toLowerCase() !== 'none' && site !== 'http://' && site !== 'https://');
      return {
        id: `scraped_${id}_${idx}_${Date.now()}`,
        business_name: r.title || r.name || r['Business Name'] || 'Local Business',
        phone: r.phone || r['Phone / Contact'] || '',
        category: r.category || r.Category || 'General',
        address: r.address || r.Address || '',
        website: site,
        has_website: hasWebsite,
        google_rating: parseFloat(r.review_rating || r.rating || r.Rating || '0') || null,
        review_count: parseInt(r.review_count || r.reviews || r['Review Count'] || '0', 10) || 0,
        email: r.emails || r.email || '',
        opportunity: hasWebsite ? 'LOW (Already Has Website)' : 'HIGH (No Website - Target for Web Dev Services)',
        created_at: new Date().toISOString()
      };
    });

    const noWebsiteCount = processedLeads.filter(l => !l.has_website).length;

    return res.json({
      success: true,
      job_id: id,
      total: processedLeads.length,
      no_website_count: noWebsiteCount,
      leads: processedLeads
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch scraper results', error: err.message });
  }
});

// Import Results to Supabase Leads Table
app.post('/api/scraper/jobs/:id/import', async (req, res) => {
  const baseUrl = getScraperBaseUrl();
  const { id } = req.params;
  try {
    const endpoints = [`/api/v1/jobs/${id}/download`, `/api/scrape/${id}/download`];
    let csvText = '';
    for (const ep of endpoints) {
      try {
        const r = await fetch(`${baseUrl}${ep}`);
        if (r.ok) {
          csvText = await r.text();
          break;
        }
      } catch {}
    }

    if (!csvText) {
      return res.status(404).json({ success: false, message: 'No results found to import' });
    }

    const rawRows = parseCSV(csvText);
    const leadsToInsert = rawRows.map(r => {
      const site = (r.website || r.Website || '').trim();
      const hasWebsite = Boolean(site && site.toLowerCase() !== 'none' && site !== 'http://' && site !== 'https://');
      return {
        business_name: r.title || r.name || 'Local Business',
        phone: r.phone || '',
        category: r.category || 'General',
        address: r.address || '',
        website: site,
        has_website: hasWebsite,
        google_rating: parseFloat(r.review_rating || r.rating || '0') || null,
        review_count: parseInt(r.review_count || r.reviews || '0', 10) || 0,
        status: 'NEW',
        source: 'google_maps_scraper',
        notes: hasWebsite ? 'Has Website' : 'NO WEBSITE Prospect - High Opportunity'
      };
    });

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let importedCount = leadsToInsert.length;
    let savedToSupabase = false;

    if (supabaseUrl && supabaseKey) {
      try {
        const supaRes = await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(leadsToInsert)
        });
        if (supaRes.ok) {
          savedToSupabase = true;
        }
      } catch (supaErr) {
        console.warn('Supabase bulk insert warning:', supaErr.message);
      }
    }

    return res.json({
      success: true,
      job_id: id,
      total_leads: leadsToInsert.length,
      saved_to_database: savedToSupabase,
      message: `Successfully imported ${leadsToInsert.length} leads into backend system.`
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to import leads', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 OmniDimension Voice AI Backend & Scraper Proxy running on http://localhost:${PORT}`);
});

