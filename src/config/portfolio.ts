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
  caseStudy: ProjectCaseStudy;
}

export const DEMO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-a-business",
    projectCode: "Project A",
    title: "Modern Business Website",
    brandName: "Vanguard Strategy Group",
    category: "Business Website",
    headline: "International Management Consultancy & Advisory Platform",
    shortDescription: "A sophisticated multi-section business website designed to establish authority, present complex advisory practices clearly, and drive corporate consultation inquiries.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-blue-600 to-cyan-500",
    previewCardStyle: "from-[#0A1128] via-[#101F42] to-[#1C3166]",
    highlights: [
      "Complete structured homepage layout",
      "Dedicated advisory services directory",
      "Executive team and methodology section",
      "Corporate consultation booking interface"
    ],
    caseStudy: {
      designGoals: "Create a commanding, trustworthy digital presence suitable for an international corporate consulting firm, emphasizing clarity, intellectual rigour, and transparent service offerings.",
      designDecisions: [
        "Adopted deep navy and charcoal hues with crisp white typography for high institutional authority.",
        "Structured modular practice area cards to prevent visual fatigue on dense technical content.",
        "Engineered an intuitive consultation inquiry flow to reduce friction for prospective corporate clients."
      ],
      toolsAndMethods: [
        "AI-assisted structure prototyping for rapid content modeling",
        "React & Tailwind CSS for modern responsive performance",
        "Semantic HTML5 architecture for structured search indexing"
      ],
      demonstrationOverview: "Demonstrates end-to-end multi-page layout architecture, corporate typography hierarchy, and business consultation lead capture workflows.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. It was not commissioned by an active client."
    }
  },
  {
    id: "project-b-saas",
    projectCode: "Project B",
    title: "SaaS Landing Page",
    brandName: "PulseFlow AI",
    category: "Landing Page",
    headline: "Conversion-Focused Landing Page for a Next-Gen Team Telemetry Tool",
    shortDescription: "A high-conversion landing page for a fictional software product, engineered with an impactful hero section, dynamic feature highlights, pricing matrices, FAQ, and conversion CTAs.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-violet-600 to-indigo-500",
    previewCardStyle: "from-[#130924] via-[#21113E] to-[#361D66]",
    highlights: [
      "Hero section with dynamic visual software preview",
      "Interactive 3-pillar feature breakdown",
      "Interactive monthly/annual pricing matrix layout",
      "Comprehensive FAQ accordion and final conversion callout"
    ],
    caseStudy: {
      designGoals: "Demonstrate conversion rate optimization (CRO) principles by guiding the visitor through a deliberate storytelling journey from problem identification to product trial.",
      designDecisions: [
        "Positioned primary CTA above the fold with subtle glow reinforcement.",
        "Utilized modern glassmorphic preview cards to showcase software dashboards cleanly.",
        "Structured a responsive FAQ accordion to address client pre-sale objections proactively."
      ],
      toolsAndMethods: [
        "AI-accelerated layout iteration and copywriting frameworks",
        "CSS micro-animations and smooth scroll triggers",
        "Accessible interactive UI components"
      ],
      demonstrationOverview: "Demonstrates high-converting SaaS landing page design, conversion copywriting structure, and interactive components.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. No real sales, traffic, or client figures are claimed."
    }
  },
  {
    id: "project-c-ecommerce",
    projectCode: "Project C",
    title: "E-commerce Concept",
    brandName: "Solis Horology",
    category: "E-commerce Storefront",
    headline: "Minimalist Online Storefront for Bespoke Mechanical Timepieces",
    shortDescription: "A premium e-commerce storefront concept showcasing high-end product cards, detailed specification modals, dynamic cart drawer preview, and multi-currency navigation.",
    isConcept: true,
    statusBadge: "Concept Project — Demonstration Only",
    accentGradient: "from-amber-500 to-orange-600",
    previewCardStyle: "from-[#1F1404] via-[#332207] to-[#54380C]",
    highlights: [
      "Editorial product grid with tactile hover states",
      "Product detail preview layout with specifications",
      "Interactive slide-over cart drawer mockup",
      "Dynamic currency display indicator (USD / EUR / GBP)"
    ],
    caseStudy: {
      designGoals: "Showcase the ability to design high-end luxury e-commerce experiences that evoke craftsmanship through generous whitespace, restrained palettes, and smooth shopping interactions.",
      designDecisions: [
        "Kept product photography front-and-center with minimal distracting chrome.",
        "Designed a seamless cart summary drawer to preview the complete purchase journey without page jumps.",
        "Included international currency indicators for global shoppers."
      ],
      toolsAndMethods: [
        "React state management for real-time cart interaction simulation",
        "Tailwind CSS responsive grid system for fluid product sizing",
        "Optimized vector iconography for crisp display across Retina screens"
      ],
      demonstrationOverview: "Demonstrates luxury e-commerce aesthetics, product catalog layouts, interactive cart drawer UX, and international shopping patterns.",
      clientNotice: "This is an original concept project created for visual and architectural demonstration. Not an active transactional retail store."
    }
  }
];
