#!/usr/bin/env bash
# Graceful Stop Script for Google Maps Scraper Stack
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

echo "========================================"
echo " Stopping Local Google Maps Scraper"
echo "========================================"

if docker ps --format '{{.Names}}' | grep -q "gmaps-scraper"; then
    echo "Stopping container 'gmaps-scraper'..."
    docker compose down
    echo " [✓] Google Maps Scraper container stopped safely."
else
    echo " [✓] Scraper container is not currently running."
fi

# Kill cloudflared tunnel process if started locally by launcher
if pgrep -f "cloudflared tunnel" >/dev/null 2>&1; then
    echo "Stopping cloudflared tunnel process..."
    pkill -f "cloudflared tunnel" || true
    echo " [✓] Cloudflare tunnel process stopped."
fi
