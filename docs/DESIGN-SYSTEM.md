# Groneu Healthcare — Design System

> Brand-aligned design specifications for the new multi-page website. Based on logo analysis + Option C (hybrid dark/light) approach.

---

## 1. Brand Identity

### Logo
- **File:** `/public/assets/brand/Groneu-logo.png`
- **Style:** Modern, friendly, wellness-oriented
- **Symbol:** Female figure with arms raised (joy/freedom/health) in golden yellow
- **Text:** "Groneu" (large) + "Health Care" (smaller) in teal, rounded sans-serif
- **®** registered mark top-right of "u"
- **Inside 'o':** stylized golden swirl/figure

### Brand Personality
- **Trustworthy** (healthcare, GST/IEC registered manufacturer)
- **Caring** (feminine hygiene, comfort-focused)
- **Capable** (real factory, ₹5-25Cr turnover, export-ready)
- **Approachable** (not cold/clinical)

---

## 2. Color System (Option C — Hybrid)

### Dark Mode (B2B / Premium Manufacturing pages)
Used on: Home hero, Manufacturing, White-Label, (optional Quality)

| Token | Value | Usage |
|-------|-------|-------|
| `--dark-bg` | `#0A0A0A` | Page background (near-black) |
| `--dark-surface` | `rgba(255,255,255,0.04)` | Glass surfaces |
| `--dark-text` | `#FFFFFF` | Primary text |
| `--dark-text-muted` | `rgba(255,255,255,0.60)` | Secondary text |
| `--dark-text-dim` | `rgba(255,255,255,0.40)` | Labels, captions |
| `--accent-gold` | `#F5B642` | Primary accent (CTAs, highlights, italic words) |
| `--accent-gold-dim` | `rgba(245,182,66,0.15)` | Hover bg, subtle accents |

### Light Mode (Consumer / Products pages)
Used on: Products, Product Detail, About, Contact, (optional Quality)

| Token | Value | Usage |
|-------|-------|-------|
| `--light-bg` | `#FAFAF7` | Page background (warm off-white) |
| `--light-surface` | `#FFFFFF` | Cards |
| `--light-text` | `#1A2E2E` | Primary text (deep teal-charcoal) |
| `--light-text-muted` | `#5A6B6B` | Secondary text |
| `--light-text-dim` | `#8A9A9A` | Labels, captions |
| `--accent-teal` | `#0E8E8E` | Primary accent (links, CTAs, badges) |
| `--accent-teal-dark` | `#0A6E6E` | Hover state |
| `--accent-gold` | `#D4960E` | Micro-accents on light (slightly darker for contrast) |
| `--light-border` | `#E8E8E2` | Card borders, dividers |

### Shared
- **Success:** `#2D9D5F` (form success, trust signals)
- **WhatsApp green:** `#25D366` (WhatsApp button only)
- **Error:** `#D44343` (form errors)

---

## 3. Typography

### Font Stack
```css
/* Headings — premium serif (from original template) */
font-family: 'Instrument Serif', serif;

/* Body & UI — clean sans-serif */
font-family: 'Inter', var(--font-geist-sans), system-ui, sans-serif;
```

### Type Scale (responsive)
| Element | Mobile | Desktop | Weight | Family |
|---------|--------|---------|--------|--------|
| Hero H1 | text-6xl (3.75rem) | text-8xl/9xl (6-8rem) | 400 | Instrument Serif |
| Section H2 | text-4xl | text-6xl/7xl | 400 | Instrument Serif |
| Card title | text-xl | text-2xl | 400 | Instrument Serif |
| Body large | text-base | text-lg | 400 | Inter |
| Body | text-sm | text-base | 400 | Inter |
| Label/Caption | text-xs | text-xs | 500 | Inter (uppercase, tracking-widest) |
| Button | text-sm | text-sm | 500 | Inter |

### Italic Usage (Instrument Serif)
- Use italic for emphasis words in headings (e.g. "Built for *trust*")
- On dark pages: italic words in `--accent-gold`
- On light pages: italic words in `--accent-teal`

---

## 4. Liquid Glass Component (signature element)

Retained from original template. Apply on glass surfaces across BOTH dark and light modes.

