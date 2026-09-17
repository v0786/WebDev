export type ProjectType = "Project A" | "Project B" | "Project C";

export interface ProjectCaseStudy {
  designGoals: string;
  designDecisions: string[];
  toolsAndMethods: string[];
  demonstrationOverview: string;
  clientNotice: string;
}

export interface PortfolioProject {
  id: string;
  projectCode: ProjectType;
  title: string;
  brandName: string;
  category: string;
  headline: string;
  shortDescription: string;
  isConcept: boolean;
  statusBadge: string;
  accentGradient: string;
  previewCardStyle: string;
  highlights: string[];
  demoRoute: string;
  caseStudy: ProjectCaseStudy;
}

export const DEMO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-restaurant",
    projectCode: "Project A",
    title: "Luxury Restaurant Website",
    brandName: "L’Aura Haute Cuisine",
    category: "Hospitality & Dining",
    headline: "Michelin-Standard Gastronomic Showcase & Digital Reservation Suite",
    shortDescription: "A premium restaurant concept engineered with editorial serif typography, interactive seasonal menu highlights, sommelier cellar curation, atmospheric gallery, and real-time reservation booking interaction.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-amber-500 to-yellow-600",
    previewCardStyle: "from-[#17120F] via-[#241B16] to-[#382B21]",
    demoRoute: "#/restaurant",
    highlights: [
      "Hero section with Motion Primitives TextEffect & ambient lighting",
      "Interactive 5-category seasonal menu highlights & dietary badges",
      "Atmospheric photography showcase with 3D perspective Tilt & Spotlight",
      "Interactive table reservation modal with instant voucher generation"
    ],
    caseStudy: {
      designGoals: "Create a timeless, evocative digital presence for a luxury culinary establishment, balancing intimacy with smooth reservation conversion.",
      designDecisions: [
        "Adopted deep obsidian and warm mahogany tones with champagne gold accents for an intimate evening ambiance.",
        "Engineered interactive category tabs to allow guests to explore tasting menus and wine pairings effortlessly.",
        "Built a seamless reservation flow with visual validation and dietary accommodation fields."
      ],
      toolsAndMethods: [
        "Motion Primitives (InView, Tilt, Spotlight, TextEffect) for tasteful animations",
        "React 18 & Tailwind CSS for modern responsive fluid layouts",
        "Accessible ARIA attributes and reduced-motion graceful degradation"
      ],
      demonstrationOverview: "Demonstrates hospitality storytelling, luxury editorial typography, interactive menus, and complete reservation booking UX.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. It was not commissioned by an active client."
    }
  },
  {
    id: "project-saas",
    projectCode: "Project B",
    title: "SaaS Product Landing Page",
    brandName: "ApexFlow AI",
    category: "Software & SaaS Landing",
    headline: "Real-Time Telemetry & eBPF Observability Platform for Engineering Teams",
    shortDescription: "A high-conversion landing page for a cloud observability product, featuring dynamic live trace telemetry preview, 3 core architecture pillars, monthly/annual pricing matrix, and interactive trial signup.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-cyan-500 to-indigo-600",
    previewCardStyle: "from-[#080E1C] via-[#0E1B38] to-[#182E5C]",
    demoRoute: "#/saas",
    highlights: [
      "Live simulated telemetry waterfall & AI root-cause investigation tabs",
      "3-pillar capability cards with 3D Tilt and interactive Spotlight glow",
      "Monthly vs Annual pricing matrix with instant 20% discount calculation",
      "Interactive FAQ accordion and zero-friction trial activation modal"
    ],
    caseStudy: {
      designGoals: "Demonstrate conversion rate optimization (CRO) principles by guiding engineering decision-makers from problem identification to interactive product validation.",
      designDecisions: [
        "Positioned an interactive live sandbox dashboard above the fold to demonstrate product capability immediately.",
        "Adopted deep navy/slate hues with high-contrast cyan and violet accents for high technical authority.",
        "Structured an accessible FAQ accordion to address compliance and overhead objections directly."
      ],
      toolsAndMethods: [
        "React state management for simulated real-time telemetry streaming",
        "Motion Primitives for hardware-accelerated micro-interactions",
        "OpenTelemetry-aligned semantic data models"
      ],
      demonstrationOverview: "Demonstrates technical SaaS copywriting, conversion-focused layout architecture, and interactive product preview sandboxes.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. No real sales, traffic, or client figures are claimed."
    }
  },
  {
    id: "project-agency",
    projectCode: "Project C",
    title: "Creative Agency Website",
    brandName: "Studio Vektor",
    category: "Digital Studio & Agency",
    headline: "Avant-Garde Digital Architecture & Interactive Case Studies",
    shortDescription: "A visually distinctive agency concept showcasing selected client works with filterable categories, interactive case study drawers, 4-discipline capabilities, methodology timeline, and project brief builder.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-lime-400 to-emerald-500",
    previewCardStyle: "from-[#0A0D05] via-[#141A08] to-[#1F290B]",
    demoRoute: "#/agency",
    highlights: [
      "Large-scale typography with TextEffect word-reveal choreography",
      "Selected works gallery with interactive case study inspection drawers",
      "4-discipline service breakdown and 4-phase agile project timeline",
      "Integrated project brief builder modal with budget & timeline selection"
    ],
    caseStudy: {
      designGoals: "Showcase the ability to design unforgettable digital experiences for international luxury brands, tech pioneers, and design-led enterprises.",
      designDecisions: [
        "Employed high-contrast monochrome with electric lime accents and architectural grid typography.",
        "Designed slide-over case study preview drawers to let visitors inspect challenge, approach, and tech stack without page jumps.",
        "Created an intuitive brief submission flow for prospective international enterprise clients."
      ],
      toolsAndMethods: [
        "Motion Primitives for fluid layout transitions and mouse-follow lighting",
        "Modular TypeScript component architecture",
        "Zero-layout-shift responsive styling down to 320px mobile viewports"
      ],
      demonstrationOverview: "Demonstrates avant-garde creative direction, agency portfolio structuring, interactive case study modals, and project brief UX.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. Client names and case studies are fictional concept demonstrations."
    }
  }
];
