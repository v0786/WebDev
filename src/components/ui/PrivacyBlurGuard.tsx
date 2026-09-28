import React, { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, EyeOff, Lock, RefreshCw, X, Smartphone } from 'lucide-react';

interface PrivacyBlurGuardProps {
  children?: React.ReactNode;
  /** Custom text to display on blur overlay */
  title?: string;
  subtitle?: string;
  /** Whether privacy mode is globally enabled */
  enabled?: boolean;
}

export const PrivacyBlurGuard: React.FC<PrivacyBlurGuardProps> = ({
  children,
  title = '🔒 Screen Contents Protected',
  subtitle = 'Security Protection Active — Screen blurred during capture or app switch',
  enabled = true,
}) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const [blurReason, setBlurReason] = useState<'focus_lost' | 'screenshot_shortcut' | 'hidden_tab' | 'mobile_switch'>('focus_lost');
  const [screenshotDetected, setScreenshotDetected] = useState<boolean>(false);
  const [badgeVisible, setBadgeVisible] = useState<boolean>(true);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect Mobile Environment
    const isMobile =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    setIsMobileDevice(isMobile);

    if (!enabled) {
      setIsBlurred(false);
      return;
    }

    // 1. Handle Desktop & Mobile Focus / Blur
    const handleWindowBlur = () => {
      setBlurReason(isMobile ? 'mobile_switch' : 'focus_lost');
      setIsBlurred(true);
    };

    const handleWindowFocus = () => {
      setTimeout(() => {
        setIsBlurred(false);
      }, 250);
    };

    // 2. Handle Tab & Mobile Visibility Change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setBlurReason(isMobile ? 'mobile_switch' : 'hidden_tab');
        setIsBlurred(true);
      } else {
        setTimeout(() => {
          setIsBlurred(false);
        }, 250);
      }
    };

    // 3. Mobile Page Lifecycle Events (PageHide, Freeze, Resume)
    const handlePageHide = () => {
      setBlurReason('mobile_switch');
      setIsBlurred(true);
    };

    const handleFreeze = () => {
      setBlurReason('mobile_switch');
      setIsBlurred(true);
    };

    const handleResume = () => {
      setTimeout(() => {
        setIsBlurred(false);
      }, 250);
    };

    // 4. Handle Desktop PrintScreen & Screenshot Keyboard Combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      const isPrintScreen = e.key === 'PrintScreen' || e.code === 'PrintScreen';
      const isMacScreenshot = e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5' || e.key === 'S' || e.key === 's');
      const isWinSnipping = (e.key === 'S' || e.key === 's') && (e.metaKey || e.ctrlKey) && e.shiftKey;

      if (isPrintScreen || isMacScreenshot || isWinSnipping) {
        setBlurReason('screenshot_shortcut');
        setScreenshotDetected(true);
        setIsBlurred(true);

        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            navigator.clipboard.writeText('');
          } catch {}
        }

        setTimeout(() => {
          setScreenshotDetected(false);
          if (document.hasFocus() && !document.hidden) {
            setIsBlurred(false);
          }
        }, 3000);
      }
    };

    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('freeze', handleFreeze);
    document.addEventListener('resume', handleResume);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('freeze', handleFreeze);
      document.removeEventListener('resume', handleResume);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);

  return (
    <div className="relative min-h-screen">
      {/* Target Content Wrapper with CSS Blur Filter & Mobile Callout Prevention */}
      <div
        style={{
          WebkitTouchCallout: 'none',
          WebkitUserSelect: isBlurred ? 'none' : 'auto',
          userSelect: isBlurred ? 'none' : 'auto',
        }}
        className={`transition-all duration-300 ease-in-out ${
          isBlurred ? 'blur-2xl scale-[0.99] select-none pointer-events-none filter grayscale-[40%]' : ''
        }`}
      >
        {children}
      </div>

      {/* Screen Blur Privacy Overlay */}
      {isBlurred && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0c11]/85 backdrop-blur-3xl text-white p-6 text-center animate-fade-in transition-all">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-3xl bg-[#381E72]/80 border-2 border-[#D0BCFF]/50 flex items-center justify-center text-[#D0BCFF] shadow-[0_0_50px_rgba(208,188,255,0.3)] animate-pulse">
              {screenshotDetected ? (
                <ShieldAlert className="w-10 h-10 text-[#F2B8B5]" />
              ) : (
                <EyeOff className="w-10 h-10 text-[#D0BCFF]" />
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#6750A4] text-white p-1.5 rounded-full border border-black shadow">
              <Lock className="w-4 h-4" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E6E1E5] tracking-tight max-w-lg mb-2">
            {screenshotDetected ? '⚠️ Capture Attempt Detected!' : title}
          </h2>

          <p className="text-sm text-[#CAC4D0] max-w-md leading-relaxed mb-6 font-mono">
            {screenshotDetected
              ? 'Screen capture key shortcut was triggered. Screen obscured for data privacy.'
              : blurReason === 'mobile_switch'
              ? 'Mobile task switcher or background transition detected. Login screen obscured.'
              : blurReason === 'focus_lost'
              ? 'Window lost focus or screen snippet tool was activated. Content blurred.'
              : subtitle}
          </p>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#211F26] border border-[#49454F] text-xs font-mono text-[#D0BCFF]">
            {isMobileDevice ? <Smartphone className="w-4 h-4 text-[#D0BCFF]" /> : <ShieldCheck className="w-4 h-4 text-[#A6F4C5]" />}
            <span>{isMobileDevice ? 'Mobile Web Protection Active' : 'Anti-Capture Protection Active'}</span>
          </div>

          {screenshotDetected && (
            <p className="text-[11px] text-[#F2B8B5] mt-4 font-mono">
              Screen unblurring in 3 seconds...
            </p>
          )}
        </div>
      )}

      {/* Floating Privacy Status Indicator Badge */}
      {enabled && badgeVisible && (
        <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D1B20]/90 border border-[#49454F] text-[#CAC4D0] text-[11px] font-mono shadow-lg backdrop-blur-md hover:border-[#D0BCFF] transition-all">
          <span className="w-2 h-2 rounded-full bg-[#A6F4C5] animate-ping" />
          <span className="text-[#E6E1E5] font-semibold">
            {isMobileDevice ? 'Mobile Shield: Active' : 'Privacy Shield: Active'}
          </span>
          <span className="text-[#938F99] hidden sm:inline">
            | {isMobileDevice ? 'Task Switcher & Swipe Blur' : 'Blurs on Capture/Focus Loss'}
          </span>
          <button
            onClick={() => setIsBlurred(!isBlurred)}
            title="Test Screen Blur"
            className="ml-1 p-1 rounded-full hover:bg-[#381E72] text-[#D0BCFF] transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
          <button
            onClick={() => setBadgeVisible(false)}
            title="Hide badge"
            className="p-1 rounded-full hover:bg-[#49454F] text-[#938F99] hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};
