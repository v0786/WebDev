#!/usr/bin/env python3
"""
Extract No-Website Business Leads from Google Maps
--------------------------------------------------
Finds local businesses on Google Maps that DO NOT have a website,
making them prime high-conversion prospects for Vaibhav Sonkusare Studio's web dev services.

Usage:
    python3 tools/extract_nowebsite_leads.py "salons in Nagpur" --depth 5
    python3 tools/extract_nowebsite_leads.py "restaurants in Mumbai" --city "Mumbai" --depth 5
"""

import argparse
import csv
import io
import json
import os
import sys
import time
import urllib.request
import urllib.parse
import urllib.error

BASE_URL = os.environ.get("SCRAPER_BASE_URL", "http://localhost:8080")
USER_AGENT = "VaibhavStudioLeadFinder/1.0"

def geocode_city(place):
    """Geocode city/place into latitude and longitude via OpenStreetMap Nominatim."""
    query = urllib.parse.urlencode({"format": "json", "limit": 1, "q": place})
    url = f"https://nominatim.openstreetmap.org/search?{query}"
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            hits = json.loads(resp.read())
        time.sleep(1)
        if hits:
            return str(hits[0]["lat"]), str(hits[0]["lon"])
    except Exception as e:
        print(f"⚠️ Geocoding warning for '{place}': {e}", file=sys.stderr)
    return None

def api_request(method, path, body=None):
    headers = {"Content-Type": "application/json", "User-Agent": USER_AGENT}
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(BASE_URL + path, data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.status, resp.read()

def main():
    parser = argparse.ArgumentParser(description="Find Google Maps businesses without websites.")
    parser.add_argument("keyword", help='e.g. "salons in Nagpur" or "restaurants in Mumbai"')
    parser.add_argument("--city", help="City name for lat/lon geocoding (optional)")
    parser.add_argument("--depth", type=int, default=5, help="Scrape depth (default: 5)")
    parser.add_argument("--out", help="Output file name (default: nowebsite_leads_<timestamp>.csv)")

    args = parser.parse_args()

    # Check scraper health
    try:
        api_request("GET", "/api/v1/jobs")
    except Exception as err:
        sys.exit(f"❌ Scraper service unreachable at {BASE_URL}. Run 'docker compose up -d' first.\nError: {err}")

    # Resolve coordinates
    place_to_geocode = args.city
    if not place_to_geocode:
        # Extract city from keyword like "salons in Nagpur" -> "Nagpur"
        if " in " in args.keyword.lower():
            place_to_geocode = args.keyword.lower().split(" in ")[-1].strip()
        else:
            place_to_geocode = args.keyword

    print(f"🔍 Geocoding target region: '{place_to_geocode}'...")
    coords = geocode_city(place_to_geocode)
    if not coords:
        sys.exit(f"❌ Could not resolve coordinates for '{place_to_geocode}'. Try specifying --city explicitly.")
    lat, lon = coords
    print(f"📍 Coordinates found: Lat {lat}, Lon {lon}")

    # Create Scrape Job
    job_body = {
        "name": "no-website-prospector",
        "keywords": [args.keyword],
        "lang": "en",
        "zoom": 15,
        "lat": lat,
        "lon": lon,
        "fast_mode": False,
        "radius": 10000,
        "depth": args.depth,
        "email": False,
        "max_time": 600
    }

    print(f"🚀 Launching Google Maps Scraper job for: '{args.keyword}' (depth={args.depth})...")
    try:
        _, resp_bytes = api_request("POST", "/api/v1/jobs", job_body)
        job_data = json.loads(resp_bytes)
        job_id = job_data.get("id")
    except Exception as err:
        sys.exit(f"❌ Failed to start scraping job: {err}")

    if not job_id:
        sys.exit("❌ No job ID returned by scraper API.")

    print(f"⏳ Job ID: {job_id}. Extracting listings...")

    # Poll status
    for attempt in range(1, 120):
        _, status_bytes = api_request("GET", f"/api/v1/jobs/{job_id}")
        job_status = json.loads(status_bytes).get("Status")
        print(f"\r  Status: {job_status} (polling attempt {attempt}/120)...", end="", flush=True)

        if job_status == "ok":
            print("\n✅ Scrape completed!")
            break
        elif job_status == "failed":
            sys.exit("\n❌ Scrape job failed. Google may be rate-limiting. Try lowering depth or waiting a few minutes.")
        time.sleep(6)
    else:
        sys.exit("\n⌛ Job timed out.")

    # Download raw CSV
    _, dl_bytes = api_request("GET", f"/api/v1/jobs/{job_id}/download")
    csv_text = dl_bytes.decode("utf-8", errors="replace")
    all_rows = list(csv.DictReader(io.StringIO(csv_text)))

    print(f"📊 Total businesses scraped: {len(all_rows)}")

    # Filter for NO WEBSITE
    no_website_leads = []
    for row in all_rows:
        site = (row.get("website") or "").strip()
        name = (row.get("title") or "").strip()
        phone = (row.get("phone") or "").strip()
        address = (row.get("address") or "").strip()
        category = (row.get("category") or "").strip()
        rating = (row.get("review_rating") or "").strip()
        reviews = (row.get("review_count") or "").strip()

        # Target businesses WITHOUT a website
        if not site or site.lower() == "none" or site == "http://" or site == "https://":
            no_website_leads.append({
                "Business Name": name,
                "Phone / Contact": phone or "No Phone (Address Listed)",
                "Category": category or "Local Business",
                "Address": address,
                "Rating": rating,
                "Review Count": reviews,
                "Website Status": "NO WEBSITE ❌ (High Opportunity)",
                "Suggested Action": "Call/WhatsApp to offer custom business website"
            })

    print(f"\n🎯 FOUND {len(no_website_leads)} BUSINESSES WITH NO WEBSITE OUT OF {len(all_rows)} TOTAL LISTINGS!")

    # Save output
    out_filename = args.out or f"no_website_leads_{int(time.time())}.csv"
    fieldnames = ["Business Name", "Phone / Contact", "Category", "Address", "Rating", "Review Count", "Website Status", "Suggested Action"]

    with open(out_filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(no_website_leads)

    print(f"💾 Saved lead export to: {out_filename}")
    print("\n--- SAMPLE HIGH-PRIORITY PROSPECTS ---")
    for i, lead in enumerate(no_website_leads[:7], 1):
        print(f"{i}. 📍 {lead['Business Name']} ({lead['Category']}) | Phone: {lead['Phone / Contact']} | Rating: {lead['Rating']} ⭐ ({lead['Review Count']} reviews)")

if __name__ == "__main__":
    main()
