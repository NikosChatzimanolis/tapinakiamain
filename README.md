# Ta Pinakia

Website for Ta Pinakia — a meze restaurant at Kennedy Square, Nicosia. Designed for sharing plates, live music, and reservations by phone or WhatsApp.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, intro, food showcase, experience, social proof, reservation CTA |
| `/menu` | Full menu with sticky category nav and scroll-spy |
| `/story` | Restaurant story |
| `/gallery` | Photo gallery |
| `/find-us` | Address, hours, contact info, embedded Google Map |

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Language | TypeScript |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Project structure

```
app/
  page.tsx              Home
  layout.tsx            Root layout
  menu/                 Menu page with sticky category nav
  story/                Restaurant story
  gallery/              Photo gallery
  find-us/              Location, hours, contact, Google Maps
components/
  layout/               Navbar, Footer, WhatsAppButton
  home/                 Hero, IntroSection, FoodShowcase, ExperienceSection,
                        SocialProof, ReservationCTA
  menu/                 MenuItem, MenuCategory
  ui/                   SectionLabel, Divider, AnimatedSection
lib/
  menu-data             Menu categories and items
  restaurant-info       RESTAURANT constant — address, phone, WhatsApp, socials, hours
```

## Restaurant info

- **Location:** Kennedy Square, First Floor, Nicosia
- **Hours:** Monday–Sunday · Lunch from 12:00 · Dinner until 23:00
- **Reservations:** Phone & WhatsApp only
- **Live music:** Every Wednesday & Sunday evening
