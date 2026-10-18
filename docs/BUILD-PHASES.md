# Groneu Healthcare — Build Phases (Comprehensive)

> **Status:** PLANNING — no development until Phase 0 decision is made.
> **Supersedes:** The phase order in original `PLAN.md`. Original plan's phases 1-8 are now reorganized into phases 0-10 below based on lessons learned from the first build pass.
> **Rule:** Each phase has a Definition of Done (DoD). Do not start the next phase until the current phase's DoD is met.

---

## Context — Why this re-plan

The first build pass (Phases 1-8 of original plan) produced a working site with 8 pages. But verification revealed:

1. **Uniformity issue** — dark/light split across pages feels inconsistent (client flagged)
2. **Navbar overlap** — transparent glass lets content bleed through on scroll
3. **Skills installed but never used** — taste-skill, impeccable, awesome-design-md, img2threejs were integrated in strategy doc but not actually applied during build
4. **Quality gates never measured** — impeccable audit scores (target ≥3/4) never run
5. **Accessibility, SEO per-page, mobile-all-pages** — planned in Phase 8 but not done

This document reorganizes the remaining work into **10 phases** (0-9) that fix all of the above.

---

## Phase 0 — Decision: Uniformity Direction

**Goal:** Choose the visual direction before any refactor. This decision affects every subsequent phase.

**Prerequisite:** None. This is the starting point.

### Task
Client chooses ONE of three options (see `DECISION-MATRIX.md` for full comparison):

| Option | Description | Pages affected |
|--------|-------------|----------------|
| **Option 1 — All Dark** | Entire site black bg, gold primary accent, glass throughout | Convert 5 light pages → dark |
| **Option 2 — All Light** | Entire site warm off-white, teal primary, soft cards | Convert 3 dark pages → light, rework hero video |
| **Option 3 — Dark Hero + Light Rest** | Only Home hero section dark (for video), all other sections + pages light | Keep mostly as-is, smooth the home hero→sections transition |

### Recommendation
**Option 1 (All Dark)** — best for logo gold accent, hero video blend, B2B premium differentiation. Full rationale in `DECISION-MATRIX.md`.

### Definition of Done
- [ ] Client confirms Option 1, 2, or 3
- [ ] `DECISION-MATRIX.md` updated with final choice marked

### Blocks
**Everything.** No other phase can start until this is decided. Theme refactor (Phase 1), navbar fix (Phase 2), skill audits (Phases 3-5) all depend on the chosen direction.

---

## Phase 1 — Theme Refactor (Uniformity)

**Goal:** Apply the chosen uniform theme to all 8 pages. Eliminate the dark/light split (or make it intentional per Option 3).

**Prerequisite:** Phase 0 decision made.

### Tasks (Option 1 — All Dark, the recommended path)

#### 1.1 Update design tokens in `globals.css`
- Remove `.liquid-glass-light` class (no longer needed) OR keep but unused
- Ensure all brand tokens work on dark: `--groneu-bg: #0A0A0A`, gold `#F5B642` primary, teal `#0E8E8E` secondary (for product cards/healthcare signals)
- Add a **white inner card** variant: `.product-card-inner` — white bg `#FFFFFF` with `text-[#1A2E2E]` for product image + spec areas (trust contrast inside dark pages)

#### 1.2 Refactor light pages → dark
Convert these 5 files from `bg-[#FAFAF7] text-[#1A2E2E]` to `bg-[#0A0A0A] text-white`:

| File | Current (light) | Target (dark) |
|------|-----------------|---------------|
| `src/components/pages/ProductsPage.tsx` | White cards, teal accents | Glass cards, gold accents. Product image areas use white inner cards for trust |
| `src/components/pages/ProductDetailPage.tsx` | White spec cards | Glass spec card. Product image = white inner card. Specs readable on glass |
| `src/components/pages/AboutPage.tsx` | White leadership cards | Glass cards. Statutory profile on glass |
| `src/components/pages/QualityPage.tsx` | White QA step cards | Glass cards. BIS product list on glass |
| `src/components/pages/ContactPage.tsx` | White form + info cards | Glass form + info cards. Map embed keeps border |

