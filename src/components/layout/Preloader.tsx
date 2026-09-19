import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const seen = sessionStorage.getItem('antigravity_preloader_seen');
    if (seen === 'true') {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('antigravity_preloader_seen', 'true');
            setTimeout(onComplete, 800);
          }, 200);
          return 100;
        }
        // Organic pacing with acceleration
        const increment = Math.floor(Math.random() * 12) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-obsidian-950 flex flex-col justify-between p-6 sm:p-12 text-bone-100 select-none"
        >
          {/* Top Editorial Metadata */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-bone-300/70 border-b border-hairline pb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
              <span>ANTIGRAVITY ATELIER</span>
            </div>
            <div>INITIALIZING ARTIFACTS // 2026</div>
          </div>

          {/* Center Brand Statement & Huge Counter */}
          <div className="my-auto max-w-4xl">
            <div className="text-[12px] font-mono text-gold-400 uppercase tracking-widest mb-3">
              CREATIVE ENGINEERING &amp; DIGITAL MONOLITHS
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-bone-100 tracking-tight leading-[1.05]">
              We shape the <span className="not-italic font-display font-bold text-gold-gradient">unseen</span>.
            </h1>
          </div>

          {/* Bottom Counter & Progress Bar */}
          <div className="border-t border-hairline pt-6">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs font-mono tracking-widest text-bone-300/60 uppercase">
                COMPILED DIGITAL EXPERIENCE
              </span>
              <span className="text-4xl sm:text-6xl font-mono font-light text-bone-100">
                {String(progress).padStart(3, '0')}%
              </span>
            </div>
            {/* Minimal line progress indicator */}
            <div className="w-full h-[1px] bg-bone-100/10 overflow-hidden">
              <motion.div
                className="h-full bg-gold-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
