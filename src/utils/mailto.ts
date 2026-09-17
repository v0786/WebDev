export interface MasterEnquiryFormData {
  fullName: string;
  businessName: string;
  email: string;
  country: string;
  websiteType: string;
  budget: string;
  timeline: string;
  description: string;
  existingWebsiteUrl?: string;
  referenceWebsites?: string;
  preferredCommunication: 'Email' | 'WhatsApp' | 'Instagram';
}

export function generateMasterMailtoUrl(data: MasterEnquiryFormData): string {
  const recipient = "sonkusare.doc@gmail.com";
  const subject = encodeURIComponent(
    `[Website Project Enquiry] ${data.websiteType} - ${data.fullName} (${data.businessName || data.country})`
  );

  const bodyContent = [
    `Hi Vaibhav,`,
    ``,
    `I would like to discuss a new website project with you. Here are my project details:`,
    ``,
    `----------------------------------------------------`,
    `PROJECT BRIEF`,
    `----------------------------------------------------`,
    `• Full Name: ${data.fullName}`,
    `• Business / Project: ${data.businessName || "N/A"}`,
    `• Email: ${data.email}`,
    `• Country / Location: ${data.country}`,
    `• Website Type: ${data.websiteType}`,
    `• Approximate Budget: ${data.budget}`,
    `• Desired Timeline: ${data.timeline}`,
    `• Preferred Communication: ${data.preferredCommunication}`,
    `• Existing Website: ${data.existingWebsiteUrl || "None provided"}`,
    `• Reference Websites: ${data.referenceWebsites || "None provided"}`,
    ``,
    `----------------------------------------------------`,
    `PROJECT GOALS & DESCRIPTION`,
    `----------------------------------------------------`,
    data.description,
    ``,
    `----------------------------------------------------`,
    `Best regards,`,
    data.fullName
  ].join("\r\n");

  return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
}

export function generateMasterFormattedBrief(data: MasterEnquiryFormData): string {
  return [
    `=== WEBSITE ENQUIRY BRIEF ===`,
    `Client: ${data.fullName}`,
    `Business: ${data.businessName || "N/A"}`,
    `Email: ${data.email}`,
    `Country: ${data.country}`,
    `Type: ${data.websiteType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    `Preferred Method: ${data.preferredCommunication}`,
    `Existing Site: ${data.existingWebsiteUrl || "None"}`,
    `References: ${data.referenceWebsites || "None"}`,
    ``,
    `Description:`,
    data.description,
    `=============================`
  ].join("\n");
}

export function generateWhatsAppUrl(data: MasterEnquiryFormData, whatsAppNumber: string): string {
  const cleanNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const message = [
    `Hi Vaibhav, my name is ${data.fullName}.`,
    `I'm interested in starting a ${data.websiteType} project for "${data.businessName || data.country}".`,
    `Approximate budget: ${data.budget}.`,
    `Timeline: ${data.timeline}.`,
    `Project overview: ${data.description.substring(0, 150)}${data.description.length > 150 ? '...' : ''}`
  ].join(" ");

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
