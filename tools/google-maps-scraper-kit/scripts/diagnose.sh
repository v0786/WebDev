#!/usr/bin/env bash
# Lead Generation Diagnostics Report
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

echo "Lead Generation Diagnostics"
echo "==========================="
echo ""

OVERALL="READY"

# 1. OS Check
OS_NAME="$(uname -s 2>/dev/null || echo "Unknown")"
echo "OS                 ✓ $OS_NAME"

# 2. Docker Check
if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
    echo "Docker             ✓ Running"
else
    echo "Docker             ✗ Not running"
    OVERALL="FAILED (Docker offline)"
fi

# 3. Docker Compose Check
if docker compose version >/dev/null 2>&1; then
    echo "Docker Compose     ✓ Installed"
else
    echo "Docker Compose     ✗ Missing"
    OVERALL="FAILED (Docker Compose missing)"
fi

# 4. Container Check
CONTAINER_STATUS="$(docker inspect -f '{{.State.Status}}' gmaps-scraper 2>/dev/null || echo "not found")"
if [ "$CONTAINER_STATUS" = "running" ]; then
    echo "Scraper Container  ✓ Running"
else
    echo "Scraper Container  ✗ $CONTAINER_STATUS"
    OVERALL="NOT RUNNING (Run start.sh)"
fi

# 5. Port Detection
PORT=8080
MAPPED="$(docker compose port google-maps-scraper 8080 2>/dev/null | awk -F: '{print $NF}')"
if [ -n "$MAPPED" ]; then
    PORT=$MAPPED
fi
echo "Port               ✓ $PORT"

# 6. LAN IP Detection
LAN_IP=""
if command -v hostname >/dev/null 2>&1; then
    LAN_IP="$(hostname -I 2>/dev/null | awk '{print $1}')"
fi
if [ -z "$LAN_IP" ] && command -v ip >/dev/null 2>&1; then
    LAN_IP="$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7}')"
fi
if [ -z "$LAN_IP" ]; then
    LAN_IP="Unavailable"
fi
echo "LAN IP             ✓ $LAN_IP"

# 7. Health Endpoint Check
HEALTH_RES="$(curl -s "http://127.0.0.1:${PORT}/health" 2>/dev/null || true)"
if echo "$HEALTH_RES" | grep -q '"status":"ok"'; then
    echo "Health             ✓ Healthy"
else
    echo "Health             ✗ Unreachable"
    OVERALL="UNHEALTHY (API not responding)"
fi

# 8. Cloudflared CLI Check
if command -v cloudflared >/dev/null 2>&1; then
    if pgrep -f "cloudflared" >/dev/null 2>&1; then
        echo "Cloudflared        ✓ Installed & Running"
    else
        echo "Cloudflared        ✓ Installed (Stopped)"
    fi
else
    echo "Cloudflared        ℹ️  Not installed (Optional for internet tunnels)"
fi

echo ""
echo "Overall:"
echo "$OVERALL"