For each file:
- Replace `bg-[#FAFAF7]` → `bg-[#0A0A0A]`
- Replace `text-[#1A2E2E]` → `text-white`
- Replace `text-[#5A6B6B]` → `text-white/60`
- Replace `text-[#8A9A9A]` → `text-white/40`
- Replace `border-[#E8E8E2]` → `border-white/10`
- Replace `bg-white` (cards) → `liquid-glass` class
- Replace `liquid-glass-light` → `liquid-glass`
- Replace `text-[#0E8E8E]` (teal accents) → `text-[#F5B642]` (gold) — EXCEPT product brand labels and healthcare-trust signals, keep teal for those
- Replace `bg-[#0E8E8E]` (teal buttons) → `bg-[#F5B642] text-black` (gold buttons)
- CTAButton `variant="teal"` → `variant="gold"`
- CTAButton `variant="glass-light"` → `variant="glass"`

#### 1.3 Update `SiteShell.tsx`
- Remove the `isDarkPage()` logic and `dark` state — all pages are dark now
- Always apply `bg-[#0A0A0A] text-white` to wrapper
- Navbar always receives `isDark={true}`
- EnquiryModal always `variant="dark"`
- Remove `DARK_PAGES` / `LIGHT_PAGES` arrays from `router.ts` (or keep but unused)

#### 1.4 Update `Navbar.tsx`
- Remove `isDark` prop entirely (always dark now)
- Simplify glass/text classes

#### 1.5 Update primitives
- `CTAButton.tsx` — `variant="teal"` and `variant="glass-light"` can stay for backwards compat but won't be used
- `GlassCard.tsx` — `variant="light"` can stay but unused
- `Badge.tsx` — `variant="glass-light"` unused

#### 1.6 Keep teal as secondary accent
Even in all-dark, teal `#0E8E8E` should appear in:
- Product brand labels (e.g. "GRONEU", "Super13" labels above product names)
- Healthcare/trust badges (BIS certified, ISO, etc.)
- Quality page step numbers
- "Verified" checkmarks
This maintains brand connection to the logo's teal while gold is the primary accent.

### Definition of Done
- [ ] All 8 pages render with dark background
- [ ] No `bg-[#FAFAF7]` or `text-[#1A2E2E]` in any page component (except product card inner whites)
- [ ] Product image areas use white inner cards for trust contrast
- [ ] Teal still appears as secondary accent (product labels, healthcare badges)
- [ ] Site feels visually uniform — no jarring theme switches between pages
- [ ] Lint clean
- [ ] Agent Browser: navigate through all 8 pages, confirm uniform dark feel

### Tasks (Option 2 — All Light) — if client chooses this instead
- Convert Home, Manufacturing, White-Label from dark → light
- Hero video: add strong dark gradient overlay so video isn't washed out on light bg
- Replace `liquid-glass` → `liquid-glass-light` on those 3 pages
- Replace gold accents → teal accents on those 3 pages
- Manufacturing "premium gravitas" achieved through strong typography + imagery, not dark bg

### Tasks (Option 3 — Dark Hero + Light Rest) — if client chooses this
- Keep current pages mostly as-is
- HomePage: only hero section stays dark, rest of home sections convert to light
- Add smooth gradient transition from dark hero → light sections (e.g. `bg-gradient-to-b from-[#0A0A0A] to-[#FAFAF7]`)
- Navbar: dark glass over hero, light glass after scroll past hero (detect scroll position)
- All other pages already light — no change

---

## Phase 2 — Navbar Overlap Fix

**Goal:** Fix the transparent glass navbar letting content bleed through on scroll.

**Prerequisite:** Phase 1 complete (so we know the final theme).

### Tasks

#### 2.1 Add solid background when scrolled
In `Navbar.tsx`, update the glass pill div:

```tsx
// Current (broken):
className={`${glassClass} ... ${scrolled ? 'shadow-lg' : ''}`}

// Fixed:
className={`${
  scrolled
    ? 'bg-[#0A0A0A]/80 backdrop-blur-xl shadow-lg shadow-black/20'
    : glassClass  // transparent glass at top (over hero — looks intentional)
} ...`}
```

