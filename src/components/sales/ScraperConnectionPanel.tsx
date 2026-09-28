import React, { useState, useEffect } from 'react';
import { Server, RefreshCw, Wifi, ShieldAlert, CheckCircle2, Globe, Monitor, Smartphone } from 'lucide-react';
import { ScraperConnectionMode, ConnectionStatus, HealthCheckResult } from '../../services/scraper/types';
import { connectionManager } from '../../services/scraper/connectionManager';

interface ScraperConnectionPanelProps {
  onConnectionStatusChange?: (status: ConnectionStatus, baseUrl: string) => void;
}

export const ScraperConnectionPanel: React.FC<ScraperConnectionPanelProps> = ({
  onConnectionStatusChange,
}) => {
  const currentConfig = connectionManager.getConfig();

  const [mode, setMode] = useState<ScraperConnectionMode>(currentConfig.mode || 'localhost');
  const [host, setHost] = useState<string>(currentConfig.host || '192.168.1.25');
  const [port, setPort] = useState<number>(currentConfig.port || 8080);
  const [tunnelUrl, setTunnelUrl] = useState<string>(
    currentConfig.mode === 'tunnel' ? currentConfig.baseUrl : 'https://scraper.example-domain.com'
  );

  const [status, setStatus] = useState<ConnectionStatus>('idle');
  const [healthResult, setHealthResult] = useState<HealthCheckResult | null>(null);
  const [testing, setTesting] = useState(false);

  // Compute live active base URL
  const activeBaseUrl = React.useMemo(() => {
    if (mode === 'localhost') {
      return `http://127.0.0.1:${port}`;
    } else if (mode === 'lan') {
      const cleanHost = host.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
      return `http://${cleanHost || '192.168.1.25'}:${port}`;
    } else {
      let raw = tunnelUrl.trim();
      if (raw && !/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
      return raw.replace(/\/$/, '');
    }
  }, [mode, host, port, tunnelUrl]);

  // Test Connection
  const handleTestConnection = async () => {
    setTesting(true);
    setStatus('connecting');

    // Save configuration
    const updated = connectionManager.setMode(mode, host, port, tunnelUrl);

    try {
      const res = await connectionManager.testConnection(updated);
      setHealthResult(res);
      if (res.ok) {
        setStatus('connected');
        if (onConnectionStatusChange) onConnectionStatusChange('connected', updated.baseUrl);
      } else {
        setStatus('disconnected');
        if (onConnectionStatusChange) onConnectionStatusChange('disconnected', updated.baseUrl);
      }
    } catch {
      setStatus('error');
      setHealthResult({ ok: false, message: 'Could not connect to scraper endpoint.' });
      if (onConnectionStatusChange) onConnectionStatusChange('error', updated.baseUrl);
    } finally {
      setTesting(false);
    }
  };

  // Run initial test on mount
  useEffect(() => {
    handleTestConnection();
  }, []);

  return (
    <div className="p-5 rounded-2xl bg-[#12141C] border border-[#D4AF37]/30 shadow-2xl font-mono space-y-4">
      {/* Header & Status Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <Server className="w-5 h-5 text-[#D4AF37]" />
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide">Google Maps Scraper Connection</h3>
            <p className="text-[11px] text-gray-400">Configure local, LAN, or Cloudflare tunnel API endpoint</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          {status === 'connecting' && (
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-1.5 font-bold">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>CONNECTING</span>
            </span>
          )}
          {status === 'connected' && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONNECTED</span>
            </span>
          )}
          {(status === 'disconnected' || status === 'error') && (
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-1.5 font-bold">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>DISCONNECTED</span>
            </span>
          )}
        </div>
      </div>

      {/* Connection Mode Radio Options */}
      <div className="space-y-2">
        <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">SELECT CONNECTION MODE</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => setMode('localhost')}
            className={`p-3 rounded-xl border flex flex-col gap-1 text-left transition-all cursor-pointer ${
              mode === 'localhost'
                ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
              <Monitor className="w-4 h-4" />
              <span>This Computer</span>
            </div>
            <div className="text-[10px] text-gray-400">Localhost (127.0.0.1)</div>
          </button>

          <button
            type="button"
            onClick={() => setMode('lan')}
            className={`p-3 rounded-xl border flex flex-col gap-1 text-left transition-all cursor-pointer ${
              mode === 'lan'
                ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
              <Smartphone className="w-4 h-4" />
              <span>Local Network (LAN)</span>
            </div>
            <div className="text-[10px] text-gray-400">Mobile on same Wi-Fi</div>
          </button>

          <button
            type="button"
            onClick={() => setMode('tunnel')}
            className={`p-3 rounded-xl border flex flex-col gap-1 text-left transition-all cursor-pointer ${
              mode === 'tunnel'
                ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
              <Globe className="w-4 h-4" />
              <span>Cloudflare Tunnel</span>
            </div>
            <div className="text-[10px] text-gray-400">Remote mobile over Internet</div>
          </button>
        </div>
      </div>

      {/* Mode-Specific Input Fields */}
      {mode === 'localhost' && (
        <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Scraper Port:</span>
            <input
              type="number"
              value={port}
              onChange={(e) => setPort(Number(e.target.value))}
              className="w-24 px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-mono text-center focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="text-[11px] text-gray-400 pt-1">
            Endpoint URL: <span className="text-[#D4AF37] font-bold">{activeBaseUrl}</span>
          </div>
        </div>
      )}

      {mode === 'lan' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10">
          <div className="sm:col-span-2 space-y-1">
            <label className="text-[10px] text-gray-400 uppercase tracking-widest">PC IP Address *</label>
            <input
              type="text"
              placeholder="e.g. 192.168.1.25"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="w-full px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-mono focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-gray-400 uppercase tracking-widest">Port *</label>
            <input
              type="number"
              value={port}
              onChange={(e) => setPort(Number(e.target.value))}
              className="w-full px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-mono focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="sm:col-span-3 text-[11px] text-gray-400 pt-1">
            Target LAN Endpoint: <span className="text-sky-400 font-bold">{activeBaseUrl}</span>
          </div>
        </div>
      )}

      {mode === 'tunnel' && (
        <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/10">
          <label className="text-[10px] text-gray-400 uppercase tracking-widest">Cloudflare Tunnel URL *</label>
          <input
            type="url"
            placeholder="https://random-name.trycloudflare.com or https://scraper.example.com"
            value={tunnelUrl}
            onChange={(e) => setTunnelUrl(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-mono focus:outline-none focus:border-purple-400"
          />
          <div className="text-[11px] text-gray-400 pt-1">
            Remote Endpoint: <span className="text-purple-300 font-bold">{activeBaseUrl || 'https://...'}</span>
          </div>
        </div>
      )}

      {/* Health Check Feedback */}
      {healthResult && (
        <div
          className={`p-3 rounded-xl border text-xs leading-relaxed ${
            healthResult.ok
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : healthResult.isMixedContentWarning
              ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
              : 'bg-red-500/10 border-red-500/30 text-red-300'
          }`}
        >
          <div className="flex items-center justify-between font-bold">
            <span>{healthResult.ok ? '✓ Endpoint Verification Succeeded' : '✗ Scraper Unreachable'}</span>
            {healthResult.latencyMs !== undefined && <span>{healthResult.latencyMs}ms</span>}
          </div>
          <div className="mt-1 opacity-90">{healthResult.message}</div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1">
        <div className="text-[10px] text-gray-500">
          Settings are saved to browser local storage.
        </div>
        <button
          type="button"
          disabled={testing}
          onClick={handleTestConnection}
          className="px-5 py-2 rounded-xl bg-[#D4AF37] hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
        >
          {testing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wifi className="w-4 h-4" />}
          <span>Test Connection</span>
        </button>
      </div>
    </div>
  );
};
