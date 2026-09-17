export type ServiceStatus = "Available Now" | "In Active Development";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  businessBenefit: string;
  keyDeliverables: string[];
  icon: string;
  status: ServiceStatus;
  ctaText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    shortDesc: "Structured, multi-page business websites designed to build immediate credibility with international clients and present your offerings clearly.",
    businessBenefit: "Transforms passive visitors into qualified leads through thoughtful visual hierarchy and clear conversion pathways.",
    keyDeliverables: ["Custom multi-page architecture", "Lead capture & consultation forms", "Clean SEO & mobile responsiveness"],
    icon: "Building2",
    status: "Available Now",
    ctaText: "Discuss Business Website"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    shortDesc: "High-impact, single-goal landing pages built for product launches, ad campaigns, and founder waitlists.",
    businessBenefit: "Maximizes conversion rates by focusing visitor attention strictly on your primary business proposition without distraction.",
    keyDeliverables: ["Conversion-focused layout", "A/B test ready structure", "Lightning-fast initial page load"],
    icon: "Rocket",
    status: "Available Now",
    ctaText: "Discuss Landing Page"
  },
  {
    id: "personal-portfolios",
    title: "Personal Portfolio Websites",
    shortDesc: "Editorial, high-authority websites for consultants, creators, executives, and freelancers looking to elevate their personal brand.",
    businessBenefit: "Positions you as a serious industry professional, opening doors for speaking engagements, client contracts, and collaborations.",
    keyDeliverables: ["Curated case study showcases", "Interactive biography & media kit", "Direct inquiry integration"],
    icon: "Sparkles",
    status: "Available Now",
    ctaText: "Discuss Portfolio Website"
  },
  {
    id: "ecommerce-websites",
    title: "E-commerce Websites",
    shortDesc: "Modern, streamlined digital storefronts designed for boutique brands and digital product sellers.",
    businessBenefit: "Delivers an enjoyable, frictionless purchasing journey with responsive product showcases and clear checkout guidance.",
    keyDeliverables: ["Curated product catalog layout", "Cart & checkout UI flow", "Multi-currency display support"],
    icon: "ShoppingBag",
    status: "Available Now",
    ctaText: "Discuss E-commerce Store"
  },
  {
    id: "website-redesigns",
    title: "Website Redesigns",
    shortDesc: "Modernization of outdated, cluttered, or underperforming websites into sleek, responsive digital assets.",
    businessBenefit: "Restores brand reputation, lowers bounce rates, and aligns your digital presence with contemporary global design standards.",
    keyDeliverables: ["Aesthetic design overhaul", "Content re-alignment", "Mobile experience optimization"],
    icon: "RefreshCw",
    status: "Available Now",
    ctaText: "Discuss Website Redesign"
  },
  {
    id: "responsive-development",
    title: "Responsive Website Development",
    shortDesc: "Precision frontend development guaranteeing pixel-perfect typography and fluid interactions across smartphones, tablets, and 4K displays.",
    businessBenefit: "Ensures zero lost opportunities by serving flawless mobile experiences to visitors in any timezone or device.",
    keyDeliverables: ["Mobile-first fluid layouts", "Cross-browser tested styles", "Zero horizontal overflow"],
    icon: "Smartphone",
    status: "Available Now",
    ctaText: "Discuss Responsive Build"
  },
  {
    id: "ai-assisted-creation",
    title: "AI-Assisted Website Creation",
    shortDesc: "Harnessing modern AI design and code-assist tools to accelerate prototyping, explore layouts rapidly, and eliminate agency overhead.",
    businessBenefit: "Allows faster delivery and iterative refinement while maintaining strict manual polish and code cleanliness.",
    keyDeliverables: ["Rapid prototype generation", "AI-optimized copy structure", "Clean, maintainable code"],
    icon: "Cpu",
    status: "Available Now",
    ctaText: "Discuss AI-Assisted Project"
  },
  {
    id: "maintenance-improvements",
    title: "Website Maintenance & Improvements",
    shortDesc: "Ongoing technical support, speed optimizations, periodic content updates, and incremental design enhancements.",
    businessBenefit: "Keeps your web property dependable, secure, and fresh without needing a full-time in-house developer.",
    keyDeliverables: ["Performance checkups", "Content updates & additions", "Direct technical support"],
    icon: "Wrench",
    status: "In Active Development",
    ctaText: "Inquire About Maintenance"
  }
];
