export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (req.method === 'GET') {
    if (supabaseUrl && supabaseKey) {
      try {
        const resp = await fetch(`${supabaseUrl}/rest/v1/leads?select=*&order=created_at.desc`, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });
        if (resp.ok) {
          const data = await resp.json();
          return res.status(200).json({ success: true, data });
        }
      } catch (err) {
        console.warn('Supabase fetch leads error:', err.message);
      }
    }
    return res.status(200).json({ success: true, data: [] });
  }

  if (req.method === 'POST') {
    const lead = req.body || {};
    if (supabaseUrl && supabaseKey) {
      try {
        const resp = await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(lead)
        });
        if (resp.ok) {
          const inserted = await resp.json();
          return res.status(201).json({ success: true, data: inserted });
        }
      } catch (err) {
        console.warn('Supabase insert lead error:', err.message);
      }
    }
    return res.status(200).json({ success: true, data: lead });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
