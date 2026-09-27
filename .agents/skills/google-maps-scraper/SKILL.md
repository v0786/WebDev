---
name: google-maps-scraper
description: Scrape Google Maps business listings (name, address, phone, website, rating, reviews, lat/lng, hours, emails) via the local gosom google-maps-scraper REST API. Use when the user wants local-business / lead-gen data, "a list of [businesses] in [place]", or to extract businesses without websites for sales outreach.
---

# Google Maps Scraper Skill for Antigravity

Drive the local Google Maps scraper API to turn a business-type + location into clean, structured leads.

## Mental Model
The scraper runs as a local Docker container exposing a REST API at `http://localhost:8080`.
A "scrape" is an **async job**: create it, poll until status is `ok`, then download the lead results.

## Quick Command Execution
```bash
# Start container if not running:
docker compose -f tools/google-maps-scraper-kit/docker-compose.yml up -d

# Run no-website lead finder script:
python3 tools/extract_nowebsite_leads.py "salons in Nagpur" --depth 5
```

## Lead Target Output Fields
- `title` (Business Name)
- `phone` (Contact Number for WhatsApp/Call)
- `emails` (Business Email)
- `website` (EMPTY for No-Website Targets!)
- `category` (Industry/Niche)
- `address` (Physical Location)
- `review_rating` & `review_count` (Business Reputation)
