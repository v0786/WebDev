import React, { useState } from 'react';
import { ArrowUp, Sparkles, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { PrivacyModal } from '../sections/PrivacyModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Studio Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 font-bold text-white text-base">
              <img 
                src={PERSONAL_INFO.logoPlaceholder} 
                alt="Vaibhav Sonkusare Logo" 
                className="w-9 h-9 rounded-xl object-cover border border-white/15 shadow-sm"
              />
              <span>{PERSONAL_INFO.brandName.toUpperCase()}</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              AI-powered, no-code, and custom-coded website design and development for international businesses, entrepreneurs, and startups.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-neon-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Freelancer • Global Delivery</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-semibold">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-neon-cyan transition-colors">Demonstration Portfolio</a></li>
              <li><a href="#process" className="hover:text-neon-cyan transition-colors">How I Work & Pricing</a></li>
              <li><a href="#about" className="hover:text-neon-cyan transition-colors">A Little About Me</a></li>
              <li><a href="#enquire" className="hover:text-neon-cyan transition-colors">Start a Project</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-semibold">Direct Inquiries</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-neon-cyan transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/918652140271?text=${encodeURIComponent("Hi Vaibhav, I'm interested in starting a website project with you.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:underline transition-colors"
                >
                  WhatsApp: +91 8652140271
                </a>
              </li>
              <li>
                <a 
                  href={PERSONAL_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-pink-400 transition-colors"
                >
                  @{PERSONAL_INFO.instagramHandle}
                </a>
              </li>
              <li className="pt-2 text-slate-500 text-[11px]">
                USD Invoicing / Global Wire & Wise
              </li>
              <li className="pt-1">
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Shield className="w-3 h-3 text-neon-cyan" />
                  <span>Privacy Policy</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
            <div className="text-[10px] text-slate-600 mt-1">
              * Featured projects represent concept demonstrations created to illustrate technical and design capabilities.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </footer>
  );
};
