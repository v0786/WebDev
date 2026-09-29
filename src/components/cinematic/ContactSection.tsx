import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Copy, 
  Mail, 
  MessageSquare, 
  Instagram, 
  Github, 
  Linkedin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { soundFx } from '../audio/SoundEffects';
import { salesService } from '../../services/salesService';
import { MediaBriefPicker, AttachedMedia } from '../media/MediaBriefPicker';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [budgetRange, setBudgetRange] = useState('$5,000 – $10,000');
  const [timeline, setTimeline] = useState('Standard (4–8 Weeks)');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<AttachedMedia[]>([]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddAttachment = (media: AttachedMedia) => {
    setAttachments((prev) => [...prev, media]);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const projectTypes = [
    'Web Design & UI/UX',
    'Custom Web Development',
    'Business Website',
    'High-Converting Landing Page',
    'E-Commerce Experience',
    'Interactive / 3D Experience',
    'AI-Powered Web Experience',
  ];

  const budgetTiers = [
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+ / Custom Scope',
  ];

  const timelineOptions = [
    'Immediate (2–4 Weeks)',
    'Standard (4–8 Weeks)',
    'Quarterly Roadmap (2–3 Months)',
    'Flexible / Ongoing',
  ];

  const generateMailto = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${projectType} — ${name} (${company || 'Direct Client'})`
    );
    const body = encodeURIComponent(
`Hi Vaibhav,

I would like to discuss a new website project with you:

— NAME: ${name}
— EMAIL: ${email}
— MOBILE NUMBER: ${phone}
— COMPANY / BRAND: ${company || 'Not specified'}
— PROJECT TYPE: ${projectType}
— BUDGET RANGE: ${budgetRange}
— TIMELINE: ${timeline}

— PROJECT DESCRIPTION & OBJECTIVES:
${description || 'Please contact me to discuss project scope, milestones, and deliverables.'}

Looking forward to collaborating,
${name}
`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const recordInquiryToDashboard = async (
    clientName: string,
    clientEmail: string,
    clientPhone: string = 'Not Provided',
    businessName: string = '',
    reqType: string = '',
    budget: string = '',
    desc: string = '',
    channel: 'Website Form' | 'WhatsApp Inquiry' | 'Instagram DM' | 'Email Commission' = 'Website Form'
  ) => {
    try {
      const existingStr = localStorage.getItem('sales_portal_requests');
      const existing: any[] = existingStr ? JSON.parse(existingStr) : [];
      const reqNum = `REQ-2026-0${100 + existing.length + 1}`;

      // Upload files
      for (const att of attachments) {
        try {
          await salesService.uploadFile(
            att.file,
            att.name,
            'Asset Upload',
            reqNum,
            clientName,
            `Attached brief media (${att.typeCategory}): ${att.name}`
          );
        } catch {
          // ignore
        }
      }

      const newReq: any = {
        id: `req-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        requestNumber: reqNum,
        clientName: clientName || 'Client Prospect',
        clientEmail: clientEmail || 'prospect@business.com',
        clientPhone: clientPhone,
        businessName: businessName || `${clientName || 'New Client'}'s Business`,
        requestType: (reqType.includes('3D') || reqType.includes('Design') ? 'UI/UX Redesign' : reqType.includes('AI') || reqType.includes('Automation') ? 'SaaS Automation' : 'Custom Web App') as any,
        budget: budget || '$5,000 – $10,000',
        status: 'New',
        dateSubmitted: new Date().toISOString().split('T')[0],
        deadline: '2026-11-30',
        requirementsSummary: desc || `Client inquiry received via ${channel}.`,
        detailedRequirements: [
          desc || `Initial contact initiated through ${channel}`,
          attachments.length > 0 ? `Attached ${attachments.length} media files (Voice Notes / Wireframes / Video)` : 'No attachments'
        ],
        techStackPreference: ['React', 'TypeScript', 'Tailwind CSS'],
        attachedFilesCount: attachments.length,
        channel: channel
      };
      await salesService.createRequest(newReq);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !phone.trim() || !description.trim()) {
      setErrorMessage('Please fill in all compulsory fields (*): Your Name, Email Address, Mobile Number, and Project Description.');
      setStatus('error');
      return;
    }

    soundFx.playModalReveal();
    setStatus('loading');

    await recordInquiryToDashboard(name, email, phone, company, projectType, budgetRange, description, 'Website Form');

    setStatus('success');
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setDescription('');
    setAttachments([]);

    setTimeout(() => {
      try {
        const mailtoUrl = generateMailto();
        window.open(mailtoUrl, '_blank');
      } catch {
        // ignore
      }
    }, 400);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#07080B] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[38rem] h-[38rem] bg-[#D4AF37]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] bg-[#8C6D4F]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Massive Background Film Watermark */}
      <div className="absolute top-1/3 right-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[18vw] font-sans font-black leading-none text-[#E8DFD8] whitespace-nowrap">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="border-b border-[#8C6D4F]/25 pb-12 sm:pb-16 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <span>[ 05 / START A CONVERSATION ]</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.88] uppercase select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              HAVE A
            </span>
            <span className="block font-serif italic lowercase text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] my-1">
              project
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              IN MIND?
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg font-light text-[#C4B5A5] max-w-xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Tell me what you&apos;re building, what you&apos;re trying to achieve and what you need help with.
          </motion.div>
        </div>

        {/* 2-Column Conversion Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: INQUIRY FORM (7 COLS) ================= */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-2xl bg-[#0E0C0A] border border-[#D4AF37]/60 text-center space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  className="text-3xl font-normal uppercase text-white tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  PROJECT BRIEF PREPARED
                </h3>
                <p
                  className="text-xs sm:text-sm font-light text-[#C4B5A5] max-w-md mx-auto leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Your email client has been opened with your inquiry prefilled. If it did not launch automatically, you can send your note directly to:
                </p>
                <div className="pt-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block px-6 py-3 rounded-full bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    Open Mail Client ({PERSONAL_INFO.email})
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono text-[#8C6D4F] hover:text-[#D4AF37] underline min-h-[32px] py-1 inline-flex items-center cursor-pointer transition-colors"
                  >
                    Edit &amp; Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Validation Error Message */}
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage || 'Please check the required fields below.'}</span>
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-name"
                      className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#C49B71] block font-medium"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Marc Jacobs"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-white placeholder-[#8C6D4F]/60 text-xs font-sans focus:outline-none transition-colors min-h-[44px]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-email"
                      className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#C49B71] block font-medium"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="marc@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-white placeholder-[#8C6D4F]/60 text-xs font-sans focus:outline-none transition-colors min-h-[44px]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Mobile / Phone Number & Company / Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-phone"
                      className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#D4AF37] block font-bold flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>MOBILE / PHONE NUMBER *</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210 / +1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-[#120F0C] border border-[#D4AF37]/50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-white placeholder-[#8C6D4F]/60 text-xs font-sans focus:outline-none transition-colors min-h-[44px]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-company"
                      className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#C49B71] block font-medium"
                    >
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      placeholder="Studio, Brand or Organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-white placeholder-[#8C6D4F]/60 text-xs font-sans focus:outline-none transition-colors min-h-[44px]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Form Selections: Project Type, Budget Range, Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-project-type" className="text-xs font-mono tracking-wider uppercase text-[#C49B71] block font-medium">
                      Project Type
                    </label>
                    <select
                      id="inquiry-project-type"
                      value={projectType}
                      onChange={(e) => {
                        soundFx.playChirp(400, 0.04, 'sine', 0.02);
                        setProjectType(e.target.value);
                      }}
                      className="w-full h-11 px-3 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-[#F7E7C4] text-xs font-mono focus:outline-none transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#120F0C] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range Selector */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-budget" className="text-xs font-mono tracking-wider uppercase text-[#C49B71] block font-medium">
                      Budget Range
                    </label>
                    <select
                      id="inquiry-budget"
                      value={budgetRange}
                      onChange={(e) => {
                        soundFx.playChirp(440, 0.04, 'sine', 0.02);
                        setBudgetRange(e.target.value);
                      }}
                      className="w-full h-11 px-3 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-[#F7E7C4] text-xs font-mono focus:outline-none transition-colors cursor-pointer"
                    >
                      {budgetTiers.map((b) => (
                        <option key={b} value={b} className="bg-[#120F0C] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline Selector */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-timeline" className="text-xs font-mono tracking-wider uppercase text-[#C49B71] block font-medium">
                      Desired Timeline
                    </label>
                    <select
                      id="inquiry-timeline"
                      value={timeline}
                      onChange={(e) => {
                        soundFx.playChirp(460, 0.04, 'sine', 0.02);
                        setTimeline(e.target.value);
                      }}
                      className="w-full h-11 px-3 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-[#F7E7C4] text-xs font-mono focus:outline-none transition-colors cursor-pointer"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-[#120F0C] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label
                    htmlFor="inquiry-description"
                    className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#C49B71] block font-medium"
                  >
                    PROJECT DESCRIPTION &amp; OBJECTIVES *
                  </label>
                  <textarea
                    id="inquiry-description"
                    rows={4}
                    required
                    placeholder="Tell me what you're building, existing website link, primary goals, or reference websites..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-lg bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 text-white placeholder-[#8C6D4F]/60 text-xs font-sans focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* Attached Media Brief (Voice Recording, Images, Video, PDFs) */}
                <MediaBriefPicker
                  attachments={attachments}
                  onAddAttachment={handleAddAttachment}
                  onRemoveAttachment={handleRemoveAttachment}
                />

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  onMouseEnter={() => soundFx.playHover()}
                  className="min-h-[50px] w-full py-4 rounded-lg bg-[#D4AF37] text-black hover:bg-white hover:text-black font-mono text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(212,175,55,0.3)] cursor-pointer disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'PREPARING BRIEF...' : 'SEND PROJECT INQUIRY →'}</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* ================= RIGHT COLUMN: DIRECT CHANNELS (5 COLS) ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Points Card */}
            <div className="p-8 rounded-2xl bg-[#0D0B08] border border-[#8C6D4F]/30 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
              
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-bold border-b border-[#8C6D4F]/20 pb-3">
                DIRECT CHANNELS
              </div>

              {/* Email Vaibhav */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">
                  EMAIL VAIBHAV
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center min-h-[32px] py-1 text-sm sm:text-base font-mono text-[#F7E7C4] hover:text-[#D4AF37] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center text-[#8C6D4F] hover:text-[#D4AF37] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp Relay with prefilled message */}
              <div className="space-y-1 pt-3 border-t border-[#8C6D4F]/15">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">
                  MESSAGE ON WHATSAPP
                </div>
                <a
                  href={PERSONAL_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[32px] py-1 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{PERSONAL_INFO.whatsAppNumber} (Direct WhatsApp Chat)</span>
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-3 border-t border-[#8C6D4F]/15">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">
                  LOCATION &amp; REACH
                </div>
                <div className="text-xs font-mono text-[#C4B5A5]">
                  Mumbai, India &bull; Serving India + International Clients
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#0D0B08] border border-[#8C6D4F]/30 hover:border-emerald-400/60 flex items-center justify-between text-xs font-mono text-[#E8DFD8] hover:text-white transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6D4F]" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl bg-[#0D0B08] border border-[#8C6D4F]/30 hover:border-[#D4AF37]/60 flex items-center justify-between text-xs font-mono text-[#E8DFD8] hover:text-white transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Email Vaibhav</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6D4F]" />
              </a>
            </div>

            {/* Verified Profiles */}
            <div className="p-6 rounded-2xl bg-[#0D0B08] border border-[#8C6D4F]/30 space-y-3 text-xs font-mono shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D4F] mb-2 font-medium">
                VERIFIED SOCIALS
              </div>
              <div className="flex flex-col space-y-2.5">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-[#C4B5A5] hover:text-[#D4AF37] transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-[#8C6D4F]" />
                    <span>Instagram (@{PERSONAL_INFO.instagramHandle})</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C6D4F]" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-[#C4B5A5] hover:text-[#D4AF37] transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#8C6D4F]" />
                    <span>GitHub (@v0786)</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C6D4F]" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-[#C4B5A5] hover:text-[#D4AF37] transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#8C6D4F]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C6D4F]" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-xs font-mono text-[#F7E7C4] flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Direct response within 24 business hours. No spam, total privacy.</span>
            </div>

          </div>

        </div>

        {/* Section 71 — Final Closing Commission Call to Action */}
        <div className="mt-28 pt-16 border-t border-[#8C6D4F]/25 text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] flex items-center justify-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>[ THE COMMISSION ]</span>
          </div>

          <h3
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              LET&apos;S BUILD
            </span>
            <span className="font-serif italic lowercase text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] my-1 inline-block">
              something
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              GOOD.
            </span>
          </h3>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                document.getElementById('inquiry-name')?.focus();
              }}
              className="min-h-[44px] px-8 py-4 rounded-full bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C6D4F] pt-4 flex flex-wrap items-center justify-center gap-3">
            <span>MUMBAI / INDIA</span>
            <span>&bull;</span>
            <span className="text-[#D4AF37]">AVAILABLE FOR SELECT PROJECTS</span>
          </div>
        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            {PERSONAL_INFO.brandName} // CINEMATIC DIGITAL STUDIO • MUMBAI
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • CRAFTED WITH BESPOKE PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