For light pages (if Option 2/3): `bg-[#FAFAF7]/80 backdrop-blur-xl` when scrolled.

#### 2.2 Smooth transition
Add `transition-all duration-300` so the bg change isn't a snap.

#### 2.3 Lower scroll threshold
Current: `scrollY > 20`. Change to `scrollY > 40` so it doesn't trigger too early (feels less twitchy).

#### 2.4 Mobile menu also solid
When mobile menu is open, the menu panel should use the solid scrolled background too (not just glass):
```tsx
className={`${scrolled || mobileOpen ? 'bg-[#0A0A0A]/90 backdrop-blur-xl' : glassClass} ...`}
```

#### 2.5 Test on all pages
- Home (hero — transparent at top, solid after scroll)
- All other pages — solid navbar immediately (since no hero video, always scrolled state)

### Definition of Done
- [ ] At top of Home (over hero): navbar transparent glass (intentional, looks good over video)
- [ ] Scrolled down on any page: navbar solid (80% bg + blur), content NOT visible behind
- [ ] Mobile menu panel solid when open
- [ ] Smooth transition (no snap)
- [ ] Agent Browser: scroll on Home, Products, About — confirm no overlap

---

## Phase 3 — impeccable Quality Audit

**Goal:** Run impeccable's 61 detector rules + audit command on every page. Fix all issues. Reach ≥3/4 score on all 5 audit dimensions per page.

**Prerequisite:** Phase 1 + 2 complete (so we audit the final design, not a throwaway).

### Tasks

#### 3.1 Write `PRODUCT.md` (impeccable `/init`)
Create `/home/z/my-project/PRODUCT.md` with Groneu's durable product truth:
- Platform: web
- Users: B2B brands (white-label) + B2C consumers/distributors
- Product Purpose: sanitary napkin manufacturer website, lead generation
- Positioning: premium Gujarat manufacturer, white-label + own-brand
- Operating Context: multi-page Next.js site, hash-router, English only
- Brand Commitments: expert, caring, trustworthy, no-slop
- Evidence on Hand: real product data (28 products), GST/IEC, plant video
- Product Principles: practice what we preach, show don't tell, honest (no fake certs)

#### 3.2 Write `DESIGN.md` (impeccable `/document`)
Create `/home/z/my-project/DESIGN.md` — AI-readable design system doc:
- Colors (from chosen Phase 0 option)
- Typography (Instrument Serif + Inter)
- Spacing, radii, components
- Anti-patterns to avoid (from impeccable: no Inter-only, no gray-on-color, no nested cards, no bounce easing)

#### 3.3 Audit each page
For each of 8 pages, run impeccable audit methodology manually (read `skills/impeccable/skill/reference/audit.md`):

| Page | Audit dimensions (0-4 each) | Target |
|------|---------------------------|--------|
| Home | A11y, Performance, Theming, Responsive, Integrity | All ≥3 |
| Products | same | All ≥3 |
| Product Detail | same | All ≥3 |
| Manufacturing | same | All ≥3 |
| White-Label | same | All ≥3 |
| About | same | All ≥3 |
| Quality | same | All ≥3 |
| Contact | same | All ≥3 |

#### 3.4 Fix issues found
Common issues to check per impeccable's anti-patterns:
- ❌ Overused fonts (Inter-only) → we use Instrument Serif + Inter ✅ (verify)
- ❌ Gray text on colored backgrounds → check all glass surfaces
- ❌ Pure black/gray (always tint) → our `#0A0A0A` is warm-tinted ✅ (verify)
- ❌ Cards nested in cards → audit product cards, capability tiles
- ❌ Bounce/elastic easing → check all framer-motion transitions
- ❌ Missing aria labels on icon buttons → check WhatsApp, sound toggle, close buttons
- ❌ Touch targets < 44px → check mobile nav, filter chips
- ❌ Missing alt text → check logo, product placeholders
- ❌ Heading hierarchy → one H1 per page, logical H2/H3 order

#### 3.5 Re-audit after fixes
Confirm all pages reach ≥3/4 on all 5 dimensions.

