# Google Maps Scraper - Render Deployment & Sales Portal Architecture

## 1. System Architecture

```
GitHub Pages (https://v0786.github.io/WebDev/#/sales)
               │
               │ HTTPS (JSON API requests, application/json)
               ▼
   Render Web Service (https://google-maps-scraper-latest-ro7w.onrender.com)
               │
               ├── GET /health ──> HTTP 200 {"status":"ok"} (Render Health Check & Cold Start Ping)
               │
               └── Go CORS Proxy (0.0.0.0:$PORT)
                       │
                       │ Forward /api/v1/jobs & /api/scrape
                       ▼
         gosom/google-maps-scraper (127.0.0.1:8081)
                       │
                       ├── Playwright / Headless Chromium
                       └── Real-Time Google Maps Search & DOM Extraction
                       │
                       ▼
              Real Commercial Lead Dataset (CSV Export)
```

---

## 2. Key Components & Configuration

### Dockerfile (`/Dockerfile`)
Uses a two-stage build to compile `tools/cors-proxy/proxy.go` in Go 1.22 Alpine, copying the compiled `cors-proxy` binary into the `gosom/google-maps-scraper:latest` image.

```dockerfile
# Stage 1: Build Go CORS Proxy
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY tools/cors-proxy/proxy.go .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o cors-proxy proxy.go

# Stage 2: Gosom Google Maps Scraper + CORS Proxy
FROM gosom/google-maps-scraper:latest
COPY --from=builder /app/cors-proxy /cors-proxy
EXPOSE 10000
ENTRYPOINT ["/cors-proxy"]
```

### Render Blueprint (`/render.yaml`)
```yaml
services:
  - type: web
    name: google-maps-scraper-latest
    env: docker
    dockerfilePath: Dockerfile
    healthCheckPath: /health
    envVars:
      - key: PORT
        value: 10000
      - key: ALLOWED_ORIGIN
        value: https://v0786.github.io
```

---

## 3. Environment Variables

| Variable Name | Default Value | Description |
| :--- | :--- | :--- |
| `PORT` | `10000` | Dynamic port provided by Render (`0.0.0.0:$PORT`). |
| `ALLOWED_ORIGIN` | `https://v0786.github.io` | CORS Allowed Origin for production security. |

---

## 4. API Endpoints

### Health Endpoint
* **GET `/health`**: Returns `{"status":"ok"}` with HTTP 200 OK without triggering scraper.

### Job Creation
* **POST `/api/scrape`** (or **POST `/api/v1/jobs`**)
  * `Content-Type: application/json`
  * Body:
    ```json
    {
      "name": "sales-lead-scrape",
      "keywords": ["dentists in Mumbai"],
      "lang": "en",
      "zoom": 15,
      "lat": "19.0760",
      "lon": "72.8777",
      "fast_mode": false,
      "radius": 10000,
      "depth": 3,
      "email": false,
      "max_time": 300
    }
    ```
  * Returns: `{ "id": "job_id_string" }`

### Job Status Polling
* **GET `/api/scrape/{jobId}`** (or **GET `/api/v1/jobs/{jobId}`**)
  * Returns: `{ "Status": "queued" | "working" | "ok" | "failed" }`

### CSV Download
* **GET `/api/scrape/{jobId}/download`** (or **GET `/api/v1/jobs/{jobId}/download`**)
  * Returns: Raw CSV file stream.

---

## 5. Manual Curl Verification Commands

```bash
# 1. Health check
curl -i https://google-maps-scraper-latest-ro7w.onrender.com/health

# 2. CORS preflight check
curl -i -X OPTIONS https://google-maps-scraper-latest-ro7w.onrender.com/api/scrape \
  -H "Origin: https://v0786.github.io" \
  -H "Access-Control-Request-Method: POST"

# 3. Create scrape job
curl -i -X POST https://google-maps-scraper-latest-ro7w.onrender.com/api/scrape \
  -H "Content-Type: application/json" \
  -H "Origin: https://v0786.github.io" \
  -d '{
    "name": "test-scrape",
    "keywords": ["dentists in Mumbai"],
    "lang": "en",
    "zoom": 15,
    "lat": "19.0760",
    "lon": "72.8777",
    "fast_mode": false,
    "radius": 5000,
    "depth": 2,
    "email": false,
    "max_time": 300
  }'

# 4. Poll job status
curl -i https://google-maps-scraper-latest-ro7w.onrender.com/api/scrape/{JOB_ID}

# 5. Download CSV results
curl -o leads.csv https://google-maps-scraper-latest-ro7w.onrender.com/api/scrape/{JOB_ID}/download
```
