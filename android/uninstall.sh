#!/usr/bin/env bash
# Uninstall & Cleanup Script for Android Termux PRoot Environment
set -e

echo "========================================"
echo " 🧹 Android Scraper Uninstaller"
echo "========================================"

# Stop running scraper services
if [ -f "./android/stop-scraper.sh" ]; then
    ./android/stop-scraper.sh || true
fi

# Remove Termux shortcut if present
if [ -f "$HOME/run-scraper.sh" ]; then
    echo "[+] Removing Termux shortcut ~/run-scraper.sh..."
    rm -f "$HOME/run-scraper.sh"
fi

# Ask or clean PRoot Debian
echo "[+] Cleaning temporary data..."
rm -rf /tmp/gmaps_data logs/*.pid logs/*.log 2>/dev/null || true

echo ""
echo "[✓] Local scraper files cleaned."
echo "Note: To completely delete the PRoot Debian container, run in Termux:"
echo "  proot-distro remove debian"
echo "========================================"
