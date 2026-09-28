import React, { useRef, useEffect } from 'react';
import { Terminal, Trash2 } from 'lucide-react';



export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;
}

interface ScraperLogsProps {
  logs: LogEntry[];
  onClearLogs: () => void;
  maxLogs?: number;
}

export const ScraperLogs: React.FC<ScraperLogsProps> = ({
  logs,
  onClearLogs,
  maxLogs = 1000,
}) => {
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Keep logs within max limit
  const displayLogs = logs.slice(-maxLogs);

  // Auto-scroll to newest message
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  const getLevelStyle = (level: LogEntry['level']) => {
    switch (level) {
      case 'success':
        return 'text-emerald-400 font-semibold';
      case 'warn':
        return 'text-amber-400 font-semibold';
      case 'error':
        return 'text-red-400 font-bold';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="rounded-2xl bg-black/80 border border-white/15 overflow-hidden font-mono shadow-2xl">
      {/* Header Bar */}
      <div className="px-4 py-2.5 bg-[#15171F] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold tracking-wider">
          <Terminal className="w-4 h-4 text-[#D4AF37]" />
          <span>LIVE SCRAPER LOG</span>
          <span className="text-[10px] text-gray-500 font-normal">({displayLogs.length} entries)</span>
        </div>
        <button
          onClick={onClearLogs}
          className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/10 text-gray-400 hover:text-white text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <Trash2 className="w-3 h-3 text-red-400" />
          <span>Clear logs</span>
        </button>
      </div>

      {/* Terminal View */}
      <div
        ref={logContainerRef}
        className="p-4 h-56 overflow-y-auto space-y-1.5 text-xs font-mono select-text scrollbar-thin scrollbar-thumb-white/20"
      >
        {displayLogs.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500 italic text-xs">
            No scraper logs yet. Start a job to view live output.
          </div>
        ) : (
          displayLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-2.5 leading-relaxed hover:bg-white/[0.02] p-0.5 rounded">
              <span className="text-gray-500 text-[11px] shrink-0 select-none">
                [{log.timestamp}]
              </span>
              <span className={getLevelStyle(log.level)}>
                {log.message}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
