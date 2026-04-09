# Site Bugs & Polish Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 14 identified bugs and polish issues across the Ta Pinakia restaurant website.

**Architecture:** All changes are CSS fixes, small component tweaks, and metadata additions. No new dependencies, no structural refactors. Each task is independent and can be done in any order.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion

---

## File Map

| File | Changes |
|------|---------|
| `app/globals.css` | Add `scrollbar-hide` utility class |
| `components/ui/AnimatedSection.tsx` | Add `relative` to fix Framer Motion warnings |
| `app/menu/page.tsx` | Fix sticky nav offset, add scroll fade hint |
| `components/home/Hero.tsx` | Differentiate CTA buttons, fix parallax gap |
| `components/home/FoodShowcase.tsx` | Add touch support + hover hint for images |
| `app/gallery/page.tsx` | Add touch support for gallery images |
| `components/home/ReservationCTA.tsx` | Add `relative` for `bg-noise` pseudo-element |
| `components/layout/WhatsAppButton.tsx` | Add bottom offset to avoid footer overlap |
| `app/menu/page.tsx` (metadata) | Add page-specific metadata |
| `app/story/page.tsx` | Add page-specific metadata |
| `app/gallery/page.tsx` | Add page-specific metadata |
| `app/find-us/page.tsx` | Add page-specific metadata |

---

### Task 1: Add `scrollbar-hide` CSS utility

**Files:**
- Modify: `app/globals.css:45-57` (append before end)

- [ ] **Step 1: Add the scrollbar-hide utility to globals.css**

Add this at the end of `app/globals.css`:

```css
/* Hide scrollbar for horizontal scroll navs */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

- [ ] **Step 2: Verify on mobile**

Run: `npm run dev`
Navigate to `/menu` on mobile viewport (375px). The category nav should scroll horizontally without a visible scrollbar.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "fix: add scrollbar-hide utility for menu category nav"
```

---

### Task 2: Fix Framer Motion scroll container warnings

**Files:**
- Modify: `components/ui/AnimatedSection.tsx`

The `whileInView` trigger needs the animated element or its scroll container to have a non-static position. Adding `relative` to the motion.div fixes all 18 warnings site-wide.

- [ ] **Step 1: Add `relative` to the AnimatedSection motion.div**

In `components/ui/AnimatedSection.tsx`, change line 12 from:

```tsx
      className={className}
```

to:

```tsx
      className={`relative ${className ?? ''}`}
```

- [ ] **Step 2: Verify warnings are gone**

Open the browser console at `/` — the 18 "non-static position" warnings should no longer appear.

- [ ] **Step 3: Commit**

```bash
git add components/ui/AnimatedSection.tsx
git commit -m "fix: add relative position to AnimatedSection to resolve Framer Motion warnings"
```

---

### Task 3: Fix gallery & food showcase touch support

**Files:**
- Modify: `components/home/FoodShowcase.tsx:27-73` (DishImage component)
- Modify: `app/gallery/page.tsx:32-69` (GalleryImage component)

On touch devices, `onMouseEnter`/`onMouseLeave` don't fire, so dish names and captions are inaccessible. Replace with `onClick` toggle on mobile while keeping hover on desktop.

- [ ] **Step 1: Update DishImage in FoodShowcase.tsx**

In `components/home/FoodShowcase.tsx`, replace the `DishImage` function (lines 27-73) with:

