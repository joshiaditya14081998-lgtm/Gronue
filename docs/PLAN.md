# Groneu Healthcare — Comprehensive Development Plan

> **Status:** First build pass complete (8 pages live). Now in REFINEMENT phase.
> **Approach:** Option C (Hybrid dark/light) was built first pass — but uniformity issue identified. Awaiting Phase 0 decision to refactor.
> **Rule:** User-visible route is `/` only per environment rules — multi-page via hash-router.
> **Skills:** 4 agent skills installed — see `docs/SKILLS-INTEGRATION.md` for full strategy.

## 📋 Current Planning Documents

| Document | Purpose | Status |
|----------|---------|--------|
| **`docs/DECISION-MATRIX.md`** | Phase 0 — choose uniformity direction (Option 1/2/3) | ⏳ Awaiting client decision |
| **`docs/BUILD-PHASES.md`** | Phases 0-10 detailed execution plan | ✅ Ready (supersedes phases below) |
| `docs/SKILLS-INTEGRATION.md` | How 4 skills are used per phase | ✅ Reference |
| `docs/CONTENT.md` | All 28 products + company data | ✅ Source of truth |
| `docs/DESIGN-SYSTEM.md` | Brand colors, typography, components | ✅ Reference (will update per Phase 0) |

## 🚦 Current State (first build pass)

- ✅ 8 pages built + functional (Home, Products, Product Detail, Manufacturing, White-Label, About, Quality, Contact)
- ✅ Hash-router, hero video, enquiry modal, WhatsApp button, mobile menu
- ✅ Lint clean, Agent Browser verified, zero console errors
- ⚠️ **Uniformity issue** — dark/light split feels inconsistent (client flagged)
- ⚠️ **Navbar overlap** — transparent glass lets content bleed on scroll
- ⚠️ **Skills not used** — taste-skill, impeccable, awesome-design-md installed but never applied
- ⚠️ **Quality gates not measured** — no impeccable audit scores yet

## 📌 Next Steps (in order)

1. **Client decides Phase 0** (see `DECISION-MATRIX.md`) — Option 1 (all dark), 2 (all light), or 3 (dark hero + light rest)
2. **Execute Phases 1-10** per `BUILD-PHASES.md`
3. Each phase has Definition of Done — no skipping

---

## 🆕 Skills Installed (4)

| Skill | Role | Used in Phases |
|-------|------|----------------|
| **taste-skill** | Premium frontend art direction (designer) | Phase 4 |
| **impeccable** | Design QA — 24 commands, 61 detector rules (QA lead) | Phase 3 |
| **awesome-design-md** | 84 DESIGN.md reference files (mood board) | Phase 5 |
| **img2threejs** | Image → Three.js 3D model (wow factor, optional) | Phase 9 (optional) |

**Full strategy:** `docs/SKILLS-INTEGRATION.md`

---

## ⚠️ Critical Environment Constraint & Solution

The sandbox environment states: *"user can only see the / route defined in src/app/page.tsx. do not write any other route."*

However, the user wants a **multi-page website** (Home, About, Products, Manufacturing, White-Label, Quality, Contact).

**Solution:** Build the site as a **single-route SPA-style app** where all "pages" are sections/components rendered client-side via state-based routing (no Next.js route files beyond `/`). This is achieved by:

1. A single `src/app/page.tsx` that renders a `<SiteShell>` client component
2. `SiteShell` manages `currentPage` state (Home, About, Products, etc.)
3. Navigation clicks update state + `window.history.pushState` (so URL changes to `/#about`, `/#products` etc. for shareability + back button works)
4. Scroll-to-top on page change
5. Each "page" is a separate component in `src/components/pages/`

**Benefits:**
- Complies with environment rule (only `/` route)
- Feels like a real multi-page site (URL hash, back button, scroll reset)
- All pages share navbar/footer (instant nav, no reload)
- SEO is secondary (client said domain connects later; SEO can be enhanced post-launch)

**Alternative considered:** Next.js App Router multi-route (`/about`, `/products`). Rejected because it violates the sandbox rule. The hash-router approach gives the same UX within the constraint.

---

## 1. Tech Stack (all pre-installed)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom CSS tokens |
| UI Library | shadcn/ui (existing) + custom liquid-glass |
| Animation | framer-motion ^12.23.2 |
| Icons | lucide-react ^0.525.0 |
| Fonts | Google Fonts (Instrument Serif + Inter) |
| State | React useState/useContext (lightweight, no Zustand needed) |
| Forms | react-hook-form (existing) + zod validation |
| Toasts | sonner (existing) for form success |
| Database | NOT NEEDED (static content site; enquiry forms can use a simple API route or mailto) |

