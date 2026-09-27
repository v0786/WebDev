# Stage 1: Build the Go CORS Proxy
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY tools/cors-proxy/proxy.go .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o cors-proxy proxy.go

# Stage 2: Gosom Google Maps Scraper + CORS Proxy
FROM gosom/google-maps-scraper:latest
COPY --from=builder /app/cors-proxy /cors-proxy
EXPOSE 8080
ENTRYPOINT ["/cors-proxy"]
