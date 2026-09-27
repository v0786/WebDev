# Stage 1: Build Custom Go CORS Proxy
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY tools/cors-proxy/proxy.go .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o cors-proxy proxy.go

# Stage 2: Base Google Maps Scraper Image
FROM gosom/google-maps-scraper:latest

# Copy proxy binary
COPY --from=builder /app/cors-proxy /cors-proxy

# Render Environment Variables
ENV PORT=10000
ENV ALLOWED_ORIGIN=https://v0786.github.io

EXPOSE 10000

# Set entrypoint to Go CORS proxy (listening on 0.0.0.0:$PORT)
ENTRYPOINT ["/cors-proxy"]
