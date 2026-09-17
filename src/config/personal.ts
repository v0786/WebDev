/**
 * MASTER BRAND & PERSONAL CONFIGURATION
 * Vaibhav Sonkusare — Creative Web Studio
 */

export interface PersonalConfig {
  brandName: string;
  fullName: string;
  heroHeadline: string;
  heroSupportingHeadline: string;
  heroSupportingParagraph: string;
  
  // Contact Channels
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsAppNumber: string; // Set when provided by user
  isWhatsAppConfigured: boolean;
  domainPlaceholder: string;
  
  // Visual Assets
  logoPlaceholder: string;
  profilePhotoPlaceholder: string;
  heroBackgroundImage: string;
  
  // About Me Section
  aboutHeading: string;
  aboutBio: string[];
  
  // Contact Section
  contactHeadline: string;
  contactSupportingText: string;
  availabilityStatus: string;
}

export const PERSONAL_INFO: PersonalConfig = {
  brandName: "Vaibhav Sonkusare — Creative Web Studio",
  fullName: "Vaibhav Sonkusare",
  heroHeadline: "Ideas Into Digital Experiences.",
  heroSupportingHeadline: "Bespoke websites for international startups and modern businesses.",
  heroSupportingParagraph: "I design and build fast, responsive websites combining AI-assisted prototyping with handcrafted React, TypeScript, and Tailwind CSS polish. Direct 1-on-1 collaboration, clear milestones, and global delivery.",
  
  // Verified Contact Points
  email: "sonkusare.doc@gmail.com",
  instagramHandle: "sonkusare_vaibhav",
  instagramUrl: "https://www.instagram.com/sonkusare_vaibhav/",
  
  // WhatsApp: Configurable. Will activate once phone number is confirmed.
  whatsAppNumber: "",
  isWhatsAppConfigured: false,
  
  // Custom Domain & Assets
  domainPlaceholder: "https://v0786.github.io/WebDev/",
  // Visual Assets (dynamic GitHub Pages base path)
  logoPlaceholder: `${import.meta.env.BASE_URL}images/sonkusare-vaibhav-logo.png`,
  heroBackgroundImage: `${import.meta.env.BASE_URL}images/vaibhav-bg.jpg`,
  profilePhotoPlaceholder: `${import.meta.env.BASE_URL}images/vaibhav-sonkusare.jpg`,
  
  // About Me Section Content
  aboutHeading: "A Little About Me",
  aboutBio: [
    "I'm Vaibhav Sonkusare, an independent creative web developer and designer collaborating with founders, businesses, and creators globally.",
    "I combine modern visual aesthetics, rapid AI-assisted workflows, and clean custom frontend engineering (React, TypeScript, Tailwind CSS) to deliver websites that communicate value clearly and convert visitors.",
    "Working directly with me means zero agency bureaucracy, rapid turnaround, asynchronous communication across time zones, and transparent milestone-based pricing in USD."
  ],
  
  // Contact Section Content
  contactHeadline: "Let's Build Something Great.",
  contactSupportingText: "Have a new business idea, a product launch, or an existing website to modernize? Tell me what you're planning, and let's discuss how we can bring it to life.",
  availabilityStatus: "Open for New International Enquiries"
};
