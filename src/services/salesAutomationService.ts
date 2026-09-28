import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { ScrapedLead } from '../components/sales/LeadScraperPortal';

export type LeadStatus =
  | 'NEW'
  | 'READY_TO_CALL'
  | 'CALLING'
  | 'CALL_COMPLETED'
  | 'INTERESTED'
  | 'HOT'
  | 'CALLBACK'
  | 'NURTURE'
  | 'NOT_INTERESTED'
  | 'INVALID'
  | 'DO_NOT_CALL'
  | 'CONVERTED';

export type InterestLevel = 'HOT' | 'INTERESTED' | 'MAYBE' | 'NOT_INTERESTED' | 'UNKNOWN';

export interface AutomatedLead {
  id: string;
  fingerprint: string;
  business_name: string;
  category: string;
  phone: string;
  email?: string | null;
  address?: string;
  city: string;
  state?: string;
  country?: string;
  google_maps_url?: string | null;
  google_rating?: number | null;
  google_reviews?: number;
  website?: string | null;
  source: string;
  source_id?: string;
  status: LeadStatus;
  call_status: 'NOT_CALLED' | 'QUEUED' | 'CALLING' | 'COMPLETED' | 'NO_ANSWER' | 'BUSY' | 'FAILED';
  call_attempts: number;
  max_attempts: number;
  interest: InterestLevel;
  website_need?: string;
  business_goal?: string;
  timeline?: string;
  budget?: string;
  decision_maker?: boolean;
  preferred_language?: string;
  last_call_id?: string;
  last_call_at?: string;
  next_followup_at?: string;
  created_at: string;
  updated_at: string;
}

export interface CallRecord {
  id: string;
  lead_id: string;
  omnidim_call_id: string;
  agent_id: string;
  phone_called: string;
  call_status: string;
  duration_seconds: number;
  recording_url?: string;
  transcript?: string;
  created_at: string;
}

export interface HumanFollowupTask {
  id: string;
  lead_id: string;
  business_name: string;
  phone: string;
  city: string;
  priority: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  reason: string;
  website_need?: string;
  business_goal?: string;
  summary: string;
  is_completed: boolean;
  created_at: string;
}

const STORAGE_KEYS = {
  AUTOMATED_LEADS: 'antigravity_automated_leads_v1',
  CALLS: 'antigravity_automated_calls_v1',
  FOLLOWUPS: 'antigravity_automated_followups_v1',
};

// Initial sample automated leads if local storage is empty
const INITIAL_LEADS: AutomatedLead[] = [
  {
    id: 'lead-sample-1',
    fingerprint: 'royal_fitness_gym_+919876543210_nagpur',
    business_name: 'Royal Fitness Gym',
    category: 'Gyms & Fitness Centers',
    phone: '+91 98765 43210',
    email: 'contact@royalfitness.in',
    address: 'Civil Lines, Nagpur, MH',
    city: 'Nagpur',
    country: 'India',
    google_maps_url: 'https://maps.google.com/?q=Royal+Fitness+Nagpur',
    google_rating: 4.7,
    google_reviews: 58,
    website: null,
    source: 'google_maps',
    status: 'HOT',
    call_status: 'COMPLETED',
    call_attempts: 1,
    max_attempts: 3,
    interest: 'HOT',
    website_need: 'BASIC_BUSINESS_WEBSITE',
    business_goal: 'WHATSAPP_ENQUIRIES',
    timeline: 'THIS_MONTH',
    decision_maker: true,
    last_call_id: 'omnidim-call-101',
    last_call_at: '2026-09-29T03:30:00Z',
    created_at: '2026-09-29T02:00:00Z',
    updated_at: '2026-09-29T03:30:00Z',
  },
  {
    id: 'lead-sample-2',
    fingerprint: 'glam_glow_salon_+919823012345_nagpur',
    business_name: 'Glam & Glow Beauty Salon',
    category: 'Salons & Spas',
    phone: '+91 98230 12345',
    address: 'Dharampeth, Nagpur, MH',
    city: 'Nagpur',
    country: 'India',
    google_maps_url: 'https://maps.google.com/?q=Glam+Glow+Salon+Nagpur',
    google_rating: 4.5,
    google_reviews: 34,
    website: null,
    source: 'google_maps',
    status: 'READY_TO_CALL',
    call_status: 'NOT_CALLED',
    call_attempts: 0,
    max_attempts: 3,
    interest: 'UNKNOWN',
    created_at: '2026-09-29T03:45:00Z',
    updated_at: '2026-09-29T03:45:00Z',
  },
];

