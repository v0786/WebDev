#!/usr/bin/env bash
# Termux Android Local Scraper Launcher
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "========================================"
echo " 📱 Android Termux Local Scraper Setup"
echo "========================================"

# 1. Verify Go & Git Installation
if ! command -v go >/dev/null 2>&1 || ! command -v git >/dev/null 2>&1; then
    echo "⚡ Installing Go runtime & Git for Android Termux..."
    pkg update -y
    pkg install golang git -y
fi

echo " [✓] Go compiler & Git detected."

# 2. Check if submodule files exist in current directory
if [ ! -f "proxy.go" ] && [ ! -f "main.go" ]; then
    echo "⚠️ Submodule directory is empty! Initializing git submodules..."
    if [ -d "../../.git" ]; then
        (cd ../.. && git submodule update --init --recursive)
    else
        echo "Downloading scraper kit repository..."
        git clone https://github.com/Mahanaicoach/google-maps-scraper-kit.git .
    fi
fi

# 3. Check Port 8080 or 10000
PORT=${PORT:-8080}
if lsof -i :${PORT} >/dev/null 2>&1 || netstat -tuln 2>/dev/null | grep -q ":${PORT} "; then
    echo "⚠️ Port ${PORT} is occupied. Trying port 8081..."
    PORT=8081
fi

export PORT="${PORT}"

echo ""
echo "🚀 Starting Google Maps REST Scraper Service on Android..."
echo "Local Server URL: http://127.0.0.1:${PORT}"
echo ""
echo "1. Open Chrome on Android"
echo "2. Go to: https://v0786.github.io/WebDev/#/sales"
echo "3. In Connection Settings, enter: http://127.0.0.1:${PORT}"
echo ""

if [ -f "proxy.go" ]; then
    exec go run proxy.go
elif [ -f "main.go" ]; then
    exec go run main.go -rest -port "${PORT}"
else
    exec go run .
fi
