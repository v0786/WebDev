import React from 'react';
import { Sparkles, Layers, Cpu, Code2, ArrowUpRight } from 'lucide-react';

export const FallbackCenterpiece: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto py-6 px-4">
      {/* Ambient background glows */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-neon-violet/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Device Showcase */}
      <div className="relative rounded-2xl bg-dark-900/80 backdrop-blur-xl border border-white/10 p-5 shadow-2xl shadow-neon-cyan/5 transition-all duration-500 hover:border-neon-cyan/40 group">
        
        {/* Browser / Device Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="px-3 py-1 rounded-md bg-dark-850 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
            vaibhavsonkusare.dev
          </div>
          <div className="text-slate-500 group-hover:text-neon-cyan transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Inner Card Visual Simulation */}
        <div className="space-y-4">
          <div className="h-32 rounded-xl bg-gradient-to-tr from-dark-800 via-dark-850 to-dark-700/80 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-3 -bottom-4 opacity-20 text-neon-cyan">
              <Layers className="w-24 h-24" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                AI + MODERN STACK
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Clean Architecture</span>
            </div>

            <div>
              <p className="text-xs text-slate-300 font-medium">Bespoke Design & Performance Engineering</p>
              <p className="text-[11px] text-slate-500 mt-0.5">International standard websites tailored for high conversion</p>
            </div>
          </div>

          {/* Metric / Stat Pills */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-dark-850/90 border border-white/5">
              <div className="text-neon-cyan font-bold text-sm sm:text-base flex items-center justify-center gap-1">
                <Cpu className="w-3.5 h-3.5" /> AI
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Assisted Speed</div>
            </div>

            <div className="p-2.5 rounded-xl bg-dark-850/90 border border-white/5">
              <div className="text-neon-electric font-bold text-sm sm:text-base flex items-center justify-center gap-1">
                <Code2 className="w-3.5 h-3.5" /> 100%
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Responsive</div>
            </div>

            <div className="p-2.5 rounded-xl bg-dark-850/90 border border-white/5">
              <div className="text-neon-violet font-bold text-sm sm:text-base flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Direct
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">1-on-1 Contact</div>
            </div>
          </div>
        </div>

        {/* Interactive Floating Micro-badge */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px]">Accepting Enquiries</span>
          </div>
          <span className="text-[11px] font-mono text-neon-cyan">USD & International</span>
        </div>
      </div>
    </div>
  );
};
