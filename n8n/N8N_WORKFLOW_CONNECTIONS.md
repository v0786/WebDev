# N8N Workflow Connections & Orchestration Blueprint

This document details the exact node-to-node connections, payloads, endpoints, and authentication headers linking all 14 modular n8n workflows into an end-to-end automated client acquisition pipeline.

---

## Master Workflow Interconnection Architecture

```text
[Sales HQ Portal / Scraper Trigger]
             │
             ▼
   [01 — Lead Generation] ──────► Google Maps Scraper API (Port 8080)
             │
             ▼
  [02 — Lead Normalization] ─────► Phone Sanitizer (+91 format)
             │
             ▼
  [03 — Lead Deduplication] ─────► Check Supabase Fingerprints
             │
             ▼
 [04 — Website Verification] ────► Filter FB / Instagram / Zomato links
             │
             ▼
  [05 — Lead Qualification] ─────► Check DNC Blacklist & Max Attempts
             │
             ▼ (Marked status = 'READY_TO_CALL')
       [06 — Call Queue] ────────► Cron (Every 15 mins, 10 AM - 7 PM IST)
             │
             ▼
[07 — Outbound Call Dispatch] ───► POST https://api.omnidimension.ai/v1/calls/dispatch
             │
             ▼ (Telephone Call Executed)
 [08 — Post-Call Webhook] ──────► Receiver with Idempotency Key (omnidim_call_id)
             │
             ▼
 [09 — Lead Classification] ────► Extract HOT / WARM / COLD & Timeline
             │
      ┌──────┼─────────────────────────┐
      ▼      ▼                         ▼
  [10 Follow-Up]  [11 Human Handoff]  [12 Do Not Call]
  (Scheduler)     (URGENT Sales Alert) (Blacklist Suppression)
             │
             ▼
 [13 Error Handler] ────────────► Global Error Logger (automation_logs)
             │
 [14 Daily Summary] ────────────► Daily KPI Digest (Cron 8:00 PM IST)
```

---

## Detailed Workflow Connection Mapping

### Workflow 01 → Workflow 02: Intake to Normalization
- **Source Node**: `Trigger Scraper Job` in `01_lead_generation.json`
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/leads/normalize`
- **Header Auth**: `X-Webhook-Secret: sales_portal_n8n_secret_2026`
- **Payload Transferred**:
  ```json
  {
    "business_name": "ABC Restaurant",
    "category": "Restaurant",
    "phone": "09876543210",
    "address": "Civil Lines, Nagpur",
    "city": "Nagpur",
    "google_maps_url": "https://maps.google.com/?cid=123",
    "website": ""
  }
  ```

### Workflow 02 → Workflow 03: Normalization to Deduplication
- **Source Node**: `Respond Normalized Data` in `02_lead_normalization.json`
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/leads/deduplicate`
- **Header Auth**: `X-Webhook-Secret: sales_portal_n8n_secret_2026`
- **Normalized Output**:
  ```json
  {
    "business_name": "ABC Restaurant",
    "category": "Restaurant",
    "phone": "+919876543210",
    "city": "Nagpur",
    "country": "India",
    "fingerprint": "919876543210_abcrestaurantnagpur"
  }
  ```

### Workflow 03 → Workflow 04: Deduplication to Website Verification
- **Source Node**: `Create New Lead in DB` in `03_lead_deduplication.json`
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/leads/verify-website`
- **Database Action**: Checks Supabase `public.leads` for existing `fingerprint`. If found, updates `updated_at`. If new, creates lead record and passes to Workflow 04.

### Workflow 04 → Workflow 05: Website Verification to Qualification
- **Source Node**: `Classify Domain Type` in `04_website_verification.json`
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/leads/qualify`
- **Logic**: Classifies directories (FB, Instagram, Zomato, Justdial) as `NO_WEBSITE`. Marks `is_call_prospect = true`.

### Workflow 05 → Workflow 06: Qualification to Queue Manager
- **Source Node**: `Evaluate Eligibility` in `05_lead_qualification.json`
- **Database Action**: Updates lead status in Supabase to **`READY_TO_CALL`** if:
  1. Phone number is valid format (`+91XXXXXXXXXX`).
  2. Phone is NOT present in `public.do_not_call` table.
  3. Lead `call_attempts` < `max_attempts` (default 3).

### Workflow 06 → Workflow 07: Queue Manager to Call Dispatch
- **Source Node**: `Dispatch to Workflow 07` in `06_call_queue.json`
- **Schedule**: Every 15 minutes between 10:00 AM and 7:00 PM IST.
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/omnidim/dispatch-call`
- **Header Auth**: `X-Webhook-Secret: sales_portal_n8n_secret_2026`
- **Dispatch Payload**:
  ```json
  {
    "lead_id": "lead_uuid_123",
    "to_number": "+919876543210",
    "business_name": "ABC Restaurant",
    "category": "Restaurant",
    "city": "Nagpur"
  }
  ```

### Workflow 07 → OmniDimension API: Telephony Trigger
- **Source Node**: `Dispatch OmniDimension Call` in `07_sales_omnidim_outbound_call.json`
- **External API Endpoint**: `POST https://api.omnidimension.ai/v1/calls/dispatch`
- **Authorization Header**: `Bearer yxpAlq8JK1iKH6LaXZRnAZINH0URc_D97f4GNqZ3Eu8`
- **Agent ID**: `4cd9f881-58f7-4969-876a-00983214c362`
- **Database Action**: Updates lead status in Supabase to **`CALLING`** and creates entry in `public.calls`.

### OmniDimension → Workflow 08: Post-Call Webhook Ingestion
- **Source Node**: `Webhook Post-Call Receiver` in `08_sales_omnidim_call_result_webhook.json`
- **Webhook Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/omnidim/post-call`
- **Header Auth**: `X-Webhook-Secret: sales_portal_n8n_secret_2026`
- **Idempotency Key**: Primary check on `omnidim_call_id`. Prevents double-processing of duplicate webhooks.

### Workflow 08 → Workflow 09: Post-Call to Lead Classification
- **Source Node**: `Insert Call Record` in `08_sales_omnidim_call_result_webhook.json`
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/leads/classify`
- **Payload**: Includes full transcript, recording URL, call duration, and AI metadata.

### Workflow 09 → Workflows 10, 11, & 12: Conditional Routing
- **Source Node**: `Classify AI Conversation` in `09_lead_classification.json`
- **Routing Rules**:
  1. **If HOT Lead** (Owner wants website/menu): Triggers **Workflow 11 (`/webhook/leads/human-handoff`)** to create an `URGENT` follow-up task in Supabase and notify sales team.
  2. **If Callback Requested**: Triggers **Workflow 10 (`/webhook/followup/schedule`)** to insert task into `public.followups`.
  3. **If Opt-Out / Don't Call**: Triggers **Workflow 12 (`/webhook/leads/dnc`)** to insert phone into `public.do_not_call` and set status to `DO_NOT_CALL`.

---

## Global System Workflows

### Workflow 13: Global Error Handler
- **Trigger**: Error Trigger on all workflow executions.
- **Target Endpoint**: `POST https://sonkusare.app.n8n.cloud/webhook/automation/error`
- **Database Action**: Strips credentials/secrets and inserts error event into `public.automation_logs`.

### Workflow 14: Daily Sales Summary
- **Schedule**: Cron trigger daily at 8:00 PM IST (`0 20 * * *`).
- **Database Action**: Queries Supabase `public.v_dashboard` view and outputs formatted daily KPI report:
  - Total leads discovered
  - No-website prospects
  - HOT leads converted
  - DNC suppressed phone count
