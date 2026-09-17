import React, { useState } from 'react';
import { User, ArrowRight, Instagram, Mail, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { Button } from '../ui/Button';

export const AboutMe: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(PERSONAL_INFO.profilePhotoPlaceholder);

  return (
    <section id="about" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait & Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-neon-cyan/40 via-neon-violet/30 to-transparent shadow-2xl shadow-neon-cyan/5 group">
              
              <div className="rounded-[22px] bg-dark-900 overflow-hidden border border-white/10 p-4">
                <img
                  src={imageSrc}
                  onError={() => setImageSrc(`${import.meta.env.BASE_URL}images/profile-placeholder.svg`)}
                  alt="Vaibhav Sonkusare"
                  className="w-full aspect-square rounded-2xl object-cover bg-dark-850 transition-transform duration-500 group-hover:scale-102"
                />

                {/* Identity Information */}
                <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-center">
                  <div className="font-extrabold text-white text-lg">{PERSONAL_INFO.fullName}</div>
                  <div className="text-xs font-mono text-neon-cyan">{PERSONAL_INFO.brandName}</div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Independent Freelancer • Global Delivery
                  </div>
                </div>
              </div>

              {/* Status Floating Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-dark-850 border border-neon-cyan/30 text-xs font-mono text-neon-cyan shadow-lg whitespace-nowrap flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 hover:border-neon-cyan/40 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@{PERSONAL_INFO.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 hover:border-neon-cyan/40 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative strictly adhering to Master Prompt */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
              <User className="w-3.5 h-3.5" />
              <span>THE CREATOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.aboutHeading}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.aboutBio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Practical Approach Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/5 space-y-1">
                <div className="text-neon-cyan font-bold text-sm flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> AI & No-Code Tools
                </div>
                <p className="text-xs text-slate-400">
                  Leveraging modern automation and visual builders for speed, efficiency, and flexibility.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/5 space-y-1">
                <div className="text-neon-electric font-bold text-sm flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" /> Custom-Coded Polish
                </div>
                <p className="text-xs text-slate-400">
                  Writing clean, responsive code when bespoke interactivity, 3D elements, or unique UI is required.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="#enquire"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Start a Conversation
              </Button>

              <div className="text-xs text-slate-400 font-mono">
                Founder & Lead Creator • Vaibhav Sonkusare
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