### Definition of Done
- [ ] `PRODUCT.md` created at project root
- [ ] `DESIGN.md` created at project root
- [ ] Audit report for each of 8 pages (documented scores)
- [ ] All pages score ≥3/4 on all 5 dimensions
- [ ] All impeccable anti-patterns eliminated
- [ ] Lint clean

---

## Phase 4 — taste-skill Art Direction (Premium Pages)

**Goal:** Run taste-skill's 6-step art direction on the 3 premium dark pages (Home, Manufacturing, White-Label) so they feel designed, not templated.

**Prerequisite:** Phase 3 complete (audit clean, so we refine a clean base).

### Tasks

#### 4.1 Step 1 — Inventory Groneu's unique assets
Document 8-12 things only Groneu has:
- Name "Groneu" + meaning
- Location: Palanpur, Gujarat (Shiv Industrial Park, Songadh, Palanpur-Abu Highway)
- Founded 2022, family business (3 Patel partners)
- 600K pcs/day capacity
- Export-ready (IEC: AAYFG3170H)
- Two business models (white-label + own-brand)
- Logo's female figure with raised arms (joy/freedom/health)
- The number 13 ("Super13" recurring in product names)
- Materials: HAT Cotton, Dry Net, Cottony Soft
- Constraint: feminine hygiene, trust-critical
- The Patel family name (Gujarat roots)
- Specific product codes (320mm, 280mm, 240mm)

#### 4.2 Step 2 — Write the argument (claims + proof per section)
For Home page, list each section as a claim with proof. Delete sections without claims. Avoid stock sequence (hero→3 features→CTA).

Example:
- "We manufacture at scale" → proof: 600K pcs/day
- "Brands trust us to make their products" → proof: white-label service + IEC export code
- "Our quality is verified" → proof: GST/IEC + BIS on products

#### 4.3 Step 3 — Draw direction
Run taste-skill's draw script:
```bash
node skills/taste-skill/skills/taste-skill/scripts/draw.mjs \
  --sector manufacturing \
  --brief "Gujarat sanitary napkin manufacturer, 600K pcs/day, white-label + own-brand, est. 2022" \
  --sections hero,stats,showcase,how-it-works,proof,cta,footer \
  --tone technical \
  --have product-photo,video \
  --keep palette,type \
  --options 3
```
Pick the direction that carries Groneu's unique idea. Deal full sheet.

#### 4.4 Step 4 — Build with real assets
- Manufacturing plant video (have ✅)
- Product photos (placeholders until client uploads)
- Logo (have ✅)
- Open-archive imagery of Gujarat/industrial precision if needed

#### 4.5 Step 5 — Browser self-review
Use agent-browser to screenshot Home, Manufacturing, White-Label at 3 widths (390, 768, 1280). Apply taste-skill's juror rubric.

#### 4.6 Step 6 — Look-and-fix loop (up to 3 rounds)
For each page:
1. Identify top 3 problems from screenshots
2. Fix them
3. Re-screenshot
4. Repeat up to 3 times

### Definition of Done
- [ ] Groneu inventory document written (8-12 unique assets)
- [ ] Argument (claims + proof) written for each premium page
- [ ] Direction drawn + chosen (document which of 20 directions)
- [ ] 3-width screenshots before + after for each premium page
- [ ] 3 rounds of look-and-fix documented
- [ ] Pages feel "designed" not "templated" (subjective but verifiable via VLM)

---

## Phase 5 — awesome-design-md Reference Refinement

**Goal:** Use Oura + Mercury (and 2-3 others) DESIGN.md files as reference to refine our design system. Subtle improvements, not redesign.

**Prerequisite:** Phase 4 complete (so we refine the art-directed pages).

### Tasks

#### 5.1 Read reference DESIGN.md files
Read these from `skills/awesome-design-md/design-md/`:
- `oura/DESIGN.md` — wellness brand, warm cream, editorial serif (closest healthcare analog)
- `mercury/DESIGN.md` — dark premium, ink-violet night (B2B dark reference)
- `notion/DESIGN.md` — warm minimalism, serif headings
- `stripe/DESIGN.md` — weight-300 elegance, trust-focused
- `linear.app/DESIGN.md` — ultra-minimal, precise

