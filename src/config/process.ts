export interface WorkflowStep {
  stepNumber: string;
  stepName: string;
  headline: string;
  description: string;
  icon: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    stepName: "Discovery",
    headline: "Understanding Your Vision",
    description: "You share your business background, primary goals, website requirements, and desired budget through direct communication.",
    icon: "Compass"
  },
  {
    stepNumber: "02",
    stepName: "Planning",
    headline: "Scope, Proposal & Timeline",
    description: "I review your specifications in detail and prepare an actionable project scope, transparent proposal, and estimated timeline.",
    icon: "FileCheck"
  },
  {
    stepNumber: "03",
    stepName: "Design and Development",
    headline: "Building the Experience",
    description: "I craft the website using an intentional combination of no-code tools and AI-assisted custom development for optimal polish and speed.",
    icon: "Code2"
  },
  {
    stepNumber: "04",
    stepName: "Review",
    headline: "Collaborative Feedback",
    description: "You review the functional website previews and provide targeted feedback to ensure alignment with the agreed project scope.",
    icon: "Eye"
  },
  {
    stepNumber: "05",
    stepName: "Delivery",
    headline: "Launch & Handover",
    description: "I deliver the completed website to your hosting environment and provide clear instructions for ongoing content maintenance.",
    icon: "Rocket"
  }
];

export interface PricingPackage {
  id: string;
  packageName: string;
  tagline: string;
  priceDisplay: string; // Set to "Request a Quote" until approved by client
  numberOfPages: string;
  estimatedDeliveryTime: string;
  revisionPolicy: string;
  includedFeatures: string[];
  additionalServices: string;
  isPopular?: boolean;
}

/**
 * CONFIGURABLE SERVICE PACKAGES
 * Note: Prices default to "Request a Quote" per instructions until approved.
 * Final price is always determined by the exact project scope.
 */
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter-website",
    packageName: "Starter Website",
    tagline: "Ideal for product launches, single offers, or simple personal presence.",
    priceDisplay: "Request a Quote",
    numberOfPages: "Single Page / Landing Page",
    estimatedDeliveryTime: "1 to 2 Weeks (Estimated)",
    revisionPolicy: "2 rounds of included revisions within scope",
    includedFeatures: [
      "Custom responsive single-page design",
      "AI-accelerated prototyping and styling",
      "Mobile and tablet responsive layout",
      "Direct email inquiry integration",
      "Essential SEO meta tags and social preview setup"
    ],
    additionalServices: "Optional domain configuration & copy assistance"
  },
  {
    id: "business-website",
    packageName: "Business Website",
    tagline: "Perfect for growing companies, creative studios, and service providers.",
    priceDisplay: "Request a Quote",
    numberOfPages: "3 to 6 Custom Pages",
    estimatedDeliveryTime: "2 to 4 Weeks (Estimated)",
    revisionPolicy: "2 rounds of included revisions within scope",
    includedFeatures: [
      "Multi-page architecture (Home, About, Services, Contact)",
      "Interactive showcase or portfolio gallery",
      "Tailored typography and high-contrast dark aesthetic",
      "Full mobile responsiveness across all devices",
      "Structured SEO metadata & OpenGraph tags",
      "14 days post-handover support"
    ],
    additionalServices: "Optional CMS setup & performance optimization",
    isPopular: true
  },
  {
    id: "premium-website",
    packageName: "Premium Website",
    tagline: "Designed for unique brands seeking custom interactions or 3D elements.",
    priceDisplay: "Request a Quote",
    numberOfPages: "Custom Scope (5+ Pages or Bespoke App)",
    estimatedDeliveryTime: "3 to 6 Weeks (Estimated)",
    revisionPolicy: "Collaborative milestone-based review rounds",
    includedFeatures: [
      "Custom coded interactive elements or 3D visual centerpiece",
      "Complete brand visual identity implementation",
      "Advanced responsive interactions and micro-animations",
      "International multi-currency display capabilities",
      "Priority direct communication throughout project lifecycle"
    ],
    additionalServices: "Custom integrations & tailored deployment setups"
  }
];