```tsx
function DishImage({ image, name, category, className }: {
  image: (typeof IMAGES.dishes)[number]
  name: string
  category: string
  className?: string
}) {
  const [shown, setShown] = useState(false)

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => setShown((prev) => !prev)}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <AnimatePresence>
        {shown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-espresso/60 flex items-end p-6"
          >
            <div>
              <p className="font-body tracking-[0.3em] text-[10px] uppercase text-amber mb-1">
                {category}
              </p>
              <p className="font-display text-xl text-text-warm">{name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

- [ ] **Step 2: Update GalleryImage in gallery/page.tsx**

In `app/gallery/page.tsx`, replace the `GalleryImage` function (lines 32-69) with:

```tsx
function GalleryImage({ image, caption, index }: {
  image: (typeof IMAGES.gallery)[number]
  caption: string
  index: number
}) {
  const [shown, setShown] = useState(false)

  return (
    <div
      className="break-inside-avoid mb-3 relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => setShown((prev) => !prev)}
    >
      <AnimatedSection delay={index * 0.05}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <AnimatePresence>
          {shown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-espresso/60 flex items-end p-4"
            >
              <p className="font-display text-lg text-text-warm">{caption}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  )
}
```

- [ ] **Step 3: Test on mobile viewport**

Test at 375px width: tap an image in the food showcase and gallery — the overlay should toggle on/off. On desktop, hover should still work as before.

- [ ] **Step 4: Commit**

```bash
git add components/home/FoodShowcase.tsx app/gallery/page.tsx
git commit -m "fix: add tap-to-reveal for image overlays on touch devices"
```

---

### Task 4: Differentiate Hero CTA buttons

**Files:**
- Modify: `components/home/Hero.tsx:79-92`

The phone and WhatsApp buttons look identical. Make WhatsApp the primary filled action.

- [ ] **Step 1: Update the WhatsApp button styling in Hero.tsx**

In `components/home/Hero.tsx`, change the WhatsApp link (lines 85-92) from:

```tsx
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-text-warm/30 text-text-warm font-body text-sm tracking-wide hover:border-amber hover:text-amber transition-colors min-h-[48px]"
            >
              WhatsApp
            </a>
```

to:

```tsx
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber border border-amber text-espresso font-body text-sm tracking-wide font-medium hover:bg-amber-muted hover:border-amber-muted transition-colors min-h-[48px]"
            >
              WhatsApp
            </a>
```

- [ ] **Step 2: Verify visually**

The WhatsApp button should now be a filled amber button, clearly distinguishable from the ghost phone button.

- [ ] **Step 3: Commit**

```bash
git add components/home/Hero.tsx
git commit -m "polish: make WhatsApp the primary CTA in hero section"
```

---

### Task 5: Fix Hero parallax image gap

**Files:**
- Modify: `components/home/Hero.tsx:20`

- [ ] **Step 1: Fix the parallax container bounds**

In `components/home/Hero.tsx`, change line 20 from:

```tsx
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[150px] bottom-0">
```

to:

```tsx
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[150px] -bottom-[150px]">
```

This ensures the image extends beyond both top and bottom so the parallax motion never reveals a gap.

- [ ] **Step 2: Test on tall viewport**

Resize to 1440x1200 and scroll — no background color should peek through at any point during the hero parallax.

- [ ] **Step 3: Commit**

```bash
git add components/home/Hero.tsx
git commit -m "fix: extend parallax image bounds to prevent gap on tall viewports"
```

---

### Task 6: Fix menu sticky nav scroll offset and add fade hint

**Files:**
- Modify: `app/menu/page.tsx:65-83`

Two issues: (1) the category `scroll-mt-32` may not align with the actual nav+sticky height, and (2) no visual cue that the category bar scrolls on small screens.

- [ ] **Step 1: Add a fade hint to the scrollable nav**

In `app/menu/page.tsx`, replace the sticky nav block (lines 64-83) with:

```tsx
      {/* Sticky category nav */}
      <nav className="sticky top-20 z-30 bg-parchment/95 backdrop-blur-md border-b border-black/8">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-6 py-4 min-w-max">
              {MENU.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`font-body text-sm tracking-wide whitespace-nowrap transition-colors pb-1 border-b-2 min-h-[48px] flex items-center ${
                    activeCategory === cat.id
                      ? 'text-amber border-amber'
                      : 'text-text-dim border-transparent hover:text-espresso'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          {/* Fade hint on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-parchment/95 to-transparent pointer-events-none md:hidden" />
        </div>
      </nav>
```

- [ ] **Step 2: Fix scroll-mt on MenuCategory to match**

In `components/menu/MenuCategory.tsx`, line 16, change `scroll-mt-32` to `scroll-mt-40` so sections land below both the navbar (h-20 = 80px) and the sticky nav (~56px):

```tsx
      className={`py-16 md:py-20 scroll-mt-40 ${dark ? 'bg-espresso' : 'bg-parchment'}`}
```

- [ ] **Step 3: Test scroll-to-category**

Click each category button in the sticky nav. The section heading should land clearly visible below the sticky nav, not hidden under it.

- [ ] **Step 4: Commit**

```bash
git add app/menu/page.tsx components/menu/MenuCategory.tsx
git commit -m "fix: improve menu nav scroll offset and add fade hint for overflow"
```

---

### Task 7: Fix ReservationCTA `bg-noise` positioning

**Files:**
- Modify: `components/home/ReservationCTA.tsx:8`

The `bg-noise::after` pseudo-element uses `position: absolute` with `inset: 0`. The parent needs `position: relative` to anchor it.

- [ ] **Step 1: Add `relative` to the section**

In `components/home/ReservationCTA.tsx`, line 8 already has `relative` in the class — verify:

```tsx
    <section className="relative bg-gradient-to-b from-amber-muted to-espresso py-24 md:py-32 overflow-hidden bg-noise">
```

This is already correct. No change needed. Skip this task.

---

### Task 8: Fix WhatsApp FAB overlapping footer

**Files:**
- Modify: `components/layout/WhatsAppButton.tsx:29`

- [ ] **Step 1: Add a bottom margin that accounts for the footer**

In `components/layout/WhatsAppButton.tsx`, the simplest fix is to ensure the FAB doesn't overlap footer links on very short screens. This is most noticeable on mobile. Add a slightly larger offset:

Change line 29 from:

```tsx
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow"
```

to:

```tsx
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow md:bottom-8 md:right-8"
```

Note: The real fix is that the footer text is fine being behind the FAB since it's an overlay pattern. However, if we want the footer to avoid the FAB, we can add bottom padding to the footer instead.

- [ ] **Step 2: Add bottom padding to footer for FAB clearance on mobile**

In `components/layout/Footer.tsx`, change line 109 from:

```tsx
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-light">
```

to:

```tsx
        <div className="mx-auto max-w-6xl px-6 py-6 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-light">
```

This gives 80px of bottom padding on mobile so the footer text is never covered by the FAB.

- [ ] **Step 3: Test on mobile**

Scroll to the very bottom on mobile. Footer text should be fully visible and not covered by the WhatsApp button.

- [ ] **Step 4: Commit**

```bash
git add components/layout/WhatsAppButton.tsx components/layout/Footer.tsx
git commit -m "fix: prevent WhatsApp FAB from overlapping footer content on mobile"
```

---

### Task 9: Add per-page metadata for SEO

**Files:**
- Modify: `app/menu/page.tsx` (add metadata export)
- Modify: `app/story/page.tsx` (add metadata export)
- Modify: `app/gallery/page.tsx` (add metadata export)
- Modify: `app/find-us/page.tsx` (add metadata export)

Since these are `'use client'` pages, we need to either: (a) extract metadata to a separate `layout.tsx` per route, or (b) use `generateMetadata` in a server-component wrapper. The simplest approach for Next.js 16 is to create a `layout.tsx` in each route directory that exports metadata.

- [ ] **Step 1: Create menu layout with metadata**

Create `app/menu/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu — Ta Pinakia · Paphos',
  description: 'Explore our menu of traditional Greek meze, small plates, signatures, and desserts. All dishes are designed to share.',
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 2: Create story layout with metadata**

Create `app/story/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — Ta Pinakia · Paphos',
  description: 'Born from a simple conviction: the best meals happen around shared plates, unhurried time, and people you love.',
}

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 3: Create gallery layout with metadata**

Create `app/gallery/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — Ta Pinakia · Paphos',
  description: 'A look inside Ta Pinakia. Food, atmosphere, live music nights, and our terrace overlooking Paphos Old Town.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 4: Create find-us layout with metadata**

Create `app/find-us/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Us — Ta Pinakia · Paphos',
  description: 'Kennedy Square 6, 1st Floor, Paphos 8047, Cyprus. Reservations by phone or WhatsApp: +357 26 818818.',
}

