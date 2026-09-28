import { ScraperLogEntry } from './types';

export class LogManager {
  private logs: ScraperLogEntry[] = [];
  private maxLogs: number;
  private listeners: Set<(logs: ScraperLogEntry[]) => void> = new Set();

  constructor(maxLogs: number = 1000) {
    this.maxLogs = maxLogs;
  }

  public getLogs(): ScraperLogEntry[] {
    return [...this.logs];
  }

  public addLog(level: ScraperLogEntry['level'], message: string): ScraperLogEntry {
    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    const entry: ScraperLogEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      timestamp: timeStr,
      level,
      message,
    };

    this.logs = [...this.logs.slice(-(this.maxLogs - 1)), entry];
    this.notify();
    return entry;
  }

  public clearLogs(): void {
    this.logs = [];
    this.notify();
  }

  public subscribe(callback: (logs: ScraperLogEntry[]) => void): () => void {
    this.listeners.add(callback);
    callback(this.getLogs());
    return () => this.listeners.delete(callback);
  }

  private notify(): void {
    const current = this.getLogs();
    this.listeners.forEach((cb) => cb(current));
  }
}

export const logManager = new LogManager();
