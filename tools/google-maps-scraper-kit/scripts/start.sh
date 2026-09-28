#!/usr/bin/env bash
# Dynamic Port Startup Script for Google Maps Lead Generator Scraper
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

echo "========================================"
echo " Starting Local Google Maps Scraper"
echo "========================================"
echo ""

# 1. Check Docker / Native Fallback
if ! docker info >/dev/null 2>&1; then
    echo "ℹ️ Docker daemon is not running. Launching in Native PRoot/Go mode..."
    if [ -f "../../android/start-scraper.sh" ]; then
        exec "../../android/start-scraper.sh"
    else
        exec go run proxy.go
    fi
fi

# 2. Dynamic Port Selection
BASE_PORT=${SCRAPER_PORT:-8080}
CURRENT_PORT=$BASE_PORT

is_port_in_use() {
    local check_port=$1
    if command -v nc >/dev/null 2>&1; then
        nc -z 127.0.0.1 "$check_port" >/dev/null 2>&1
        return $?
    elif command -v lsof >/dev/null 2>&1; then
        lsof -i:"$check_port" >/dev/null 2>&1
        return $?
    else
        (echo > "/dev/tcp/127.0.0.1/$check_port") >/dev/null 2>&1
        return $?
    fi
}

# Check container running state first
RUNNING_PORT="$(docker compose port google-maps-scraper 8080 2>/dev/null | awk -F: '{print $NF}')"
if [ -n "$RUNNING_PORT" ]; then
    CURRENT_PORT=$RUNNING_PORT
else
    while is_port_in_use "$CURRENT_PORT"; do
        echo "Port $CURRENT_PORT is already in use."
        CURRENT_PORT=$((CURRENT_PORT + 1))
        echo "Trying $CURRENT_PORT..."
    done
fi

export SCRAPER_PORT=$CURRENT_PORT

# 3. Launch Docker Compose Stack
echo "Starting container on port $CURRENT_PORT..."
docker compose up -d

# 4. Wait for Health Check
READY=false
for i in {1..20}; do
    if curl -s "http://127.0.0.1:${CURRENT_PORT}/health" >/dev/null 2>&1; then
        READY=true
        break
    fi
    sleep 1
done

# 5. Detect LAN IP
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
echo "SCRAPER READY"
echo ""
echo "Local:"
echo "http://127.0.0.1:${CURRENT_PORT}"
echo ""
echo "LAN:"
echo "http://${LAN_IP}:${CURRENT_PORT}"
echo ""
echo "Health:"
echo "http://${LAN_IP}:${CURRENT_PORT}/health"
echo ""
if [ "$READY" = true ]; then
    echo "Status: 🟢 READY"
else
    echo "Status: 🟡 INITIALIZING"
fi
