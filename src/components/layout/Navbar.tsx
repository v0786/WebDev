import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../audio/SoundEffects';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mumbaiTime, setMumbaiTime] = useState('--:--');

  useEffect(() => {
    setIsAudioMuted(soundFx.getIsMuted());

    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    const updateTime = () => {
      try {
        const time = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setMumbaiTime(time);
      } catch {
        setMumbaiTime('--:--');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleAudio = () => {
    const nextMute = soundFx.toggleMute();
    setIsAudioMuted(nextMute);
  };

  const navLinks = [
    { name: 'WORK', href: '#work', label: 'Selected Showcase' },
    { name: 'SERVICES', href: '#services', label: 'Capabilities' },
    { name: 'PROCESS', href: '#process', label: 'The Method' },
    { name: 'ABOUT', href: '#about', label: 'Design + Code' },
    { name: 'CONTACT', href: '#contact', label: 'Start a Project' },
  ];

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#07080B]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Personal Identity */}
            <a
              href="#"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-3 group"
              data-cursor="explore"
              data-cursor-text="VAIBHAV"
            >
              <picture className="shrink-0">
                <source srcSet={`${import.meta.env.BASE_URL}images/logo-icon-128.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}images/sonkusare-vaibhav-logo.png`}
                  alt="Vaibhav Sonkusare — Creative Web Studio Logo"
                  width={40}
                  height={40}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20 group-hover:border-[#B8FF00] transition-colors shadow-md"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <div className="text-sm sm:text-base font-sans font-bold tracking-widest text-bone-100 group-hover:text-[#B8FF00] transition-colors uppercase">
                VAIBHAV
              </div>
              <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-bone-300/90 uppercase border-l border-white/10 pl-3">
                CREATIVE DEVELOPER
              </span>
            </a>

            {/* Desktop Minimalist Nav Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="text-xs font-mono uppercase tracking-widest text-bone-300/80 hover:text-bone-100 transition-all duration-300 flex items-center gap-1 group py-1"
                  data-cursor="link"
                >
                  <span>{link.name}</span>
                  <span className="text-[#B8FF00] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    &rarr;
                  </span>
                </button>
              ))}
            </nav>

            {/* Right Tools: Section 09 Desktop Right Side */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Availability & Mumbai IST Indicator */}
              <div className="hidden lg:flex flex-col items-end text-right border-r border-white/10 pr-4 font-mono">
                <div className="flex items-center gap-1.5 text-[10px] text-[#B8FF00] tracking-wider uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-pulse" />
                  <span>AVAILABLE FOR PROJECTS</span>
                </div>
                <div className="text-[10px] text-bone-300/80 uppercase tracking-widest">
                  MUMBAI / IST {mumbaiTime}
                </div>
              </div>

              {/* Procedural Audio Synthesizer Toggle */}
              <button
                onClick={handleToggleAudio}
                onMouseEnter={() => soundFx.playHover()}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-bone-300 hover:text-bone-100 transition-colors"
                title={isAudioMuted ? 'Enable tactile sound effects' : 'Mute sound effects'}
                aria-label="Toggle procedural sound"
                data-cursor="link"
              >
                {isAudioMuted ? (
                  <VolumeX className="w-4 h-4 text-bone-300/80" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#B8FF00] animate-pulse" />
                )}
              </button>

              {/* Start a Project Primary CTA Button */}
              <button
                onClick={() => handleNavClick('#contact')}
                onMouseEnter={() => soundFx.playHover()}
                className="hidden sm:flex min-h-[44px] items-center px-5 py-2.5 rounded-full bg-[#B8FF00] text-gray-900 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-md"
                data-cursor="link"
              >
                START A PROJECT &rarr;
              </button>

              {/* Mobile Menu Toggle (>= 44x44px touch target) */}
              <button
                onClick={() => {
                  soundFx.playModalReveal();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-bone-100 hover:text-[#B8FF00] transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer (Section 10) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07080B]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
              <span className="text-[#B8FF00] uppercase tracking-widest font-semibold">
                AVAILABLE FOR PROJECTS
              </span>
              <span className="text-bone-300/80 uppercase tracking-widest">
                MUMBAI / IST {mumbaiTime}
              </span>
            </div>

            <nav className="space-y-4 my-auto py-6">
              {navLinks.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full min-h-[44px] group flex items-baseline justify-between border-b border-white/[0.08] pb-3 text-left cursor-pointer"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#B8FF00]">0{idx + 1}</span>
                    <span className="text-2xl sm:text-3xl font-serif text-bone-100 group-hover:text-[#B8FF00] transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-bone-300/70 group-hover:text-[#B8FF00] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              ))}

              {/* Explicit START A PROJECT mobile action (Section 10) */}
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full min-h-[48px] mt-4 px-6 py-3.5 rounded-full bg-[#B8FF00] text-gray-900 font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 transition-all flex items-center justify-center gap-2"
              >
                <span>START A PROJECT &rarr;</span>
              </button>
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-bone-300/85">
              <div>EMAIL: <a href="mailto:sonkusare.doc@gmail.com" className="text-[#B8FF00]">sonkusare.doc@gmail.com</a></div>
              <div>WHATSAPP: <a href="https://wa.me/918652140271" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">+91 8652140271</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