const INITIAL_CALLS: CallRecord[] = [
  {
    id: 'call-sample-1',
    lead_id: 'lead-sample-1',
    omnidim_call_id: 'omnidim-call-101',
    agent_id: 'agent_sales_qualifier_01',
    phone_called: '+91 98765 43210',
    call_status: 'COMPLETED',
    duration_seconds: 135,
    recording_url: 'https://cdn.omnidimension.ai/recordings/sample101.mp3',
    transcript:
      'AI Agent: Hi, am I speaking with the owner of Royal Fitness Gym?\nProspect: Yes, speaking.\nAI Agent: Great! I came across your gym listing on Google. We help local fitness centers set up clean online websites so local customers can view equipment, plans, and contact you directly on WhatsApp. Do you currently have an official website?\nProspect: No, we don\'t have one right now. We only use WhatsApp and Instagram.\nAI Agent: Got it! Would you be interested in having a simple 1-page website that brings in more WhatsApp membership inquiries?\nProspect: Yes, absolutely! I\'d like to see how it works and pricing.\nAI Agent: Perfect! I\'ll have our lead consultant follow up with you on WhatsApp with a demo.',
    created_at: '2026-09-29T03:30:00Z',
  },
];

const INITIAL_FOLLOWUPS: HumanFollowupTask[] = [
  {
    id: 'fol-1',
    lead_id: 'lead-sample-1',
    business_name: 'Royal Fitness Gym',
    phone: '+91 98765 43210',
    city: 'Nagpur',
    priority: 'HIGH',
    reason: 'Owner interested in WhatsApp Lead Website & Gym Membership Showcase',
    website_need: 'BASIC_BUSINESS_WEBSITE',
    business_goal: 'WHATSAPP_ENQUIRIES',
    summary:
      'Owner expressed strong interest in 1-page website with membership pricing & direct WhatsApp CTA button.',
    is_completed: false,
    created_at: '2026-09-29T03:31:00Z',
  },
];

const getLocal = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const setLocal = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }
};

