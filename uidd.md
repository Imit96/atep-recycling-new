# 🌱 ATEP Recycling - User Interface Description Document (UIDD)

## Layout Structure

The interface follows a **modular, section-based layout** designed to guide users through content in a structured yet engaging way. Each page is divided into scrollable sections with clear visual hierarchy. The main navigation appears at the top with a **hamburger menu for mobile and dropdown expandables for desktop**, allowing easy access to sub-pages like certifications or collection process details.

## Core Components

- **Header**: Fixed top bar with logo, main navigation, and contact button.
- **Hero Section**: Full-width banner on homepage with bold title, brief description, and call-to-action.
- **Interactive Sections**: Use of **accordions, tabs, and step-by-step modules** to explain processes like recycling methods or how to partner.
- **Cards & Grids**: Used for displaying products, certifications, and associations in an organized layout.
- **Footer**: Contains quick links, social media icons, and legal links (Privacy Policy, Terms).
- **Admin Panel UI**: Simple dashboard layout with sidebar navigation and form sections for editing content.

## Interaction Patterns

- **Expandable Menus**: Dropdowns in navigation reveal subpages and internal links.
- **Accordion Panels**: Clickable sections that expand to show more detailed information.
- **Tabbed Interfaces**: Allow switching between related content blocks (e.g., different product categories).
- **Hover Effects**: Subtle animations on buttons and cards to indicate interactivity.
- **Scroll Animations**: Elements fade-in or slide as user scrolls down the page for a dynamic feel.

## Visual Design Elements & Color Scheme

- **Primary Colors**: Soft greens (#6B8F71, #A8D8B9) paired with neutral whites and light greys for a clean, eco-friendly look.
- **Accent Colors**: Earthy orange (#FFA500) used sparingly for calls to action and highlights.
- **Icons & Illustrations**: Custom or open-source SVG icons and minimal line illustrations to explain complex topics visually.
- **Backgrounds**: Light gradients and subtle textures to add depth without distraction.

## Mobile, Web App, Desktop Considerations

- **Mobile**: Fully responsive design with stacked layouts, collapsible menus, and touch-friendly buttons.
- **Tablet**: Optimized grid layouts and readable font sizes.
- **Desktop**: Wider screen space allows for side-by-side content and enhanced hover interactions.
- All components are built using **responsive Tailwind CSS classes** to ensure consistent display across devices.

## Typography

- **Headings**: Bold sans-serif typeface (e.g., Inter or Poppins) for modern clarity.
- **Body Text**: Clean, readable sans-serif font with sufficient line spacing for long-form content.
- **Font Sizes**: Scalable text using relative units (rem) for accessibility and responsiveness.
- **Text Hierarchy**: Clear distinction between headings, subheadings, and body copy to support skimmability.

## Accessibility

- **Contrast Ratios**: Text and background colors meet WCAG 2.1 AA standards.
- **Keyboard Navigation**: All interactive elements (menus, accordions, forms) are accessible via keyboard.
- **Screen Reader Support**: Semantic HTML structure and ARIA labels used throughout.
- **Alt Text**: Placeholder descriptions included for all images and icons.
- **Focus States**: Clearly visible focus indicators on interactive elements like links and buttons.

## Page-Specific Interface Descriptions

### Home Page
- Hero section with animated headline and CTA button.
- Sections for "About Us", "Our Impact", and "Featured Services".
- Interactive map preview or list of regions served.
- Footer links and newsletter signup (optional).

### How It Works
- Step-by-step accordion layout showing each phase of recycling.
- Visual icons and optional animation on scroll to enhance engagement.
- Optional video embed or image carousel for demonstration.

### Products
- Card-based gallery showing types of recyclable materials.
- Each card expands to show more info (e.g., accepted items, preparation tips).
- Filterable by material type (plastic, metal, etc.).

### Mission, Vision & Core Values
- Three-column layout highlighting each value with icon and short description.
- Background texture or soft gradient to differentiate from other pages.

### Collection Process
- Timeline-style layout using horizontal or vertical steps.
- Expandable sections for more detail on each step.
- Icons or illustrations showing collection, sorting, processing.

### Reach in Nigeria
- Map or list view of locations where services are available.
- Search/filter options (if applicable).
- Info cards showing local impact or partnerships per region.

### Terms and Conditions
- Clean, document-style layout with numbered sections.
- Sidebar navigation for jumping between clauses.
- Print/download option (PDF generation TBA).

### Privacy Policy
- Similar to Terms page: structured layout with clear sections.
- Emphasis on data handling and user rights specific to Nigerian regulations.

### Associations
- Logo grid or carousel of affiliated organizations.
- Brief description or tooltip on hover explaining each partnership.

### Certifications
- Gallery of certification badges or logos.
- Clickable items can expand to show details or downloadable certificates.

### Contact Form
- Simple two-column layout with form fields and a brief company info blurb.
- Success message after submission; loading state on submit button.

## Backend Integration & Admin Interaction

- **Admin Dashboard**:
  - A separate protected route (`/admin`) with login authentication via Firebase.
  - Sidebar navigation matching frontend structure for easy content mapping.
  - Editable content blocks for each page (text, images, PDF uploads).
  - Rich text editor for paragraphs and lists.
  - Media uploader for banners, logos, and page images.
  - Preview mode to see changes before publishing.

- **Firebase Integration**:
  - Firestore used to store and retrieve dynamic content (e.g., mission statement, product descriptions).
  - Real-time updates allow instant content reflection on frontend after admin edits.
  - File storage for images and documents via Firebase Storage.
  - Authentication system ensures only authorized admin can access CMS.

- **Form Handling**:
  - Contact form submissions stored in Firestore or sent via email using Firebase Functions.
  - Basic validation and success/error feedback shown to users.