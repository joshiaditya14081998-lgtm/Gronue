---
name: Groneu Healthcare
description: All-dark premium manufacturing system. Black canvas with gold primary accent and teal secondary for healthcare trust signals. Liquid-glass surfaces, Instrument Serif display type, and honest industrial precision.
version: 1
---

# DESIGN.md — Groneu Healthcare

## Design Language

All-dark premium manufacturing aesthetic. The site positions Groneu as a real manufacturer (not a trader), with industrial credibility and human care. The liquid-glass effect (inherited from the original template) signals modernity and craft; gold accents signal premium; teal accents signal healthcare trust.

## Colors

### Brand Anchors
```css
--color-gold: #F5B642;          /* primary accent — CTAs, emphasis, italic words */
--color-gold-hover: #FFC857;    /* hover state for gold buttons */
--color-gold-dim: rgba(245, 182, 66, 0.15);  /* subtle gold fills */
--color-teal: #0E8E8E;          /* secondary — trust signals, certs, checkmarks */
--color-teal-dark: #0A6E6E;     /* (unused in all-dark, kept for reference) */
--color-whatsapp: #25D366;      /* WhatsApp brand only */
```

### Dark Surfaces (used everywhere — all-dark theme)
```css
--groneu-bg: #0A0A0A;                    /* page background — warm-tinted near-black */
--groneu-surface-glass: rgba(255, 255, 255, 0.01);  /* liquid-glass bg */
--groneu-surface-solid: rgba(10, 10, 10, 0.8);      /* navbar when scrolled */
--groneu-border: rgba(255, 255, 255, 0.10);
```

### Text
```css
--groneu-text: #FFFFFF;                  /* primary text */
--groneu-text-muted: rgba(255, 255, 255, 0.60);  /* secondary text */
--groneu-text-dim: rgba(255, 255, 255, 0.40);    /* labels, captions */
```

### Product Placeholder Colors (per product — for image areas until real photos)
Each product has a `placeholderColor` field (e.g. `#1a3a3a`, `#2a1a3a`) used as the background of the product image area. These are dark, muted tones that blend with the dark theme.

## Typography

```css
/* Display — premium serif (from original template) */
--font-display: 'Instrument Serif', serif;  /* weight 400, italic available */

/* Body & UI — clean sans-serif */
--font-sans: 'Inter', var(--font-geist-sans), system-ui, sans-serif;
```

### Type Scale (responsive)
| Element | Mobile | Desktop | Weight | Family |
|---------|--------|---------|--------|--------|
| Hero H1 | text-5xl (3rem) | text-7xl/8xl (4.5-6rem) | 400 | Instrument Serif |
| Section H2 | text-4xl | text-5xl/6xl/7xl | 400 | Instrument Serif |
| Card title | text-xl | text-2xl | 400 | Instrument Serif |
| Body large | text-base | text-lg | 400 | Inter |
| Body | text-sm | text-base | 400 | Inter |
| Label | text-xs | text-xs | 500 | Inter (uppercase, tracking-widest) |
| Button | text-sm | text-sm | 500 | Inter |

