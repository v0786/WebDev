package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

func getEnv(key, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}
	return fallback
}

func findScraperBinary() string {
	if path, err := exec.LookPath("google-maps-scraper"); err == nil {
		return path
	}

	home, _ := os.UserHomeDir()
	candidates := []string{
		filepath.Join(home, "go", "bin", "google-maps-scraper"),
		"/usr/bin/google-maps-scraper",
		"/usr/local/bin/google-maps-scraper",
		"./google-maps-scraper",
	}

	for _, bin := range candidates {
		if _, err := os.Stat(bin); err == nil {
			return bin
		}
	}
	return ""
}

func checkInternalScraper(targetURL string) bool {
	client := &http.Client{Timeout: 2 * time.Second}
	resp, err := client.Get(targetURL + "/api/v1/jobs")
	if err != nil {
		return false
	}
	defer resp.Body.Close()
	return resp.StatusCode == http.StatusOK
}

func main() {
	port := getEnv("PORT", "8080")
	allowedOrigin := getEnv("ALLOWED_ORIGIN", "https://v0786.github.io")
	internalPort := "8081"
	internalURL := fmt.Sprintf("http://127.0.0.1:%s", internalPort)

	// Check if internal scraper is already running
	if checkInternalScraper(internalURL) {
		log.Printf("[SCRAPER] Internal google-maps-scraper already running on 127.0.0.1:%s\n", internalPort)
	} else {
		scraperBin := findScraperBinary()
		if scraperBin != "" {
			log.Printf("[SCRAPER] Found binary at: %s\n", scraperBin)
			log.Printf("[SCRAPER] Starting internal google-maps-scraper on 127.0.0.1:%s...\n", internalPort)
			cmd := exec.Command(scraperBin, "-web", "-addr", "127.0.0.1:"+internalPort, "-data-folder", "/tmp")
			cmd.Stdout = os.Stdout
			cmd.Stderr = os.Stderr

			if err := cmd.Start(); err != nil {
				log.Printf("[SCRAPER] Warning starting process: %v\n", err)
			} else {
				// Wait for internal scraper to initialize
				log.Printf("[SCRAPER] Waiting for internal scraper on 127.0.0.1:%s...\n", internalPort)
				for i := 0; i < 15; i++ {
					if checkInternalScraper(internalURL) {
						log.Printf("[SCRAPER] Internal scraper ready on 127.0.0.1:%s\n", internalPort)
						break
					}
					time.Sleep(1 * time.Second)
				}
			}
		} else {
			log.Println("[SCRAPER] Notice: google-maps-scraper binary not found locally. Reverse proxy will forward to port 8081.")
		}
	}

	target, err := url.Parse(internalURL)
	if err != nil {
		log.Fatalf("[PROXY] Failed to parse target URL: %v", err)
	}

	reverseProxy := httputil.NewSingleHostReverseProxy(target)

	// Custom HTTP Handler
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		reqOrigin := r.Header.Get("Origin")

		// CORS Header Rules
		if reqOrigin != "" {
			w.Header().Set("Access-Control-Allow-Origin", reqOrigin)
		} else if allowedOrigin != "" {
			w.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		} else {
			w.Header().Set("Access-Control-Allow-Origin", "*")
		}

		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, X-Requested-With, X-API-Key")
		w.Header().Set("Access-Control-Expose-Headers", "*")

		// Preflight OPTIONS Handler
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		// Requirement 4: Health Check (Must return JSON Content-Type: application/json)
		if r.URL.Path == "/health" || r.URL.Path == "/healthz" {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			isAlive := checkInternalScraper(internalURL)
			if isAlive {
				w.Write([]byte(`{"status":"ok","scraper":"healthy"}`))
			} else {
				w.Write([]byte(`{"status":"ok","scraper":"starting"}`))
			}
			return
		}

		// Logging Request
		log.Printf("[PROXY] %s %s (Origin: %s)\n", r.Method, r.URL.Path, reqOrigin)

		// Requirement 5: Alias Routing for /api/scrape -> /api/v1/jobs
		if r.URL.Path == "/api/scrape" {
			log.Println("[PROXY] POST /api/scrape -> Forwarding request to scraper /api/v1/jobs")
			r.URL.Path = "/api/v1/jobs"
		} else if strings.HasPrefix(r.URL.Path, "/api/scrape/") {
			subPath := strings.TrimPrefix(r.URL.Path, "/api/scrape/")
			log.Printf("[PROXY] Forwarding GET /api/scrape/%s -> /api/v1/jobs/%s\n", subPath, subPath)
			r.URL.Path = "/api/v1/jobs/" + subPath
		}

		// Forward to internal scraper process
		reverseProxy.ServeHTTP(w, r)
	})

	log.Println("[PROXY] Starting public API...")
	log.Printf("[PROXY] Listening on 0.0.0.0:%s\n", port)
	listenAddr := fmt.Sprintf("0.0.0.0:%s", port)
	if err := http.ListenAndServe(listenAddr, handler); err != nil {
		log.Fatalf("[PROXY] Public server error: %v", err)
	}
}