#### 5.2 Extract patterns applicable to Groneu
For each reference, note 1-2 patterns we could adopt:
- Oura: editorial serif sizing (110px display)? Warmth in product cards?
- Mercury: dark surface layering? Action pill style?
- Notion: breathing room? Soft surfaces?
- Stripe: weight-300 body type? Trust signal placement?
- Linear: precision in spacing?

#### 5.3 Refine design system (if needed)
Update `docs/DESIGN-SYSTEM.md` + `DESIGN.md` + `globals.css` with any improvements. Do NOT copy directly — Groneu has its own brand (teal + gold).

#### 5.4 Apply refinements to pages
Subtle updates — spacing, type weights, surface treatments. Not a redesign.

### Definition of Done
- [ ] 5 reference DESIGN.md files read + notes documented
- [ ] 3-5 patterns extracted for potential adoption
- [ ] Design system updated (if any changes warranted)
- [ ] Changes applied to pages
- [ ] No direct copying — Groneu brand identity preserved

---

## Phase 6 — Accessibility Pass

**Goal:** Full WCAG AA compliance on all 8 pages. Keyboard navigation, screen reader support, proper ARIA.

**Prerequisite:** Phase 5 complete.

### Tasks

#### 6.1 Audit current accessibility
Run agent-browser + manual check for:
- ARIA labels on all icon-only buttons (WhatsApp, sound toggle, close, menu)
- Alt text on all images (logo, product placeholders)
- Heading hierarchy (one H1 per page, logical H2/H3)
- Form labels associated with inputs (check `htmlFor`/`id` pairs)
- Keyboard navigation (Tab through all interactive elements, visible focus)
- Color contrast (gold on black ✓, teal on white ✓ — verify all text)
- `prefers-reduced-motion` handling for framer-motion

#### 6.2 Fix issues
Common fixes needed:
- Add `aria-label` to icon buttons missing them
- Add `alt` text to product placeholder images
- Add `role="dialog"` + `aria-modal` to EnquiryModal (already done — verify)
- Add `aria-expanded` to mobile menu toggle (already done — verify)
- Add visible `focus-visible:ring-2` styles to all buttons
- Add skip-to-main-content link
- Ensure tab order is logical

#### 6.3 Reduced motion
Wrap framer-motion animations in `useReducedMotion()` check — disable large animations for users who prefer reduced motion.

#### 6.4 Test with keyboard only
Agent-browser: Tab through Home page, confirm every interactive element reachable + visible focus.

### Definition of Done
- [ ] All icon buttons have aria-labels
- [ ] All images have alt text
- [ ] All form inputs have associated labels
- [ ] Heading hierarchy correct on all 8 pages
- [ ] Keyboard navigation works (Tab + Enter + Escape for modal)
- [ ] Visible focus indicators on all interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Skip-to-main link present

---

## Phase 7 — SEO Metadata Per Page

**Goal:** Each page has unique title, description, Open Graph, and structured data.

**Prerequisite:** Phase 1 complete (pages exist in final form).

### Tasks

#### 7.1 Create per-page metadata
Since we use hash-router (single `/` route), traditional per-page metadata is tricky. Options:
- **Option A (client-side):** Update `document.title` + meta tags on route change via useEffect
- **Option B (structured data only):** Keep single title, add JSON-LD structured data that updates per page

Implement Option A (more SEO value):
- Create `src/hooks/usePageMeta.ts` — sets document.title + meta description on route change
- Each page component calls `usePageMeta({ title, description })`

#### 7.2 Page metadata content
| Page | Title | Description |
|------|-------|-------------|
| Home | Groneu Healthcare — Crafted with care. Built for trust. | Leading sanitary napkin manufacturer in Palanpur, Gujarat. White-label + own-brand. 600K pcs/day. |
| Products | Products — Groneu Healthcare | 28+ sanitary napkins & pads. Cottony soft, dry net. Sizes L to XXXL. Super13, Groneu, Xtra New brands. |
| Product Detail | [Product Name] — Groneu Healthcare | [Product name] — [size] [length] [top sheet]. MOQ [moq]. Enquire for quote. |
| Manufacturing | Manufacturing — Groneu Healthcare | Our Palanpur facility: 600K pcs/day capacity, BIS-standard QA, 5-stage process. Step inside our plant. |
| White-Label | White-Label Manufacturing — Groneu Healthcare | Launch your sanitary product line. Custom sizes, materials, packaging, branding. MOQ flexible. Enquire for quote. |
| About | About Us — Groneu Healthcare | Groneu Healthcare — Palanpur, Gujarat. Est. 2022. ₹5-25Cr turnover. Patel family partnership. GST & IEC registered. |
| Quality | Quality & Compliance — Groneu Healthcare | GST & IEC registered. 5-stage QA process. BIS-certified products. 36-month shelf life. |
| Contact | Contact — Groneu Healthcare | Get in touch. Palanpur, Gujarat. Phone +91-8047844175. Email info@groneuhealthcare.com. Enquire for quote. |

