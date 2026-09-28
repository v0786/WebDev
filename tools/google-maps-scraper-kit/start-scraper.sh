#!/usr/bin/env bash
# Local Google Maps Scraper Startup & Port/LAN Detection Script
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

TUNNEL_MODE=false
if [[ "$1" == "--tunnel" ]]; then
    TUNNEL_MODE=true
fi

echo "╔════════════════════════════════════════════╗"
echo "║       GOOGLE MAPS LEAD GENERATOR           ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# 1. Detect OS
OS_NAME="$(uname -s)"
echo "[1/7] Detecting OS .................... ✓ ($OS_NAME)"

# 2. Check Docker Daemon / Native Fallback
if ! docker info >/dev/null 2>&1; then
    echo "ℹ️ Docker daemon is not running. Falling back to Native PRoot/Go mode..."
    if [ -f "../../android/start-scraper.sh" ]; then
        exec "../../android/start-scraper.sh"
    elif [ -f "./termux-start.sh" ]; then
        exec "./termux-start.sh"
    else
        exec go run proxy.go
    fi
fi
echo "[2/7] Docker Daemon .................. ✓"

# 3. Check Docker Compose
if ! docker compose version >/dev/null 2>&1; then
    echo "ERROR: docker compose command not found."
    exit 1
fi
echo "[3/7] Docker Compose ........... ✓"

# 4 & 5. Start Container via docker compose
echo "[4/7] Starting Scraper Container ...... ✓"
docker compose up -d >/dev/null 2>&1

# 6. Detect Scraper Port from Container or default
SCRAPER_PORT=8080
MAPPED_PORT="$(docker compose port google-maps-scraper 8080 2>/dev/null | awk -F: '{print $NF}')"
if [ -n "$MAPPED_PORT" ]; then
    SCRAPER_PORT="$MAPPED_PORT"
fi

# 7. Health Check
echo "[5/7] Waiting for Health Check ......"
READY=false
for i in {1..20}; do
    if curl -s "http://127.0.0.1:${SCRAPER_PORT}/health" >/dev/null 2>&1 || curl -s "http://127.0.0.1:${SCRAPER_PORT}/api/v1/jobs" >/dev/null 2>&1; then
        READY=true
        break
    fi
    sleep 1
done

if [ "$READY" = true ]; then
    echo "[5/7] Health check ............. ✓"
else
    echo "[5/7] Health check ............. ⚠️ Starting (or delayed)"
fi

# Detect Local LAN IPv4
LAN_IP=""
if command -v hostname >/dev/null 2>&1; then
    LAN_IP="$(hostname -I 2>/dev/null | awk '{print $1}')"
fi
if [ -z "$LAN_IP" ] && command -v ip >/dev/null 2>&1; then
    LAN_IP="$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7}')"
fi
if [ -z "$LAN_IP" ]; then
    LAN_IP="192.168.x.x"
fi

echo "[6/7] LAN Address .................. ✓ ($LAN_IP)"
echo "[7/7] API Ready .................... ✓"
echo ""

# Cloudflare Tunnel Support
TUNNEL_URL=""
if [ "$TUNNEL_MODE" = true ]; then
    if command -v cloudflared >/dev/null 2>&1; then
        echo "Starting Cloudflare Tunnel for port ${SCRAPER_PORT}..."
        echo "Cloudflare Tunnel URL will be active while cloudflared runs."
    else
        echo "⚠️ Cloudflare Tunnel requested (--tunnel), but 'cloudflared' CLI is not installed."
        echo "Install cloudflared: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
    fi
fi

echo "===================================================="
echo "  LOCAL CONNECTION URL (on this PC):"
echo "  http://127.0.0.1:${SCRAPER_PORT}"
echo ""
echo "  LAN MOBILE CONNECTION URL (same Wi-Fi):"
echo "  http://${LAN_IP}:${SCRAPER_PORT}"
echo ""
if [ -n "$TUNNEL_URL" ]; then
    echo "  CLOUDFLARE TUNNEL URL:"
    echo "  ${TUNNEL_URL}"
    echo ""
else
    echo "  CLOUDFLARE TUNNEL:"
    echo "  Not configured (run with --tunnel if using Cloudflare)"
    echo ""
fi
echo "===================================================="
echo "  STATUS: 🟢 READY"
echo ""
echo "💡 Mobile Wi-Fi Note:"
echo "If your mobile browser blocks HTTP connection on GitHub Pages,"
echo "run the frontend locally on your PC (npm run dev) or use an HTTPS tunnel."
echo "Firewall Command (if port blocked on Linux):"
echo "  sudo ufw allow ${SCRAPER_PORT}/tcp"
echo "===================================================="

# Generate QR code if qrencode installed
if command -v qrencode >/dev/null 2>&1; then
    echo ""
    echo "Scan this QR code on mobile to get your LAN Scraper URL:"
    qrencode -t ANSIUTF8 "http://${LAN_IP}:${SCRAPER_PORT}"
fi
