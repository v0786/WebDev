package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"os/exec"
	"strings"
	"time"
)

func getEnv(key, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}
	return fallback
}

func main() {
	port := getEnv("PORT", "10000")

	log.Println("[SCRAPER] Starting...")

	// 1. Launch google-maps-scraper binary in the background listening on 127.0.0.1:8081
	cmd := exec.Command("/usr/bin/google-maps-scraper", "-web", "-addr", "127.0.0.1:8081", "-data-folder", "/tmp")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Start(); err != nil {
		log.Fatalf("[SCRAPER] Failed to start google-maps-scraper process: %v", err)
	}

	// Give the process time to initialize and bind to port 8081
	time.Sleep(1500 * time.Millisecond)

	log.Println("[SCRAPER] Browser dependencies available")
	log.Printf("[SCRAPER] API listening on 0.0.0.0:%s\n", port)
	log.Println("[SCRAPER] Ready")

	target, err := url.Parse("http://127.0.0.1:8081")
	if err != nil {
		log.Fatalf("[SCRAPER] Failed to parse target URL: %v", err)
	}

	proxy := httputil.NewSingleHostReverseProxy(target)

	// HTTP Handler with Fail-Safe CORS & Backend Routing
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		} else {
			w.Header().Set("Access-Control-Allow-Origin", "*")
		}

		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, X-Requested-With")
		w.Header().Set("Access-Control-Expose-Headers", "*")

		// Handle preflight OPTIONS requests immediately
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		// 1. Lightweight Health Endpoint for Render Health Checks & Cold Start Ping
		if r.URL.Path == "/health" || r.URL.Path == "/healthz" {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			w.Write([]byte(`{"status":"ok"}`))
			return
		}

		// 2. Alias Routing: Proxy safe frontend routes /api/scrape -> /api/v1/jobs
		if r.URL.Path == "/api/scrape" {
			r.URL.Path = "/api/v1/jobs"
		} else if strings.HasPrefix(r.URL.Path, "/api/scrape/") {
			r.URL.Path = strings.Replace(r.URL.Path, "/api/scrape/", "/api/v1/jobs/", 1)
		}

		// Forward request to local scraper engine
		proxy.ServeHTTP(w, r)
	})

	listenAddr := fmt.Sprintf("0.0.0.0:%s", port)
	if err := http.ListenAndServe(listenAddr, handler); err != nil {
		log.Fatalf("[SCRAPER] Proxy server failed: %v", err)
	}
}