#### 7.3 Structured data (JSON-LD)
Add `LocalBusiness` schema on all pages (address, phone, GST). Add `Product` schema on product detail pages (name, brand, specs).

#### 7.4 Open Graph + Twitter cards
Per-page OG title + description (client-side update).

### Definition of Done
- [ ] `usePageMeta` hook created
- [ ] All 8 pages set unique title + description
- [ ] JSON-LD `LocalBusiness` on all pages
- [ ] JSON-LD `Product` on product detail
- [ ] OG + Twitter cards update per page
- [ ] Agent Browser: navigate to each page, confirm `document.title` changes

---

## Phase 8 — Mobile Responsive Pass (All Pages)

**Goal:** All 8 pages tested + fixed at mobile widths (390px, 414px) and tablet (768px).

**Prerequisite:** Phase 1 complete.

### Tasks

#### 8.1 Test each page at 390px (iPhone 14)
For each of 8 pages, agent-browser screenshot at 390x844. Check:
- No horizontal scroll
- Touch targets ≥44px
- Text readable (no tiny text)
- Grids collapse to 1 column where appropriate
- Navbar hamburger works
- Forms usable on mobile
- Footer stacks properly

#### 8.2 Test each page at 768px (iPad)
Same checks at tablet width.

#### 8.3 Fix issues found
Common fixes:
- Adjust grid breakpoints (`sm:` `md:` `lg:`)
- Increase touch target sizes
- Fix text overflow
- Fix fixed-width elements causing horizontal scroll

#### 8.4 Test interactions on mobile
- Nav menu open/close
- Form fill + submit
- Enquiry modal open/close
- Product card tap → detail page
- Filter chips (Products page)

### Definition of Done
- [ ] All 8 pages tested at 390px + 768px
- [ ] No horizontal scroll on any page
- [ ] All touch targets ≥44px
- [ ] All text readable
- [ ] All interactions work on touch
- [ ] Screenshots documented for each page at each width

---

## Phase 9 — img2threejs (Optional Enhancement)

**Goal:** Add ONE 3D element as a "wow factor" — only if it adds genuine value.

**Prerequisite:** Phases 1-8 complete. Client product images available (for pad cross-section) OR we use a generated diorama.

### Tasks

