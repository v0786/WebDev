export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query || {};
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!id) {
    return res.status(400).json({ success: false, message: 'Lead ID parameter missing' });
  }

  if (req.method === 'GET') {
    if (supabaseUrl && supabaseKey) {
      try {
        const resp = await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${id}&select=*`, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });
        if (resp.ok) {
          const data = await resp.json();
          return res.status(200).json({ success: true, data: data[0] || null });
        }
      } catch (err) {
        console.warn('Supabase fetch lead error:', err.message);
      }
    }
    return res.status(200).json({ success: true, data: null });
  }

  if (req.method === 'PATCH') {
    const updates = req.body || {};
    if (supabaseUrl && supabaseKey) {
      try {
        const resp = await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${id}`, {
          method: 'PATCH',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(updates)
        });
        if (resp.ok) {
          const data = await resp.json();
          return res.status(200).json({ success: true, data });
        }
      } catch (err) {
        console.warn('Supabase patch lead error:', err.message);
      }
    }
    return res.status(200).json({ success: true, data: updates });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