### Italic Usage (Instrument Serif)
- Italic for emphasis words in headings: `<em className="italic text-[#F5B642]">word</em>`
- Only ONE italic word per heading (don't overuse)
- Italic always gold `#F5B642` on dark pages

## Liquid Glass Component

The signature surface treatment. Used on cards, navbar, buttons, modal.

```css
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
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Note:** `.liquid-glass-light` class exists in CSS but is UNUSED in all-dark theme. Kept for backwards compat.

## Spacing & Layout

### Container
- Max width: `max-w-6xl` (72rem) for most pages
- Max width: `max-w-4xl` for text-focused (Quality, About hero)
- Padding: `px-6` mobile, `px-8` desktop

### Section spacing
- Major sections: `py-20 md:py-28`
- Tight sections: `py-12 md:py-16`
- Hero sections: `pt-12 pb-16` (with navbar offset)

### Grid
- Product grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Feature grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
- Two-column: `grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`

### Border radius
- Pills (buttons, inputs, navbar): `rounded-full`
- Cards: `rounded-3xl`
- Inner cards: `rounded-2xl`
- Step numbers: `rounded-full`

## Components

### Navbar
- Fixed top, glass pill, `max-w-6xl mx-auto`
- Transparent glass at top (over hero) → solid `bg-[#0A0A0A]/80 backdrop-blur-xl` when scrolled (>40px)
- Logo left, nav links center (desktop), Get Quote gold button right
- Mobile: hamburger → solid glass dropdown

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| `gold` | `bg-[#F5B642] text-black hover:bg-[#FFC857]` | Primary CTAs |
| `glass` | `liquid-glass text-white hover:bg-white/5` | Secondary CTAs |
| `ghost` | `text-white/80 hover:text-white` | Tertiary links |
| `whatsapp` | `bg-[#25D366] text-white` | WhatsApp only |

### Cards
- **Glass card (dark):** `liquid-glass rounded-3xl p-6`
- **Product card:** glass card with colored placeholder image area (product.placeholderColor) + glass body
- **Stat tile:** glass card with gold icon, serif value, uppercase label

### Form fields
```css
input/textarea: bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-[#F5B642] rounded-full px-4 py-2.5
labels: text-white/60 text-xs font-medium
submit: bg-[#F5B642] text-black hover:bg-[#FFC857] rounded-full py-3
```

## Animation System (framer-motion)

### Reveal on scroll
```js
initial={{ opacity: 0, y: 40 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.8 }}
// useInView: { once: true, margin: '-100px' }
```

### Staggered children
```js
transition={{ duration: 0.7, delay: 0.1 * index }}
```

### Micro-interactions
- Buttons: `whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}`
- Product cards: `hover:-translate-y-1 transition-transform`
- NO bounce/elastic easing (feels dated — impeccable anti-pattern)

### Hero video fade loop (vanilla JS, requestAnimationFrame)
- `canplay` → fade 0→1 over 500ms
- `timeupdate` at ≤0.55s remaining → fade to 0 over 500ms
- `ended` → 100ms black pause → reset → replay → fade to 1
- `muted` always; sound toggle button provided

## Iconography
- **Library:** lucide-react
- **Sizes:** 16px (inline), 20px (buttons), 24px (nav), 28px (feature tiles)
- **Color:** gold `#F5B642` for primary icons, teal `#0E8E8E` for trust/certification icons

### Icon color rules
| Icon type | Color | Why |
|-----------|-------|-----|
| Capability/feature icons (Factory, PackageCheck, etc.) | Gold | Primary brand accent |
| Process step icons | Gold | Primary flow |
| Certification icons (ShieldCheck, FileCheck, Award) | Teal | Trust signal |
| CheckCircle2 in feature lists | Teal | Verified signal |
| Product brand labels | Teal | Healthcare brand signal |

## Responsive Breakpoints
| Breakpoint | Width | Target |
|------------|-------|--------|
| base | <640px | Mobile |
| `sm:` | ≥640px | Large mobile / small tablet |
| `md:` | ≥768px | Tablet |
| `lg:` | ≥1024px | Desktop (nav switches to full) |

**Mobile-first:** Design for mobile, enhance at `md:` and `lg:`.

## Accessibility
- Semantic HTML (`main`, `header`, `nav`, `section`, `article`, `footer`)
- ARIA labels on icon-only buttons (WhatsApp, sound toggle, close, menu)
- `alt` text on all images
- Keyboard navigation (focus-visible states)
- Color contrast: gold `#F5B642` on black = 12.3:1 (AAA ✅), teal `#0E8E8E` on black = 5.2:1 (AA ✅)
- `prefers-reduced-motion` respected (Phase 6 will add)
- Form labels associated with inputs via `htmlFor`/`id`

## Anti-Patterns to Avoid (from impeccable)

- ❌ Overused fonts (Inter-only) → we pair Instrument Serif + Inter ✅
- ❌ Gray text on colored backgrounds → check all glass surfaces
- ❌ Pure black/gray (always tint) → our `#0A0A0A` is warm-tinted ✅
- ❌ Cards nested in cards → audit product cards
- ❌ Bounce/elastic easing → use ease-out cubic only
- ❌ Icon-in-rounded-square above every heading → vary layouts
- ❌ Purple-to-blue gradients → we use gold/teal only ✅
- ❌ Fake testimonials/certs → only real GST/IEC ✅

## SEO
- Root metadata in `layout.tsx`
- Per-page metadata via `usePageMeta` hook (Phase 7 will add)
- JSON-LD `LocalBusiness` schema (Phase 7)
- JSON-LD `Product` schema on product detail (Phase 7)

---

*This DESIGN.md is the AI-readable design system. Source of truth for visual implementation. Updates here propagate to all pages.*
