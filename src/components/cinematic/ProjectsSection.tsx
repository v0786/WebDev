import React from 'react';
import { motion } from 'framer-motion';
import { ScrollStack, ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  demoHash: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Forma Studio',
    category: 'LUXURY ARCHITECTURE & MONOLITHIC DESIGN',
    description:
      'Cinematic architectural platform featuring precision spatial layouts, dynamic viewport framing, and monolithic typography for an avant-garde structural engineering studio.',
    demoHash: '#/demo/forma',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL Shader', 'Responsive Grid'],
    metrics: [
      { label: 'EXPERIENCE', value: 'Cinematic Spatial' },
      { label: 'FRAMING', value: '120 FPS Interaction' },
      { label: 'DISCIPLINE', value: 'Architecture & UI' },
    ],
  },
  {
    number: '02',
    title: 'Maison Étoile',
    category: 'MICHELIN-STARRED HOSPITALITY & GASTRONOMY',
    description:
      'Atmospheric digital dining experience with bespoke editorial reservation workflows, sensorial transitions, and curated culinary typography for world-class haute cuisine.',
    demoHash: '#/demo/maison',
    tech: ['React 18', 'TypeScript', 'Smooth Scroll', 'Audio Scapes', 'Micro-Interactions'],
    metrics: [
      { label: 'ATMOSPHERE', value: 'Sensorial Dark Mode' },
      { label: 'WORKFLOW', value: 'Live Reservation Engine' },
      { label: 'AESTHETIC', value: 'Haute Horlogerie Grade' },
    ],
  },
  {
    number: '03',
    title: 'Orbit Cloud Observability',
    category: 'AI CLOUD & ENTERPRISE DEVOPS INFRASTRUCTURE',
    description:
      'High-performance observability dashboard visualizing distributed Kubernetes microservices, predictive anomaly detection, and real-time telemetry streaming.',
    demoHash: '#/demo/orbit',
    tech: ['React', 'TypeScript', 'Data Streams', 'Canvas Charts', 'Lucide Icons', 'Dark Mode'],
    metrics: [
      { label: 'INGESTION', value: 'Sub-millisecond Latency' },
      { label: 'TOPOLOGY', value: 'Interactive 3D Graph' },
      { label: 'INTELLIGENCE', value: 'Real-Time Anomaly Alerting' },
    ],
  },
  {
    number: '04',
    title: 'Noir Atelier',
    category: 'AVANT-GARDE EDITORIAL & DIGITAL COUTURE',
    description:
      'Experimental high-fashion editorial magazine with kinetic typography, parallax image slicing, and runway video integration pushing web aesthetics forward.',
    demoHash: '#/demo/noir',
    tech: ['Three.js', 'React', 'GLSL Distortion', 'Dynamic Layouts', 'Framer Motion'],
    metrics: [
      { label: 'EDITORIAL', value: 'Runway Lookbook' },
      { label: 'TRANSITIONS', value: 'GPU Distortion Shaders' },
      { label: 'TYPOGRAPHY', value: 'Custom Editorial Serifs' },
    ],
  },
  {
    number: '05',
    title: 'Atelier 27 Genève',
    category: 'SWISS HOROLOGY & MASTER TIMEPIECES',
    description:
      'Interactive luxury watchmaking showcase with 3D dial exploded views, caliber mechanism inspection, and heritage storytelling crafted for fine horology collectors.',
    demoHash: '#/demo/atelier27',
    tech: ['3D Inspection', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    metrics: [
      { label: 'MECHANICS', value: 'Exploded Caliber Views' },
      { label: 'CRAFT', value: 'Micro-Detail Zoom' },
      { label: 'HERITAGE', value: 'Swiss Horology' },
    ],
  },
  {
    number: '06',
    title: 'Arc Protocol',
    category: 'DECENTRALIZED DEFI & LIQUIDITY ARCHITECTURE',
    description:
      'Next-generation algorithmic liquidity interface with real-time slippage prediction, multi-vault yields, and crypto security protocols designed with sleek dark-glass aesthetics.',
    demoHash: '#/demo/arc',
    tech: ['React', 'TypeScript', 'Web3 UI/UX', 'Glassmorphism', 'Real-time Charting'],
    metrics: [
      { label: 'SECURITY', value: 'Audited Protocol' },
      { label: 'INTERFACE', value: 'Zero-Latency Execution' },
      { label: 'ECOSYSTEM', value: 'Autonomous Vaults' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / SELECTED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED IMPACT.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#9C8E80] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each concept includes a live interactive prototype.
          </p>
        </motion.div>

        {/* Scroll Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/30 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#A8988B] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/20">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#16120E] text-[#CBB59D] group-hover:border-[#D4AF37]/60 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/20">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2 font-medium">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/20 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#8C6D4F]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.demoHash}
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F]/60 bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#CBB59D] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] cursor-pointer"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>LAUNCH PROTOTYPE DEMO</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
