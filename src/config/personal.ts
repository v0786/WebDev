/**
 * MASTER BRAND & PERSONAL CONFIGURATION
 * SONKUSARE VAIBHAV — Creative Developer & Web Designer
 */

export interface PersonalConfig {
  brandName: string;
  fullName: string;
  shortName: string;
  role: string;
  location: string;
  heroHeadline: string;
  heroSupportingHeadline: string;
  heroSupportingParagraph: string;
  
  // Contact Channels
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsAppNumber: string;
  whatsAppUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  domainPlaceholder: string;
  
  // Visual Assets
  logoPlaceholder: string;
  profilePhotoPlaceholder: string;
  heroBackgroundImage: string;
  
  // Availability & Positioning
  availabilityStatus: string;
  primaryPositioning: string;
  isWhatsAppConfigured: boolean;
  aboutHeading: string;
  aboutBio: string[];
}

export const PERSONAL_INFO: PersonalConfig = {
  brandName: "VAIBHAV",
  fullName: "Sonkusare Vaibhav",
  shortName: "Vaibhav",
  role: "Creative Developer + Web Designer",
  location: "Mumbai, India",
  heroHeadline: "I DESIGN AND BUILD DIGITAL EXPERIENCES.",
  heroSupportingHeadline: "Bespoke websites for international startups and modern businesses.",
  heroSupportingParagraph: "I design and build websites that make businesses look better, communicate clearly and turn attention into action. Combining Design, Development, Motion, Interaction, AI and SEO.",
  
  // Verified Contact Points
  email: "sonkusare.doc@gmail.com",
  instagramHandle: "sonkusare_vaibhav",
  instagramUrl: "https://www.instagram.com/sonkusare_vaibhav/",
  whatsAppNumber: "+91 8652140271",
  whatsAppUrl: "https://wa.me/918652140271?text=Hi%20Vaibhav,%20I'd%20like%20to%20discuss%20a%20website%20project.",
  githubUrl: "https://github.com/v0786/WebDev",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-sonkusare/",
  
  // Custom Domain & Assets
  domainPlaceholder: "https://v0786.github.io/WebDev/",
  logoPlaceholder: `${import.meta.env.BASE_URL}images/sonkusare-vaibhav-logo.png`,
  heroBackgroundImage: `${import.meta.env.BASE_URL}images/vaibhav-bg.jpg`,
  profilePhotoPlaceholder: `${import.meta.env.BASE_URL}images/vaibhav-sonkusare.jpg`,
  
  availabilityStatus: "AVAILABLE FOR SELECT PROJECTS",
  primaryPositioning: "I design and build websites that make businesses look better, communicate clearly and turn attention into action.",
  isWhatsAppConfigured: true,
  aboutHeading: "About Vaibhav",
  aboutBio: [
    "I'm Vaibhav. I'm a creative developer and web designer from Mumbai, India, focused on building websites and digital experiences that combine strong visual design with thoughtful engineering.",
    "I work across Design, Development, Interaction, Motion, AI and Business Websites. Instead of separating design and code across disconnected teams, I provide one integrated workflow from concept to production."
  ]
};
