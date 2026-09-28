export type ScraperConnectionMode = 'localhost' | 'lan' | 'tunnel';

export type ConnectionStatus = 'idle' | 'connecting' | 'connected' | 'disconnected' | 'error';

export interface ScraperConnectionConfig {
  mode: ScraperConnectionMode;
  baseUrl: string;
  host?: string;
  port?: number;
}

export interface HealthCheckResult {
  ok: boolean;
  message: string;
  statusCode?: number;
  latencyMs?: number;
  isMixedContentWarning?: boolean;
  version?: string;
}

export interface ScraperJobPayload {
  name: string;
  keywords: string[];
  lang?: string;
  zoom?: number;
  lat?: string;
  lon?: string;
  fast_mode?: boolean;
  fastMode?: boolean;
  radius?: number;
  depth?: number;
  email?: boolean;
  max_time?: number;
}

export interface ScraperJob {
  id: string;
  name: string;
  status: 'queued' | 'starting' | 'working' | 'completed' | 'done' | 'failed' | 'cancelled' | 'error';
  date?: string;
  data?: any;
}

export interface ScraperLogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;
}

export interface ScrapedLeadRow {
  name: string;
  category: string;
  address: string;
  phone: string | null;
  email?: string | null;
  website: string | null;
  rating: string | null;
  reviewCount: string | null;
  latitude?: string | null;
  longitude?: string | null;
  googleMapsUrl: string | null;
  hasWebsite: boolean;
}
