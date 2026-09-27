package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"os/exec"
	"time"
)

type corsWriter struct {
	http.ResponseWriter
}

func (w corsWriter) WriteHeader(statusCode int) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Expose-Headers", "*")
	w.ResponseWriter.WriteHeader(statusCode)
}

func (w corsWriter) Write(b []byte) (int, error) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	return w.ResponseWriter.Write(b)
}

func main() {
	// 1. Launch google-maps-scraper in the background listening on localhost:8081
	cmd := exec.Command("/usr/bin/google-maps-scraper", "-web", "-addr", "127.0.0.1:8081", "-data-folder", "/tmp")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Start(); err != nil {
		log.Fatalf("Failed to start google-maps-scraper process: %v", err)
	}

	// Give the scraper process 1 second to bind to port 8081
	time.Sleep(1 * time.Second)

	target, err := url.Parse("http://127.0.0.1:8081")
	if err != nil {
		log.Fatalf("Failed to parse target URL: %v", err)
	}

	proxy := httputil.NewSingleHostReverseProxy(target)

	// 2. HTTP Server with Full CORS Support on :8080
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.Header().Set("Access-Control-Expose-Headers", "*")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		cw := corsWriter{ResponseWriter: w}
		proxy.ServeHTTP(cw, r)
	})

	log.Println("⚡ CORS-Enabled Google Maps Scraper Proxy active on port 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Proxy server failed: %v", err)
	}
}
