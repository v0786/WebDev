import React from 'react';

export const TechMarquee: React.FC = () => {
  const technologies = [
    'NEXT.JS',
    'REACT',
    'TYPESCRIPT',
    'JAVASCRIPT',
    'TAILWIND',
    'MOTION',
    'GSAP',
    'THREE.JS',
    'WEBGL',
    'NODE.JS',
    'PYTHON',
    'SUPABASE',
    'FIGMA'
  ];

  return (
    <div className="py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden bg-white/[0.01] select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating Track */}
        <div className="flex items-center gap-12 sm:gap-16 animate-[shimmer_28s_linear_infinite] shrink-0">
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-10">
              <span className="text-xl sm:text-3xl md:text-4xl font-sans font-black tracking-widest text-bone-300/65 hover:text-[#B8FF00] transition-colors">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]/50 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
