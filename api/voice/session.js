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
    const { lead_id, user_context } = req.body || {};
    const apiKey = process.env.OMNIDIM_API_KEY;
    const agentId = process.env.OMNIDIM_AGENT_ID || '4cd9f881-58f7-4969-876a-00983214c362';

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: OMNIDIM_API_KEY missing in Vercel environment.'
      });
    }

    // Call OmniDimension session creation API
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
          source: 'sales_portal_vercel_voice'
        },
        context: user_context || {}
      })
    });

    if (!omniResponse.ok) {
      const fallbackSessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      const fallbackWsUrl = `wss://api.omnidimension.ai/v1/ws/session?session_id=${fallbackSessionId}&agent_id=${agentId}`;

      return res.status(200).json({
        success: true,
        session_id: fallbackSessionId,
        ws_url: fallbackWsUrl,
        mode: 'websession_fallback',
        message: 'Voice session initialized'
      });
    }

    const data = await omniResponse.json();
    return res.status(200).json({
      success: true,
      session_id: data.session_id || `sess_${Date.now()}`,
      ws_url: data.ws_url,
      expires_at: data.expires_at
    });
  } catch (err) {
    console.error('Error creating voice session:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to create OmniDimension voice session',
      error: err.message
    });
  }
}
