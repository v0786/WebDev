import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, MessageSquare, ArrowUpRight, ShieldCheck, Mail, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { soundFx } from '../audio/SoundEffects';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [budgetRange, setBudgetRange] = useState('$5,000 – $10,000');
  const [timeline, setTimeline] = useState('4–8 Weeks');
  const [description, setDescription] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Web Design & UI/UX',
    'Custom Web Development',
    'Business Website',
    'High-Converting Landing Page',
    'E-Commerce Experience',
    'Interactive / 3D Experience',
    'AI-Powered Web Experience'
  ];

  const budgetTiers = [
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+ / Custom Scope'
  ];

  const timelineOptions = [
    'Immediate (2–4 Weeks)',
    'Standard (4–8 Weeks)',
    'Quarterly Roadmap (2–3 Months)',
    'Flexible / Ongoing'
  ];

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — ${name} (${company || 'Direct Client'})`);
    const body = encodeURIComponent(
`Hi Vaibhav,

I would like to discuss a new website project with you:

— NAME: ${name}
— EMAIL: ${email}
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !description.trim()) {
      setErrorMessage('Please fill in your name, email, and project description.');
      setStatus('error');
      return;
    }

    soundFx.playModalReveal();
    setStatus('loading');

    // Simulate submission flow then open properly formatted mailto dispatch
    setTimeout(() => {
      try {
        const mailtoUrl = generateMailto();
        window.location.href = mailtoUrl;
        setStatus('success');
      } catch {
        setStatus('error');
        setErrorMessage('Failed to trigger email client. Please copy my direct email below.');
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden bg-[#07080B]">
      
      {/* Editorial Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[18vw] font-sans font-black leading-none text-bone-100 whitespace-nowrap">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-12 sm:pb-16 mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
            <span>[ 11 / START A CONVERSATION ]</span>
          </div>

          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-black text-bone-100 tracking-tight leading-[0.92] uppercase">
            HAVE A <br />
            <span className="font-serif italic font-normal text-[#B8FF00] lowercase">project</span> <br />
            IN MIND?
          </h2>

          <div className="mt-8 text-base sm:text-xl font-sans text-bone-300 font-light max-w-xl leading-relaxed">
            Tell me what you&apos;re building, what you&apos;re trying to achieve and what you need help with.
          </div>
        </div>

        {/* 2-Column Conversion Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-[#B8FF00]/40 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#B8FF00]/15 border border-[#B8FF00] flex items-center justify-center mx-auto text-[#B8FF00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-bone-100">Project Brief Prepared</h3>
                <p className="text-sm font-sans text-bone-300 max-w-md mx-auto leading-relaxed">
                  Your email client has been opened with your inquiry prefilled. If it did not launch automatically, you can send your note directly to:
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block px-5 py-2.5 rounded-full bg-[#B8FF00] text-[#07080B] font-mono text-xs uppercase font-bold tracking-wider"
                  >
                    Open Mail Client ({PERSONAL_INFO.email})
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono text-bone-300 hover:text-white underline min-h-[32px] py-1 inline-flex items-center"
                  >
                    Edit &amp; Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Validation Error Message */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage || 'Please check the required fields below.'}</span>
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-bone-300 uppercase tracking-widest block">
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Marc Jacobs"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] text-bone-100 placeholder:text-bone-300/70 text-sm font-sans focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-bone-300 uppercase tracking-widest block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="marc@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] text-bone-100 placeholder:text-bone-300/70 text-sm font-sans focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Company / Brand */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="text-xs font-mono text-bone-300 uppercase tracking-widest block">
                    COMPANY / BRAND NAME
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Studio, Brand or Organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] text-bone-100 placeholder:text-bone-300/70 text-sm font-sans focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>

                {/* Project Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-bone-300 uppercase tracking-widest">
                    PROJECT TYPE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          soundFx.playChirp(400, 0.04, 'sine', 0.02);
                          setProjectType(type);
                        }}
                        className={`min-h-[44px] p-3 rounded-xl border text-left text-xs font-mono transition-all ${
                          projectType === type
                            ? 'bg-[#B8FF00]/10 border-[#B8FF00] text-bone-100 font-semibold'
                            : 'bg-white/[0.02] border-white/[0.08] text-bone-300/85 hover:border-white/25'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-bone-300 uppercase tracking-widest">
                    BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => {
                          soundFx.playChirp(440, 0.04, 'sine', 0.02);
                          setBudgetRange(b);
                        }}
                        className={`min-h-[44px] p-2.5 rounded-lg border text-center text-[11px] font-mono transition-all ${
                          budgetRange === b
                            ? 'bg-[#B8FF00]/10 border-[#B8FF00] text-bone-100 font-semibold'
                            : 'bg-white/[0.02] border-white/[0.08] text-bone-300/85 hover:border-white/25'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-bone-300 uppercase tracking-widest">
                    DESIRED TIMELINE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => {
                          soundFx.playChirp(460, 0.04, 'sine', 0.02);
                          setTimeline(t);
                        }}
                        className={`min-h-[44px] p-2 rounded-lg border text-center text-[10px] font-mono transition-all ${
                          timeline === t
                            ? 'bg-[#B8FF00]/10 border-[#B8FF00] text-bone-100 font-semibold'
                            : 'bg-white/[0.02] border-white/[0.08] text-bone-300/85 hover:border-white/25'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-description" className="text-xs font-mono text-bone-300 uppercase tracking-widest block">
                    PROJECT DESCRIPTION &amp; OBJECTIVES *
                  </label>
                  <textarea
                    id="contact-description"
                    rows={4}
                    required
                    placeholder="Tell me what you're building, existing website link, primary goals, or reference websites..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] text-bone-100 placeholder:text-bone-300/70 text-sm font-sans focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  onMouseEnter={() => soundFx.playHover()}
                  className="min-h-[50px] w-full py-4 rounded-full bg-[#B8FF00] text-gray-900 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 font-mono text-xs uppercase font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer disabled:opacity-50"
                  data-cursor="link"
                  data-cursor-text="SEND"
                >
                  <span>{status === 'loading' ? 'PREPARING BRIEF...' : 'SEND PROJECT INQUIRY →'}</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Verified Badges */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Points Card */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold border-b border-white/[0.08] pb-3">
                DIRECT CHANNELS
              </div>

              {/* Email Vaibhav */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                  EMAIL VAIBHAV
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center min-h-[32px] py-1 text-sm sm:text-base font-mono text-bone-100 hover:text-[#B8FF00] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center text-bone-300 hover:text-[#B8FF00] transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp Relay with prefilled message */}
              <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
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
                <div className="text-[10px] font-mono text-bone-300 pt-0.5">
                  Prefilled: &quot;Hi Vaibhav, I&apos;d like to discuss a website project.&quot;
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                  LOCATION &amp; REACH
                </div>
                <div className="text-xs font-mono text-bone-200">
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
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/50 flex items-center justify-between text-xs font-mono text-bone-200 hover:text-white transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-bone-300" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#B8FF00]/50 flex items-center justify-between text-xs font-mono text-bone-200 hover:text-white transition-all min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#B8FF00]" />
                  <span>Email Vaibhav</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-bone-300" />
              </a>
            </div>

            {/* Verified Profiles */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-widest text-bone-300 mb-2">
                VERIFIED SOCIALS
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-bone-200 hover:text-[#B8FF00] transition-colors py-1"
                >
                  <span>Instagram (@{PERSONAL_INFO.instagramHandle})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-bone-200 hover:text-[#B8FF00] transition-colors py-1"
                >
                  <span>GitHub (@v0786)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-bone-200 hover:text-[#B8FF00] transition-colors py-1"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-[#B8FF00]/[0.04] border border-[#B8FF00]/20 text-xs font-mono text-[#B8FF00] flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#B8FF00] shrink-0" />
              <span>Direct response within 24 business hours. No spam, total privacy.</span>
            </div>

          </div>

        </div>

        {/* Section 71 — Final Closing Monumental Call to Action */}
        <div className="mt-24 pt-16 border-t border-white/[0.08] text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
            <span>[ THE COMMISSION ]</span>
          </div>

          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-bone-100 tracking-tight leading-[0.92] uppercase">
            LET&apos;S BUILD <br />
            <span className="font-serif italic font-normal text-[#B8FF00] lowercase">something</span> <br />
            GOOD.
          </h3>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                document.getElementById('name')?.focus();
              }}
              className="min-h-[44px] px-8 py-4 rounded-full bg-[#B8FF00] text-gray-900 font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] active:bg-[#A6E600] active:text-gray-900 transition-all shadow-xl inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-bone-300 pt-4 flex flex-wrap items-center justify-center gap-4">
            <span>MUMBAI / INDIA</span>
            <span>&bull;</span>
            <span className="text-[#B8FF00]">AVAILABLE FOR SELECT PROJECTS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
