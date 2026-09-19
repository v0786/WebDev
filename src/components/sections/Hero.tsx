import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { GlassOrbLens } from '../hero/GlassOrbLens';
import { soundFx } from '../audio/SoundEffects';

export const Hero: React.FC = () => {
  const [visualMode, setVisualMode] = useState<'monolith' | 'portrait'>('monolith');

  const scrollToWork = () => {
    soundFx.playClick();
    const target = document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    soundFx.playClick();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[96vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Top Editorial Status Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-bone-300/80 border-b border-white/[0.08] pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-bone-100 font-semibold">AVAILABLE FOR SELECT PROJECTS</span>
            <span className="text-bone-300/70">//</span>
            <span>2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px]">
            <span>MUMBAI, INDIA &bull; SERVING INDIA + INTERNATIONAL CLIENTS</span>
          </div>
        </div>

        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Editorial Statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3 sm:space-y-4">
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-sans font-black text-bone-100 tracking-tight leading-[0.95]">
                <span className="block text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" aria-hidden="true" />
                  SONKUSARE VAIBHAV &bull; CREATIVE DEVELOPER &amp; WEB DESIGNER
                </span>
                I DESIGN <br />
                <span className="font-light text-bone-200">AND BUILD</span> <br />
                <span className="font-serif italic font-normal text-[#B8FF00]">
                  digital
                </span> <br />
                EXPERIENCES.
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-sans text-bone-100 max-w-xl font-medium leading-snug">
                {PERSONAL_INFO.heroSupportingHeadline}
              </h2>

            </div>

            <p className="text-sm sm:text-base font-sans text-bone-200/90 max-w-xl font-light leading-relaxed">
              {PERSONAL_INFO.heroSupportingParagraph}
            </p>

            {/* Tactical Calls to Action (Section 11) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                onMouseEnter={() => soundFx.playHover()}
                className="min-h-[44px] px-8 py-3.5 rounded-full bg-[#B8FF00] text-gray-900 font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
                data-cursor="link"
                data-cursor-text="TALK"
              >
                <span>START A PROJECT</span>
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </button>

              <button
                onClick={scrollToWork}
                onMouseEnter={() => soundFx.playHover()}
                className="min-h-[44px] px-6 py-3.5 rounded-full border border-white/15 hover:border-[#B8FF00]/60 text-bone-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:scale-[0.98] font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer group"
                data-cursor="explore"
                data-cursor-text="WORK"
              >
                <span>VIEW MY WORK</span>
                <span className="text-[#B8FF00] transform group-hover:translate-y-1 transition-transform" aria-hidden="true">&darr;</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Visual Showcase (3D Monolith or Studio Portrait) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Visual Mode Selector Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono mb-4 z-20">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setVisualMode('monolith');
                }}
                className={`min-h-[32px] px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                  visualMode === 'monolith'
                    ? 'bg-[#B8FF00] text-[#07080B] font-bold shadow-md'
                    : 'text-bone-300 hover:text-white'
                }`}
              >
                3D MONOLITH
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setVisualMode('portrait');
                }}
                className={`min-h-[32px] px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                  visualMode === 'portrait'
                    ? 'bg-[#B8FF00] text-[#07080B] font-bold shadow-md'
                    : 'text-bone-300 hover:text-white'
                }`}
              >
                STUDIO PORTRAIT
              </button>
            </div>

            {/* Display Active Visual */}
            {visualMode === 'monolith' ? (
              <GlassOrbLens />
            ) : (
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl p-1 bg-gradient-to-b from-white/15 via-[#B8FF00]/25 to-transparent shadow-2xl animate-in fade-in duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-[#0A0D14] overflow-hidden border border-white/10 p-3 flex flex-col justify-between">
                  <picture className="w-full aspect-square block overflow-hidden rounded-xl bg-black/60">
                    <source srcSet={`${import.meta.env.BASE_URL}images/vaibhav-sonkusare-600.webp`} type="image/webp" />
                    <source srcSet={`${import.meta.env.BASE_URL}images/vaibhav-sonkusare.webp`} type="image/webp" />
                    <img
                      src={`${import.meta.env.BASE_URL}images/vaibhav-sonkusare.jpg`}
                      alt="Sonkusare Vaibhav — Creative Developer & Web Designer at Mumbai Studio"
                      width={360}
                      height={360}
                      className="w-full h-full object-cover rounded-xl"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                  <div className="pt-2 text-[10px] font-mono text-bone-300 flex items-center justify-between px-1">
                    <span className="text-[#B8FF00] font-semibold">SONKUSARE VAIBHAV</span>
                    <span className="text-bone-300/80">MUMBAI &bull; IST</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Hero Editorial Metadata (Section 13) */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
          
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-bone-300/80">
              BASED IN
            </div>
            <div className="text-xs text-bone-100 font-medium">
              MUMBAI, INDIA
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-bone-300/80">
              FOCUS
            </div>
            <div className="text-xs text-bone-100 font-medium leading-snug">
              WEB DESIGN &bull; DEVELOPMENT &bull; MOTION &bull; INTERACTION &bull; AI
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-bone-300/80">
              AVAILABLE FOR
            </div>
            <div className="text-xs text-[#B8FF00] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-pulse" />
              <span>SELECT PROJECTS</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-bone-300/80">
              EDITION
            </div>
            <div className="text-xs text-bone-100 font-medium">
              2026
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
