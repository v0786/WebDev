// Scraper Health Checker
import { getScraperApiUrl } from '../../config/scraper';

export interface HealthCheckResult {
  ok: boolean;
  status: 'connected' | 'offline' | 'invalid_url' | 'mixed_content_block' | 'timeout';
  scraperStatus?: string;
  message: string;
  isMixedContentBlock?: boolean;
}

export const checkScraperHealth = async (targetUrl?: string): Promise<HealthCheckResult> => {
  const url = (targetUrl || getScraperApiUrl()).replace(/\/+$/, '');

  if (!url) {
    return {
      ok: false,
      status: 'invalid_url',
      message: '⚠️ Scraper API URL is not configured. Enter a valid HTTP or HTTPS URL.',
    };
  }

  // Check for HTTPS -> HTTP Mixed Content blocking on browsers (e.g. GitHub Pages)
  const isHttpsPage = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const isHttpTarget = url.startsWith('http://') && !url.includes('127.0.0.1') && !url.includes('localhost');


  if (isHttpsPage && isHttpTarget) {
    console.warn('[ScraperHealth] Warning: Mixed-content request (HTTPS website requesting HTTP LAN IP).');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${url}/health`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      let data: any = {};
      try {
        data = await res.json();
      } catch {}

      return {
        ok: true,
        status: 'connected',
        scraperStatus: data.scraper || 'healthy',
        message: '🟢 Scraper Ready',
      };
    }

    return {
      ok: false,
      status: 'offline',
      message: `🔴 Scraper returned HTTP ${res.status}. Check scraper service status.`,
    };
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        ok: false,
        status: 'timeout',
        message: '⏱️ Connection Timeout. The scraper did not respond within 6 seconds.',
      };
    }

    // Handle fetch/network/mixed content errors gracefully
    const isMixedContent = isHttpsPage && url.startsWith('http://');

    return {
      ok: false,
      status: 'offline',
      isMixedContentBlock: isMixedContent,
      message: isMixedContent
        ? '⚠️ Browser Mixed Content Block: HTTPS website requesting HTTP scraper. Use Cloudflare Tunnel HTTPS or run frontend locally.'
        : '🔴 Scraper Offline: Cannot connect to PC/laptop scraper address. Check PC power, Docker status, and LAN network.',
    };
  };
};
