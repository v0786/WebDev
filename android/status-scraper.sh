#!/usr/bin/env bash
# Status Checker for Native Android Scraper
set -e

PORT="${PORT:-8080}"
HEALTH_URL="http://127.0.0.1:${PORT}/health"

echo "========================================"
echo " Google Maps Scraper — Status Report"
echo "========================================"

# 1. Check Processes
PROCESS_RUNNING=false
if pgrep -f "google-maps-scraper" >/dev/null 2>&1 || pgrep -f "proxy.go" >/dev/null 2>&1 || pgrep -f "cors-proxy" >/dev/null 2>&1; then
    PROCESS_RUNNING=true
    echo "[✓] Process Status: RUNNING"
else
    echo "[✗] Process Status: STOPPED"
fi

# 2. Check Listening Port & Health Endpoint
HEALTH_RESP=""
if command -v curl >/dev/null 2>&1; then
    HEALTH_RESP="$(curl -s --max-time 3 "${HEALTH_URL}" 2>/dev/null || echo "")"
fi

PORT_LISTENING=false
if echo "$HEALTH_RESP" | grep -q '"status"'; then
    PORT_LISTENING=true
elif command -v lsof >/dev/null 2>&1 && lsof -i :${PORT} >/dev/null 2>&1; then
    PORT_LISTENING=true
fi

if [ "$PORT_LISTENING" = true ]; then
    echo "[✓] Port ${PORT}: LISTENING"
else
    echo "[✗] Port ${PORT}: NOT LISTENING"
fi

# 3. Check Health Endpoint
HEALTH_RESP=""
if command -v curl >/dev/null 2>&1; then
    HEALTH_RESP="$(curl -s --max-time 3 "${HEALTH_URL}" 2>/dev/null || echo "")"
fi

if echo "$HEALTH_RESP" | grep -q '"status"'; then
    echo "[✓] Health Endpoint: RESPONDING (${HEALTH_RESP})"
else
    echo "[✗] Health Endpoint: UNREACHABLE"
fi

echo "========================================"

if [ "$PROCESS_RUNNING" = true ] && [ "$PORT_LISTENING" = true ]; then
    exit 0
else
    exit 1
fi
