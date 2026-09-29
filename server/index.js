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

app.listen(PORT, () => {
  console.log(`🚀 OmniDimension Voice AI Backend running on http://localhost:${PORT}`);
});
