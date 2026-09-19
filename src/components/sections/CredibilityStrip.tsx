import React from 'react';

export const CredibilityStrip: React.FC = () => {
  const capabilities = [
    { label: 'DESIGN + CODE', desc: 'One integrated workflow.' },
    { label: 'CUSTOM EXPERIENCES', desc: 'Designed around the project.' },
    { label: 'RESPONSIVE BY DEFAULT', desc: 'Designed for every screen.' },
    { label: 'PERFORMANCE CONSCIOUS', desc: 'Performance considered throughout development.' },
    { label: 'SEO READY', desc: 'Semantic and crawlable architecture.' },
    { label: 'AI READY', desc: 'Modern AI integrations where they provide genuine value.' }
  ];

  return (
    <div className="py-8 sm:py-10 border-y border-white/[0.08] bg-white/[0.015] overflow-x-auto select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="space-y-1.5 text-left">
              <div className="text-[10px] font-mono text-[#B8FF00] uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
                <span className="font-bold">{item.label}</span>
              </div>
              <div className="text-xs font-sans text-bone-100/90 font-light leading-snug">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
