import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { PERSONAL_INFO } from '../config/personal';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../config/portfolio';
import { SERVICES_DATA } from '../config/services';
import { WORKFLOW_STEPS } from '../config/process';
import { CaseStudyModal } from './sections/CaseStudyModal';
import { CustomCursor } from './cursor/CustomCursor';

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const anchorFor = (id: string) => `#/${id}`;

export const CinematicHome: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM properties to bypass modern browser autoplay restrictions
    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser prevented silent autoplay, retry on first user interaction
          const resumeOnInteract = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', resumeOnInteract);
            window.removeEventListener('touchstart', resumeOnInteract);
            window.removeEventListener('scroll', resumeOnInteract);
            window.removeEventListener('keydown', resumeOnInteract);
          };
          window.addEventListener('click', resumeOnInteract, { once: true });
          window.addEventListener('touchstart', resumeOnInteract, { once: true });
          window.addEventListener('scroll', resumeOnInteract, { once: true });
          window.addEventListener('keydown', resumeOnInteract, { once: true });
        });
      }
    };

    playVideo();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const handleAnchor = (id: string) => {
    closeMenu();
    window.history.replaceState(null, '', anchorFor(id));
    scrollTo(id);
  };

  return (
    <div className="cinematic-site">
      <CustomCursor />
      <div className="film-grain" aria-hidden="true" />
      <div className="cinematic-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-grid" />
      </div>

      <header className="cinematic-nav">
        <button className="wordmark" onClick={() => handleAnchor('top')} aria-label="Back to top">
          <span className="wordmark-mark">VS</span>
          <span>
            <strong>VAIBHAV</strong>
            <small>SONKUSARE / DIGITAL STUDIO</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {[
            ['work', 'Selected work'],
            ['services', 'Capabilities'],
            ['about', 'About'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <a key={id} href={anchorFor(id)} onClick={(event) => { event.preventDefault(); handleAnchor(id); }}>
              <span>{label}</span>
              <i />
            </a>
          ))}
        </nav>

        <a className="nav-talk" href={anchorFor('contact')} onClick={(event) => { event.preventDefault(); handleAnchor('contact'); }}>
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>

        <button className="mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mobile-nav" aria-label="Mobile navigation">
          {[
            ['work', 'Selected work'],
            ['services', 'Capabilities'],
            ['about', 'About'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <a key={id} href={anchorFor(id)} onClick={(event) => { event.preventDefault(); handleAnchor(id); }}>{label}</a>
          ))}
        </motion.nav>
      )}

      <main id="top">
        <section className="cinematic-hero">
          <video
            ref={videoRef}
            className="hero-backdrop hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={PERSONAL_INFO.heroBackgroundImage}
            aria-hidden="true"
          >
            <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
            <source src="./hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-light-leak" aria-hidden="true" />

          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-copy">
              <motion.div variants={reveal} className="eyebrow"><span className="status-dot" /> {PERSONAL_INFO.availabilityStatus} <em>2026</em></motion.div>
              <motion.h1 variants={reveal}>
                <span>Ideas into</span>
                <span className="hero-script">digital</span>
                <span className="hero-outline">experiences.</span>
              </motion.h1>
              <motion.p variants={reveal} className="hero-lede">
                I&apos;m Vaibhav Sonkusare — a creative developer and web designer shaping bold brands into cinematic digital spaces.
              </motion.p>
              <motion.div variants={reveal} className="hero-actions">
                <button className="brass-button" onClick={() => handleAnchor('work')} data-cursor="link" data-cursor-text="WORK">
                  Explore the work <ArrowUpRight size={15} />
                </button>
                <button className="quiet-button" onClick={() => handleAnchor('contact')} data-cursor="link" data-cursor-text="TALK">
                  Start a conversation <MoveRight size={15} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.55 }} className="hero-aside">
              <span className="hero-aside-quote">“</span>
              <p>Design with intention.<br />Build for impact.</p>
              <div className="signature-line" />
              <span className="signature">Vaibhav</span>
            </motion.div>
          </div>

          <div className="hero-footer">
            <div><span className="label">Based in</span><strong>Mumbai, India</strong></div>
            <div><span className="label">Focus</span><strong>Design / Development / Motion</strong></div>
            <div>
              <span className="label">Sound</span>
              <button
                type="button"
                onClick={toggleSound}
                className="sound-toggle-btn"
                aria-label={isMuted ? 'Unmute hero video sound' : 'Mute hero video sound'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isMuted ? 'Audio Off' : 'Audio On'}</span>
              </button>
            </div>
            <div><span className="label">Scroll to direct</span><button onClick={() => handleAnchor('about')} aria-label="Scroll to about"><ArrowDown size={17} /></button></div>
          </div>
        </section>

        <section id="about" className="cinematic-section manifesto-section">
          <div className="section-index">01 / THE DIRECTOR</div>
          <div className="manifesto-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="manifesto-copy">
              <motion.h2 variants={reveal}>A website should<br /><span>feel like something.</span></motion.h2>
              <motion.p variants={reveal}>
                I build websites for people who care about the details. The first frame, the pause between sections, the moment a visitor knows they have found the right place.
              </motion.p>
              <motion.p variants={reveal}>
                My work sits at the intersection of visual direction, front-end craft, interaction and business clarity — turning ambitious ideas into digital experiences with a point of view.
              </motion.p>
              <motion.div variants={reveal} className="signature-block">
                <span className="signature">Vaibhav Sonkusare</span>
                <small>Creative Developer / Web Designer</small>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1 }} className="portrait-frame">
              <img src={PERSONAL_INFO.profilePhotoPlaceholder} alt="Vaibhav Sonkusare in his studio" />
              <div className="portrait-overlay" />
              <div className="portrait-caption"><span>VS / 01</span><span>Studio portrait</span></div>
            </motion.div>
          </div>

          <div className="stat-row">
            <div><strong>09</strong><span>Interactive concepts</span></div>
            <div><strong>06</strong><span>Core disciplines</span></div>
            <div><strong>01</strong><span>Integrated workflow</span></div>
            <div><strong>∞</strong><span>Room for ambition</span></div>
          </div>
        </section>

        <section id="services" className="cinematic-section capabilities-section">
          <div className="section-heading-row">
            <div className="section-index">02 / THE TOOLKIT</div>
            <p>One creative partner from first sketch to final interaction.</p>
          </div>
          <div className="capabilities-intro">
            <h2>Crafted for<br /><span>attention.</span></h2>
            <p>Strategy, visual systems and code working as one continuous shot — with enough room for surprise.</p>
          </div>
          <div className="service-list">
            {SERVICES_DATA.slice(0, 6).map((service, index) => (
              <motion.div key={service.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal} className="service-row">
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <ArrowUpRight className="service-arrow" size={18} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="work" className="cinematic-section work-section">
          <div className="section-heading-row">
            <div className="section-index">03 / SELECTED WORK</div>
            <p>Concepts, systems and digital worlds built to be remembered.</p>
          </div>
          <div className="work-heading">
            <h2>Scenes from<br /><span>the reel.</span></h2>
            <span className="work-count">{String(PORTFOLIO_PROJECTS.length).padStart(2, '0')} projects / 2026</span>
          </div>

          <div className="project-grid">
            {PORTFOLIO_PROJECTS.slice(0, 6).map((project, index) => (
              <motion.article key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal} className={`project-card project-card-${index + 1}`}>
                <button className="project-visual" onClick={() => setActiveProject(project)} style={{ backgroundImage: `linear-gradient(135deg, ${project.previewCardStyle})` }} data-cursor="view" data-cursor-text="VIEW">
                  <span className="project-number">{project.index}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-brand">{project.brandName}</span>
                  <span className="project-glow" />
                  <span className="project-open"><ArrowUpRight size={17} /></span>
                </button>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><span>{project.year} / {project.layoutVariant.replace(/-/g, ' ')}</span></div>
                  <button onClick={() => setActiveProject(project)} aria-label={`Open ${project.brandName} case study`}>Case study <ArrowUpRight size={14} /></button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="work-tail">
            <span>More experiments live inside the studio.</span>
            <a href={anchorFor('contact')} onClick={(event) => { event.preventDefault(); handleAnchor('contact'); }}>Commission a scene <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="cinematic-section process-section">
          <div className="section-heading-row">
            <div className="section-index">04 / THE PROCESS</div>
            <p>A considered process keeps the magic useful.</p>
          </div>
          <div className="process-layout">
            <h2>From first<br /><span>frame to final cut.</span></h2>
            <div className="process-timeline">
              {WORKFLOW_STEPS.map((step) => (
                <div className="process-step" key={step.stepNumber}>
                  <span>{step.stepNumber}</span>
                  <div><h3>{step.stepName}</h3><p>{step.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-wash" aria-hidden="true" />
          <div className="section-index">05 / THE FINAL FRAME</div>
          <div className="contact-inner">
            <p className="contact-kicker">Have a story worth building?</p>
            <h2>Let&apos;s make<br /><span>something felt.</span></h2>
            <a className="contact-email" href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email} <ArrowUpRight size={20} /></a>
            <div className="contact-details">
              <span><MapPin size={14} /> {PERSONAL_INFO.location}</span>
              <span><Check size={14} /> Available for select projects</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="cinematic-footer">
        <div className="footer-brand"><span className="wordmark-mark">VS</span><span>VAIBHAV SONKUSARE</span></div>
        <div className="footer-links">
          <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
          <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
          <a href={`mailto:${PERSONAL_INFO.email}`}><Mail size={15} /> Email</a>
        </div>
        <span className="footer-note">© 2026 / Designed and built in Mumbai</span>
      </footer>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={setActiveProject}
        allProjects={PORTFOLIO_PROJECTS}
      />
    </div>
  );
};

export default CinematicHome;
