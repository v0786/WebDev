import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { Button } from '../ui/Button';
import { HeroScene3D } from '../3d/HeroScene3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-neon-violet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value & Call To Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Brand Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
              <span className="font-semibold text-white tracking-wider">
                {PERSONAL_INFO.brandName.toUpperCase()}
              </span>
            </div>

            {/* Main Headings strictly adhering to Master Prompt */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.heroHeadline}
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-slate-200 to-slate-400">
                {PERSONAL_INFO.heroSupportingHeadline}
              </h2>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {PERSONAL_INFO.heroSupportingParagraph}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button 
                href="#enquire" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>

              <Button 
                href="#work" 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore My Work
              </Button>
            </div>

            {/* Core Workflow Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI-Assisted & No-Code</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Zap className="w-4 h-4 text-neon-cyan shrink-0" />
                <span>Custom Coded Polish</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-neon-electric shrink-0" />
                <span>International Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Centerpiece */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <HeroScene3D />
          </div>

        </div>
      </div>
    </section>
  );
};
