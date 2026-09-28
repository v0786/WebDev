#!/usr/bin/env bash
# Stop Google Maps Scraper and Proxy Services
set -e

echo "[+] Stopping Google Maps Scraper services..."

# Kill by process names
pkill -f "google-maps-scraper" 2>/dev/null || true
pkill -f "cors-proxy" 2>/dev/null || true
pkill -f "proxy.go" 2>/dev/null || true

# Kill by ports if lsof available
if command -v lsof >/dev/null 2>&1; then
    PID_8080="$(lsof -t -i:8080 2>/dev/null || true)"
    if [ -n "$PID_8080" ]; then
        kill -9 $PID_8080 2>/dev/null || true
    fi
    PID_8081="$(lsof -t -i:8081 2>/dev/null || true)"
    if [ -n "$PID_8081" ]; then
        kill -9 $PID_8081 2>/dev/null || true
    fi
fi

sleep 1
echo "[✓] Scraper services stopped."
