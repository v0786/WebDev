-- ============================================================
-- 00b_schema_migration.sql: Production Architecture Migration
-- ============================================================

-- 1. Create Scraper Jobs Table
CREATE TABLE IF NOT EXISTS public.scraper_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID,
  external_job_id TEXT UNIQUE NOT NULL,
  query TEXT NOT NULL,
  location TEXT,
  status TEXT DEFAULT 'RUNNING' CHECK (status IN ('RUNNING', 'COMPLETED', 'FAILED', 'TIMEOUT')),
  attempts INTEGER DEFAULT 1,
  total_found INTEGER DEFAULT 0,
  next_poll_at TIMESTAMPTZ,
  timeout_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Campaign Leads Table
CREATE TABLE IF NOT EXISTS public.campaign_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID NOT NULL,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'QUEUED',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(campaign_id, lead_id)
);

-- 3. App Settings Table
CREATE TABLE IF NOT EXISTS public.app_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Populate default app settings
INSERT INTO public.app_settings (key, value, description)
VALUES 
  ('OMNIDIM_AGENT_ID', '"4cd9f881-58f7-4969-876a-00983214c362"', 'OmniDimension Voice Agent ID'),
  ('CALL_WINDOW', '{"start": 10, "end": 19, "timezone": "Asia/Kolkata"}', 'Allowed calling window hours'),
  ('RATE_LIMITS', '{"max_calls_per_hour": 10, "min_delay_seconds": 360, "max_attempts": 3}', 'Outbound rate limiting')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 4. Unique Index on Google Maps URL for Deduplication
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_google_maps_url_unique 
ON public.leads(google_maps_url) 
WHERE google_maps_url IS NOT NULL;

-- 5. Trigger Function to Prevent State Transition Out of DO_NOT_CALL
CREATE OR REPLACE FUNCTION prevent_dnc_exit()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status = 'DO_NOT_CALL' AND NEW.status != 'DO_NOT_CALL' THEN
    RAISE EXCEPTION 'Cannot change status of a lead marked DO_NOT_CALL';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_prevent_dnc_exit ON public.leads;
CREATE TRIGGER trg_prevent_dnc_exit
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION prevent_dnc_exit();

-- 6. Dashboard Summary View
CREATE OR REPLACE VIEW public.v_dashboard AS
SELECT
  COUNT(*) AS total_leads,
  COUNT(*) FILTER (WHERE website_need != 'HAS_WEBSITE') AS no_website_count,
  COUNT(*) FILTER (WHERE status = 'HOT' OR interest = 'HOT') AS hot_leads,
  COUNT(*) FILTER (WHERE status = 'INTERESTED' OR interest = 'INTERESTED') AS interested_leads,
  COUNT(*) FILTER (WHERE status = 'CALLING') AS active_calling_leads,
  COUNT(*) FILTER (WHERE status = 'DO_NOT_CALL') AS dnc_suppressed_count
FROM public.leads;

-- RLS Policies
ALTER TABLE public.scraper_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaign_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public access to scraper_jobs" ON public.scraper_jobs FOR ALL USING (true);
CREATE POLICY "Allow public access to campaign_leads" ON public.campaign_leads FOR ALL USING (true);
CREATE POLICY "Allow public access to app_settings" ON public.app_settings FOR ALL USING (true);

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.scraper_jobs;