```css
/* In globals.css @layer components */
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Light mode variant — darker glass for contrast on white bg */
.liquid-glass-light {
  background: rgba(10, 46, 46, 0.02);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(10, 46, 46, 0.06);
  position: relative;
  overflow: hidden;
}
.liquid-glass-light::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(14,142,142,0.3) 0%,
    rgba(14,142,142,0.1) 20%,
    rgba(14,142,142,0) 40%,
    rgba(14,142,142,0) 60%,
    rgba(14,142,142,0.1) 80%,
    rgba(14,142,142,0.3) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

---

## 5. Spacing & Layout

### Container
- Max width: `max-w-6xl` (72rem / 1152px) for most pages
- Max width: `max-w-5xl` for text-focused pages
- Padding: `px-6` mobile, `px-8` desktop

### Section spacing
- Vertical: `py-28 md:py-40` for major sections
- `pt-32 md:pt-44 pb-10 md:pb-14` for About-style sections
- `py-6 md:py-10` for tight sections

### Grid
- Product grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
- Two-column: `grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`

### Border radius
- Pills (buttons, inputs): `rounded-full`
- Cards: `rounded-3xl`
- Inner cards: `rounded-2xl`
- Small badges: `rounded-full`

---

## 6. Components Specification

### Navbar (sticky, adaptive)
- Glass pill: `liquid-glass` on dark pages, `liquid-glass-light` on light pages
- `max-w-5xl mx-auto rounded-full px-6 py-3`
- Left: Logo (height 32px) + brand name
- Center (desktop only): nav links — `text-sm font-medium` with hover
- Right: "Get Quote" CTA button (glass, gold accent on hover)
- Mobile: hamburger menu → slide-down glass panel

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| Primary (dark) | `bg-accent-gold text-black rounded-full px-6 py-3` | Main CTAs on dark pages |
| Primary (light) | `bg-accent-teal text-white rounded-full px-6 py-3` | Main CTAs on light pages |
| Glass | `liquid-glass rounded-full px-6 py-2 text-white` | Secondary CTAs |
| Ghost | `text-sm font-medium hover:opacity-80` | Text links |
| WhatsApp | `bg-[#25D366] text-white rounded-full` | WhatsApp actions |

### Cards
- **Product card (light):** `bg-white rounded-3xl border border-light-border overflow-hidden shadow-sm hover:shadow-md transition-shadow`
  - Image area: `aspect-square bg-light-bg` (placeholder)
  - Body: `p-6` with tag, title, spec snippet, "View Details" link
- **Glass card (dark):** `liquid-glass rounded-3xl p-6 md:p-8`
- **Capability tile (dark):** `liquid-glass rounded-2xl p-6` with icon + stat + label

### Form fields
- Input: `w-full bg-transparent border border-white/15 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold`
- Light variant: `border-light-border text-light-text placeholder:text-light-text-dim focus:border-accent-teal`

### Footer
- Dark on all pages (`bg-black text-white/60`)
- 4 columns: Brand+address | Quick Links | Products | Contact+Social
- Bottom bar: GST/IEC + copyright

### Floating WhatsApp button
- Fixed bottom-right, `z-50`
- `bg-[#25D366] rounded-full p-4 shadow-lg`
- WhatsApp icon (lucide: MessageCircle or custom)
- Pulse animation on idle

---

## 7. Animation System (framer-motion)

### Reveal on scroll
```js
// Standard reveal
initial={{ opacity: 0, y: 40 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.8 }}

// Staggered children
transition={{ duration: 0.8, delay: 0.15 * index }}

// Slide from sides
initial={{ opacity: 0, x: -40 }}  // left
initial={{ opacity: 0, x: 40 }}   // right
```

### useInView config
```js
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-100px' })
```

### Hero video fade loop (vanilla JS, from original template)
- `canplay` → fade opacity 0→1 over 500ms (requestAnimationFrame)
- `timeupdate` → at ≤0.55s remaining, fade to 0 over 500ms
- `ended` → 100ms black pause → reset → replay → fade to 1
- `muted` always (autoplay policy)
- **Sound toggle button** added (per client) — top-right of hero, glass circle

### Micro-interactions
- Buttons: `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}`
- Product cards: `hover:shadow-md transition-shadow` + image `group-hover:scale-105 transition-transform duration-700`
- Nav links: underline grow on hover

---

## 8. Iconography
- **Library:** lucide-react (already installed)
- **Size:** 16px (inline), 20px (buttons), 24px (nav), 48px (feature tiles)
- **Color:** inherit from text color

### Key icons used
- Globe (brand, social)
- ArrowRight, ArrowUpRight (CTAs)
- Phone, Mail, MapPin (contact)
- MessageCircle (WhatsApp)
- CheckCircle (features, trust)
- Factory, PackageCheck, ShieldCheck, FlaskConical (capabilities)
- Menu, X (mobile nav)

---

## 9. Responsive Breakpoints
| Breakpoint | Width | Target |
|------------|-------|--------|
| base | <640px | Mobile |
| `sm:` | ≥640px | Large mobile / small tablet |
| `md:` | ≥768px | Tablet |
| `lg:` | ≥1024px | Desktop |
| `xl:` | ≥1280px | Large desktop |

**Mobile-first:** Design for mobile, enhance at `md:` and `lg:`.

---

## 10. Accessibility
- Semantic HTML (`main`, `header`, `nav`, `section`, `article`, `footer`)
- ARIA labels on icon-only buttons
- `alt` text on all images
- Keyboard navigation (focus-visible states)
- Color contrast: WCAG AA minimum (gold on black ✓, teal on white ✓)
- `sr-only` for screen-reader-only text
- Form labels associated with inputs

---

## 11. SEO Foundation
- Per-page `<Metadata>` (title, description, keywords)
- Open Graph + Twitter cards
- JSON-LD `LocalBusiness` schema on all pages
- JSON-LD `Product` schema on product detail pages
- `robots.txt` + `sitemap.xml`
- Semantic heading hierarchy (one H1 per page)
- Alt text on all images

---

*End of design system. Implement all tokens as CSS custom properties in globals.css.*
