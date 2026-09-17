import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { InView } from '../../components/motion-primitives/in-view';
import { Tilt } from '../../components/motion-primitives/tilt';
import { Spotlight } from '../../components/motion-primitives/spotlight';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import {
  Palette, ArrowUpRight, Sparkles, Layers, Box, Code2, 
  CheckCircle2, X, Eye, Globe2, Check
} from 'lucide-react';

interface AgencyProject {
  id: string;
  title: string;
  clientCategory: string;
  discipline: string;
  year: string;
  summary: string;
  tag: string;
  caseStudy: {
    challenge: string;
    approach: string;
    technologies: string[];
    deliverables: string[];
  };
}

const AGENCY_PROJECTS: AgencyProject[] = [
  {
    id: 'p1',
    title: 'Kroma Spatial Audio',
    clientCategory: 'Consumer Tech',
    discipline: 'Immersive Web & 3D',
    year: '2026',
    summary: 'A WebGL-driven product experience for next-generation spatial acoustic headphones with procedural sound wave physics.',
    tag: 'Hardware Launch',
    caseStudy: {
      challenge: 'Translate the visceral feeling of three-dimensional sound into a visual and interactive web presentation.',
      approach: 'Built procedural WebGL audio wave shaders synchronized with low-latency browser audio synthesizers.',
      technologies: ['Three.js', 'Custom GLSL Shaders', 'Web Audio API', 'React'],
      deliverables: ['Interactive 3D Product Configurator', 'Custom Typography Design', 'Sound reactive hero canvas'],
    },
  },
  {
    id: 'p2',
    title: 'Aethelgard Horology',
    clientCategory: 'Luxury & Retail',
    discipline: 'Brand Systems',
    year: '2026',
    summary: 'Editorial e-commerce monograph celebrating Swiss mechanical watchmaking craftsmanship with tactile micro-interactions.',
    tag: 'Digital Storefront',
    caseStudy: {
      challenge: 'Create a digital retail atmosphere matching the high-touch physical buying experience of bespoke mechanical watches.',
      approach: 'Leveraged generous editorial whitespace, high-contrast monochrome typography, and smooth slide-over catalog navigation.',
      technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Sub-second search index'],
      deliverables: ['Multi-currency Storefront Architecture', 'High-res Zoom Inspection Spec', 'Brand Guidelines Monograph'],
    },
  },
  {
    id: 'p3',
    title: 'Nexus Protocol',
    clientCategory: 'Fintech & Web3',
    discipline: 'Creative Engineering',
    year: '2026',
    summary: 'High-throughput algorithmic liquidity dashboard with sub-millisecond chart rendering and institutional dark-mode aesthetics.',
    tag: 'Institutional App',
    caseStudy: {
      challenge: 'Display dense multi-asset financial depth charts without causing browser thread stutter.',
      approach: 'Utilized canvas-accelerated rendering pipelines and strict component memoization to sustain 120fps animations.',
      technologies: ['HTML5 Canvas', 'Web Workers', 'Tailwind CSS', 'TypeScript'],
      deliverables: ['Real-time Order Book Visualizer', 'Design Token System', 'Accessible Keyboard Hotkey Navigation'],
    },
  },
  {
    id: 'p4',
    title: 'Vespera Architecture',
    clientCategory: 'Architecture & Design',
    discipline: 'Immersive Web & 3D',
    year: '2025',
    summary: 'Minimalist spatial portfolio showcasing modernist residential structures across Scandinavia and Japan.',
    tag: 'Architectural Monograph',
    caseStudy: {
      challenge: 'Present architectural blueprints and high-dynamic-range photography without visual clutter.',
      approach: 'Engineered an adaptive horizontal scroll gallery with subtle depth parallax and dynamic ambient lighting.',
      technologies: ['Motion Primitives', 'React', 'CSS Grid', 'Adaptive Image Compression'],
      deliverables: ['Interactive Blueprint Viewer', 'Project Inquiry Drawer', 'Studio Archive Directory'],
    },
  },
];

