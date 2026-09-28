#!/usr/bin/env bash
# Start Native Android Scraper Services
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Auto-detect GOROOT in Debian PRoot environment
if [ -d "/usr/lib/go" ]; then
    export GOROOT=/usr/lib/go
else
    DETECTED_GOROOT="$(ls -d /usr/lib/go* 2>/dev/null | head -n1)"
    if [ -n "$DETECTED_GOROOT" ]; then
        export GOROOT="$DETECTED_GOROOT"
    fi
fi

export GOPATH="$HOME/go"
export PATH="$GOROOT/bin:$GOPATH/bin:$PATH"

# Load config if present
if [ -f "android/config/scraper.env" ]; then
    set -a
    source "android/config/scraper.env"
    set +a
fi

PORT="${PORT:-8080}"
INTERNAL_PORT="8081"
DATA_FOLDER="${DATA_FOLDER:-/tmp/gmaps_data}"
LOG_DIR="logs"

mkdir -p "$LOG_DIR" "$DATA_FOLDER"

echo "[1/4] Checking environment & dependencies..."

# Stop any running instances first
./android/stop-scraper.sh >/dev/null 2>&1 || true

# Find google-maps-scraper binary
SCRAPER_BIN=""
if command -v google-maps-scraper >/dev/null 2>&1; then
    SCRAPER_BIN="$(command -v google-maps-scraper)"
elif [ -f "$GOPATH/bin/google-maps-scraper" ]; then
    SCRAPER_BIN="$GOPATH/bin/google-maps-scraper"
elif [ -f "$HOME/go/bin/google-maps-scraper" ]; then
    SCRAPER_BIN="$HOME/go/bin/google-maps-scraper"
elif [ -f "/usr/bin/google-maps-scraper" ]; then
    SCRAPER_BIN="/usr/bin/google-maps-scraper"
fi

# If binary still missing, try running go install
if [ -z "$SCRAPER_BIN" ]; then
    echo "[+] Compiling google-maps-scraper binary..."
    go install github.com/gosom/google-maps-scraper@latest || true
    if [ -f "$GOPATH/bin/google-maps-scraper" ]; then
        SCRAPER_BIN="$GOPATH/bin/google-maps-scraper"
    fi
fi

# 2. Launch Internal Scraper
if [ -n "$SCRAPER_BIN" ]; then
    echo "[2/4] Starting internal scraper engine on 127.0.0.1:${INTERNAL_PORT}..."
    "$SCRAPER_BIN" -web -addr "127.0.0.1:${INTERNAL_PORT}" -data-folder "$DATA_FOLDER" >> "$LOG_DIR/scraper.log" 2>&1 &
    echo $! > "$LOG_DIR/scraper.pid"
else
    echo "[2/4] ⚠️ Warning: google-maps-scraper binary not found. Proxy will handle standalone mode."
fi

# 3. Launch CORS Proxy on 0.0.0.0:$PORT
echo "[3/4] Starting API Proxy on 0.0.0.0:${PORT}..."
export PORT="${PORT}"
export ALLOWED_ORIGIN="${ALLOWED_ORIGIN:-*}"

if [ -f "tools/google-maps-scraper-kit/cors-proxy" ]; then
    tools/google-maps-scraper-kit/cors-proxy >> "$LOG_DIR/proxy.log" 2>&1 &
elif [ -f "tools/google-maps-scraper-kit/proxy.go" ]; then
    (cd tools/google-maps-scraper-kit && go run proxy.go) >> "$LOG_DIR/proxy.log" 2>&1 &
else
    (cd android && go run ../tools/google-maps-scraper-kit/proxy.go) >> "$LOG_DIR/proxy.log" 2>&1 &
fi
echo $! > "$LOG_DIR/proxy.pid"

# 4. Health Check Verification
echo "[4/4] Verifying API Health Endpoint..."
READY=false
for i in {1..15}; do
    if curl -s "http://127.0.0.1:${PORT}/health" | grep -q '"status"'; then
        READY=true
        break
    fi
    sleep 1
done

if [ "$READY" = true ]; then
    echo "[✓] API Health Check Passed!"
    echo ""
    ./android/print-connection.sh
else
    echo "[✗] ERROR: Health check failed on http://127.0.0.1:${PORT}/health"
    echo "Check logs/scraper.log and logs/proxy.log for errors."
    exit 1
fi
