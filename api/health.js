export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    ok: true,
    service: 'webdev-vercel-api',
    environment: process.env.NODE_ENV || 'production',
    omnidimension: process.env.OMNIDIM_API_KEY ? 'configured' : 'missing_key',
    n8n: process.env.N8N_BASE_URL ? 'configured' : 'not_configured',
    timestamp: new Date().toISOString()
  });
}
