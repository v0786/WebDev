#!/usr/bin/env bash
# One-Command Launcher for Native Android Scraper
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

# 1. Check if running inside PRoot Debian vs standard Termux
if [ -f "/etc/debian_version" ]; then
    # We are inside PRoot Debian
    echo "========================================"
    echo " Starting Google Maps Scraper (Native Debian)"
    echo "========================================"
    echo ""
    
    ./android/start-scraper.sh
    
    echo ""
    echo "[+] Service active. Streaming logs (Press Ctrl+C to exit log view, service remains running in background):"
    echo "----------------------------------------"
    exec tail -f logs/scraper.log logs/proxy.log 2>/dev/null || true
else
    # We are in standard Termux environment
    echo "========================================"
    echo " Termux Launcher -> Entering PRoot Debian"
    echo "========================================"
    
    if ! command -v proot-distro >/dev/null 2>&1; then
        echo "⚡ proot-distro not installed. Running Termux installer..."
        ./android/install-termux.sh
    fi
    
    # Enter Debian container and execute run-scraper.sh
    DEBIAN_PROJECT_DIR="/root/scraper-kit"
    exec proot-distro login debian -- bash -c "cd ${DEBIAN_PROJECT_DIR} && ./android/run-scraper.sh"
fi
