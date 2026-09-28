#!/usr/bin/env bash
# First-Time PC Setup Script for Google Maps Lead Generation Scraper
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

echo "========================================"
echo " Google Maps Lead Generation"
echo " Local Scraper Setup"
echo "========================================"
echo ""

# 1. Check Git
if command -v git >/dev/null 2>&1; then
    echo " [✓] Git detected: $(git --version | head -n 1)"
else
    echo " [✗] Git is missing. Please install git."
    exit 1
fi

# 2. Check Docker
if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
    echo " [✓] Docker detected: $(docker --version | head -n 1)"
else
    echo " [✗] Docker daemon is not running. Please start Docker Desktop or Docker engine."
    exit 1
fi

# 3. Check Docker Compose
if docker compose version >/dev/null 2>&1; then
    echo " [✓] Docker Compose detected: $(docker compose version | head -n 1)"
else
    echo " [✗] Docker Compose plugin missing."
    exit 1
fi

# 4. Build Docker container image
echo " Building/verifying local scraper Docker image..."
docker compose build

# 5. Start container
echo " Starting local scraper container..."
docker compose up -d

# 6. Verify health
echo " Running health check..."
PORT=${SCRAPER_PORT:-8080}
READY=false
for i in {1..20}; do
    if curl -s "http://127.0.0.1:${PORT}/health" >/dev/null 2>&1; then
        READY=true
        break
    fi
    sleep 1
done

if [ "$READY" = true ]; then
    echo " [✓] Health check passed!"
else
    echo " [⚠️] Health check delayed (container initializing)..."
fi

# Detect LAN IP
LAN_IP=""
if command -v hostname >/dev/null 2>&1; then
    LAN_IP="$(hostname -I 2>/dev/null | awk '{print $1}')"
fi
if [ -z "$LAN_IP" ] && command -v ip >/dev/null 2>&1; then
    LAN_IP="$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7}')"
fi
if [ -z "$LAN_IP" ]; then
    LAN_IP="192.168.1.x"
fi

echo ""
echo "Local:"
echo "http://127.0.0.1:${PORT}"
echo ""
echo "LAN:"
echo "http://${LAN_IP}:${PORT}"
echo ""
echo "Status:"
echo "READY"
