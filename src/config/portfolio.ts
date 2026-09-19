export interface ProjectCaseStudy {
  about: string;
  challenge: string;
  strategy: string;
  design: string;
  interaction: string;
  technology: string[];
  objective: string;
  clientNotice: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  brandName: string;
  category: string;
  year: string;
  headline: string;
  shortDescription: string;
  isConcept: boolean;
  accentColor: string;
  previewCardStyle: string;
  layoutVariant: 'large-image' | 'split-layout' | 'full-width' | 'overlapping' | 'horizontal-gallery' | 'dark-cinematic' | 'typography-driven' | 'image-story' | 'long-form-scroll';
  highlights: string[];
  demoRoute: string;
  caseStudy: ProjectCaseStudy;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "forma-architecture",
    index: "01",
    title: "Monolithic Architecture & Interior Studio",
    brandName: "FORMA",
    category: "Architecture & Interior Design",
    year: "2026",
    headline: "Minimal, Architectural Digital Experience for Contemporary Spaces",
    shortDescription: "A brutalist-minimalist architectural portfolio with monolithic proportions, edge-to-edge structural photography, blueprint-inspired line grids, and tactile material inspection.",
    isConcept: true,
    accentColor: "#E5A958",
    previewCardStyle: "from-[#0D0E12] via-[#161820] to-[#252833]",
    layoutVariant: "large-image",
    highlights: [
      "Spatial layout with edge-to-edge structural photography",
      "Dynamic CAD blueprint cursor overlay on project elevations",
      "Interactive material library (Travertine, Raw Concrete, Smoked Glass)",
      "Private client RFP & consultation builder"
    ],
    demoRoute: "#/demo/forma",
    caseStudy: {
      about: "FORMA is an architectural practice specializing in monolithic private residences and cultural spaces across Europe and Asia. The goal was to build a digital presence that feels as permanent, tactile, and restrained as their physical buildings.",
      challenge: "Most architectural portfolios are passive image galleries that fail to convey volume, scale, or the intellectual rigor of structural engineering.",
      strategy: "We structured the experience as an architectural monograph: bold typographic headers, blueprint lines, and scroll-driven elevations that invite deep inspection.",
      design: "Travertine and graphite foundations paired with crisp grotesk headlines, strict column alignments, and intentional whitespace.",
      interaction: "Smooth scroll pacing with weighted inertia, image scaling on approach, and an interactive spatial blueprint viewer.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
      objective: "Position FORMA as a premier international authority, accelerating multi-million dollar residential commissions.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate luxury architectural web design."
    }
  },
  {
    id: "maison-restaurant",
    index: "02",
    title: "Contemporary Michelin Dining & Cellar",
    brandName: "MAISON",
    category: "Hospitality & Restaurant",
    year: "2026",
    headline: "Cinematic, Dark Culinary Showcase & Reservation Suite",
    shortDescription: "An evocative evening culinary experience pairing deep mahogany textures with champagne gold accents, interactive seasonal tasting menus, and real-time private dining reservations.",
    isConcept: true,
    accentColor: "#D49D42",
    previewCardStyle: "from-[#140F0A] via-[#211812] to-[#36261C]",
    layoutVariant: "split-layout",
    highlights: [
      "Interactive seasonal 5-course degustation menu with sommelier pairings",
      "Atmospheric photography treatment with 3D tilt & soft lighting",
      "VIP private dining reservation modal with calendar selection",
      "Cellar vault vintage archive with filtered origin notes"
    ],
    demoRoute: "#/demo/maison",
    caseStudy: {
      about: "MAISON is a modern Michelin-starred culinary destination celebrating hyper-seasonal ingredients and rare European vintages. The website serves as the guest's initial gastronomic contact point.",
      challenge: "High-end dining websites frequently suffer from slow PDF menus, clunky third-party reservation embeds, and an absence of sensory mood.",
      strategy: "We built an atmospheric digital salon that evokes the warmth of evening candlelight. Menus are interactive, accessible, and dietary-aware, integrated with a frictionless booking UX.",
      design: "Deep mahogany and obsidian base, champagne gold typography, high-contrast serif headlines, and rich editorial photography.",
      interaction: "Sensory hover state highlights on tasting dishes, subtle ambient lighting pulses, and an instant table voucher generation modal.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Web Audio API", "Motion Primitives"],
      objective: "Elevate reservation conversion speed while establishing an unforgettable digital prelude to the meal.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate luxury hospitality web design."
    }
  },
  {
    id: "orbit-ai-saas",
    index: "03",
    title: "Next-Gen AI Productivity & Telemetry",
    brandName: "ORBIT",
    category: "AI / SaaS",
    year: "2026",
    headline: "Technical, Futuristic Observability & Autonomous Workflow Platform",
    shortDescription: "A high-conversion developer SaaS platform designed with live interactive trace sandboxes, eBPF telemetry previews, and a transparent pricing calculator.",
    isConcept: true,
    accentColor: "#00F2FE",
    previewCardStyle: "from-[#060D1A] via-[#0A162B] to-[#12274A]",
    layoutVariant: "full-width",
    highlights: [
      "Interactive simulated telemetry stream & latency waterfall",
      "Modular capability matrix with 3D perspective tilt",
      "Monthly vs annual pricing switcher with instant tier calculations",
      "Developer CLI copy terminal & documentation links"
    ],
    demoRoute: "#/demo/orbit",
    caseStudy: {
      about: "ORBIT is an AI-powered cloud observability platform engineered for high-growth software infrastructure teams needing real-time distributed telemetry.",
      challenge: "Technical B2B SaaS landing pages often drown users in dense jargon or generic purple gradients without proving tangible product value.",
      strategy: "We placed an interactive, simulated real-time telemetry dashboard directly above the fold, allowing technical buyers to test the platform before registering.",
      design: "Deep space navy base, electric cyan and ultraviolet luminescence, monospace telemetry accents, and crisp Swiss typography.",
      interaction: "Live filterable trace streams, interactive architecture tabs, and zero-friction trial checkout flow.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "State Machine Streaming", "Canvas Charts"],
      objective: "Maximize trial activation and communicate enterprise-grade reliability in under 5 seconds of viewport dwell time.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate high-conversion B2B SaaS web design."
    }
  },
  {
    id: "atelier27-fashion",
    index: "04",
    title: "Haute Couture & Luxury Fashion Studio",
    brandName: "ATELIER 27",
    category: "Fashion",
    year: "2026",
    headline: "Editorial, Photography-Led Digital Runway & Fitting Portal",
    shortDescription: "An editorial digital magazine lookbook with horizontal runway scrolling, macro fabric textures, bespoke look composition, and VIP concierge booking.",
    isConcept: true,
    accentColor: "#E0B384",
    previewCardStyle: "from-[#120F12] via-[#1E1920] to-[#2E2430]",
    layoutVariant: "overlapping",
    highlights: [
      "Editorial horizontal runway lookbook with inertial drag",
      "High-resolution textile zoom with tactile micro-interactions",
      "Private salon fitting request terminal with concierge routing",
      "Bespoke sound design for collection premieres"
    ],
    demoRoute: "#/demo/atelier27",
    caseStudy: {
      about: "ATELIER 27 produces limited-run artisanal garments bridging heritage craftsmanship and contemporary silhouettes for international fashion collectors.",
      challenge: "Conveying the tactile drape of silk, wool, and hand-stitched leather on digital screens without relying on generic e-commerce product grids.",
      strategy: "Designed as an interactive fashion editorial with oversized serif typography, asymmetric model pairings, and full-bleed runway transitions.",
      design: "Smoked aubergine and ivory palette, delicate hairline dividers, Cormorant Garamond italic display, and cinematic crop ratios.",
      interaction: "Momentum-driven horizontal gallery exploration, fluid cursor interactive expansion, and private concierge consultation booking.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Three.js Fabric Shaders", "Custom Drag Hooks"],
      objective: "Elevate perceived brand value and establish an appointment-only sales channel for international private clients.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate luxury fashion web design."
    }
  },
  {
    id: "arc-residences",
    index: "05",
    title: "Ultra-Luxury Architectural Residences",
    brandName: "ARC",
    category: "Real Estate",
    year: "2026",
    headline: "Architectural, Minimal Private Estate & Penthouse Platform",
    shortDescription: "A sophisticated real estate showcase featuring panoramic skyline viewpoints, architectural unit selector, interactive sun-path simulation, and private sales gallery appointments.",
    isConcept: true,
    accentColor: "#D6A354",
    previewCardStyle: "from-[#0C0F14] via-[#141A24] to-[#1E2636]",
    layoutVariant: "horizontal-gallery",
    highlights: [
      "Interactive 3D building stack with unit availability overlay",
      "Dawn-to-dusk skyline lighting simulation",
      "Floorplan PDF download generator & private broker dossier",
      "Encrypted VIP inquiry channel"
    ],
    demoRoute: "#/demo/arc",
    caseStudy: {
      about: "ARC is a portfolio of ultra-prime penthouses and private estate developments situated in global capital centers.",
      challenge: "High-net-worth buyers expect absolute discretion, architectural fidelity, and effortless unit exploration without cumbersome portals.",
      strategy: "Created a minimalist digital salon where prospective buyers can inspect spatial layouts, ceiling heights, panoramic view corridors, and finishes.",
      design: "Deep slate black, brushed bronze accents, architectural typography, and ultra-high-definition architectural renderings.",
      interaction: "Interactive floorplate switching, smooth altitude viewpoint toggles, and direct concierge relay.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "SVG Floorplate Parser"],
      objective: "Facilitate virtual sales presentations for global brokers with zero lag and total brand elegance.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate luxury real estate web design."
    }
  },
  {
    id: "vanta-automotive",
    index: "06",
    title: "High-Performance Electric Hypercars",
    brandName: "VANTA",
    category: "Automotive",
    year: "2026",
    headline: "Cinematic, Dark Motion-Heavy Vehicle Atelier",
    shortDescription: "An electrifying automotive experience showcasing wind-tunnel aerodynamics, 0-100 km/h acceleration telemetry, bespoke color configurator, and allocation reservations.",
    isConcept: true,
    accentColor: "#FF462D",
    previewCardStyle: "from-[#140907] via-[#21100D] to-[#361A15]",
    layoutVariant: "dark-cinematic",
    highlights: [
      "Interactive 3D aerodynamic wind tunnel particle stream",
      "Real-time powertrain efficiency & telemetry graphs",
      "Vehicle livery & forged wheel configurator",
      "Priority production allocation deposit flow"
    ],
    demoRoute: "#/demo/vanta",
    caseStudy: {
      about: "VANTA engineers bespoke, limited-production electric hypercars engineered for track dominance and aesthetic majesty.",
      challenge: "Capturing the raw adrenaline of extreme mechanical velocity and computational propulsion inside a web browser.",
      strategy: "Built a cyber-athletic interface with high-contrast typography, kinetic speed reveals, and real-time aerodynamics simulation.",
      design: "Carbon-black foundations, incandescent cadmium red highlights, technical telemetry type, and razor-sharp edge detailing.",
      interaction: "Real-time particle flow reacts to user acceleration input, vehicle livery switchers, and instant allocation reserving.",
      technology: ["Three.js", "WebGL GLSL Shaders", "React 18", "Tailwind CSS", "Web Audio Throttle Synth"],
      objective: "Sell out initial limited allocation runs through sensory digital previews.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate performance automotive web design."
    }
  },
  {
    id: "noir-creative-studio",
    index: "07",
    title: "Avant-Garde Digital Creative Studio",
    brandName: "NOIR",
    category: "Creative Agency",
    year: "2026",
    headline: "Experimental, Typography-Driven Interactive Digital Direction",
    shortDescription: "An award-winning agency concept featuring kinetic typographic choreography, interactive experimental laboratory, and bespoke creative proposal compiler.",
    isConcept: true,
    accentColor: "#A855F7",
    previewCardStyle: "from-[#0F0816] via-[#1B0F26] to-[#2B183D]",
    layoutVariant: "typography-driven",
    highlights: [
      "Large-scale kinetic typography with text-mask reveals",
      "Interactive case study inspection drawers",
      "Experimental WebGL physics sandbox",
      "Integrated project brief builder"
    ],
    demoRoute: "#/demo/noir",
    caseStudy: {
      about: "NOIR is an independent creative studio partnering with culture-defining brands across art, entertainment, and fashion.",
      challenge: "Standing out in a saturated landscape of cookie-cutter agency portfolios that rely on generic templates.",
      strategy: "Engineered an experimental, magazine-like interface with dramatic contrast between loud typographic gestures and quiet, architectural moments.",
      design: "Obsidian backdrop with ultraviolet luminescence, brutalist typography scales, and asymmetric layout grids.",
      interaction: "Elastic magnetic buttons, velocity-based cursor morphing, and fluid layout morphing transitions.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Custom Audio Engine"],
      objective: "Command international design awards attention and generate high-ticket agency briefs.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate creative agency web design."
    }
  },
  {
    id: "kanvaa-indian-heritage",
    index: "08",
    title: "Contemporary Indian Luxury & Handcrafted Heritage",
    brandName: "KANVAA",
    category: "Indian Craft",
    year: "2026",
    headline: "Cultural, Modern Luxury Celebrating Indian Handloom Artistry",
    shortDescription: "A celebration of artisanal Indian craftsmanship pairing rich indigenous motifs with contemporary minimalist typography, weaver artisan profiles, and global collectors store.",
    isConcept: true,
    accentColor: "#E5A958",
    previewCardStyle: "from-[#141008] via-[#211A0D] to-[#362A14]",
    layoutVariant: "image-story",
    highlights: [
      "Interactive map of artisan weaving villages across Varanasi, Gujarat & Bengal",
      "Loom soundscape audio experience recorded in artisan workshops",
      "Limited edition textile provenance certificates on blockchain",
      "Global multi-currency checkout in USD, EUR, GBP & INR"
    ],
    demoRoute: "#/demo/kanvaa",
    caseStudy: {
      about: "KANVAA is a contemporary Indian luxury atelier dedicated to revitalizing ancient handloom traditions through modern design collaborations and global direct-to-patron storytelling.",
      challenge: "Translating centuries-old Indian craft techniques into a modern luxury design language that resonates with global connoisseurs while avoiding cliché orientalist tropes.",
      strategy: "Combined clean Swiss typography with rich terracotta and gold accents, macro loom footage, and transparent supply-chain documentation.",
      design: "Deep spice charcoal, raw silk cream, marigold gold accents, and bilingual typographic ligatures.",
      interaction: "Interactive loom rhythm synthesizer, artisan village map, and single-click reserve flow.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Audio Synthesizer", "Mapbox GL"],
      objective: "Connect indigenous artisan cooperatives directly with international collectors, ensuring fair wages and cultural preservation.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate Indian heritage & luxury craft web design."
    }
  },
  {
    id: "farm-fresh-foodnia",
    index: "09",
    title: "Artisanal Agriculture & Regenerative Food Systems",
    brandName: "VERDANT LABS",
    category: "Food / FMCG",
    year: "2026",
    headline: "Long-Form Food Supply-Chain Storytelling: Agriculture to Consumer",
    shortDescription: "An advanced storytelling food business experience charting the complete lifecycle: Organic Soil Agriculture → Agronomic Research → Culinary Formulation → Clean Production → Cold-Chain Distribution → Mindful Consumer Dining.",
    isConcept: true,
    accentColor: "#10B981",
    previewCardStyle: "from-[#08140E] via-[#0E2117] to-[#163324]",
    layoutVariant: "long-form-scroll",
    highlights: [
      "6-Stage chronological narrative timeline: Agriculture to Consumer",
      "Interactive microbial soil health & nutrient density data visualizer",
      "Farm-to-fork batch traceability barcode scanner preview",
      "Direct-to-consumer regenerative subscription CSA portal"
    ],
    demoRoute: "#/demo/farm-fresh",
    caseStudy: {
      about: "VERDANT LABS is a regenerative organic agriculture & food science enterprise producing nutrient-dense foods while sequestering carbon and restoring soil biodiversity.",
      challenge: "Modern consumers are skeptical of vague 'farm-to-table' marketing claims and demand verifiable transparency across every link of the food supply chain.",
      strategy: "Adopted structural UX storytelling (inspired by deep Japanese food business transparency like Foodnia): guiding the user step-by-step from regenerative agriculture, biological research, precision formulation, zero-waste packaging, cold-chain distribution, to the final table.",
      design: "Deep forest moss foundations, organic sage green accents, tactile paper textures, scientific macro botanical photography, and clean data callouts.",
      interaction: "Chronological scroll-driven chapters, interactive batch genealogy explorer, and nutritional bio-availability graphs.",
      technology: ["React 18", "TypeScript", "Tailwind CSS", "Scroll-Driven Tracing", "SVG Data Visualizations"],
      objective: "Establish radical consumer trust, commanding a 40% premium over conventional organic brands and winning grocery retail distribution.",
      clientNotice: "CONCEPT PROJECT — Created by Vaibhav Sonkusare to demonstrate advanced UX storytelling for food & FMCG enterprises."
    }
  }
];