const SERVICES = [
  {
    id: 's1',
    num: '01',
    title: 'Brand Systems & Visual Identity',
    description: 'We distill complex business visions into cohesive brand identities, typography frameworks, and comprehensive digital guidelines.',
    deliverables: ['Visual identity guidelines', 'Custom logomarks & type systems', 'Design tokens & color architecture', 'Editorial design & asset suites'],
    icon: Palette,
  },
  {
    id: 's2',
    num: '02',
    title: 'Immersive Web & Interactive Experience',
    description: 'Bespoke digital experiences that engage audiences through thoughtful motion choreography, 3D elements, and micro-interactions.',
    deliverables: ['Interactive 3D / WebGL experiences', 'Motion design & transitions', 'High-conversion landing pages', 'Mobile-first responsive engineering'],
    icon: Box,
  },
  {
    id: 's3',
    num: '03',
    title: 'Creative Engineering & Front-End',
    description: 'Production-ready web development built on clean semantic code, strict TypeScript validation, and rapid load times.',
    deliverables: ['React & modern web frameworks', 'Accessible WCAG 2.1 AA layouts', 'Headless CMS integrations', 'Zero-CLS performance optimization'],
    icon: Code2,
  },
  {
    id: 's4',
    num: '04',
    title: 'Design Systems & Scale',
    description: 'Scalable UI components and token libraries engineered to keep expanding product teams fast and visually unified.',
    deliverables: ['Figma design systems', 'Reusable React component libraries', 'Interactive documentation storybooks', 'Ongoing technical stewardship'],
    icon: Layers,
  },
];

const PROCESS_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Strategic Immersion',
    duration: 'Week 1',
    description: 'We unpack your product positioning, audience psychographics, and competitive whitespace to define an undeniable creative thesis.',
  },
  {
    phase: 'Phase 02',
    title: 'Architectural Prototyping',
    duration: 'Weeks 2 — 3',
    description: 'Rapid wireframes and high-fidelity interactive prototypes to validate layout rhythm, typographic hierarchy, and user journey.',
  },
  {
    phase: 'Phase 03',
    title: 'Creative Engineering & Motion',
    duration: 'Weeks 4 — 6',
    description: 'We build your experience using modern frameworks, weaving in subtle motion primitives for tactile responsiveness.',
  },
  {
    phase: 'Phase 04',
    title: 'Polish, Optimization & Handover',
    duration: 'Week 7',
    description: 'Cross-browser testing, accessibility audit, performance tuning down to the millisecond, and complete code documentation handover.',
  },
];

