# 🌱 ATEP Recycling - Software Requirements Specification (SRS)

## System Design

- **Type**: Static website with dynamic content management
- **Mode**: Client-server hybrid using Firebase backend
- **Scope**:
  - Public-facing informational website
  - Admin dashboard for content editing
- **Deployment**: Web-based, hosted via Vercel or Firebase Hosting

## Architecture Pattern

- **Frontend**: Component-based architecture (React + Next.js)
- **Backend**: Backend-as-a-Service (Firebase Firestore & Firebase Auth)
- **CMS-Like Functionality**: Content stored and retrieved from Firestore collections
- **Routing**: Static and dynamic route handling via Next.js App Router

## State Management

- **Client-Side**:
  - React component state for UI interactions (e.g., accordion open/close)
  - Zustand or Context API for global state (optional if needed)
- **Server-Side**:
  - Firebase listeners provide real-time data updates
  - Admin panel form states managed within form components

## Data Flow

- **Public Site**:
  - Page loads → Fetches content from Firestore collections
  - Content rendered dynamically based on Firestore data
- **Admin Panel**:
  - Admin logs in → Gains access to CMS interface
  - Form inputs → Update Firestore documents in real time
- **Contact Form**:
  - User submits form → Data sent to Firestore or via email function

## Technical Stack

| Layer | Technology |
|------|------------|
| **Frontend** | Next.js, React, Tailwind CSS, ShadCN UI |
| **Backend** | Firebase (Firestore, Authentication, Storage) |
| **Hosting** | Vercel  |
| **State Management** | React useState, useEffect (minimal external libraries) |
| **Forms** | React Hook Form (or native form handling) |
| **UI Components** | ShadCN UI with custom extensions |

## Authentication Process

- **Admin Access Only**
- **Login Method**: Email/password via Firebase Authentication
- **Protected Routes**: `/admin` and sub-routes are protected
- **Access Control**: Only one admin user initially (can extend later)
- **Session Handling**: Firebase auth token stored in memory/session

## Route Design

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Homepage |
| `/how-it-works` | Public | Explains recycling process |
| `/products` | Public | Lists recyclable materials |
| `/mission-vision-values` | Public | Displays company values |
| `/collection-process` | Public | Details collection steps |
| `/reach-in-nigeria` | Public | Location coverage info |
| `/terms-and-conditions` | Public | Legal terms page |
| `/privacy-policy` | Public | Privacy compliance page |
| `/associations` | Public | Partner organizations |
| `/certifications` | Public | Display certifications |
| `/contact` | Public | Contact form |
| `/admin` | Protected | Admin dashboard |
| `/admin/edit/:page` | Protected | Edit specific page content |

## API Design

- **Internal APIs (Firebase)**:
  - `GET /content/:page` → Fetch page content from Firestore
  - `POST /content/:page` → Save/update page content
  - `UPLOAD /media` → Upload images or PDFs via Firebase Storage
- **No external REST or GraphQL APIs used unless needed for future features**

## Database Design (ERD Summary)

### Collections in Firestore:

- **`pages`**
  - `id`: string (e.g., 'home', 'about')
  - `title`: string
  - `sections`: array of objects containing text, images, lists
  - `updatedAt`: timestamp

- **`form_submissions`**
  - `name`: string
  - `email`: string
  - `message`: string
  - `submittedAt`: timestamp

- **`users`**
  - `uid`: string (Firebase Auth UID)
  - `email`: string
  - `role`: string ('admin')

> ⚠️ No complex relationships due to static nature of site; all pages are independent documents.