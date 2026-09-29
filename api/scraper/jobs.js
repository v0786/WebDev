export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const baseUrl = (process.env.SCRAPER_API_URL || process.env.SCRAPER_BASE_URL || 'http://127.0.0.1:8080').replace(/\/+$/, '');

  // POST: Create Scraper Job
  if (req.method === 'POST') {
    try {
      const { keywords, depth = 3, city, lat, lon, fast_mode = true, radius = 10000 } = req.body || {};
      let searchKeywords = keywords;
      if (typeof searchKeywords === 'string') {
        searchKeywords = [searchKeywords];
      }
      if (!searchKeywords || !Array.isArray(searchKeywords) || searchKeywords.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Parameter "keywords" is required.'
        });
      }

      let finalLat = lat || '0';
      let finalLon = lon || '0';

      if (city && (finalLat === '0' || !lat)) {
        try {
          const query = new URLSearchParams({ format: 'json', limit: '1', q: city });
          const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?${query}`, {
            headers: { 'User-Agent': 'WebDevBackendScraper/1.0' }
          });
          if (geoRes.ok) {
            const geoData = await geoRes.json();
            if (geoData && geoData[0]) {
              finalLat = String(geoData[0].lat);
              finalLon = String(geoData[0].lon);
            }
          }
        } catch (geoErr) {
          console.warn('Geocoding notice:', geoErr.message);
        }
      }

      const payload = {
        name: `job_${Date.now()}`,
        keywords: searchKeywords,
        lang: 'en',
        zoom: 15,
        lat: finalLat,
        lon: finalLon,
        fast_mode: Boolean(fast_mode),
        radius: Number(radius) || 10000,
        depth: Number(depth) || 3,
        email: false,
        max_time: 600
      };

      const endpoints = ['/api/v1/jobs', '/api/scrape'];
      let jobData = null;
      let lastErr = null;

      for (const ep of endpoints) {
        try {
          const targetRes = await fetch(`${baseUrl}${ep}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload)
          });
          if (targetRes.ok) {
            jobData = await targetRes.json();
            break;
          } else {
            lastErr = await targetRes.text();
          }
        } catch (e) {
          lastErr = e.message;
        }
      }

      if (!jobData) {
        return res.status(500).json({
          success: false,
          message: 'Failed to create scraper job on local container.',
          error: lastErr
        });
      }

      const jobId = jobData.id || jobData.jobId || jobData.ID;
      return res.status(201).json({
        success: true,
        job_id: jobId,
        status: 'queued',
        scraper_url: baseUrl,
        payload
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Failed to dispatch scraper job',
        error: err.message
      });
    }
  }

  // GET: Poll Job Status (via ?id=...)
  if (req.method === 'GET') {
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({ success: false, message: 'Query parameter "id" is required.' });
    }

    try {
      const endpoints = [`/api/v1/jobs/${id}`, `/api/scrape/${id}`];
      let response = null;
      for (const ep of endpoints) {
        try {
          const r = await fetch(`${baseUrl}${ep}`, { headers: { Accept: 'application/json' } });
          if (r.ok) {
            response = r;
            break;
          }
        } catch {}
      }

      if (!response) {
        return res.status(404).json({ success: false, message: `Job ${id} not found or scraper unreachable.` });
      }

      const data = await response.json();
      const rawStatus = (data.Status || data.status || 'working').toLowerCase();
      return res.status(200).json({
        success: true,
        job_id: id,
        status: rawStatus,
        data
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: 'Failed to poll job status', error: err.message });
    }
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