### Assets (already saved)
- Logo: `/public/assets/brand/Groneu-logo.png`
- Hero video: `/public/assets/video/manufacturing-plant.mp4`
- Products: `/public/assets/products/` (placeholders until client uploads)

---

## 2. File Structure (proposed)

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, ThemeProvider)
│   ├── globals.css             # Tailwind + tokens + liquid-glass classes
│   └── page.tsx                # Single route → renders <SiteShell/>
│
├── components/
│   ├── shell/
│   │   ├── SiteShell.tsx       # Hash-router + page switcher + scroll manager
│   │   ├── Navbar.tsx          # Adaptive glass navbar (dark/light aware)
│   │   ├── Footer.tsx          # Shared footer
│   │   ├── FloatingWhatsApp.tsx
│   │   └── EnquiryModal.tsx    # Global quick-enquiry modal
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ManufacturingPage.tsx
│   │   ├── WhiteLabelPage.tsx
│   │   ├── QualityPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── sections/               # Reusable page sections
│   │   ├── hero/
│   │   │   ├── HeroVideo.tsx   # Video + fade-loop logic + sound toggle
│   │   │   └── HeroContent.tsx
│   │   ├── TrustBar.tsx
│   │   ├── TwoPathways.tsx     # B2B vs B2C fork
│   │   ├── CapabilitiesGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── ManufacturingTeaser.tsx
│   │   ├── WhyGroneu.tsx
│   │   ├── CTASection.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── FAQSection.tsx
│   │   ├── EnquiryForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── ProductGrid.tsx
│   │
│   ├── ui/                     # Existing shadcn components
│   └── primitives/
│       ├── GlassCard.tsx       # liquid-glass wrapper
│       ├── SectionHeading.tsx  # Serif heading with italic accent
│       ├── Badge.tsx
│       └── Button.tsx          # CTA variants
│
├── data/
│   ├── products.ts             # All 28 products as typed array (from CONTENT.md)
│   ├── company.ts              # Company info, contact, statutory
│   └── navigation.ts           # Nav structure
│
├── lib/
│   ├── router.ts               # Hash-router types + helpers
│   └── utils.ts                # cn() etc (existing)
│
└── hooks/
    ├── useHashRoute.ts         # Current page from URL hash
    └── useThemeMode.ts         # Dark/light per current page

public/assets/
├── brand/Groneu-logo.png
├── video/manufacturing-plant.mp4
└── products/                   # Placeholders + client uploads later
```

---

## 3. Page Inventory & Detailed Sections

### Page 1 — HOME (`#home`) [DARK mode]
**Purpose:** First impression. Establish premium manufacturer. Dual-audience entry.

| # | Section | Mode | Content |
|---|---------|------|---------|
| 1 | Hero video | Dark | Fullscreen plant video, fade-loop, sound toggle. Headline: "Crafted with care. Built for *trust*." (gold italic). Subhead. Dual CTA: [Explore Products →] [White-Label Enquiry] |
| 2 | Trust bar | Dark | Glass strip: "Est. 2022 • Palanpur, Gujarat • ₹5-25Cr Turnover • GST & IEC Registered" |
| 3 | Two pathways | Dark | Split cards: "For Brands" (white-label) vs "For Consumers" (products). User self-selects. |
| 4 | Capabilities snapshot | Dark | 4 glass tiles: Manufacturing Capacity (600K pcs/day), Product Range (28+ products), Quality Standards, Customization |
| 5 | Featured products | Dark→Light transition | 4 hero products with photos/placeholders. Gold "View all" link → #products |
| 6 | Manufacturing teaser | Dark | Wide cinematic video strip + "Step inside our plant →" → #manufacturing |
| 7 | Why Groneu | Dark | 3 reasons with icons + stats (81% response rate, etc.) |
| 8 | CTA band | Dark | "Partner with us" + mini enquiry form (name, email, message) → toast success |
| 9 | Footer | Dark | Shared (see Shell) |

---

### Page 2 — ABOUT (`#about`) [LIGHT mode]
**Purpose:** Trust, credibility, human story.

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | "Pioneering care since 2022" (serif, "care" teal italic) + brand story paragraph |
| 2 | Story | Origin → mission → vision (3-column or narrative) |
| 3 | Leadership | CEO Nitin Patel + 3 partners (cards, photo placeholders) |
| 4 | Stats | Est. 2022 | ₹5-25Cr | 28+ products | 600K pcs/day capacity |
| 5 | Infrastructure | Plant + warehouse + team photo placeholders in glass-light cards |
| 6 | Why choose us | Value props (reuse from old site "Why Us?" verbatim) |
| 7 | Statutory profile | GST + IEC in a trust card |

