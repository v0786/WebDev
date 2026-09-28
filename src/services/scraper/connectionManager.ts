import { ScraperConnectionConfig, ScraperConnectionMode, HealthCheckResult } from './types';
import { checkScraperHealth } from './health';
import { getScraperApiUrl } from '../../config/scraper';

const STORAGE_KEY = 'webdev.scraper_connection_config';

export class ConnectionManager {
  private config: ScraperConnectionConfig;

  constructor() {
    this.config = this.loadStoredConfig();
  }

  public getConfig(): ScraperConnectionConfig {
    return { ...this.config };
  }

  public setMode(mode: ScraperConnectionMode, host?: string, port?: number, tunnelUrl?: string): ScraperConnectionConfig {
    let baseUrl = '';

    if (mode === 'localhost') {
      const targetPort = port || this.config.port || 8080;
      baseUrl = `http://127.0.0.1:${targetPort}`;
      this.config = { mode, baseUrl, host: '127.0.0.1', port: targetPort };
    } else if (mode === 'lan') {
      const targetHost = host?.trim() || this.config.host || '192.168.1.25';
      const targetPort = port || this.config.port || 8080;
      // Strip any accidental protocol from host input
      const cleanHost = targetHost.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
      baseUrl = `http://${cleanHost}:${targetPort}`;
      this.config = { mode, baseUrl, host: cleanHost, port: targetPort };
    } else if (mode === 'tunnel') {
      let rawUrl = (tunnelUrl || this.config.baseUrl || '').trim();
      if (rawUrl && !/^https?:\/\//i.test(rawUrl)) {
        rawUrl = `https://${rawUrl}`;
      }
      baseUrl = rawUrl.replace(/\/$/, '');
      this.config = { mode, baseUrl };
    }

    this.saveConfig();
    return this.getConfig();
  }

  public async testConnection(customConfig?: ScraperConnectionConfig): Promise<HealthCheckResult> {
    const target = customConfig || this.config;
    return checkScraperHealth(target.baseUrl);
  }

  private loadStoredConfig(): ScraperConnectionConfig {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.mode && parsed.baseUrl) {
          return parsed;
        }
      }
    } catch {}

    // Fallback default config
    const defaultUrl = getScraperApiUrl();
    return {
      mode: 'localhost',
      baseUrl: defaultUrl,
      host: '127.0.0.1',
      port: 8080,
    };
  }

  private saveConfig(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.config));
      // Sync legacy key for backward compatibility
      localStorage.setItem('webdev.scraperApiUrl', this.config.baseUrl);
    } catch {}
  }
}

export const connectionManager = new ConnectionManager();
