import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, MapPin, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { soundFx } from '../audio/SoundEffects';

export const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(PERSONAL_INFO.profilePhotoPlaceholder);

  return (
    <section id="about" className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ 10 / ABOUT THE CREATIVE ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans text-bone-100 font-black tracking-tight uppercase">
              I&apos;M <span className="font-serif italic font-normal text-[#B8FF00] lowercase">Vaibhav</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-mono text-bone-300/80 uppercase tracking-wider">
            Creative Developer &amp; Web Designer based in Mumbai, India. Serving clients worldwide.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Identity Details */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-white/10 via-[#B8FF00]/20 to-transparent shadow-2xl">
              <div className="rounded-[22px] bg-[#0A0D14] overflow-hidden border border-white/10 p-4">
                <picture className="w-full aspect-square block overflow-hidden rounded-2xl bg-black/60">
                  <source srcSet={`${import.meta.env.BASE_URL}images/vaibhav-sonkusare-600.webp`} type="image/webp" />
                  <source srcSet={`${import.meta.env.BASE_URL}images/vaibhav-sonkusare.webp`} type="image/webp" />
                  <img
                    src={imageSrc}
                    onError={() => setImageSrc(`${import.meta.env.BASE_URL}images/profile-placeholder.svg`)}
                    alt="Sonkusare Vaibhav — Creative Developer & Web Designer in Mumbai Studio"
                    width={400}
                    height={400}
                    className="w-full aspect-square rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-center">
                  <div className="font-sans font-bold text-bone-100 text-lg tracking-wide">
                    {PERSONAL_INFO.fullName}
                  </div>
                  <div className="text-xs font-mono text-[#B8FF00] uppercase tracking-widest">
                    {PERSONAL_INFO.role}
                  </div>
                  <div className="text-[11px] text-bone-300 font-mono">
                    Mumbai, India &bull; India + International Clients
                  </div>
                </div>
              </div>

              {/* Status floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#07080B] border border-[#B8FF00]/40 text-[11px] font-mono text-[#B8FF00] shadow-xl whitespace-nowrap flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </div>
            </div>

            {/* Quick Connect Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/50 text-xs font-mono text-bone-200 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@{PERSONAL_INFO.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundFx.playClick()}
                className="flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/50 text-xs font-mono text-bone-200 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B8FF00]" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 text-base sm:text-lg font-sans text-bone-300 font-light leading-relaxed">
              <p>
                I&apos;m a creative developer and web designer from <span className="text-bone-100 font-medium">Mumbai, India</span>, 
                focused on creating digital experiences where strong visual design meets thoughtful engineering.
              </p>
              <p>
                Too often, web design is disconnected from frontend implementation. Designers deliver static mockups that don&apos;t move well, and developers build rigid interfaces that lose the design&apos;s original elegance. 
                I combine both disciplines under one roof so nothing gets lost in translation.
              </p>
              <p>
                Whether you need a high-prestige flagship for an architecture studio, a cinematic restaurant showcase, or a high-converting B2B SaaS platform, I build experiences tailored to your business goals.
              </p>
            </div>

            {/* Core Capability Matrix */}
            <div className="space-y-2 border-y border-white/[0.08] py-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3">
                I WORK ACROSS:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                {[
                  'Web Design',
                  'Frontend Development',
                  'Interaction',
                  'Motion',
                  'AI',
                  'Business Websites'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-bone-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#B8FF00] shrink-0" />
                <div>
                  <div className="text-bone-300 uppercase text-[10px]">MUMBAI, INDIA</div>
                  <div className="text-bone-100 font-bold">LOCAL TIME: IST</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B8FF00] shrink-0" />
                <div>
                  <div className="text-bone-300 uppercase text-[10px]">AVAILABILITY</div>
                  <div className="text-[#B8FF00] font-bold">AVAILABLE FOR SELECT PROJECTS &bull; 2026</div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#B8FF00] text-gray-900 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 font-mono text-xs uppercase font-bold tracking-wider transition-colors min-h-[44px]"
              >
                <span>START A PROJECT WITH VAIBHAV</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
