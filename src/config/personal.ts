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
  heroHeadline: "Ideas into Digital Experiences.",
  heroSupportingHeadline: "Modern websites, built with creativity and AI.",
  heroSupportingParagraph: "I help businesses, entrepreneurs, and creators turn their ideas into professional websites using a combination of AI-powered workflows, no-code tools, and custom development.",
  
  // Verified Contact Points
  email: "sonkusare.doc@gmail.com",
  instagramHandle: "sonkusare_vaibhav",
  instagramUrl: "https://www.instagram.com/sonkusare_vaibhav/",
  
  // WhatsApp: Verified International Contact
  whatsAppNumber: "+91 8652140271",
  isWhatsAppConfigured: true,
  
  // Custom Domain & Assets
  domainPlaceholder: "https://v0786.github.io/WebDev/",
  logoPlaceholder: "/images/logo.png",
  profilePhotoPlaceholder: "/images/profile-placeholder.svg",
  
  // About Me Section Content
  aboutHeading: "A Little About Me",
  aboutBio: [
    "I'm Vaibhav Sonkusare, an independent website creator exploring the possibilities of AI-powered design and development.",
    "I combine creative thinking, modern website tools, and a practical approach to help businesses establish a professional online presence.",
    "I'm building my portfolio around real-world business needs, thoughtful design, and websites that are easy to use."
  ],
  
  // Contact Section Content
  contactHeadline: "Let's Build Something Great.",
  contactSupportingText: "Have a business idea, a website to redesign, or a project you want to bring to life? Tell me what you're planning, and let's discuss how I can help.",
  availabilityStatus: "Open for New International Enquiries"
};
