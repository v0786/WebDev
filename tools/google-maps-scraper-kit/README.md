# Google Maps Scraper Kit — Local & Cloudflare Tunnel Architecture

This repository contains the local Google Maps Scraper engine & CORS API adapter for the Lead Generation Portal.

## Architecture

```text
                               LOCAL PC / LAPTOP
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            │                          │                          │
            ▼                          ▼                          ▼
     Mode A: Localhost           Mode B: LAN              Mode C: Tunnel
     http://127.0.0.1:8080      http://192.168.x.x:8080   https://xxx.trycloudflare.com
            │                          │                          │
            └──────────────────────────┼──────────────────────────┘
                                       ▼
                             Local API Adapter (:8080)
                                       │
                             Docker Engine & Gosom Scraper
```

---

## Launcher Commands

Run these scripts directly from this directory:

### 1. First-Time Setup
Verifies Docker, Docker Compose, Git, builds images, and performs a health check.
```bash
./setup.sh
```

### 2. Start Scraper
Starts the local Docker container with dynamic port detection (defaults to `8080`; if occupied, auto-selects `8081`, `8082`, etc.).
```bash
./start.sh
```

### 3. Stop Scraper
Gracefully stops the scraper container without terminating unrelated Docker containers on your machine.
```bash
./stop.sh
```

### 4. Run Diagnostics
Generates a complete system health and network diagnostic report.
```bash
./diagnose.sh
```

### 5. Launch Cloudflare Tunnel (Optional for Internet access)
Exposes your local scraper over an HTTPS Cloudflare Quick Tunnel for remote mobile access.
```bash
./tunnel.sh
```

---

## Connection Modes in Frontend (`https://v0786.github.io/WebDev/#/sales`)

1. **This Computer (Localhost)**:
   - Endpoint: `http://127.0.0.1:8080` (or custom port selected by `./start.sh`).

2. **Local Network (LAN / Wi-Fi)**:
   - Enter your PC's IP address (e.g. `192.168.0.203`) and port (`8080`).
   - Endpoint: `http://192.168.0.203:8080`.

3. **Internet / Cloudflare Tunnel**:
   - Run `./tunnel.sh` on your PC.
   - Paste the generated URL (e.g. `https://random-name.trycloudflare.com`) into the UI.