#### 9.1 Decide on 3D element
Best candidates (ranked):
1. **3D pad cross-section on Quality page** — shows layers (top sheet, absorbent core, backing). Educational, genuine value.
2. **3D manufacturing plant diorama on Manufacturing page** — isometric factory scene. Visually compelling.
3. **3D product pack on Product Detail** — orbit around a product pack. Less value (pads aren't naturally 3D-showcase objects).

**Recommendation:** #1 (pad cross-section) IF client provides a reference image of the layered structure. Otherwise skip.

#### 9.2 Generate 3D model
```bash
# If we have a reference image:
npx --yes img2threejs@latest install --host claude
# Provide reference image → get Three.js model code
```

#### 9.3 Integrate into page
- Add `<Canvas>` from react-three-fiber (need to install)
- Embed 3D model with orbit controls
- Loading fallback
- Mobile performance check (3D can be heavy)

### Definition of Done
- [ ] 3D element renders on chosen page
- [ ] Orbit controls work (drag to rotate)
- [ ] Mobile performance acceptable (≤2s load)
- [ ] Doesn't distract from content — adds value
- [ ] Fallback for low-performance devices

### Skip condition
If no client reference image, or if 3D feels gimmicky after Phase 8, **skip this phase entirely**. The site is complete without it.

---

## Phase 10 — Final Verification & Ship

**Goal:** Comprehensive end-to-end verification. Site is production-ready.

**Prerequisite:** All phases 0-9 complete (or 9 explicitly skipped).

### Tasks

#### 10.1 Full Agent Browser walkthrough
- Open Home
- Navigate to each of 8 pages via navbar
- Test every CTA button
- Test every form (contact, white-label enquiry, enquiry modal)
- Test mobile menu
- Test product detail navigation + back
- Test enquiry modal open/close (Escape, backdrop click, X button)
- Confirm zero console errors throughout

#### 10.2 VLM visual verification
Use `z-ai vision` CLI to analyze screenshots of each page. Confirm:
- Brand consistency (teal + gold visible)
- Premium feel (not generic)
- Correct content (product names, specs, prices)
- No layout breaks

#### 10.3 Performance check
- Page load time (dev server is fast, but verify)
- Image optimization (logo, video)
- No unnecessary re-renders
- Bundle size reasonable

#### 10.4 Lint + TypeScript
- `bun run lint` clean
- `bunx tsc --noEmit` clean (no type errors in src/)

#### 10.5 Cross-browser note
We can only test Chromium (agent-browser). Note for client: test on Safari + Firefox after domain connection.

#### 10.6 Documentation final
- Update `worklog.md` with final summary
- Update `docs/PLAN.md` to mark all phases complete
- Note any deferred items (post-launch)

### Definition of Done
- [ ] All 8 pages render correctly (Agent Browser verified)
- [ ] All CTAs + forms work
- [ ] Zero console errors
- [ ] VLM confirms brand consistency + premium feel
- [ ] Lint clean
- [ ] TypeScript clean
- [ ] Mobile + desktop verified
- [ ] Worklog updated
- [ ] Site ready for domain connection

---

## Phase Summary Table

| Phase | Name | Prerequisite | Est. Effort | Blocks |
|-------|------|--------------|-------------|--------|
| **0** | Decision: Uniformity | None | Client decision | Everything |
| **1** | Theme Refactor | Phase 0 | Medium (recolor 5 pages) | 2-8 |
| **2** | Navbar Fix | Phase 1 | Small | 10 |
| **3** | impeccable Audit | Phase 1+2 | Medium (audit + fix 8 pages) | 4 |
| **4** | taste-skill Art Direction | Phase 3 | Large (6-step × 3 pages) | 5 |
| **5** | awesome-design-md Refinement | Phase 4 | Small (reference + tweak) | 10 |
| **6** | Accessibility Pass | Phase 5 | Medium (8 pages) | 10 |
| **7** | SEO Metadata | Phase 1 | Small (hook + 8 pages) | 10 |
| **8** | Mobile Responsive Pass | Phase 1 | Medium (8 pages × 2 widths) | 10 |
| **9** | img2threejs (optional) | Phases 1-8 + client images | Large | 10 |
| **10** | Final Verification | All above | Medium | Ship |

### Parallelizable phases
After Phase 1+2 complete, these can run in parallel:
- Phase 3 (impeccable audit) — independent
- Phase 7 (SEO metadata) — independent
- Phase 8 (Mobile responsive) — independent

Phase 4 (taste-skill) depends on Phase 3 (clean base).
Phase 5 (reference refinement) depends on Phase 4.
Phase 6 (accessibility) depends on Phase 5.

---

## What's NOT in this plan (explicitly deferred)

| Item | Why deferred | When |
|------|-------------|------|
| Product photos (28 products) | Waiting on client upload | Ongoing |
| Plant/factory still photos | Waiting on client | Ongoing |
| Founder/team photos | Optional, client priority | Ongoing |
| Domain connection | Post-build | After Phase 10 |
| Google Analytics | Post-launch | After domain |
| Real email service for forms | Post-launch | After domain |
| SEO optimization (full) | Post-launch | After domain live |
| Hindi/Gujarati localization | Future | Far future |
| Additional certifications | If client gets new certs | Future |

---

*This plan is the source of truth for remaining work. Update it as phases complete.*