export const AgencyDemo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<AgencyProject | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Inquiry form states
  const [clientName, setClientName] = useState('Helena Vance');
  const [clientEmail, setClientEmail] = useState('h.vance@studio-future.com');
  const [projectScope, setProjectScope] = useState('Complete Digital Brand & Website');
  const [estimatedBudget, setEstimatedBudget] = useState('$10k — $25k');

  const categories = ['All', 'Immersive Web & 3D', 'Brand Systems', 'Creative Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? AGENCY_PROJECTS
    : AGENCY_PROJECTS.filter((p) => p.discipline === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const resetInquiry = () => {
    setInquirySubmitted(false);
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F3F3] selection:bg-[#D4FF00] selection:text-black font-sans">
      {/* Top Demo Header */}
      <DemoHeader
        currentDemo="agency"
        title="Studio Vektor Creative Agency Concept"
        badgeColor="text-lime-400 border-lime-400/30 bg-lime-400/10"
      />

      {/* Concept Sub-Banner */}
      <div className="bg-[#111606] border-b border-lime-500/20 py-1.5 px-4 text-center text-[11px] font-mono text-lime-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-lime-400 shrink-0" />
        <span>CONCEPT PROJECT DEMO — Avant-garde digital studio concept engineered for creative and architectural demonstration.</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[41px] z-40 bg-[#080808]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-none bg-[#D4FF00] text-black flex items-center justify-center font-mono font-bold text-sm group-hover:scale-105 transition-transform">
              V
            </div>
            <div>
              <span className="font-mono tracking-[0.2em] font-extrabold text-white text-base block group-hover:text-[#D4FF00] transition-colors">
                STUDIO VEKTOR
              </span>
              <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block -mt-1">
                Digital Architecture
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-stone-400">
            <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#process" className="hover:text-white transition-colors">Methodology</a>
            <a href="#ethos" className="hover:text-white transition-colors">Ethos</a>
          </div>

          {/* Inquiry CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-5 py-2.5 rounded-none bg-[#D4FF00] hover:bg-white text-black font-mono font-bold text-xs tracking-wider uppercase shadow-lg shadow-lime-900/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Initiate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative pt-20 pb-28 md:pt-32 md:pb-36 overflow-hidden border-b border-white/10">
        {/* Subtle geometric light */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest uppercase text-[#D4FF00] mb-8">
            <Globe2 className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Digital Studio Concept • Global Client Practice</span>
          </div>

          {/* Headline with TextEffect */}
          <div className="max-w-5xl mb-8">
            <h1 className="sr-only">We Architect Digital Reality</h1>
            <TextEffect
              as="p"
              per="word"
              preset="fade-in-blur"
              className="text-4xl sm:text-7xl md:text-8xl font-mono font-extrabold text-white tracking-tight uppercase leading-[0.95]"
            >
              We Architect Digital Reality
            </TextEffect>
          </div>

          <p className="max-w-2xl text-stone-400 text-sm sm:text-lg leading-relaxed font-light mb-12">
            An independent design and creative engineering practice. We partner with ambitious founders, cultural institutions, and global technology innovators to build websites that command international authority.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-20">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-4 bg-[#D4FF00] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-lime-900/30"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#work"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Selected Work</span>
            </a>
          </div>

          {/* Hero Visual Showreel Mockup with Tilt & Spotlight */}
          <InView
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Tilt rotationFactor={4} className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <Spotlight className="from-lime-400/20 via-transparent to-transparent" size={300} />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest">Philosophy</div>
                  <div className="text-xl font-bold text-white uppercase font-mono">Form Obeys Clarity</div>
                  <div className="text-xs text-stone-400">Zero unnecessary ornamental decoration.</div>
                </div>

                <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                  <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest">Execution</div>
                  <div className="text-xl font-bold text-white uppercase font-mono">120 FPS Native</div>
                  <div className="text-xs text-stone-400">Hardware-accelerated motion pipelines.</div>
                </div>

                <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                  <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest">Architecture</div>
                  <div className="text-xl font-bold text-white uppercase font-mono">Semantic &amp; Clean</div>
                  <div className="text-xs text-stone-400">TypeScript, React, &amp; WCAG compliance.</div>
                </div>

                <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                  <div className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-widest">Availability</div>
                  <div className="text-xl font-bold text-white uppercase font-mono">Q4 2026 Inquiries</div>
                  <div className="text-xs text-stone-400">Accepting 2 selective international commissions.</div>
                </div>
              </div>
            </Tilt>
          </InView>

        </div>
      </header>

      {/* Selected Work Section */}
      <section id="work" className="py-24 relative bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00]">
                Curated Case Studies
              </span>
              <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight uppercase mt-2">
                Selected Works
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#D4FF00] text-black font-bold'
                      : 'bg-white/5 text-stone-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </InView>

          {/* Projects Grid with Tilt & Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <InView
                key={project.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Tilt
                  rotationFactor={5}
                  className="rounded-2xl bg-[#111111] border border-white/10 hover:border-[#D4FF00]/60 p-8 flex flex-col justify-between transition-all group relative overflow-hidden h-full shadow-xl"
                >
                  <Spotlight className="from-lime-400/20 via-transparent to-transparent" size={260} />

                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-[#D4FF00] uppercase">
                        {project.clientCategory}
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white group-hover:text-[#D4FF00] transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
                      {project.summary}
                    </p>

                    <div className="inline-block px-2.5 py-1 rounded-none bg-white/5 border border-white/10 text-[10px] font-mono text-stone-300 uppercase tracking-widest">
                      {project.tag}
                    </div>
                  </div>

                  {/* Open Case Study Preview Trigger */}
                  <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-400">Concept Architecture</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-[#D4FF00] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </Tilt>
              </InView>
            ))}
          </div>

        </div>
      </section>

      {/* Services / Capabilities Section */}
      <section id="services" className="py-24 relative bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00]">
              Discipline &amp; Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight uppercase">
              Our Capabilities
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              We bridge strategic creative direction with uncompromising software engineering.
            </p>
          </InView>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <InView
                  key={srv.id}
                  variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-white/30 transition-all space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-[#D4FF00] font-bold">{srv.num}</span>
                      <Icon className="w-5 h-5 text-stone-400" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-mono font-bold text-white">{srv.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-stone-300">
                          <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </InView>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process / Methodology Section */}
      <section id="process" className="py-24 relative bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00]">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight uppercase">
              How We Create
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              A transparent, agile, milestone-driven framework designed to eliminate scope drift and deliver unmatched fidelity.
            </p>
          </InView>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <InView
                key={idx}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4 relative h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#D4FF00] font-bold">{step.phase}</span>
                      <span className="text-stone-400">{step.duration}</span>
                    </div>
                    <h3 className="text-lg font-mono font-bold text-white">{step.title}</h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                    Milestone Verified
                  </div>
                </div>
              </InView>
            ))}
          </div>

        </div>
      </section>

      {/* Ethos Section */}
      <section id="ethos" className="py-24 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#101010] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-widest">
                Our Manifesto
              </span>
              <h3 className="text-2xl sm:text-4xl font-mono font-bold text-white uppercase tracking-tight">
                Websites Are Architecture, Not Billboards.
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                In an era dominated by homogenous website templates, Studio Vektor crafts memorable, bespoke digital identities that express the unique character of your enterprise.
              </p>
            </div>

            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-4 bg-[#D4FF00] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-widest shrink-0 transition-all shadow-xl cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>

        </div>
      </section>

      {/* Case Study Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#101010] border border-[#D4FF00]/40 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 font-sans">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 text-[#D4FF00] text-[10px] font-mono uppercase tracking-widest mb-2">
                  <span>Concept Project Specimen</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-stone-400 mt-1">
                  Discipline: {selectedProject.discipline} • {selectedProject.clientCategory}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider block">The Challenge:</span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {selectedProject.caseStudy.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider block">Our Approach:</span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {selectedProject.caseStudy.approach}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-2">
                  <span className="text-stone-400 uppercase tracking-wider block">Engineered With:</span>
                  <div className="space-y-1">
                    {selectedProject.caseStudy.technologies.map((t, i) => (
                      <div key={i} className="text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-2">
                  <span className="text-stone-400 uppercase tracking-wider block">Key Deliverables:</span>
                  <div className="space-y-1">
                    {selectedProject.caseStudy.deliverables.map((d, i) => (
                      <div key={i} className="text-white flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-none bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Close Case Study
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Inquiry Brief Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#121212] border border-[#D4FF00]/40 shadow-2xl p-6 sm:p-8">
            
            <button
              onClick={resetInquiry}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none text-[10px] font-mono text-[#D4FF00] bg-[#D4FF00]/10 border border-[#D4FF00]/20 mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Interactive Front-End Demo</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase">
                    Initiate Project Brief
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Share your project scope. We evaluate compatibility within 24 hours.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1">Your Name &amp; Role</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-none bg-[#090909] border border-white/10 text-white text-xs focus:border-[#D4FF00] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1">Direct Work Email</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-none bg-[#090909] border border-white/10 text-white text-xs focus:border-[#D4FF00] focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1">Scope</label>
                    <select
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#090909] border border-white/10 text-white text-xs focus:border-[#D4FF00] focus:outline-none"
                    >
                      <option value="Complete Digital Brand & Website">Complete Brand &amp; Web</option>
                      <option value="Immersive WebGL Experience">Immersive 3D Experience</option>
                      <option value="Design System & Scale">Design System &amp; Tokens</option>
                      <option value="Website Redesign & Polish">Website Redesign</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1">Estimated Budget</label>
                    <select
                      value={estimatedBudget}
                      onChange={(e) => setEstimatedBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-none bg-[#090909] border border-white/10 text-white text-xs focus:border-[#D4FF00] focus:outline-none"
                    >
                      <option value="$5k — $10k">$5k — $10k (Starter)</option>
                      <option value="$10k — $25k">$10k — $25k (Standard)</option>
                      <option value="$25k+">$25k+ (Enterprise Bespoke)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-none bg-[#D4FF00] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-lime-900/30"
                >
                  Transmit Brief (Demo)
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-none bg-[#D4FF00]/20 border border-[#D4FF00] text-[#D4FF00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-mono font-bold text-white uppercase">Brief Transmitted</h3>
                  <p className="text-xs text-stone-300 mt-1 font-light">
                    This is a concept interaction demonstration. Your simulated project brief has been recorded:
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Reference:</span>
                    <span className="text-[#D4FF00] font-bold">#VKTR-2026-DEMO</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Initiator:</span>
                    <span className="text-white">{clientName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Scope:</span>
                    <span className="text-white">{projectScope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Estimated Budget:</span>
                    <span className="text-[#D4FF00]">{estimatedBudget}</span>
                  </div>
                </div>

                <button
                  onClick={resetInquiry}
                  className="px-6 py-2 rounded-none bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Close Demo Modal
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-[#040404] border-t border-white/10 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-mono font-bold text-white tracking-wider block">STUDIO VEKTOR</span>
            <span className="text-[11px] text-stone-400 mt-0.5 block">
              Concept project created by Vaibhav Sonkusare for demonstration purposes only.
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#hero" className="hover:text-white transition-colors">Top</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#D4FF00] hover:underline"
            >
              ← Back to Main Portfolio
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
