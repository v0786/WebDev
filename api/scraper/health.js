export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const baseUrl = (process.env.SCRAPER_API_URL || process.env.SCRAPER_BASE_URL || 'http://127.0.0.1:8080').replace(/\/+$/, '');

  try {
    const response = await fetch(`${baseUrl}/health`, { method: 'GET' });
    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return res.status(200).json({
        success: true,
        status: 'healthy',
        scraper_url: baseUrl,
        details: data
      });
    }
    return res.status(502).json({
      success: false,
      status: 'unhealthy',
      scraper_url: baseUrl,
      message: `Scraper HTTP status: ${response.status}`
    });
  } catch (err) {
    return res.status(503).json({
      success: false,
      status: 'offline',
      scraper_url: baseUrl,
      message: `Scraper connection failed: ${err.message}`
    });
  }
}
