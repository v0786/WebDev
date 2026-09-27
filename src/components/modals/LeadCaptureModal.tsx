import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { salesService } from '../../services/salesService';
import { soundFx } from '../audio/SoundEffects';

interface LeadCaptureModalProps {
  videoEnded?: boolean;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ videoEnded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<'project' | 'webdev' | 'uiux' | 'exploring'>('project');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [note, setNote] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('lead_modal_dismissed');
    if (isDismissed === 'true') return;

    // Trigger on video ended or after 7 seconds
    let timer: ReturnType<typeof setTimeout>;
    if (videoEnded) {
      setIsOpen(true);
    } else {
      timer = setTimeout(() => {
        if (!sessionStorage.getItem('lead_modal_dismissed')) {
          setIsOpen(true);
        }
      }, 7000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [videoEnded]);

  const handleClose = () => {
    soundFx.playClick();
    sessionStorage.setItem('lead_modal_dismissed', 'true');
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !phone.trim() || !note.trim()) {
      setErrorMessage('Please complete all compulsory fields (*): Name, Email, Mobile Number, & Brief.');
      setStatus('error');
      return;
    }

    soundFx.playModalReveal();
    setStatus('loading');

    const intentMap = {
      project: 'Custom Web App',
      webdev: 'API & Cloud Backend',
      uiux: 'UI/UX Redesign',
      exploring: 'Business Website',
    };

    const newReq: any = {
      id: `req-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      requestNumber: `REQ-2026-0${Math.floor(100 + Math.random() * 900)}`,
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      businessName: company || `${name}'s Brand`,
      requestType: intentMap[intent] as any,
      budget: '$5,000 – $10,000',
      status: 'New',
      dateSubmitted: new Date().toISOString().split('T')[0],
      deadline: '2026-11-30',
      requirementsSummary: note || `Lead capture popup submission. Intent: ${intent}`,
      detailedRequirements: [note || `Customer lead via landing popup modal`],
      techStackPreference: ['React', 'TypeScript', 'Tailwind CSS'],
      attachedFilesCount: 0,
      channel: 'Website Form',
    };

    try {
      await salesService.createRequest(newReq);
      setStatus('success');
      sessionStorage.setItem('lead_modal_dismissed', 'true');
    } catch {
      setStatus('error');
      setErrorMessage('Submission failed. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0B090E]/95 border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden text-[#E8DFD8]"
          >
            {/* Top Glowing Gold Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#D4AF37] text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3
                  className="text-3xl font-bold uppercase text-white tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  INQUIRY RECEIVED!
                </h3>
                <p className="text-sm font-sans text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#D4AF37] font-semibold">{name}</span>! Your project inquiry has been saved directly to my Sales Hub. I will connect with you shortly via WhatsApp or Email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-lg cursor-pointer"
                  >
                    CONTINUE BROWSING SITE &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Header */}
                <div className="space-y-1.5 border-b border-white/10 pb-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>DIRECT CONNECT &bull; VAIBHAV SONKUSARE</span>
                  </div>
                  <h3
                    className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    HAVE A <span className="text-[#D4AF37] italic font-serif lowercase">project</span> IN MIND?
                  </h3>
                  <p className="text-xs font-sans text-gray-400">
                    Let me know what you are looking to build and how I can help.
                  </p>
                </div>

                {/* Question: What is your primary objective? */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] block font-bold">
                    WHAT ARE YOU LOOKING TO BUILD? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'project', label: '🚀 Have a Project & Want to Hire' },
                      { id: 'webdev', label: '⚡ Custom Web App / AI Automation' },
                      { id: 'uiux', label: '🎨 UI/UX & Web Design Redesign' },
                      { id: 'exploring', label: '💬 General Inquiry / Consultation' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => {
                          soundFx.playChirp(420, 0.03, 'sine', 0.02);
                          setIntent(item.id as any);
                        }}
                        className={`p-3 rounded-xl border text-left text-xs font-sans transition-all cursor-pointer ${
                          intent === item.id
                            ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white font-semibold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                            : 'bg-white/[0.03] border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Validation Error */}
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-300 uppercase tracking-widest block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marc Jacobs"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none transition-colors min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-300 uppercase tracking-widest block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marc@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none transition-colors min-h-[40px]"
                    />
                  </div>
                </div>

                {/* Mobile / Phone Number & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block font-bold flex items-center gap-1">
                      <Phone className="w-3 h-3 text-[#D4AF37]" />
                      <span>MOBILE / PHONE NUMBER *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#D4AF37]/50 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none transition-colors min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-300 uppercase tracking-widest block">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Brand or Studio Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none transition-colors min-h-[40px]"
                    />
                  </div>
                </div>

                {/* Project Brief Note */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-gray-300 uppercase tracking-widest block">
                    PROJECT OBJECTIVE / QUESTION *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe what you're trying to build or achieve..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#D4AF37] text-white placeholder-gray-500 text-xs focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] cursor-pointer disabled:opacity-50 min-h-[44px]"
                  >
                    <span>{status === 'loading' ? 'SUBMITTING BRIEF...' : 'SUBMIT & CONNECT WITH VAIBHAV'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono text-gray-400 hover:text-white underline min-h-[36px] text-center"
                  >
                    Just Browsing
                  </button>
                </div>

              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
