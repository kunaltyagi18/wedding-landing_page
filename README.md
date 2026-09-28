# Ananta Sutra — Wedding Landing Page

> *Weddings That Feel Like You.*

A luxury Indian wedding planning landing page built with **TanStack Start**, **React 19**, **TypeScript**, **Vite** and **Tailwind CSS v4**.

---

## ✨ Features

### Sections (top to bottom)
| Section | Description |
|---|---|
| **Navbar** | Sticky, smooth-scroll links, Weddings dropdown, mobile hamburger menu |
| **Hero** | Full-width split layout with CTA buttons and avatar social proof |
| **Services Strip** | 4-item horizontal strip with icons |
| **Our Story** | Split layout with image gallery cards and lightbox |
| **Stats Band** | Dark maroon stats counter band |
| **Services** | 6-card grid (Full Planning, Design, Destination, Pre-Wedding, Hospitality, Vendors) |
| **Gallery** | Masonry grid of 8 images with full lightbox (prev/next/ESC) |
| **Testimonials** | 3 client review cards with 5 stars; mobile slider with dots |
| **Journal** | 3 blog preview cards with hover effects |
| **Contact** | 6-field form with live validation + success state |
| **Footer** | Dark maroon; logo, quick links, social icons, newsletter, back-to-top |
| **WhatsApp Button** | Floating bottom-right button |

### Design System
- **Colors:** Cream `#F3E7D8` · Deep Maroon `#5A1420` · Gold `#B8863B`
- **Fonts:** Cormorant Garamond (headings/italic accents) · Inter (body)
- **Animations:** Scroll fade-in reveal, hover lifts, gold border transitions
- **Responsive:** Mobile-first, fully responsive across all breakpoints

---

## 🛠 Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.8 |
| TanStack Start | 1.168 |
| TanStack Router | 1.170 |
| Vite | 8 |
| Tailwind CSS | v4 |
| Lucide React | 0.575 |

---

## 🚀 Getting Started

**Requirements:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/kunaltyagi18/Landing-Page.git
cd Landing-Page

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── assets/                  # Local images (hero, gallery cards)
├── components/
│   └── landing/             # All page section components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ServicesStrip.tsx
│       ├── OurStory.tsx
│       ├── StatsBand.tsx
│       ├── Services.tsx
│       ├── GallerySection.tsx
│       ├── Testimonials.tsx
│       ├── Journal.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── WhatsAppButton.tsx
├── routes/
│   ├── __root.tsx           # Root layout (fonts, meta)
│   └── index.tsx            # Single landing page
└── styles.css               # Global styles + Tailwind theme tokens
```

---

## 📜 Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint check
npm run format     # Prettier format
```

---

## 📄 License

This project is private. All rights reserved © 2026 Ananta Sutra.
