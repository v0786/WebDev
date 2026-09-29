import json

master_workflow = {
  "name": "00 — Master System Orchestrator (Fully Connected Pipeline)",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "master/pipeline",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [-1200, 300],
      "id": "node-01-webhook-intake",
      "name": "01. Webhook — Master Intake"
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $json.headers['x-webhook-secret'] }}",
              "value2": "sales_portal_n8n_secret_2026"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [-980, 300],
      "id": "node-02-validate-secret",
      "name": "02. Validate Secret Header"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\"error\": \"Unauthorized - Invalid Webhook Secret\"}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [-980, 500],
      "id": "node-03-respond-unauthorized",
      "name": "03. Respond Unauthorized"
    },
    {
      "parameters": {
        "jsCode": """const items = $input.all();
return items.map(item => {
  const raw = item.json.body || item.json;
  
  let phone = (raw.phone || '').replace(/[^0-9+]/g, '');
  if (phone.length === 10) phone = '+91' + phone;
  if (phone.startsWith('91') && phone.length === 12) phone = '+' + phone;
  if (phone.startsWith('0') && phone.length === 11) phone = '+91' + phone.substring(1);
  
  const businessName = (raw.business_name || raw.name || 'Local Business').trim();
  const city = (raw.city || 'Nagpur').trim();
  const mapsUrl = raw.google_maps_url || raw.maps_url || '';
  const fingerprint = (phone + '_' + (mapsUrl || businessName)).toLowerCase().replace(/[^a-z0-9_]/g, '');

  return {
    json: {
      business_name: businessName,
      category: (raw.category || 'Local Business').trim(),
      phone: phone,
      address: (raw.address || '').trim(),
      city: city,
      state: raw.state || 'Maharashtra',
      country: 'India',
      google_maps_url: mapsUrl || null,
      google_rating: parseFloat(raw.google_rating || raw.rating || 0) || null,
      google_reviews: parseInt(raw.google_reviews || raw.reviews || 0, 10) || 0,
      website: raw.website || null,
      source: 'google_maps',
      fingerprint: fingerprint
    }
  };
});"""
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [-760, 300],
      "id": "node-04-normalize-phone",
      "name": "04. Normalize Phone & Fields"
    },
    {
      "parameters": {
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads",
        "sendQuery": True,
        "queryParameters": {
          "parameters": [
            {
              "name": "fingerprint",
              "value": "eq.{{ $json.fingerprint }}"
            }
          ]
        },
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-540, 300],
      "id": "node-05-query-dedup",
      "name": "05. Query Supabase DB for Duplicate"
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ Array.isArray($json) && $json.length > 0 }}",
              "value2": True
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [-320, 300],
      "id": "node-06-duplicate-check",
      "name": "06. Duplicate Exists?"
    },
    {
      "parameters": {
        "method": "PATCH",
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads?id=eq.{{ $node['05. Query Supabase DB for Duplicate'].json[0].id }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            },
            {
              "name": "Prefer",
              "value": "return=minimal"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"updated_at\": \"{{ new Date().toISOString() }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-100, 200],
      "id": "node-07-update-existing-lead",
      "name": "07A. Update Existing Lead"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            },
            {
              "name": "Prefer",
              "value": "return=representation"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={{ JSON.stringify($node['04. Normalize Phone & Fields'].json) }}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-100, 400],
      "id": "node-08-create-new-lead",
      "name": "07B. Insert New Lead in DB"
    },
    {
      "parameters": {
        "jsCode": """const url = ($input.first().json.website || '').toLowerCase().trim();

if (!url) {
  return [{ json: { ...$input.first().json, website_status: 'NO_WEBSITE', is_call_prospect: true } }];
}

const socialAndDirectoryDomains = [
  'facebook.com', 'fb.com', 'instagram.com', 'zomato.com',
  'swiggy.com', 'justdial.com', 'google.com', 'maps.google.com',
  'indiamart.com', 'tradeindia.com', 'yellowpages.com'
];

const isSocialOrDirectory = socialAndDirectoryDomains.some(domain => url.includes(domain));

if (isSocialOrDirectory) {
  return [{ json: { ...$input.first().json, website_status: 'NO_WEBSITE', directory_link: url, is_call_prospect: true } }];
} else {
  return [{ json: { ...$input.first().json, website_status: 'HAS_WEBSITE', primary_domain: url, is_call_prospect: false } }];
}"""
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [120, 300],
      "id": "node-09-classify-website",
      "name": "08. Classify Website Domain"
    },
    {
      "parameters": {
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/do_not_call?phone=eq.{{ $json.phone }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [340, 300],
      "id": "node-10-check-dnc",
      "name": "09. Check DNC Blacklist"
    },
    {
      "parameters": {
        "jsCode": """const prev = $node['08. Classify Website Domain'].json;
const dncRecords = $input.all();
const isDNC = dncRecords.length > 0 && dncRecords[0].json && dncRecords[0].json.phone;

const phone = (prev.phone || '').trim();
const phoneValid = phone.length >= 10 && (phone.startsWith('+91') || phone.startsWith('91') || phone.length === 10);
const isCallProspect = prev.is_call_prospect !== false;

if (isDNC) {
  return [{ json: { ...prev, qualified: false, status: 'DO_NOT_CALL', reason: 'Listed on DNC blacklist' } }];
}
if (!phoneValid) {
  return [{ json: { ...prev, qualified: false, status: 'INVALID', reason: 'Invalid phone format' } }];
}
if (!isCallProspect) {
  return [{ json: { ...prev, qualified: false, status: 'SKIPPED', reason: 'Has primary business website' } }];
}

return [{ json: { ...prev, qualified: true, status: 'READY_TO_CALL', reason: 'Qualified prospect without website' } }];"""
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [560, 300],
      "id": "node-11-evaluate-qualification",
      "name": "10. Evaluate Qualification & Safety"
    },
    {
      "parameters": {
        "method": "PATCH",
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads?phone=eq.{{ $json.phone }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"status\": \"{{ $json.status }}\",\n  \"website_need\": \"{{ $json.website_status }}\",\n  \"updated_at\": \"{{ new Date().toISOString() }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [780, 300],
      "id": "node-12-save-qualification-status",
      "name": "11. Update Lead Status in Supabase"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={\n  \"success\": true,\n  \"status\": \"{{ $json.status }}\",\n  \"qualified\": {{ $json.qualified }},\n  \"business_name\": \"{{ $json.business_name }}\",\n  \"phone\": \"{{ $json.phone }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [1000, 300],
      "id": "node-13-respond-pipeline-done",
      "name": "12. Respond Pipeline Ingest Complete"
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "minutes",
              "minutesInterval": 15
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [-1200, 800],
      "id": "node-14-cron-queue",
      "name": "13. Cron Queue (Every 15 Mins)"
    },
    {
      "parameters": {
        "jsCode": """const now = new Date();
const kolkataTimeString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: false });
const hour = parseInt(kolkataTimeString.split(',')[1].trim().split(':')[0], 10);
const isWithinCallingWindow = hour >= 10 && hour < 19;
return [{ json: { isWithinCallingWindow, hourIST: hour } }];"""
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [-980, 800],
      "id": "node-15-check-calling-window",
      "name": "14. Check Calling Window (10AM-7PM IST)"
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ $json.isWithinCallingWindow }}",
              "value2": True
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [-760, 800],
      "id": "node-16-is-window-open",
      "name": "15. Is Calling Window Open?"
    },
    {
      "parameters": {
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads?status=eq.READY_TO_CALL&limit=3&order=created_at.asc",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-540, 800],
      "id": "node-17-fetch-ready-leads",
      "name": "16. Fetch Top 3 Ready Leads"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 3,
      "position": [-320, 800],
      "id": "node-18-split-batches",
      "name": "17. Loop Leads One By One"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.omnidimension.ai/v1/calls/dispatch",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "Authorization",
              "value": "Bearer yxpAlq8JK1iKH6LaXZRnAZINH0URc_D97f4GNqZ3Eu8"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"agent_id\": \"4cd9f881-58f7-4969-876a-00983214c362\",\n  \"to_number\": \"{{ $json.phone }}\",\n  \"welcome_message\": \"Hi {{ $json.business_name }}, this is the AI assistant calling regarding custom web services for {{ $json.category }} businesses in {{ $json.city }}. Am I speaking with the owner?\",\n  \"metadata\": {\n    \"crm_lead_id\": \"{{ $json.id }}\",\n    \"source\": \"n8n_master_pipeline\"\n  }\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-100, 800],
      "id": "node-19-dispatch-omnidim-call",
      "name": "18. Dispatch OmniDimension Call"
    },
    {
      "parameters": {
        "method": "PATCH",
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads?id=eq.{{ $node['17. Loop Leads One By One'].json.id }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"status\": \"CALLING\",\n  \"call_status\": \"CALLING\",\n  \"last_call_at\": \"{{ new Date().toISOString() }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [120, 800],
      "id": "node-20-mark-lead-calling",
      "name": "19. Mark Lead Status CALLING"
    },
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "omnidim/post-call",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [-1200, 1300],
      "id": "node-21-webhook-post-call",
      "name": "20. Webhook — Post-Call Receiver"
    },
    {
      "parameters": {
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/calls?omnidim_call_id=eq.{{ $json.body.call_id }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-980, 1300],
      "id": "node-22-check-call-idempotency",
      "name": "21. Check Call Idempotency"
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ Array.isArray($json) && $json.length > 0 }}",
              "value2": True
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [-760, 1300],
      "id": "node-23-is-call-logged",
      "name": "22. Call Already Logged?"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\"status\": \"IDEMPOTENT_SKIPPED\", \"message\": \"Call record already exists\"}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [-760, 1500],
      "id": "node-24-respond-idempotent",
      "name": "23A. Respond Idempotent Duplicate"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/calls",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"lead_id\": \"{{ $node['20. Webhook — Post-Call Receiver'].json.body.metadata?.crm_lead_id || $node['20. Webhook — Post-Call Receiver'].json.body.lead_id }}\",\n  \"omnidim_call_id\": \"{{ $node['20. Webhook — Post-Call Receiver'].json.body.call_id }}\",\n  \"agent_id\": \"4cd9f881-58f7-4969-876a-00983214c362\",\n  \"phone_called\": \"{{ $node['20. Webhook — Post-Call Receiver'].json.body.to_number }}\",\n  \"call_status\": \"{{ $node['20. Webhook — Post-Call Receiver'].json.body.status || 'COMPLETED' }}\",\n  \"duration_seconds\": {{ $node['20. Webhook — Post-Call Receiver'].json.body.duration_seconds || 0 }},\n  \"recording_url\": \"{{ $node['20. Webhook — Post-Call Receiver'].json.body.recording_url || '' }}\",\n  \"transcript\": \"{{ ($node['20. Webhook — Post-Call Receiver'].json.body.transcript || '').replace(/\"/g, '\\\\\"') }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-540, 1300],
      "id": "node-25-insert-call-record",
      "name": "23B. Insert Call Record"
    },
    {
      "parameters": {
        "jsCode": """const body = $node['20. Webhook — Post-Call Receiver'].json.body || {};
const text = (body.transcript || body.summary || '').toLowerCase();

let status = 'CALLED';
let temp = 'UNKNOWN';
if (text.includes('urgent') || text.includes('ready to build') || text.includes('send invoice') || text.includes('hot') || (text.includes('website') && text.includes('this week'))) {
  status = 'HOT'; temp = 'HOT';
} else if (text.includes('interested') || text.includes('send details') || text.includes('whatsapp') || text.includes('call back')) {
  status = 'INTERESTED'; temp = 'WARM';
} else if (text.includes('not interested') || text.includes('no thanks') || text.includes('don\\'t call')) {
  status = 'NOT_INTERESTED'; temp = 'COLD';
}

const isDNC = text.includes('don\\'t call') || text.includes('remove my number') || text.includes('stop calling');
if (isDNC) status = 'DO_NOT_CALL';

return [{
  json: {
    lead_id: body.metadata?.crm_lead_id || body.lead_id,
    phone: body.to_number,
    status: status,
    interest: temp,
    do_not_call: isDNC,
    summary: body.summary || 'Post-call AI analysis completed'
  }
}];"""
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [-320, 1300],
      "id": "node-26-classify-post-call",
      "name": "24. Classify Call Transcript & Outcome"
    },
    {
      "parameters": {
        "method": "PATCH",
        "url": "=https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/leads?id=eq.{{ $json.lead_id }}",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"status\": \"{{ $json.status }}\",\n  \"interest\": \"{{ $json.interest }}\",\n  \"updated_at\": \"{{ new Date().toISOString() }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [-100, 1300],
      "id": "node-27-update-lead-post-call",
      "name": "25. Update Lead Classification in DB"
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $node['24. Classify Call Transcript & Outcome'].json.status }}",
              "value2": "HOT"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [120, 1300],
      "id": "node-28-is-hot-lead",
      "name": "26. Is HOT Lead?"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/followups",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"lead_id\": \"{{ $node['24. Classify Call Transcript & Outcome'].json.lead_id }}\",\n  \"priority\": \"URGENT\",\n  \"reason\": \"HOT Lead Handoff: Immediate Human Follow-up Required\",\n  \"summary\": \"Qualified as HOT lead during AI Call\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [340, 1200],
      "id": "node-29-create-urgent-task",
      "name": "27A. Create Urgent Human Sales Task"
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ $node['24. Classify Call Transcript & Outcome'].json.do_not_call }}",
              "value2": True
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [340, 1400],
      "id": "node-30-is-dnc-optout",
      "name": "27B. Is DNC Opt-Out?"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://gxvketvhwjftkfuerfai.supabase.co/rest/v1/do_not_call",
        "sendHeaders": True,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "sb_publishable_9NuSOztl4jnE0ZTqPJk-sw_toNrpwz0"
            },
            {
              "name": "Prefer",
              "value": "resolution=merge-duplicates"
            }
          ]
        },
        "sendBody": True,
        "specifyBody": "json",
        "jsonBody": "={\n  \"phone\": \"{{ $node['24. Classify Call Transcript & Outcome'].json.phone }}\",\n  \"reason\": \"Customer requested DO_NOT_CALL during AI Call\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [560, 1400],
      "id": "node-31-insert-dnc-blacklist",
      "name": "28. Add to DNC Blacklist Table"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={\n  \"success\": true,\n  \"status\": \"POST_CALL_PROCESSED\",\n  \"lead_status\": \"{{ $node['24. Classify Call Transcript & Outcome'].json.status }}\"\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [780, 1300],
      "id": "node-32-respond-post-call-done",
      "name": "29. Respond Post-Call Complete"
    }
  ],
  "connections": {
    "01. Webhook — Master Intake": {
      "main": [[{"node": "02. Validate Secret Header", "type": "main", "index": 0}]]
    },
    "02. Validate Secret Header": {
      "main": [
        [{"node": "04. Normalize Phone & Fields", "type": "main", "index": 0}],
        [{"node": "03. Respond Unauthorized", "type": "main", "index": 0}]
      ]
    },
    "04. Normalize Phone & Fields": {
      "main": [[{"node": "05. Query Supabase DB for Duplicate", "type": "main", "index": 0}]]
    },
    "05. Query Supabase DB for Duplicate": {
      "main": [[{"node": "06. Duplicate Exists?", "type": "main", "index": 0}]]
    },
    "06. Duplicate Exists?": {
      "main": [
        [{"node": "07A. Update Existing Lead", "type": "main", "index": 0}],
        [{"node": "07B. Insert New Lead in DB", "type": "main", "index": 0}]
      ]
    },
    "07A. Update Existing Lead": {
      "main": [[{"node": "08. Classify Website Domain", "type": "main", "index": 0}]]
    },
    "07B. Insert New Lead in DB": {
      "main": [[{"node": "08. Classify Website Domain", "type": "main", "index": 0}]]
    },
    "08. Classify Website Domain": {
      "main": [[{"node": "09. Check DNC Blacklist", "type": "main", "index": 0}]]
    },
    "09. Check DNC Blacklist": {
      "main": [[{"node": "10. Evaluate Qualification & Safety", "type": "main", "index": 0}]]
    },
    "10. Evaluate Qualification & Safety": {
      "main": [[{"node": "11. Update Lead Status in Supabase", "type": "main", "index": 0}]]
    },
    "11. Update Lead Status in Supabase": {
      "main": [[{"node": "12. Respond Pipeline Ingest Complete", "type": "main", "index": 0}]]
    },
    "13. Cron Queue (Every 15 Mins)": {
      "main": [[{"node": "14. Check Calling Window (10AM-7PM IST)", "type": "main", "index": 0}]]
    },
    "14. Check Calling Window (10AM-7PM IST)": {
      "main": [[{"node": "15. Is Calling Window Open?", "type": "main", "index": 0}]]
    },
    "15. Is Calling Window Open?": {
      "main": [
        [{"node": "16. Fetch Top 3 Ready Leads", "type": "main", "index": 0}]
      ]
    },
    "16. Fetch Top 3 Ready Leads": {
      "main": [[{"node": "17. Loop Leads One By One", "type": "main", "index": 0}]]
    },
    "17. Loop Leads One By One": {
      "main": [[{"node": "18. Dispatch OmniDimension Call", "type": "main", "index": 0}]]
    },
    "18. Dispatch OmniDimension Call": {
      "main": [[{"node": "19. Mark Lead Status CALLING", "type": "main", "index": 0}]]
    },
    "20. Webhook — Post-Call Receiver": {
      "main": [[{"node": "21. Check Call Idempotency", "type": "main", "index": 0}]]
    },
    "21. Check Call Idempotency": {
      "main": [[{"node": "22. Call Already Logged?", "type": "main", "index": 0}]]
    },
    "22. Call Already Logged?": {
      "main": [
        [{"node": "23A. Respond Idempotent Duplicate", "type": "main", "index": 0}],
        [{"node": "23B. Insert Call Record", "type": "main", "index": 0}]
      ]
    },
    "23B. Insert Call Record": {
      "main": [[{"node": "24. Classify Call Transcript & Outcome", "type": "main", "index": 0}]]
    },
    "24. Classify Call Transcript & Outcome": {
      "main": [[{"node": "25. Update Lead Classification in DB", "type": "main", "index": 0}]]
    },
    "25. Update Lead Classification in DB": {
      "main": [[{"node": "26. Is HOT Lead?", "type": "main", "index": 0}]]
    },
    "26. Is HOT Lead?": {
      "main": [
        [{"node": "27A. Create Urgent Human Sales Task", "type": "main", "index": 0}],
        [{"node": "27B. Is DNC Opt-Out?", "type": "main", "index": 0}]
      ]
    },
    "27A. Create Urgent Human Sales Task": {
      "main": [[{"node": "29. Respond Post-Call Complete", "type": "main", "index": 0}]]
    },
    "27B. Is DNC Opt-Out?": {
      "main": [
        [{"node": "28. Add to DNC Blacklist Table", "type": "main", "index": 0}],
        [{"node": "29. Respond Post-Call Complete", "type": "main", "index": 0}]
      ]
    },
    "28. Add to DNC Blacklist Table": {
      "main": [[{"node": "29. Respond Post-Call Complete", "type": "main", "index": 0}]]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}

with open('/home/devpc/Documents/Default Project/WebDev/00 — Master System Orchestrator.json', 'w') as f:
  json.dump(master_workflow, f, indent=2)

print("Successfully generated fully connected master workflow!")