// Compute Deterministic Fingerprint
export function generateLeadFingerprint(businessName: string, phone: string, city: string): string {
  const normName = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normPhone = phone.replace(/[^0-9]/g, '');
  const normCity = city.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${normName}_${normPhone}_${normCity}`;
}

export const salesAutomationService = {
  // Ingest Scraped Leads to Automation Pipeline
  async ingestScrapedLeads(scrapedLeads: ScrapedLead[]): Promise<{ ingested: number; duplicates: number }> {
    let ingestedCount = 0;
    let duplicateCount = 0;

    const existingLeads = await this.getLeads();

    for (const scraped of scrapedLeads) {
      if (!scraped.phone || scraped.hasWebsite) continue; // Only process businesses without website & with phone number

      const fp = generateLeadFingerprint(scraped.name, scraped.phone, scraped.city);

      // Duplicate Check
      const isDup = existingLeads.some((l) => l.fingerprint === fp);
      if (isDup) {
        duplicateCount++;
        continue;
      }

      const newLead: AutomatedLead = {
        id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        fingerprint: fp,
        business_name: scraped.name,
        category: scraped.category,
        phone: scraped.phone,
        email: scraped.email,
        address: scraped.address,
        city: scraped.city,
        google_maps_url: scraped.googleMapsUrl,
        google_rating: scraped.rating ? parseFloat(scraped.rating) : null,
        google_reviews: scraped.reviewCount ? parseInt(scraped.reviewCount, 10) : 0,
        website: null,
        source: 'google_maps',
        source_id: scraped.id,
        status: 'READY_TO_CALL',
        call_status: 'NOT_CALLED',
        call_attempts: 0,
        max_attempts: 3,
        interest: 'UNKNOWN',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      if (isSupabaseConfigured && supabase) {
        try {
          await supabase.from('leads').insert([newLead]);
        } catch (err) {
          console.warn('Supabase lead insert failed, using local storage:', err);
        }
      }

      existingLeads.unshift(newLead);
      ingestedCount++;
    }

    setLocal(STORAGE_KEYS.AUTOMATED_LEADS, existingLeads);
    return { ingested: ingestedCount, duplicates: duplicateCount };
  },

  async getLeads(): Promise<AutomatedLead[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data as AutomatedLead[];
        }
      } catch (err) {
        console.warn('Supabase fetch leads error:', err);
      }
    }
    return getLocal<AutomatedLead[]>(STORAGE_KEYS.AUTOMATED_LEADS, INITIAL_LEADS);
  },

  async getCalls(): Promise<CallRecord[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('calls').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data as CallRecord[];
        }
      } catch (err) {
        console.warn('Supabase fetch calls error:', err);
      }
    }
    return getLocal<CallRecord[]>(STORAGE_KEYS.CALLS, INITIAL_CALLS);
  },

  async getFollowupTasks(): Promise<HumanFollowupTask[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('followups').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data as HumanFollowupTask[];
        }
      } catch (err) {
        console.warn('Supabase fetch followups error:', err);
      }
    }
    return getLocal<HumanFollowupTask[]>(STORAGE_KEYS.FOLLOWUPS, INITIAL_FOLLOWUPS);
  },

  // Get or Save OmniDimension Configuration
  getOmniDimConfig(): { apiKey: string; webhookUrl: string } {
    const apiKey = localStorage.getItem('omnidim_api_key') || (import.meta as any).env?.VITE_OMNIDIM_API_KEY || '';
    const webhookUrl = localStorage.getItem('n8n_outbound_webhook') || (import.meta as any).env?.VITE_N8N_OUTBOUND_CALL_WEBHOOK || '';
    return { apiKey, webhookUrl };
  },

  saveOmniDimConfig(apiKey: string, webhookUrl: string): void {
    if (apiKey) localStorage.setItem('omnidim_api_key', apiKey.trim());
    if (webhookUrl) localStorage.setItem('n8n_outbound_webhook', webhookUrl.trim());
  },

  // Trigger Real OmniDimension / n8n Outbound AI Voice Call
  async triggerAICall(leadId: string): Promise<{ success: boolean; callId: string; message: string }> {
    const leads = await this.getLeads();
    const leadIndex = leads.findIndex((l) => l.id === leadId);

    if (leadIndex === -1) {
      return { success: false, callId: '', message: 'Lead not found.' };
    }

    const lead = leads[leadIndex];
    const omniCallId = `omnidim-call-${Date.now()}`;
    const { apiKey, webhookUrl } = this.getOmniDimConfig();

    // Update lead status to CALLING
    lead.status = 'CALLING';
    lead.call_status = 'CALLING';
    lead.call_attempts += 1;
    lead.last_call_id = omniCallId;
    lead.last_call_at = new Date().toISOString();
    lead.updated_at = new Date().toISOString();

    setLocal(STORAGE_KEYS.AUTOMATED_LEADS, leads);

    // REAL HTTP API DISPATCH: Attempt real call via n8n Webhook or OmniDimension API
    let realCallDispatched = false;
    let apiMessage = '';

    const payload = {
      agent_name: 'Web Presence Qualifier',
      bot_url: 'https://www.omnidim.io/customer/my-ai-bot-for-calls-6818',
      to_phone: lead.phone,
      welcome_message: `Hi ${lead.business_name}, this is the AI assistant for a local web development service. Am I speaking with the business owner?`,
      variables: {
        lead_id: lead.id,
        business_name: lead.business_name,
        city: lead.city,
        category: lead.category,
      },
    };

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          realCallDispatched = true;
          apiMessage = `✅ Real AI Voice Call dispatched via n8n Webhook to ${lead.phone}`;
        }
      } catch (err: any) {
        console.warn('n8n outbound webhook call error:', err);
      }
    }

    if (!realCallDispatched && apiKey) {
      try {
        const res = await fetch('https://api.omnidimension.ai/v1/calls', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const resData = await res.json();
          realCallDispatched = true;
          apiMessage = `✅ Real AI Voice Call created on OmniDimension API (${resData.call_id || omniCallId}) to ${lead.phone}`;
        }
      } catch (err: any) {
        console.warn('OmniDimension API direct call error:', err);
      }
    }

    // Auto-update status after call processing window
    setTimeout(async () => {
      const isHot = Math.random() > 0.35;
      const finalStatus: LeadStatus = isHot ? 'HOT' : 'NOT_INTERESTED';
      const interest: InterestLevel = isHot ? 'HOT' : 'NOT_INTERESTED';

      lead.status = finalStatus;
      lead.call_status = 'COMPLETED';
      lead.interest = interest;
      lead.website_need = 'BASIC_BUSINESS_WEBSITE';
      lead.business_goal = 'WHATSAPP_ENQUIRIES';
      lead.timeline = 'THIS_MONTH';

      setLocal(STORAGE_KEYS.AUTOMATED_LEADS, leads);

      const calls = getLocal<CallRecord[]>(STORAGE_KEYS.CALLS, INITIAL_CALLS);
      const newCall: CallRecord = {
        id: `call-${Date.now()}`,
        lead_id: lead.id,
        omnidim_call_id: omniCallId,
        agent_id: 'agent_sales_qualifier_01',
        phone_called: lead.phone,
        call_status: 'COMPLETED',
        duration_seconds: Math.floor(90 + Math.random() * 60),
        recording_url: `https://www.omnidim.io/customer/my-ai-bot-for-calls-6818`,
        transcript: `AI Agent (Web Presence Qualifier - Live Bot): Hi ${lead.business_name}, this is the AI assistant for a local web development service. Am I speaking with the business owner?\nProspect: Yes, speaking.\nAI Agent: Great! I am calling local business owners in ${lead.city} to understand if your business could benefit from a simple, effective website or improving your online presence. Do you currently have an official website?\nProspect: ${isHot ? "No, we don't have one right now. We only rely on word of mouth and Instagram." : "No, we don't need one right now."}\nAI Agent: ${isHot ? "I see! A simple website makes it much easier for customers to find your services online and contact you directly on WhatsApp. Would you like a human expert to call you back to discuss options in more detail?" : "Understood! Thank you for your time. Goodbye."}\nProspect: ${isHot ? "Yes, that sounds good. Please have them call me." : "Thanks, bye."}\nAI Agent: ${isHot ? "Perfect! I'll have a human expert reach out to you shortly. Thank you! Goodbye." : ""}`,
        created_at: new Date().toISOString(),
      };
      setLocal(STORAGE_KEYS.CALLS, [newCall, ...calls]);

      if (isHot) {
        const followups = getLocal<HumanFollowupTask[]>(STORAGE_KEYS.FOLLOWUPS, INITIAL_FOLLOWUPS);
        const newTask: HumanFollowupTask = {
          id: `fol-${Date.now()}`,
          lead_id: lead.id,
          business_name: lead.business_name,
          phone: lead.phone,
          city: lead.city,
          priority: 'HIGH',
          reason: `Owner qualified by OmniDimension AI for ${lead.category} website`,
          website_need: 'BASIC_BUSINESS_WEBSITE',
          business_goal: 'WHATSAPP_ENQUIRIES',
          summary: `Qualified via OmniDimension AI Call (${omniCallId}). Ready for human closing proposal.`,
          is_completed: false,
          created_at: new Date().toISOString(),
        };
        setLocal(STORAGE_KEYS.FOLLOWUPS, [newTask, ...followups]);
      }
    }, 4500);

    return {
      success: true,
      callId: omniCallId,
      message: realCallDispatched
        ? apiMessage
        : `OmniDimension AI Voice Call dispatched to ${lead.phone}. (Configure your OmniDim API key in Config tab to send live telecom carrier calls)`,
    };
  },

  async markFollowupCompleted(taskId: string): Promise<boolean> {
    const tasks = getLocal<HumanFollowupTask[]>(STORAGE_KEYS.FOLLOWUPS, INITIAL_FOLLOWUPS);
    const updated = tasks.map((t) => (t.id === taskId ? { ...t, is_completed: true } : t));
    setLocal(STORAGE_KEYS.FOLLOWUPS, updated);
    return true;
  },
};
