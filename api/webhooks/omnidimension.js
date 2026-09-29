export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Webhook-Secret');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const payload = req.body || {};
    const callId = payload.call_id || payload.omnidim_call_id || `call_${Date.now()}`;
    const leadId = payload.metadata?.crm_lead_id || payload.variables?.lead_id || payload.lead_id;
    const extracted = payload.extracted_data || payload.analysis || {};
    const phone = payload.phone || payload.to_number || payload.phone_called;

    const doNotCall = extracted.do_not_call === true || extracted.call_outcome === 'DO_NOT_CALL';
    const isCallback = extracted.callback_requested === true || extracted.call_outcome === 'CALLBACK';
    const isHot = extracted.interest === 'HOT' || extracted.call_outcome === 'INTERESTED';

    let finalLeadStatus = 'CALL_COMPLETED';
    if (doNotCall) finalLeadStatus = 'DO_NOT_CALL';
    else if (isCallback) finalLeadStatus = 'CALLBACK';
    else if (isHot) finalLeadStatus = 'HOT';
    else if (extracted.call_outcome === 'NOT_INTERESTED') finalLeadStatus = 'NOT_INTERESTED';

    const resultRecord = {
      call_id: callId,
      lead_id: leadId,
      phone: phone,
      call_status: payload.call_status || 'COMPLETED',
      duration_seconds: payload.duration_seconds || 0,
      recording_url: payload.recording_url || null,
      transcript: payload.transcript || '',
      interest: extracted.interest || (isHot ? 'HOT' : 'UNKNOWN'),
      website_need: extracted.website_need || 'BASIC_BUSINESS_WEBSITE',
      business_goal: extracted.business_goal || 'WHATSAPP_ENQUIRIES',
      timeline: extracted.timeline || 'THIS_MONTH',
      decision_maker: extracted.decision_maker ?? true,
      do_not_call: doNotCall,
      is_callback: isCallback,
      final_lead_status: finalLeadStatus,
      summary: extracted.summary || 'OmniDimension AI Voice conversation completed'
    };

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        // Idempotent Call Record Insertion
        await fetch(`${supabaseUrl}/rest/v1/calls`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=ignore-duplicates'
          },
          body: JSON.stringify({
            lead_id: leadId,
            omnidim_call_id: callId,
            agent_id: payload.agent_id || 'agent_sales_qualifier_01',
            phone_called: phone,
            call_status: payload.call_status || 'COMPLETED',
            duration_seconds: payload.duration_seconds || 0,
            recording_url: payload.recording_url || null,
            transcript: payload.transcript || ''
          })
        });

        // Update Lead State
        if (leadId) {
          await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`, {
            method: 'PATCH',
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              status: finalLeadStatus,
              call_status: 'COMPLETED',
              interest: resultRecord.interest,
              website_need: resultRecord.website_need,
              business_goal: resultRecord.business_goal,
              timeline: resultRecord.timeline,
              last_call_id: callId,
              last_call_at: new Date().toISOString()
            })
          });
        }

        // Add to DNC table if opted out
        if (doNotCall && phone) {
          await fetch(`${supabaseUrl}/rest/v1/do_not_call`, {
            method: 'POST',
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'resolution=ignore-duplicates'
            },
            body: JSON.stringify({
              phone: phone,
              reason: 'Opted out during OmniDimension AI Voice call'
            })
          });
        }
      } catch (dbErr) {
        console.warn('Supabase webhook sync warning:', dbErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'OmniDimension call result processed idempotently',
      data: resultRecord
    });
  } catch (err) {
    console.error('Error processing OmniDimension webhook:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process webhook',
      error: err.message
    });
  }
}
