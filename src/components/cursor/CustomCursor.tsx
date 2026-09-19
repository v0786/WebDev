import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export type CursorState = 'default' | 'link' | 'view' | 'explore' | 'drag' | 'commission' | 'hidden';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position motion values with snappy springs
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const dotX = useSpring(mouseX, { damping: 35, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 600 });

  const stateRef = React.useRef<CursorState>('default');
  const textRef = React.useRef('');
  const visibleRef = React.useRef(false);

  useEffect(() => {
    // Check touch device or reduced motion
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      let nextState: CursorState = 'default';
      let nextText = '';

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        nextState = (cursorTarget.getAttribute('data-cursor') as CursorState) || 'link';
        nextText = cursorTarget.getAttribute('data-cursor-text') || '';
      } else if (target.closest('a, button, [role="button"], input, select, textarea')) {
        nextState = 'link';
      }

      if (nextState !== stateRef.current) {
        stateRef.current = nextState;
        setCursorState(nextState);
      }
      if (nextText !== textRef.current) {
        textRef.current = nextText;
        setCursorText(nextText);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  // Variants based on cursorState
  const getFollowerSize = () => {
    switch (cursorState) {
      case 'view':
      case 'explore':
      case 'drag':
      case 'commission':
        return { width: 90, height: 90, borderRadius: 45, scale: 1 };
      case 'link':
        return { width: 44, height: 44, borderRadius: 22, scale: 1.15 };
      case 'hidden':
        return { width: 0, height: 0, scale: 0 };
      default:
        return { width: 32, height: 32, borderRadius: 16, scale: 1 };
    }
  };

  const currentSize = getFollowerSize();

  return (
    <div className="pointer-events-none fixed inset-0 z-[1000] overflow-hidden">
      {/* Outer Follower Ring / Morphing Pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center border border-bone-100/40 bg-bone-100/5 backdrop-blur-[1px] transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: currentSize.borderRadius,
        }}
        animate={{
          scale: currentSize.scale,
          borderColor: cursorState === 'commission' || cursorState === 'view' ? 'rgba(229, 169, 88, 0.8)' : 'rgba(244, 242, 236, 0.35)',
          backgroundColor: cursorState === 'view' || cursorState === 'commission' ? 'rgba(229, 169, 88, 0.12)' : 'rgba(244, 242, 236, 0.04)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 220 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-mono uppercase tracking-widest text-bone-100 text-center px-1 font-semibold select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-400"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState === 'view' || cursorState === 'explore' || cursorState === 'drag' ? 0 : 1,
          opacity: cursorState === 'hidden' ? 0 : 1,
        }}
      />
    </div>
  );
};
