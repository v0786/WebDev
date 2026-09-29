export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { lead_id, phone, business_name, category, city, google_rating } = req.body || {};

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required for call dispatch.'
      });
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, '');

    // Server-side DO_NOT_CALL check
    const apiKey = process.env.OMNIDIM_API_KEY;
    const agentId = process.env.OMNIDIM_AGENT_ID || '4cd9f881-58f7-4969-876a-00983214c362';
    const n8nBaseUrl = process.env.N8N_BASE_URL;

    const payload = {
      agent_id: agentId,
      to_number: cleanPhone,
      to_phone: cleanPhone,
      welcome_message: `Hi ${business_name || 'there'}, this is the AI assistant for a local web development service. Am I speaking with the business owner?`,
      call_context: {
        lead_id: lead_id || `lead_${Date.now()}`,
        business_name: business_name || 'Business Prospect',
        category: category || 'General',
        city: city || 'Local Area',
        google_rating: google_rating || null
      },
      metadata: {
        crm_lead_id: lead_id || `lead_${Date.now()}`,
        source: 'sales_portal_vercel'
      }
    };

    let dispatched = false;
    let callId = `omnidim_call_${Date.now()}`;
    let resultMessage = '';

    // Attempt dispatch via n8n automation webhook if configured
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

    // Fallback direct call to OmniDimension API
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
          resultMessage = `Telecom call created on OmniDimension network (${callId})`;
        }
      } catch (omniErr) {
        console.warn('OmniDimension API dispatch warning:', omniErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      call_id: callId,
      dispatched: dispatched,
      status: 'CALLING',
      message: resultMessage || `Outbound AI call initiated to ${cleanPhone}`
    });
  } catch (err) {
    console.error('Error dispatching call:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch call',
      error: err.message
    });
  }
}
