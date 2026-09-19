import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { soundFx } from '../audio/SoundEffects';

export const DigitalMonolith: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, weighted momentum
  const springConfig = { damping: 28, stiffness: 90, mass: 1.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotation based on mouse coordinates
  const rotateX = useTransform(smoothY, [-200, 200], [15, -15]);
  const rotateY = useTransform(smoothX, [-200, 200], [-15, 15]);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Center normalized offsets (-200 to +200 px range)
      const x = (e.clientX - innerWidth / 2) * 0.25;
      const y = (e.clientY - innerHeight / 2) * 0.25;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] flex items-center justify-center pointer-events-auto select-none">
      
      {/* Ambient Focal Glow behind the monolith */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-gold-400/20 via-cyan-400/15 to-purple-500/20 blur-3xl opacity-70 animate-pulse pointer-events-none" />

      {/* Primary Floating Frosted Glass Monolith */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', damping: 20, stiffness: 180 }}
        onMouseEnter={() => soundFx.playHover()}
        className="relative w-full h-full rounded-full border border-white/25 bg-gradient-to-b from-white/10 via-white/[0.03] to-white/[0.08] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-grab active:cursor-grabbing group overflow-hidden"
        data-cursor="explore"
        data-cursor-text="MONOLITH"
      >
        {/* Specular Edge Highlights */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(229,169,88,0.25)_0%,transparent_45%)] pointer-events-none" />

        {/* Concentric Precision Reticle Rings (Architectural Monolith aesthetic) */}
        <div className="absolute inset-8 sm:inset-12 rounded-full border border-white/15 pointer-events-none group-hover:border-[#B8FF00]/40 transition-colors duration-500" />
        <div className="absolute inset-16 sm:inset-24 rounded-full border border-white/10 border-dashed pointer-events-none animate-[spin_60s_linear_infinite]" />

        {/* Monolith Focal Core with Branded 3D Emblem */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 space-y-2 pointer-events-none">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}images/logo-icon-128.webp`} type="image/webp" />
            <source srcSet={`${import.meta.env.BASE_URL}images/sonkusare-vaibhav-logo.webp`} type="image/webp" />
            <img
              src={`${import.meta.env.BASE_URL}images/sonkusare-vaibhav-logo.png`}
              alt="Vaibhav Sonkusare — Creative Web Studio Logo"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/25 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] mx-auto group-hover:scale-105 transition-transform duration-500"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="flex items-center justify-center gap-1.5 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-bone-100 font-semibold drop-shadow-md">
              VAIBHAV // 2026
            </span>
          </div>
          <div className="text-[9px] font-mono text-bone-300/60 uppercase tracking-widest">
            DIGITAL MONOLITH &bull; MUMBAI
          </div>
        </div>

        {/* Subtle chromatic aberration edge ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-tr from-cyan-400/20 via-transparent to-pink-500/20 opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none" />
      </motion.div>

      {/* Floating Orbital Coordinate Rings */}
      <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-white/5 pointer-events-none animate-[spin_40s_linear_infinite]" />
    </div>
  );
};

export const GlassOrbLens = DigitalMonolith;
