import http from 'http';
import https from 'https';

const API_URL = process.env.SCRAPER_API_URL || 'https://google-maps-scraper-latest-ro7w.onrender.com';

console.log(`🧪 Running Scraper Integration Test Suite against: ${API_URL}\n`);

async function makeRequest(urlStr, options = {}) {
  const url = new URL(urlStr);
  const client = url.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const req = client.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  let passed = 0;
  let failed = 0;

  // Test 1: GET /health
  try {
    const res = await makeRequest(`${API_URL}/health`);
    if (res.status === 200 && res.body.includes('ok')) {
      console.log('✅ TEST 1 PASSED: GET /health returns 200 OK');
      passed++;
    } else {
      console.log(`❌ TEST 1 FAILED: GET /health returned status ${res.status} body: ${res.body}`);
      failed++;
    }
  } catch (err) {
    console.log(`❌ TEST 1 FAILED: ${err.message}`);
    failed++;
  }

  // Test 2: CORS Preflight
  try {
    const res = await makeRequest(`${API_URL}/api/scrape`, {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://v0786.github.io',
        'Access-Control-Request-Method': 'POST'
      }
    });
    if (res.status === 204 || res.status === 200) {
      console.log('✅ TEST 2 PASSED: OPTIONS /api/scrape CORS preflight succeeded');
      passed++;
    } else {
      console.log(`❌ TEST 2 FAILED: OPTIONS returned status ${res.status}`);
      failed++;
    }
  } catch (err) {
    console.log(`❌ TEST 2 FAILED: ${err.message}`);
    failed++;
  }

  // Test 3: POST /api/scrape Job Creation
  let jobId = null;
  try {
    const payload = JSON.stringify({
      name: "render-test",
      keywords: ["dentists in Mumbai"],
      lang: "en",
      zoom: 15,
      lat: "19.0760",
      lon: "72.8777",
      fast_mode: false,
      radius: 5000,
      depth: 2,
      email: false,
      max_time: 300
    });

    const res = await makeRequest(`${API_URL}/api/scrape`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://v0786.github.io'
      },
      body: payload
    });

    if (res.status === 200 || res.status === 201) {
      const json = JSON.parse(res.body);
      jobId = json.id || json.jobId || json.ID;
      if (jobId) {
        console.log(`✅ TEST 3 PASSED: POST /api/scrape job created successfully (Job ID: ${jobId})`);
        passed++;
      } else {
        console.log(`❌ TEST 3 FAILED: Job ID missing in response: ${res.body}`);
        failed++;
      }
    } else {
      console.log(`❌ TEST 3 FAILED: POST /api/scrape returned status ${res.status}: ${res.body}`);
      failed++;
    }
  } catch (err) {
    console.log(`❌ TEST 3 FAILED: ${err.message}`);
    failed++;
  }

  // Test 4: Poll Job Status if jobId exists
  if (jobId) {
    try {
      const res = await makeRequest(`${API_URL}/api/scrape/${jobId}`);
      if (res.status === 200) {
        const json = JSON.parse(res.body);
        console.log(`✅ TEST 4 PASSED: GET /api/scrape/${jobId} polling status: ${json.Status || json.status}`);
        passed++;
      } else {
        console.log(`❌ TEST 4 FAILED: GET /api/scrape/${jobId} returned status ${res.status}`);
        failed++;
      }
    } catch (err) {
      console.log(`❌ TEST 4 FAILED: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n📊 TEST SUMMARY: ${passed} Passed | ${failed} Failed`);
}

runTests();
