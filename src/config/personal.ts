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
  heroSupportingHeadline: "Modern websites, built with creativity and AI.",
  heroSupportingParagraph: "I create modern, responsive websites using AI-powered workflows, no-code tools, and custom development.",
  
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
    "I'm Vaibhav Sonkusare, an independent website creator exploring the possibilities of AI-powered design and development.",
    "I combine creative thinking, modern website tools, and a practical approach to help businesses establish a professional online presence.",
    "I'm building my portfolio around real-world business needs, thoughtful design, and websites that are easy to use."
  ],
  
  // Contact Section Content
  contactHeadline: "Let's Build Something Great.",
  contactSupportingText: "Have a business idea, a website to redesign, or a project you want to bring to life? Tell me what you're planning, and let's discuss how I can help.",
  availabilityStatus: "Open for New International Enquiries"
};
