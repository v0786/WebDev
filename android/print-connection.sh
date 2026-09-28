#!/usr/bin/env bash
# Print Connection URLs & IP Configuration
set -e

PORT="${PORT:-8080}"

# Auto-detect Android LAN IP
LAN_IP=""
if command -v ip >/dev/null 2>&1; then
    LAN_IP="$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7}')"
fi
if [ -z "$LAN_IP" ] && command -v hostname >/dev/null 2>&1; then
    LAN_IP="$(hostname -I 2>/dev/null | awk '{print $1}')"
fi
if [ -z "$LAN_IP" ] && command -v ifconfig >/dev/null 2>&1; then
    LAN_IP="$(ifconfig 2>/dev/null | grep -E 'inet (192\.168|10\.|172\.(1[6-9]|2[0-9]|3[0-1]))' | awk '{print $2}' | head -n1 | sed 's/addr://')"
fi
if [ -z "$LAN_IP" ]; then
    LAN_IP="ANDROID-LAN-IP"
fi

echo "========================================"
echo " Google Maps Scraper"
echo "========================================"
echo ""
echo "Local:"
echo "http://127.0.0.1:${PORT}"
echo ""
echo "LAN:"
echo "http://${LAN_IP}:${PORT}"
echo ""
echo "Health:"
echo "http://127.0.0.1:${PORT}/health"
echo ""
echo "Portal configuration:"
echo "Mode: Same Device"
echo "URL: http://127.0.0.1:${PORT}"
echo "========================================"
