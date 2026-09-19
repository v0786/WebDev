import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep Near-Black Base */}
      <div className="absolute inset-0 bg-[#07080B]" />

      {/* Atmospheric Evolving Color Orb 1: Deep Cobalt / Cyan (Top Left / Center) */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent blur-[140px] animate-float-slow opacity-60 mix-blend-screen"
        style={{ animationDuration: '18s' }}
      />

      {/* Atmospheric Evolving Color Orb 2: Deep Violet / Magenta (Center Right / Mid) */}
      <div 
        className="absolute top-[25%] -right-[15%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-bl from-purple-600/15 via-violet-700/10 to-transparent blur-[160px] animate-float-slow opacity-55 mix-blend-screen"
        style={{ animationDuration: '24s', animationDelay: '-5s' }}
      />

      {/* Atmospheric Evolving Color Orb 3: Subtle Solar Gold / Warm Amber (Bottom Left / Center) */}
      <div 
        className="absolute top-[65%] -left-[15%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-amber-500/10 via-orange-600/8 to-transparent blur-[150px] animate-float-slow opacity-50 mix-blend-screen"
        style={{ animationDuration: '22s', animationDelay: '-10s' }}
      />

      {/* Atmospheric Evolving Color Orb 4: Deep Emerald / Muted Teal (Bottom Right) */}
      <div 
        className="absolute -bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tl from-emerald-600/8 via-teal-700/8 to-transparent blur-[140px] animate-float-slow opacity-40 mix-blend-screen"
        style={{ animationDuration: '20s', animationDelay: '-8s' }}
      />

      {/* Fine Architectural Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,rgba(244,242,236,0.6)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Vignette Edge Shading for Spatial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_50%,#07080B_100%)] opacity-80" />
    </div>
  );
};
