import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { InView } from '../motion-primitives/in-view';

export const ContactSection: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleWhatsAppClick = () => {
    if (PERSONAL_INFO.isWhatsAppConfigured && PERSONAL_INFO.whatsAppNumber) {
      const cleanNumber = PERSONAL_INFO.whatsAppNumber.replace(/[^0-9]/g, '');
      const defaultMsg = encodeURIComponent("Hi Vaibhav, I'd like to discuss a website project with you.");
      window.open(`https://wa.me/${cleanNumber}?text=${defaultMsg}`, '_blank');
    } else {
      setToastMessage("WhatsApp number hasn't been set yet! You can reach Vaibhav instantly via Email or Instagram below.");
      setShowToast(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/70 border-t border-white/5 overflow-hidden">
      
      {/* Background soft ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neon-cyan/15 via-neon-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <InView
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
      >
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{PERSONAL_INFO.availabilityStatus}</span>
        </div>

        {/* Headings strictly adhering to Master Prompt */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {PERSONAL_INFO.contactHeadline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
            {PERSONAL_INFO.contactSupportingText}
          </p>
        </div>

        {/* Primary & Secondary Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch justify-center gap-3.5 pt-4 max-w-2xl mx-auto">
          <Button
            href="#enquire"
            variant="primary"
            size="lg"
            icon={<Sparkles className="w-4 h-4" />}
            className="w-full sm:w-auto min-h-[48px] justify-center"
          >
            Start a Project
          </Button>

          <Button
            href={`mailto:${PERSONAL_INFO.email}`}
            variant="secondary"
            size="lg"
            icon={<Mail className="w-4 h-4 text-neon-cyan" />}
            className="w-full sm:w-auto min-h-[48px] justify-center"
          >
            Email Me
          </Button>

          {/* WhatsApp Direct Option */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-base px-6 py-3 rounded-xl bg-dark-800/90 text-white border border-white/10 hover:border-emerald-500/40 hover:bg-dark-750 transition-all font-semibold cursor-pointer shadow-md group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
          </button>

          {/* Instagram Direct Option */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-base px-6 py-3 rounded-xl bg-dark-800/90 text-white border border-white/10 hover:border-pink-500/40 hover:bg-dark-750 transition-all font-semibold shadow-md group"
          >
            <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
          </a>
        </div>

        {/* Contact Summary Bar */}
        <div className="pt-12 mt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div className="p-3 rounded-xl bg-dark-850/60 border border-white/5">
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider mb-0.5">Verified Email:</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-neon-cyan transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="p-3 rounded-xl bg-dark-850/60 border border-white/5">
            <span className="text-emerald-400/90 block text-[10px] uppercase tracking-wider mb-0.5 font-bold">Direct WhatsApp:</span>
            {PERSONAL_INFO.isWhatsAppConfigured && PERSONAL_INFO.whatsAppNumber ? (
              <a 
                href={`https://wa.me/${PERSONAL_INFO.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Vaibhav, I'm interested in starting a website project with you.")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 hover:underline transition-colors"
              >
                {PERSONAL_INFO.whatsAppNumber}
              </a>
            ) : (
              <span className="text-slate-300">Available upon request</span>
            )}
          </div>
          
          <div className="p-3 rounded-xl bg-dark-850/60 border border-white/5">
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider mb-0.5">Instagram Profile:</span>
            <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-pink-400 transition-colors">
              @{PERSONAL_INFO.instagramHandle}
            </a>
          </div>
        </div>

      </InView>

      <Toast
        message={toastMessage}
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
};
