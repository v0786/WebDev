import { ScraperJobPayload, ScraperJob } from './types';

export class JobManager {
  public async createJob(payload: ScraperJobPayload, baseUrl: string): Promise<ScraperJob> {
    const cleanUrl = baseUrl.replace(/\/$/, '');
    const endpoints = ['/api/scrape', '/api/v1/jobs', '/jobs'];
    let lastError: Error | null = null;

    const requestBody = {
      name: payload.name || `job-${Date.now()}`,
      keywords: payload.keywords,
      lang: payload.lang || 'en',
      zoom: payload.zoom || 15,
      lat: payload.lat || '0',
      lon: payload.lon || '0',
      fast_mode: payload.fast_mode ?? true,
      radius: payload.radius || 10000,
      depth: payload.depth || 3,
      email: payload.email ?? false,
      max_time: payload.max_time || 300,
    };

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${cleanUrl}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const data = await response.json();
          const id = data.id || data.jobId || data.ID;
          if (id) {
            return {
              id: String(id),
              name: requestBody.name,
              status: 'queued',
              date: new Date().toISOString(),
              data,
            };
          }
        } else {
          let errText = `HTTP ${response.status} ${response.statusText}`;
          try {
            const errJson = await response.json();
            if (errJson.error) errText = errJson.error;
          } catch {}
          lastError = new Error(errText);
        }
      } catch (err: any) {
        lastError = err;
      }
    }

    throw lastError || new Error('Failed to create scrape job on local scraper API.');
  }

  public async pollJobStatus(
    jobId: string,
    baseUrl: string,
    onProgress?: (status: string, elapsedSeconds: number) => void,
    maxWaitSeconds: number = 600,
    pollIntervalMs: number = 3000
  ): Promise<ScraperJob> {
    const cleanUrl = baseUrl.replace(/\/$/, '');
    const startTime = Date.now();
    let consecutiveErrors = 0;
    const maxConsecutiveErrors = 5;

    while ((Date.now() - startTime) / 1000 < maxWaitSeconds) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      try {
        const endpoints = [`/api/scrape/${jobId}`, `/api/v1/jobs/${jobId}`, `/jobs/${jobId}`];
        let response: Response | null = null;

        for (const ep of endpoints) {
          try {
            const res = await fetch(`${cleanUrl}${ep}`, {
              headers: { Accept: 'application/json' },
            });
            if (res.ok) {
              response = res;
              break;
            }
          } catch {}
        }

        if (response && response.ok) {
          consecutiveErrors = 0; // Reset network retry counter on success
          const data = await response.json();
          const rawStatus = (data.Status || data.status || '').toLowerCase();

          if (onProgress) {
            onProgress(rawStatus || 'working', elapsed);
          }

          if (['ok', 'completed', 'done', 'success'].includes(rawStatus)) {
            return { id: jobId, name: data.Name || 'scrape-job', status: 'completed', data };
          } else if (['failed', 'error', 'cancelled'].includes(rawStatus)) {
            return { id: jobId, name: data.Name || 'scrape-job', status: 'failed', data };
          }
        } else {
          consecutiveErrors++;
        }
      } catch (pollErr) {
        consecutiveErrors++;
      }

      if (consecutiveErrors >= maxConsecutiveErrors) {
        throw new Error(`Connection lost while polling job ${jobId}. Please check local scraper network status.`);
      }

      await new Promise((r) => setTimeout(r, pollIntervalMs));
    }

    throw new Error(`Scraper job ${jobId} timed out after ${maxWaitSeconds} seconds.`);
  }

  public async fetchResults(jobId: string, baseUrl: string): Promise<string> {
    const cleanUrl = baseUrl.replace(/\/$/, '');
    const endpoints = [
      `/api/scrape/${jobId}/download`,
      `/api/v1/jobs/${jobId}/download`,
      `/api/scrape/${jobId}/results`,
    ];

    for (const ep of endpoints) {
      try {
        const response = await fetch(`${cleanUrl}${ep}`);
        if (response.ok) {
          return await response.text();
        }
      } catch {}
    }

    throw new Error(`Failed to download scraped results for Job ID: ${jobId}`);
  }
}

export const jobManager = new JobManager();
