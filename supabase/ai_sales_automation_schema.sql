-- ============================================================
-- AI SALES AUTOMATION (n8n + OmniDimension + Supabase) SCHEMA
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Enums for Lead & Call States
DO $$ BEGIN
  CREATE TYPE lead_status AS ENUM (
    'NEW', 'READY_TO_CALL', 'CALLING', 'CALL_COMPLETED',
    'INTERESTED', 'HOT', 'CALLBACK', 'NURTURE',
    'NOT_INTERESTED', 'INVALID', 'DO_NOT_CALL', 'CONVERTED'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE call_status_enum AS ENUM (
    'NOT_CALLED', 'QUEUED', 'CALLING', 'COMPLETED',
    'NO_ANSWER', 'BUSY', 'FAILED', 'WRONG_NUMBER'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE interest_level AS ENUM (
    'HOT', 'INTERESTED', 'MAYBE', 'NOT_INTERESTED', 'UNKNOWN'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE website_need_type AS ENUM (
    'NO_WEBSITE', 'BASIC_BUSINESS_WEBSITE', 'LANDING_PAGE',
    'WEBSITE_REDESIGN', 'BOOKING_WEBSITE', 'ECOMMERCE',
    'CATALOG_WEBSITE', 'WHATSAPP_LEAD_WEBSITE', 'UNKNOWN'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 2. Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fingerprint TEXT UNIQUE NOT NULL,
  business_name TEXT NOT NULL,
  category TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  city TEXT NOT NULL,
  state TEXT,
  country TEXT DEFAULT 'India',
  google_maps_url TEXT,
  google_rating NUMERIC(2,1),
  google_reviews INTEGER DEFAULT 0,
  website TEXT,
  
  source TEXT DEFAULT 'google_maps',
  source_id TEXT,
  
  status lead_status DEFAULT 'NEW',
  call_status call_status_enum DEFAULT 'NOT_CALLED',
  call_attempts INTEGER DEFAULT 0,
  max_attempts INTEGER DEFAULT 3,
  
  interest interest_level DEFAULT 'UNKNOWN',
  website_need website_need_type DEFAULT 'UNKNOWN',
  business_goal TEXT,
  timeline TEXT,
  budget TEXT,
  decision_maker BOOLEAN,
  preferred_language TEXT DEFAULT 'EN',
  
  last_call_id TEXT,
  last_call_at TIMESTAMPTZ,
  next_followup_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_fingerprint ON public.leads(fingerprint);
CREATE INDEX IF NOT EXISTS idx_leads_status_call ON public.leads(status, call_status, call_attempts);

-- 3. Calls Table
CREATE TABLE IF NOT EXISTS public.calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  omnidim_call_id TEXT UNIQUE NOT NULL,
  agent_id TEXT NOT NULL,
  phone_called TEXT NOT NULL,
  call_status TEXT NOT NULL,
  duration_seconds INTEGER DEFAULT 0,
  recording_url TEXT,
  transcript TEXT,
  raw_payload JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Call Results Table
CREATE TABLE IF NOT EXISTS public.call_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  call_id UUID REFERENCES public.calls(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  call_outcome TEXT NOT NULL,
  interest interest_level NOT NULL,
  website_status TEXT,
  website_need website_need_type,
  business_goal TEXT,
  timeline TEXT,
  budget TEXT,
  decision_maker BOOLEAN,
  preferred_language TEXT,
  customer_requirements JSONB DEFAULT '[]'::jsonb,
  callback_requested BOOLEAN DEFAULT FALSE,
  callback_at TIMESTAMPTZ,
  do_not_call BOOLEAN DEFAULT FALSE,
  summary TEXT,
  next_action TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Human Follow-ups Table
CREATE TABLE IF NOT EXISTS public.followups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  priority TEXT DEFAULT 'HIGH' CHECK (priority IN ('URGENT', 'HIGH', 'MEDIUM', 'LOW')),
  reason TEXT NOT NULL,
  website_need TEXT,
  business_goal TEXT,
  summary TEXT,
  assigned_to TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Do Not Call (DNC) Table
CREATE TABLE IF NOT EXISTS public.do_not_call (
  phone TEXT PRIMARY KEY,
  reason TEXT DEFAULT 'Client Opt-Out',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Automation Logs Table
CREATE TABLE IF NOT EXISTS public.automation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_name TEXT NOT NULL,
  execution_id TEXT,
  lead_id UUID,
  event_type TEXT NOT NULL,
  status TEXT NOT NULL,
  error_message TEXT,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row-Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.call_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.followups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.do_not_call ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_logs ENABLE ROW LEVEL SECURITY;

-- Allow public access policy for demo & n8n webhook integration
CREATE POLICY "Allow public read access to leads" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update to leads" ON public.leads FOR ALL USING (true);
CREATE POLICY "Allow public access to calls" ON public.calls FOR ALL USING (true);
CREATE POLICY "Allow public access to call_results" ON public.call_results FOR ALL USING (true);
CREATE POLICY "Allow public access to followups" ON public.followups FOR ALL USING (true);
CREATE POLICY "Allow public access to do_not_call" ON public.do_not_call FOR ALL USING (true);
CREATE POLICY "Allow public access to automation_logs" ON public.automation_logs FOR ALL USING (true);

-- Enable Supabase Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.leads;
ALTER PUBLICATION supabase_realtime ADD TABLE public.calls;
ALTER PUBLICATION supabase_realtime ADD TABLE public.followups;
