-- ============================================================
-- MATERIAL 3 SALES PORTAL - SUPABASE FREE TIER POSTGRESQL SCHEMA
-- ============================================================

-- 1. Sales Requests Table
CREATE TABLE IF NOT EXISTS public.sales_requests (
    id TEXT PRIMARY KEY,
    request_number TEXT NOT NULL,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    business_name TEXT NOT NULL,
    request_type TEXT NOT NULL,
    budget TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New',
    date_submitted TEXT NOT NULL,
    deadline TEXT NOT NULL,
    requirements_summary TEXT NOT NULL,
    detailed_requirements JSONB DEFAULT '[]'::jsonb,
    tech_stack_preference JSONB DEFAULT '[]'::jsonb,
    attached_files_count INT DEFAULT 0,
    channel TEXT DEFAULT 'Website Form',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Client Files & Vault Table
CREATE TABLE IF NOT EXISTS public.client_files (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    size TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    request_number TEXT NOT NULL,
    client_name TEXT NOT NULL,
    uploaded_by TEXT NOT NULL,
    uploaded_at TEXT NOT NULL,
    content_snippet TEXT,
    download_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Payment Records Table
CREATE TABLE IF NOT EXISTS public.payment_records (
    id TEXT PRIMARY KEY,
    invoice_number TEXT NOT NULL,
    request_number TEXT NOT NULL,
    client_name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    status TEXT NOT NULL,
    due_date TEXT NOT NULL,
    paid_date TEXT,
    method TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Implementation Tasks Table
CREATE TABLE IF NOT EXISTS public.implementation_tasks (
    id TEXT PRIMARY KEY,
    request_number TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    priority TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for public access
ALTER TABLE public.sales_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.implementation_tasks ENABLE ROW LEVEL SECURITY;

-- Allow anonymous select/insert/update policy for demonstration
CREATE POLICY "Allow public access to sales_requests" ON public.sales_requests FOR ALL USING (true);
CREATE POLICY "Allow public access to client_files" ON public.client_files FOR ALL USING (true);
CREATE POLICY "Allow public access to payment_records" ON public.payment_records FOR ALL USING (true);
CREATE POLICY "Allow public access to implementation_tasks" ON public.implementation_tasks FOR ALL USING (true);

-- Enable Supabase Realtime for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.sales_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.client_files;
ALTER PUBLICATION supabase_realtime ADD TABLE public.payment_records;
ALTER PUBLICATION supabase_realtime ADD TABLE public.implementation_tasks;
