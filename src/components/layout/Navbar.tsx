import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Studio Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-dark-900 border border-white/15 group-hover:border-neon-cyan/60 transition-all shadow-md shrink-0">
              <img 
                src={PERSONAL_INFO.logoPlaceholder} 
                alt="Vaibhav Sonkusare Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 group-hover:text-neon-cyan transition-colors">
                <span>VAIBHAV SONKUSARE</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-neon-cyan font-mono tracking-wider">
                CREATIVE WEB STUDIO
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-neon-cyan after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-slate-300">
              <Globe className="w-3.5 h-3.5 text-neon-cyan" />
              <span>International / USD</span>
            </div>

            <Button 
              href="#enquire" 
              variant="primary" 
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              href="#enquire" 
              variant="primary" 
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Enquire
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-850 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Creative Web Studio</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan text-[10px] font-mono border border-neon-cyan/20">
              USD / Global
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-neon-cyan py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Button 
              href="#enquire" 
              variant="primary" 
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Button>
            <div className="text-center text-xs text-slate-400">
              Direct email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neon-cyan hover:underline">{PERSONAL_INFO.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
