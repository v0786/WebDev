# Vaibhav Sonkusare — Creative Web Studio
> **AI-Powered, No-Code, and Custom-Coded Website Design & Development**  
> Complete interactive 3D portfolio and client acquisition platform engineered to attract genuine international clients.

---

## 🎯 Business Identity

- **Brand Name**: Vaibhav Sonkusare — Creative Web Studio
- **Business Model**: Independent Freelancer
- **Focus**: Combining AI-assisted workflows, no-code tools, and custom development to build modern digital experiences.
- **Experience Level**: Building my first professional portfolio.
- **Target Market**: International businesses, startups, creators, and professionals (USA, UK, Canada, Australia, Europe, etc.).
- **Primary Goal**: Generate qualified website development enquiries and convert them into paying projects.
- **Verified Email**: `sonkusare.doc@gmail.com`
- **Verified Instagram**: [instagram.com/sonkusare_vaibhav](https://www.instagram.com/sonkusare_vaibhav/)
- **WhatsApp**: Configurable international number in `src/config/personal.ts` (Never fabricated).
- **Default Currency**: USD (with multi-currency invoicing options).

---

## 🚀 Key Website Features & Structure

### 1. Interactive 3D Hero Section
- **Brand Label**: `VAIBHAV SONKUSARE — CREATIVE WEB STUDIO`
- **Main Headline**: *Ideas into Digital Experiences.*
- **Supporting Headline**: *Modern websites, built with creativity and AI.*
- **Supporting Paragraph**: *I help businesses, entrepreneurs, and creators turn their ideas into professional websites using a combination of AI-powered workflows, no-code tools, and custom development.*
- **Centerpiece**: Procedural Three.js 3D glass icosahedron with glowing energy core, orbital rings, and mouse parallax interaction.
- **Adaptive Fallback**: Seamless CSS glassmorphic preview fallback for mobile viewports, low-power devices, or when `prefers-reduced-motion` is active.

### 2. Tailored Services (8 Core Offerings)
Each service includes title, short description, business value, deliverables, and availability status:
1. **Business websites** — *Available Now*
2. **Landing pages** — *Available Now*
3. **Personal portfolio websites** — *Available Now*
4. **E-commerce websites** — *Available Now*
5. **Website redesigns** — *Available Now*
6. **Responsive website development** — *Available Now*
7. **AI-assisted website creation** — *Available Now*
8. **Website maintenance and improvements** — *In Active Development*

### 3. Curated Demonstration Portfolio (Projects A, B, C)
Clearly demarcated concept projects demonstrating architectural and conversion capabilities without claiming unverified client results:
- **Project A: Modern Business Website** (*Vanguard Strategy Group*) — Corporate consultancy platform with advisory practice directories and consultation booking flow.
- **Project B: SaaS Landing Page** (*PulseFlow AI*) — Conversion-focused landing page with software mockup, interactive features, pricing tiers, and FAQ.
- **Project C: E-commerce Concept** (*Solis Horology*) — Luxury mechanical timepieces storefront with product cards, detail layouts, and cart drawer preview.
- **Interactive Case Study Modals**: Open each project to view design goals, design decisions, tools and methodology, and architecture breakdown.

### 4. Transparent 5-Step Process (How I Work)
- **Step 1 — Discovery**: Client explains business, goals, requirements, and budget.
- **Step 2 — Planning**: Review requirements, prepare project scope, proposal, and timeline.
- **Step 3 — Design and Development**: Craft website using intentional mix of no-code tools and AI-assisted custom development.
- **Step 4 — Review**: Client reviews website and provides feedback within agreed scope.
- **Step 5 — Delivery**: Deliver agreed website with relevant handover instructions.

### 5. Flexible Service Packages & Pricing
- **Starter Website**: Single-page / Landing Page (Includes "Request a Quote", page count, timeline, revisions).
- **Business Website**: 3 to 6 custom pages, recommended for most businesses.
- **Premium Website**: Custom coded bespoke web experience with 3D or advanced interactions.
- *All packages display "Request a Quote" by default until you approve fixed rates.*

### 6. "A Little About Me"
- Authentic positioning as an independent website creator combining AI-powered design and development.
- Decoupled placeholder for your portrait photograph and actual logo file.

### 7. Project Enquiry & Brief Builder
- Required fields: Full name, Business name, Email address, Country, Website type, Approximate budget, Desired timeline, Project description.
- Optional fields: Existing website URL, Reference websites, Preferred communication method (Email, WhatsApp, Instagram).
- **Handshake Email**: Formats a pre-addressed email to `sonkusare.doc@gmail.com`.
- **WhatsApp Handshake**: Generates a pre-filled WhatsApp message.
- **1-Click Clipboard Copy**: Copies the structured project brief to your clipboard.

### 8. Privacy & Accessibility
- Complete **Privacy Policy Modal** confirming zero marketing tracking scripts and direct email/WhatsApp transmission.
- Narrow mobile testing down to **320px CSS width** without horizontal overflow.

---

## 💻 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in `dist/` with strict TypeScript validation.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📝 Pre-Publishing Customization Checklist

All content is centralized in the `src/config/` directory:

| Config File | What to Customize |
|---|---|
| `src/config/personal.ts` | WhatsApp number (`whatsAppNumber`, `isWhatsAppConfigured`), Profile photo path, Logo path, Availability status, Custom domain |
| `src/config/services.ts` | Add, remove, or edit service descriptions and availability tags |
| `src/config/portfolio.ts` | Replace demonstration projects with real client case studies as you complete projects (`isConcept: false`) |
| `src/config/process.ts` | Configure fixed package prices if desired, change delivery timelines or revision policies |

---

## 🌐 Recommended Free Hosting Options

### Option 1: Vercel (Recommended)
1. Push this folder to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New Project**, select your repository. Vercel auto-detects Vite.
4. Click **Deploy**. Your portfolio will be live on a fast global edge network with free automatic SSL.

### Option 2: Netlify
1. Log in to [netlify.com](https://netlify.com) and click **Add new site > Import an existing project**.
2. Select your repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

### Option 3: Cloudflare Pages
1. Go to Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages**.
2. Connect your GitHub repository.
3. Preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.
4. Click **Save and Deploy**.