---

### Page 3 — PRODUCTS (`#products`) [LIGHT mode]
**Purpose:** Own-brand catalogue.

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | "Designed for comfort. Made for *you*." + category filter chips (All / Sanitary Napkins / Sanitary Pad) |
| 2 | Filter bar | By size (L/XL/XXL/XXXL), by top sheet (Cottony/Dry Net), by pack type |
| 3 | Product grid | 28 product cards (responsive grid). Each: image placeholder, name, key spec badge, price-from, "View Details" → opens Product Detail page |
| 4 | Bulk enquiry CTA | "Distributor / Bulk enquiry" button → #contact or modal |

**Data source:** `src/data/products.ts` — all 28 products from CONTENT.md

---

### Page 4 — PRODUCT DETAIL (`#product/:id`) [LIGHT mode]
**Purpose:** Individual product deep-dive.

| # | Section | Content |
|---|---------|---------|
| 1 | Breadcrumb | Home > Products > [Product Name] |
| 2 | Gallery | Main image placeholder + thumbnail strip (front/back/open pack) |
| 3 | Header | Name, tagline, key spec badges (size, length, top sheet) |
| 4 | Specs table | Full spec key-value table (all specs from CONTENT.md) |
| 5 | Features | Bullet list with check icons |
| 6 | Usage directions | (where available, e.g. A3 has full directions) |
| 7 | MOQ + Delivery | "MOQ: X • Delivery: Y" callout |
| 8 | Related products | "You may also like" (3 cards, same category) |
| 9 | Enquiry CTA | "Ask about this product" → pre-fills enquiry modal with product name |

---

### Page 5 — MANUFACTURING (`#manufacturing`) [DARK mode]
**Purpose:** B2B trust — prove you're a real factory.

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Plant video/image wide. "Where precision meets *care*." (gold italic) |
| 2 | Plant showcase | Main video player (your 10s video, looping) + thumbnail grid (placeholders for future plant photos) |
| 3 | Infrastructure | 4 cards: Production Line, Warehouse, Quality Lab, Packing Unit. Specs: area, capacity. |
| 4 | Process flow | Visual timeline: Raw Material → Processing → Quality Check → Packaging → Dispatch (5 steps, numbered, icons) |
| 5 | Capacity | Stats grid: 600K pcs/day max capacity, 28+ product variants, MOQ flexibility, 2-7 day lead time |
| 6 | CTA | "Schedule a plant visit" / "Discuss your requirements" |

---

### Page 6 — WHITE-LABEL SERVICES (`#white-label`) [DARK mode]
**Purpose:** B2B lead gen — convert brands seeking a manufacturer.

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | "Your brand. Our *expertise*." (gold italic) + "Get Quote" CTA |
| 2 | What is white-label | 3-step explainer: Choose spec → We manufacture → You sell under your brand |
| 3 | What we offer | Grid: Custom sizes, Custom packaging, Private branding, MOQ flexibility |
| 4 | Customization options | Detailed: sizes (240-320mm), absorbency, materials (cottony/dry net), pack sizes (6-1200), branding (wrapper + outer box) |
| 5 | Process | 5-step timeline: Enquiry → Spec finalization → Sample → Production → Dispatch |
| 6 | Why partner with us | Manufacturing edge: capacity, quality, Gujarat location, IEC for exports |
| 7 | FAQ | B2B Q&A: MOQ? Lead time? Payment terms? Export docs? Sample policy? |
| 8 | Enquiry form | B2B fields: Company name, Brand, Target market, Expected volume, Product type, Timeline. "Request Quote" → "Enquire for Quote" (no pricing) |

---

### Page 7 — QUALITY & COMPLIANCE (`#quality`) [LIGHT mode]
**Purpose:** Honest quality story (no fake certs).

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | "Our commitment to *quality*." (teal italic) |
| 2 | Statutory credentials | GST No. 24AAYFG3170H1Z5 + IEC AAYFG3170H in trust cards (these are the ONLY verified credentials) |
| 3 | Internal QA process | Timeline: Incoming material inspection → In-process quality checks → Final product testing → Packaging inspection → Dispatch |
| 4 | Standards we follow | Reference to BIS (mentioned on several products), industrial standards. List product-level certifications (BIS, WHO-GMP, ISO) as "claimed on specific products" — not company-wide certs |
| 5 | Testing | Absorbency testing, shelf life (36 months), material quality |
| 6 | Working towards | (Honest) "Continuously improving our quality systems" |

