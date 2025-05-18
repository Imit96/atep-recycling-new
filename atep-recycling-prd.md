# 🌱 ATEP Recycling - Product Requirements Document (PRD)

## 1. Purpose & Goals

- **Purpose**: To raise awareness about ATEP Recycling’s services and educate the public on sustainable recycling practices in Nigeria.
- **Goal**: Build a professional, informative, and visually appealing website that communicates ATEP Recycling's mission, processes, and achievements while supporting content updates through an admin panel.

## 2. Target Audience

- **Primary Users**:
  - General public interested in recycling
  - Potential business partners or clients
  - Government agencies and environmental organizations
- **Secondary User**:
  - Admin user responsible for managing website content (technical background assumed)

## 3. Key Features

| Feature | Description |
|--------|-------------|
| ✅ Home Page | Hero section with company tagline, overview of services, and call-to-action |
| ✅ How It Works | Step-by-step explanation of ATEP Recycling’s service process |
| ✅ Products | Information on recyclable materials accepted and processed |
| ✅ Mission, Vision & Core Values | Clear communication of company ethos and values |
| ✅ Collection Process | Detailed breakdown of how waste is collected and processed |
| ✅ Reach in Nigeria | Map or list of locations served across Nigeria |
| ✅ Terms and Conditions | Legally compliant page generated based on Nigerian standards |
| ✅ Privacy Policy | Legally compliant page generated based on Nigerian standards |
| ✅ Associations | Partnerships or affiliations with environmental bodies |
| ✅ Certifications | Display of certifications and recognitions received |
| ✅ Contact Form | Basic form to reach out to ATEP Recycling (name, email, message) |
| ✅ Admin Panel | Content management interface for editing all pages |

## 4. Technical Requirements

### Frontend
- **Framework**: Next.js (App Router)
- **UI Library**: ShadCN UI components
- **Styling**: Tailwind CSS
- **Routing**: Static and dynamic routing as needed

### Backend
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication (for admin access)
- **Hosting**: Vercel or Firebase Hosting

### Admin Panel
- Built-in CMS-like functionality
- Allows editing of:
  - Text content
  - Images
  - PDFs (e.g., downloadable policies or certifications)
  - Links and navigation items

### Integrations
- Google Maps API (for Reach in Nigeria section – optional placeholder if no API key)
- Contact form submission via email (via Firebase function or third-party service like Resend or Nodemailer)

## 5. Non-Functional Requirements

| Category | Requirement |
|---------|-------------|
| ✅ Usability | Intuitive layout, mobile responsive, accessible design |
| ✅ Performance | Fast load times (<2 seconds), optimized assets |
| ✅ Security | Secure Firebase rules, form sanitization, admin authentication |
| ✅ Scalability | Modular code structure for future features (e.g., login, map integration) |
| ✅ SEO | Meta tags, structured data, clean URLs for better search visibility |
| ✅ Accessibility | WCAG 2.1 AA compliance where possible |

## 6. Success Metrics

| Metric | Target |
|-------|--------|
| ✅ Pages Created | All 10 required pages live and functional |
| ✅ Admin Panel Functionality | All content editable by admin |
| ✅ Mobile Responsiveness | 100% mobile-friendly across major devices |
| ✅ Load Time | Under 2 seconds on average connection |
| ✅ Form Submissions | Working contact form with confirmation |

## 7. Constraints & Assumptions

| Constraint | Details |
|-----------|---------|
| 🔒 Admin Access | Only one admin user initially; multi-user support can be added later |
| ⏳ No Login System Yet | Focus on static content delivery and admin editing only |
| 🧾 Legal Content | Generated using best practices for Nigerian recycling industry |
| 🎨 Design | Green-themed palette aligned with recycling/environmental aesthetics |
| 📍 Location Data | Static or manually updated list/map of areas served |

## 8. Roadmap / Phases

| Phase | Features | Timeline |
|------|----------|----------|
| Phase 1: Setup & Homepage | Project setup, homepage creation | Week 1 |
| Phase 2: Inner Pages | Build all inner static pages | Week 2 |
| Phase 3: Admin Panel | Create backend CMS for content editing | Week 3 |
| Phase 4: Integration & Testing | Connect admin to frontend, test all flows | Week 4 |
| Phase 5: Launch | Deploy and review with feedback | Week 5 |