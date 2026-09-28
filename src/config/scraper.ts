// Centralized Scraper API Configuration
// Source priority:
// 1. import.meta.env.VITE_GOOGLE_MAPS_SCRAPER_API_URL
// 2. User-configured localStorage ('webdev.scraperApiUrl' or 'gmaps_cloud_api')
// NO hardcoded fallback domains (Render, fake Cloudflare, or production localhost defaults)

export const getScraperApiUrl = (): string => {
  const envUrl = import.meta.env.VITE_GOOGLE_MAPS_SCRAPER_API_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.trim().replace(/\/+$/, '');
  }

  try {
    const saved = localStorage.getItem('webdev.scraperApiUrl') || localStorage.getItem('gmaps_cloud_api');
    if (saved && saved.trim()) {
      return saved.trim().replace(/\/+$/, '');
    }
  } catch {}

  return '';
};

export const setStoredScraperApiUrl = (url: string): void => {
  const clean = url.trim().replace(/\/+$/, '');
  try {
    if (clean) {
      localStorage.setItem('webdev.scraperApiUrl', clean);
      localStorage.setItem('gmaps_cloud_api', clean);
    } else {
      localStorage.removeItem('webdev.scraperApiUrl');
      localStorage.removeItem('gmaps_cloud_api');
    }
  } catch {}
};

export const SCRAPER_API_URL = getScraperApiUrl();
