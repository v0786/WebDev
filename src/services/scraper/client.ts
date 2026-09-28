import {
  ScraperConnectionConfig,
  ScraperConnectionMode,
  HealthCheckResult,
  ScraperJobPayload,
  ScraperJob,
  ScraperLogEntry,
} from './types';
import { connectionManager } from './connectionManager';
import { jobManager } from './jobManager';
import { logManager } from './logManager';
import { parseRFC4180CSV } from '../../components/sales/LeadScraperPortal';

export class ScraperClient {
  public getConfig(): ScraperConnectionConfig {
    return connectionManager.getConfig();
  }

  public setConnectionMode(
    mode: ScraperConnectionMode,
    host?: string,
    port?: number,
    tunnelUrl?: string
  ): ScraperConnectionConfig {
    return connectionManager.setMode(mode, host, port, tunnelUrl);
  }

  public async health(customUrl?: string): Promise<HealthCheckResult> {
    const config = customUrl ? { mode: 'localhost' as const, baseUrl: customUrl } : this.getConfig();
    return connectionManager.testConnection(config);
  }

  public async createJob(payload: ScraperJobPayload, customUrl?: string): Promise<ScraperJob> {
    const baseUrl = customUrl || this.getConfig().baseUrl;
    logManager.addLog('info', `Submitting job to scraper at ${baseUrl}...`);
    return jobManager.createJob(payload, baseUrl);
  }

  public async getJob(jobId: string, customUrl?: string): Promise<ScraperJob> {
    const baseUrl = customUrl || this.getConfig().baseUrl;
    return jobManager.pollJobStatus(jobId, baseUrl);
  }

  public async getResults(jobId: string, customUrl?: string): Promise<Record<string, string>[]> {
    const baseUrl = customUrl || this.getConfig().baseUrl;
    logManager.addLog('info', `Downloading results for Job ID: ${jobId}...`);
    const csvContent = await jobManager.fetchResults(jobId, baseUrl);
    return parseRFC4180CSV(csvContent);
  }

  public addLog(level: ScraperLogEntry['level'], message: string): ScraperLogEntry {
    return logManager.addLog(level, message);
  }

  public getLogs(): ScraperLogEntry[] {
    return logManager.getLogs();
  }

  public clearLogs(): void {
    logManager.clearLogs();
  }

  public subscribeLogs(callback: (logs: ScraperLogEntry[]) => void): () => void {
    return logManager.subscribe(callback);
  }
}

export const scraperClient = new ScraperClient();
