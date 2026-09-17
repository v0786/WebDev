import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { 
  MasterEnquiryFormData, 
  generateMasterMailtoUrl, 
  generateMasterFormattedBrief,
  generateWhatsAppUrl 
} from '../../utils/mailto';
import { Toast } from '../ui/Toast';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<MasterEnquiryFormData>({
    fullName: '',
    businessName: '',
    email: '',
    country: '',
    websiteType: 'Business Website',
    budget: '$1,000 - $2,500 USD',
    timeline: '2 - 4 Weeks',
    description: '',
    existingWebsiteUrl: '',
    referenceWebsites: '',
    preferredCommunication: 'Email',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MasterEnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const websiteTypes = [
    'Business Website',
    'Landing Page',
    'Portfolio Website',
    'E-commerce Website',
    'Website Redesign',
    'Other'
  ];

  const budgetOptions = [
    'Under $1,000 USD',
    '$1,000 - $2,500 USD',
    '$2,500 - $5,000 USD',
    '$5,000+ USD',
    'Flexible / Request Custom Quote'
  ];

  const timelineOptions = [
    'Urgent (Under 2 weeks)',
    '2 - 4 Weeks',
    '1 - 2 Months',
    'Flexible'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof MasterEnquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Please provide your business or project name';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.country.trim()) {
      errs.country = 'Please specify your country or timezone';
    }
    if (!formData.description.trim() || formData.description.length < 15) {
      errs.description = 'Please describe your project (minimum 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoLink = generateMasterMailtoUrl(formData);
    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = () => {
    if (!validate()) return;

    if (!PERSONAL_INFO.isWhatsAppConfigured || !PERSONAL_INFO.whatsAppNumber) {
      setToastMessage("WhatsApp number hasn't been configured yet. Opening email brief instead!");
      setShowToast(true);
      const mailtoLink = generateMasterMailtoUrl(formData);
      setSubmitted(true);
      window.location.href = mailtoLink;
      return;
    }

    const waLink = generateWhatsAppUrl(formData, PERSONAL_INFO.whatsAppNumber);
    setSubmitted(true);
    window.open(waLink, '_blank');
  };

  const handleCopyBrief = () => {
    if (!validate()) return;
    const brief = generateMasterFormattedBrief(formData);
    navigator.clipboard.writeText(brief).then(() => {
      setToastMessage('Project brief copied to clipboard! You can paste and send it directly.');
      setShowToast(true);
    });
  };

  return (
    <section id="enquire" className="py-24 relative bg-dark-950 border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project Enquiry & Scope Brief
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tell me what you are planning. This form organizes your requirements into a structured brief addressed directly to <strong className="text-slate-200">{PERSONAL_INFO.email}</strong>.
          </p>
        </div>

        {/* Confirmation Banner */}
        {submitted && (
          <div className="mb-8 p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 text-slate-200 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <h3 className="text-lg font-bold text-white">Project Brief Formatted!</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your default email application has opened with the project specifications addressed to <strong className="text-neon-cyan">{PERSONAL_INFO.email}</strong>. Please press <strong>Send</strong> in your mail client to deliver it.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopyBrief}
                className="px-4 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/15 text-xs font-medium text-white flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Copy Raw Brief to Clipboard</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                Edit Details
              </button>
            </div>
          </div>
        )}

        {/* Enquiry Form */}
        <form 
          onSubmit={handleEmailSubmit}
          className="p-6 sm:p-10 rounded-3xl bg-dark-900/90 backdrop-blur-xl border border-white/10 shadow-2xl space-y-7"
        >
          
          <div className="p-4 rounded-2xl bg-dark-850/80 border border-white/5 flex items-start gap-3 text-xs text-slate-300">
            <HelpCircle className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Direct & Honest Handshake: </span>
              Your submission directly formats an email to <code className="text-neon-cyan font-mono">{PERSONAL_INFO.email}</code>. No silent database drops or spam lists.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-mono text-slate-300">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                autoCapitalize="words"
                enterKeyHint="next"
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${
                  errors.fullName ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              {errors.fullName && <p className="text-xs text-rose-400">{errors.fullName}</p>}
            </div>

            {/* Business Name */}
            <div className="space-y-1.5">
              <label htmlFor="businessName" className="block text-xs font-mono text-slate-300">
                Business / Brand Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="businessName"
                type="text"
                autoComplete="organization"
                autoCapitalize="words"
                enterKeyHint="next"
                placeholder="e.g. NorthStar Advisory"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${
                  errors.businessName ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              {errors.businessName && <p className="text-xs text-rose-400">{errors.businessName}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="next"
                placeholder="sarah@northstar.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${
                  errors.email ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
            </div>

            {/* Country / Location */}
            <div className="space-y-1.5">
              <label htmlFor="country" className="block text-xs font-mono text-slate-300">
                Country / Location <span className="text-rose-400">*</span>
              </label>
              <input
                id="country"
                type="text"
                autoComplete="country-name"
                enterKeyHint="next"
                placeholder="e.g. United States, UK, Canada..."
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all ${
                  errors.country ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              {errors.country && <p className="text-xs text-rose-400">{errors.country}</p>}
            </div>

            {/* Website Type */}
            <div className="space-y-1.5">
              <label htmlFor="websiteType" className="block text-xs font-mono text-slate-300">
                Website Type <span className="text-rose-400">*</span>
              </label>
              <select
                id="websiteType"
                value={formData.websiteType}
                onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              >
                {websiteTypes.map((type) => (
                  <option key={type} value={type} className="bg-dark-900 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Budget */}
            <div className="space-y-1.5">
              <label htmlFor="budget" className="block text-xs font-mono text-slate-300">
                Approximate Budget (USD) <span className="text-rose-400">*</span>
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              >
                {budgetOptions.map((b) => (
                  <option key={b} value={b} className="bg-dark-900 text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Desired Timeline */}
            <div className="space-y-1.5">
              <label htmlFor="timeline" className="block text-xs font-mono text-slate-300">
                Desired Timeline <span className="text-rose-400">*</span>
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              >
                {timelineOptions.map((t) => (
                  <option key={t} value={t} className="bg-dark-900 text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Communication Method */}
            <div className="space-y-1.5">
              <label htmlFor="preferredCommunication" className="block text-xs font-mono text-slate-300">
                Preferred Communication Method
              </label>
              <select
                id="preferredCommunication"
                value={formData.preferredCommunication}
                onChange={(e) => setFormData({ ...formData, preferredCommunication: e.target.value as any })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              >
                <option value="Email" className="bg-dark-900 text-white">Email (Default)</option>
                <option value="WhatsApp" className="bg-dark-900 text-white">WhatsApp</option>
                <option value="Instagram" className="bg-dark-900 text-white">Instagram Direct Message</option>
              </select>
            </div>

            {/* Optional: Existing Website URL */}
            <div className="space-y-1.5">
              <label htmlFor="existingWebsiteUrl" className="block text-xs font-mono text-slate-300">
                Existing Website URL <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                id="existingWebsiteUrl"
                type="url"
                inputMode="url"
                autoComplete="url"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="next"
                placeholder="https://yourcurrentsite.com"
                value={formData.existingWebsiteUrl}
                onChange={(e) => setFormData({ ...formData, existingWebsiteUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              />
            </div>

            {/* Optional: Reference Websites */}
            <div className="space-y-1.5">
              <label htmlFor="referenceWebsites" className="block text-xs font-mono text-slate-300">
                Reference / Inspiration Links <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                id="referenceWebsites"
                type="text"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="next"
                placeholder="e.g. stripe.com, linear.app"
                value={formData.referenceWebsites}
                onChange={(e) => setFormData({ ...formData, referenceWebsites: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
              />
            </div>

          </div>

          {/* Project Description */}
          <div className="space-y-1.5">
            <label htmlFor="description" className="block text-xs font-mono text-slate-300">
              Project Description & Goals <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              spellCheck={true}
              enterKeyHint="done"
              placeholder="Tell me about your business, the key pages or features you need, and the primary action you want visitors to take..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all resize-y ${
                errors.description ? 'border-rose-500' : 'border-white/10'
              }`}
            />
            {errors.description && <p className="text-xs text-rose-400">{errors.description}</p>}
          </div>

          {/* Bottom Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 text-center sm:text-left">
              <AlertCircle className="w-4 h-4 text-neon-cyan shrink-0" />
              <span>Response guaranteed within 24 hours. No sales spam.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyBrief}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Copy Brief</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                title="Send inquiry via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Brief</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-electric to-neon-violet text-dark-950 font-bold text-sm shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Email</span>
              </button>
            </div>
          </div>

        </form>

      </div>

      <Toast
        message={toastMessage}
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
};