---

### Page 8 — CONTACT (`#contact`) [LIGHT mode]
**Purpose:** Lead capture for both audiences.

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | "Let's *talk*." (teal italic) |
| 2 | Two enquiry paths | Tabs: "General Enquiry" vs "White-Label / B2B Enquiry" |
| 3 | Contact form | Name, Email, Phone, Company (optional), Enquiry type dropdown, Message. "Enquire for Quote" button → toast success |
| 4 | Contact details | Office address (Palanpur), Factory address, Phone +91-8047844175, Email info@groneuhealthcare.com, WhatsApp |
| 5 | Map | Embedded Google Map (coords 24.21774, 72.44681) |
| 6 | Response stats | 81% response rate, typical response time |

---

## 4. Shared Shell Components

### Navbar
- Sticky top, glass pill, `max-w-5xl mx-auto`
- **Adaptive theme:** dark glass on Home/Manufacturing/White-Label; light glass on Products/About/Quality/Contact
- Logo left (clickable → #home)
- Center (desktop): Home | Products | Manufacturing | White-Label | About | Quality | Contact
- Right: "Get Quote" button → #contact (or opens EnquiryModal)
- Mobile: hamburger → full-width glass dropdown

### Footer (all pages, always dark)
- 4 columns:
  1. Brand: logo + "Groneu Healthcare" + short blurb + social icons
  2. Quick Links: all pages
  3. Products: top categories + "View all"
  4. Contact: address, phone, email, WhatsApp
- Bottom bar: © 2026 Groneu Healthcare | GST: 24AAYFG3170H1Z5 | IEC: AAYFG3170H

### FloatingWhatsApp
- Fixed bottom-right, all pages
- Green circle, WhatsApp icon
- Links to `https://wa.me/918047844175`
- Subtle pulse animation

### EnquiryModal (global)
- Triggered by "Get Quote" / "Enquire" buttons anywhere
- Glass modal: Name, Email, Phone, Message, "Send" → toast
- Pre-fills product name if opened from product detail

---

## 5. Routing Implementation (hash-based)

### `src/lib/router.ts`
```typescript
export type PageId = 'home' | 'about' | 'products' | 'product' | 'manufacturing' | 'white-label' | 'quality' | 'contact'

export interface RouteState {
  page: PageId
  productId?: string  // for product detail
}

export function parseHash(): RouteState { ... }
export function navigateTo(page: PageId, productId?: string) {
  const hash = productId ? `#product/${productId}` : `#${page}`
  window.history.pushState({}, '', hash)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'instant' })
}
```

### `src/hooks/useHashRoute.ts`
- Listens to `popstate` + `hashchange`
- Returns current `RouteState`
- `SiteShell` switches page component based on this

### Theme awareness
- `useThemeMode()` returns `'dark' | 'light'` based on current page
- Navbar + page background read this
- Smooth transition when switching (optional: framer-motion AnimatePresence for page fade)

---

## 6. Data Layer

### `src/data/products.ts`
- TypeScript array of all 28 products (typed from CONTENT.md)
- Each product: `{ id, name, slug, category, price, priceUnit, moq, moqUnit, size, length, topSheet, brand, packSize, features[], specs{}, certifications[], productionCapacity, deliveryTime, packagingDetails, description, images[] }`
- Helper functions: `getProductBySlug()`, `getByCategory()`, `getRelated()`

### `src/data/company.ts`
- Company info object (address, phone, email, GST, IEC, etc.)
- Statutory credentials
- Infrastructure stats

### `src/data/navigation.ts`
- Nav links array

---

## 7. Forms & Enquiries

Since this is a static-content site (no database needed), enquiries handled via:

**Option A (simpler, no backend):** Form submission opens user's email client via `mailto:` with pre-filled body. Or shows toast "We'll contact you" + logs to console.

**Option B (recommended):** A Next.js API route `/api/enquiry` that receives POST and:
- Validates with zod
- Could email via a service (deferred — no email service configured)
- For now: store in memory/log + return success toast
- When client connects domain + email, upgrade to real email sending

**Decision:** Start with Option A (mailto + toast). Upgrade to B when client provides email service credentials. Forms use react-hook-form + zod for client validation regardless.

---

## 8. Build Order (development phases)

### Phase 1 — Foundation (do first)
1. Clean up `globals.css` with design tokens (dark + light CSS variables)
2. Add liquid-glass + liquid-glass-light classes
3. Update `layout.tsx` (fonts: Instrument Serif + Inter, metadata, black bg)
4. Create data files: `products.ts`, `company.ts`, `navigation.ts`
5. Create primitives: `GlassCard`, `SectionHeading`, `Button`, `Badge`
6. Create router: `lib/router.ts` + `hooks/useHashRoute.ts`

### Phase 2 — Shell
7. `Navbar` (adaptive theme, mobile menu)
8. `Footer` (always dark, full content)
9. `FloatingWhatsApp`
10. `EnquiryModal`
11. `SiteShell` (page switcher + scroll management)

### Phase 3 — Home Page (DARK)
12. `HeroVideo` (with sound toggle + fade loop)
13. `TrustBar`
14. `TwoPathways`
15. `CapabilitiesGrid`
16. `FeaturedProducts` (4 products, placeholder images)
17. `ManufacturingTeaser`
18. `WhyGroneu`
19. `CTASection` (mini enquiry form)
20. Assemble `HomePage.tsx`

### Phase 4 — Products (LIGHT)
21. `ProductsPage` with filter bar + grid (all 28 products)
22. `ProductGrid` + product card component
23. `ProductDetailPage` (gallery, specs table, features, related, enquiry)
24. Product data wiring + routing

### Phase 5 — Manufacturing (DARK)
25. `ManufacturingPage` (hero, video showcase, infrastructure, process, capacity, CTA)

### Phase 6 — White-Label (DARK)
26. `WhiteLabelPage` (hero, explainer, offerings, customization, process, why-us, FAQ, enquiry form)

### Phase 7 — About + Quality + Contact (LIGHT)
27. `AboutPage`
28. `QualityPage`
29. `ContactPage` (with map embed + form)

### Phase 8 — Polish & Verify
30. Page transition animations (AnimatePresence)
31. Mobile responsiveness pass on all pages
32. Accessibility pass (aria, alt, keyboard)
33. SEO metadata per page
34. Lint + dev log check
35. Agent Browser end-to-end verification (all pages, all CTAs, forms)

---

## 9. Key Decisions Log (confirmed with client)

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | Design direction | Option C (hybrid) | Two audiences need different tones |
| 2 | Brand colors | Teal (primary) + Gold (accent) | From logo analysis |
| 3 | Certifications | Only GST + IEC (honest) | Client confirmed no other certs |
| 4 | Pricing display | "Enquire for Quote" | Client decision |
| 5 | Email | info@groneuhealthcare.com | Standard (client to confirm) |
| 6 | WhatsApp | +91-8047844175 | Same as phone |
| 7 | Product photos | Placeholders now | Client will upload later |
| 8 | Plant photos | Placeholders in gallery | Add later |
| 9 | Founder photos | Skip / placeholders | Not priority |
| 10 | Domain | Connect later | Post-build |
| 11 | Analytics | Defer | Post-launch |
| 12 | Language | English only | Now; structure for future i18n |
| 13 | Hero sound toggle | Include | Client said "keep it" |
| 14 | Product data | All 28 products, real specs | Verbatim from old site |
| 15 | Multi-page approach | Hash-router (single / route) | Sandbox constraint |

---

## 10. Open Items (non-blocking, can defer)

- [ ] Client to confirm email address (info@ vs sales@)
- [ ] Client to upload real product photos (28 products)
- [ ] Client to upload plant/factory still photos
- [ ] Client to provide founder/team photos (optional)
- [ ] Domain connection + hosting (post-build)
- [ ] Google Analytics setup (post-launch)
- [ ] Real email service for enquiry forms (post-launch)
- [ ] SEO optimization pass (post-launch, when domain live)

---

## 11. Success Criteria

The site is "done" when:
- [ ] All 8 pages render correctly (verified via Agent Browser)
- [ ] Navigation works (hash-routing, back button, scroll-to-top)
- [ ] All 28 products appear on Products page with real data
- [ ] Product detail pages show full specs from CONTENT.md
- [ ] Hero video plays with fade-loop + sound toggle works
- [ ] Navbar adapts theme (dark/light) per page
- [ ] Forms validate + show success toast
- [ ] WhatsApp button links correctly
- [ ] Mobile responsive on all pages (390px tested)
- [ ] No console errors, no lint errors
- [ ] Footer sticky, content pushes naturally
- [ ] All real company data (GST, IEC, address, phone) accurate

---

*Plan complete. Development can begin following the Phase order above. Each phase is independently testable.*