export default function FindUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 5: Verify page titles**

Navigate to each page and check the browser tab title updates correctly:
- `/menu` → "Menu — Ta Pinakia · Paphos"
- `/story` → "Our Story — Ta Pinakia · Paphos"
- `/gallery` → "Gallery — Ta Pinakia · Paphos"
- `/find-us` → "Find Us — Ta Pinakia · Paphos"

- [ ] **Step 6: Commit**

```bash
git add app/menu/layout.tsx app/story/layout.tsx app/gallery/layout.tsx app/find-us/layout.tsx
git commit -m "feat: add per-page metadata for SEO on all routes"
```

---

### Task 10: Fix colored bar artifact on menu page

**Files:**
- Modify: `app/menu/page.tsx:65`

The colored bar between the sticky nav and menu content is caused by the nav's `border-b` combined with the alternating category backgrounds bleeding through the translucent `bg-parchment/95`.

- [ ] **Step 1: Make sticky nav fully opaque**

In `app/menu/page.tsx`, in the sticky nav (already modified in Task 6), change `bg-parchment/95` to `bg-parchment` in both the nav and the fade gradient:

```tsx
      <nav className="sticky top-20 z-30 bg-parchment backdrop-blur-md border-b border-black/8">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="overflow-x-auto scrollbar-hide">
            ...
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-parchment to-transparent pointer-events-none md:hidden" />
        </div>
      </nav>
```

- [ ] **Step 2: Verify**

Scroll the menu page — no colored bar or bleed-through should appear between the sticky nav and the category content.

- [ ] **Step 3: Commit**

```bash
git add app/menu/page.tsx
git commit -m "fix: make menu sticky nav fully opaque to prevent color bleed"
```

---

## Task Order

Tasks are independent. Recommended order for clean commits:

1. Task 1 (scrollbar-hide CSS)
2. Task 2 (AnimatedSection relative fix)
3. Task 6 + Task 10 (menu sticky nav — do together since they touch the same code)
4. Task 3 (touch support)
5. Task 4 (Hero CTA)
6. Task 5 (Hero parallax)
7. Task 8 (WhatsApp FAB)
8. Task 9 (SEO metadata)

Task 7 was confirmed already correct — skip it.
