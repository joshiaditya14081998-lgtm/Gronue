# Groneu Healthcare — Skills Integration Strategy

> **4 skills installed** to `/home/z/my-project/skills/`. This document defines exactly where and how each skill is used during the Groneu website build. Supplements `PLAN.md`.

---

## Skills Installed

| # | Skill | Path | Type | Runtime |
|---|-------|------|------|---------|
| 1 | **taste-skill** | `skills/taste-skill/` | Agent skill (art direction) | Node 22+ ✅ (v24.21), Chromium via agent-browser ✅ |
| 2 | **impeccable** | `skills/impeccable/` | Agent skill (design QA, 24 commands, 61 detector rules) | Self-contained binary (downloads on first run) |
| 3 | **awesome-design-md** | `skills/awesome-design-md/` | Reference collection (84 DESIGN.md files) | Read-only (markdown) |
| 4 | **img2threejs** | `skills/img2threejs/` | Agent skill (image → Three.js model) | Node ≥18 ✅, Python ≥3.10 ✅ (3.12.15) |

All runtimes verified available in this environment.

---

## 1. taste-skill — Premium Frontend Art Direction

**What it does:** Replaces generic "AI-made" landing pages with art-directed, premium designs. 6-step process: read brief → write argument → draw direction (from 20 researched directions) → build with real assets → browser self-review → look-and-fix loop. Distilled from study of 247 curated gallery sites (Awwwards, One Page Love).

**Key principle:** "The idea comes from the subject." The page that wins is built from something only THIS client has — not from a category template.

### Where it's used in Groneu build:

| Page | Use taste-skill? | Why |
|------|------------------|-----|
| **Home (hero + sections)** | ✅ YES — primary use | This is THE landing page. Must feel premium, not templated. Run full taste-skill flow. |
| **Manufacturing** | ✅ YES | B2B trust page — needs gravitas, not generic. |
| **White-Label** | ✅ YES | B2B lead gen — premium feel converts manufacturers. |
| Products / Product Detail / About / Quality / Contact | ❌ No | These are functional/catalog pages — use design system directly. taste-skill overkill here. |

### How to apply (manual execution during Phase 3, 5, 6):

Since my Skill tool may not auto-load external skills, I apply taste-skill's methodology **manually** by reading its SKILL.md and following the 6 steps:

**Step 1 — Inventory the subject (Groneu's unique assets):**
Run this exercise before designing hero. Things only Groneu has:
- Name "Groneu" + its meaning
- Location: Palanpur, Gujarat (Palanpur-Abu Highway, Shiv Industrial Park, Songadh)
- Founded 2022, family business (3 Patel partners)
- 600K pcs/day capacity
- Export-ready (IEC code) but local roots
- Two business models (white-label + own-brand)
- Logo's female figure with raised arms (joy/freedom/health)
- The number 13 ("Super13" — recurring in product names)
- Materials: HAT Cotton, Dry Net, Cottony Soft
- The constraint: feminine hygiene, trust-critical, GST/IEC registered

**Step 2 — Write the argument (claims + proof per section):**
Each home page section must have a claim backed by proof. Delete sections without claims. Avoid stock sequence (hero→logos→3 features→testimonial→pricing→CTA).

**Step 3 — Draw direction:**
```bash
node skills/taste-skill/scripts/draw.mjs --sector manufacturing \
  --brief "Gujarat-based sanitary napkin manufacturer, 600K pcs/day, white-label + own-brand, est. 2022" \
  --sections hero,stats,showcase,how-it-works,proof,cta,footer \
  --tone technical \
  --have product-photo,video \
  --keep palette,type \
  --options 3
```
Pick the direction that carries Groneu's unique idea (e.g. "precision manufacturing" or "care + craft"). Then deal full sheet.

**Step 4 — Build with real assets:**
- Manufacturing plant video (have it ✅)
- Product photos (placeholders until client uploads)
- Logo (have it ✅)
- Find open-archive imagery of Gujarat/industrial precision if needed

**Step 5 — Browser self-review:**
Use agent-browser to screenshot at 3 widths (mobile 390, tablet 768, desktop 1280). Apply juror's rubric.

**Step 6 — Look-and-fix loop (up to 3 rounds):**
Identify top 3 problems from screenshots, fix, re-screenshot.

### taste-skill subskills also available (if needed):
- `minimalist-skill` — for ultra-clean sections
- `redesign-skill` — if we need to redesign any page later
- `imagegen-frontend-web` — generate web imagery
- `brandkit` — brand system extraction (could use on Groneu logo)

---

## 2. impeccable — Design Quality Assurance (24 commands + 61 rules)

**What it does:** Design guidance with 24 commands (polish, audit, critique, distill, animate, bolder, quieter, etc.) + 61 deterministic detector rules that catch "AI-made" tells (overused fonts, gray-on-color text, nested cards, bounce easing, etc.). Writes `PRODUCT.md` and `DESIGN.md`.

### Where it's used in Groneu build:

**Used THROUGHOUT the build as the QA layer.** Every page passes through impeccable.

| Phase | impeccable command | When |
|-------|--------------------|------|
| Pre-build (Phase 1) | `/impeccable init` | Write `PRODUCT.md` with Groneu's durable product truth |
| Pre-build (Phase 1) | `/impeccable document` | Generate `DESIGN.md` from our design system |
| After each page (Phases 3-7) | `/impeccable audit <page>` | Technical quality (a11y, performance, theming, responsive, integrity) — 0-4 score per dimension |
| After each page | `/impeccable critique <page>` | UX design review (hierarchy, clarity, emotional resonance) |
| Before shipping (Phase 8) | `/impeccable polish` | Final pass, design system alignment |
| If a page feels boring | `/impeccable bolder` | Amplify |
| If a page feels too loud | `/impeccable quieter` | Tone down |
| Motion work | `/impeccable animate` | Purposeful motion (not gratuitous) |
| Edge cases | `/impeccable harden` | Error handling, i18n, text overflow |
| Mobile pass | `/impeccable adapt` | Different devices |

### Key impeccable anti-patterns to AVOID (from README):
- ❌ Overused fonts (Arial, Inter-only, system defaults) → we use Instrument Serif + Inter pairing ✅
- ❌ Gray text on colored backgrounds → check all our glass surfaces
- ❌ Pure black/gray (always tint) → our `#0A0A0A` is tinted warm ✅
- ❌ Cards nested in cards → audit product cards, capability tiles
- ❌ Bounce/elastic easing (feels dated) → use ease-out cubic

### Manual application (since Skill tool may not auto-load):
I will READ the impeccable command references from `skills/impeccable/skill/reference/*.md` and apply each command's checklist manually:
- `audit.md` — 5 dimensions (A11y, Performance, Theming, Responsive, Implementation Integrity), each scored 0-4
- `critique.md` — UX hierarchy, clarity, emotional resonance
- `polish.md` — final shipping readiness
- etc.

**Target:** Every page scores ≥3/4 on all 5 audit dimensions before "done."

### Deliverable from impeccable:
Create `PRODUCT.md` and `DESIGN.md` at project root (impeccable convention) — these become living docs alongside our `docs/CONTENT.md` and `docs/DESIGN-SYSTEM.md`.

---

## 3. awesome-design-md — Design Reference Library (84 brands)

**What it does:** Provides 84 real-world `DESIGN.md` files (from Apple, Stripe, Vercel, Linear, Notion, Oura, etc.) as inspiration. DESIGN.md is a plain-text design system doc AI agents read to generate consistent UI.

### Where it's used in Groneu build:

**Reference only — used during design system refinement (Phase 1) and hero design (Phase 3).**

### Most relevant references for Groneu:

| Brand | Why relevant | Path |
|-------|-------------|------|
| **Oura** ⭐ | Wellness brand, warm paper cream, editorial serif, earth tones — closest analog to Groneu's feminine healthcare positioning | `design-md/oura/DESIGN.md` |
| **Notion** | Warm minimalism, serif headings, soft surfaces — for light pages | `design-md/notion/` |
| **Stripe** | Weight-300 elegance, trust-focused — for B2B trust signals | `design-md/stripe/` |
| **Linear** | Ultra-minimal, precise — for product detail pages | `design-md/linear.app/` |
| **Mercury** | Ink-violet night world, indigo action pill — for dark B2B pages | `design-md/mercury/` |
| **NerdWallet** | Deep spruce green, mint washes, near-square corners — finance/trust | `design-md/nerdwallet/` |
| **Apple** | Premium white space, cinematic imagery — for product showcase | `design-md/apple/` |

### How to apply:
1. Read Oura's DESIGN.md (warm wellness aesthetic) — extract patterns applicable to Groneu's light pages
2. Read Mercury's DESIGN.md (dark premium) — extract patterns for dark B2B pages
3. Cross-reference with our `docs/DESIGN-SYSTEM.md` — refine tokens if inspiration suggests improvements
4. Do NOT copy directly — Groneu has its own brand (teal + gold from logo)

---

## 4. img2threejs — Image → Three.js 3D Model

**What it does:** Takes a reference image of an object → produces TypeScript `THREE.Group` factory that recreates the object from primitives/shaders/geometry. Animation-ready, quality-gated, runs in browser.

### Where it's used in Groneu build:

**Optional "wow factor" — use ONLY if it adds value, not as gimmick.**

### Potential use cases (ranked by value):

| Use case | Value | Recommendation |
|----------|-------|----------------|
| **3D product explorer on Product Detail page** — user orbits around a 3D sanitary pad/pack model | Medium — unique, memorable, but sanitary pads aren't naturally "3D-showcase" objects like sneakers/cars | ⚠️ Defer — only if client wants premium feel AND provides good product images |
| **3D manufacturing plant diorama** on Manufacturing page — isometric factory scene | High — visually compelling, shows scale, differentiates from competitors | ✅ Consider for Phase 5 if time permits |
| **3D logo animation** — female figure from logo as 3D rotating element in hero | Low-Medium — could be nice but risks cheesy | ❌ Skip |
| **3D pad cross-section** showing layers (top sheet, absorbent core, backing) | High — educational, shows product quality, genuine value | ✅ Best use case — for Product Detail or Quality page |

### How to apply (if we use it):
```bash
# Example: 3D pad cross-section for Quality page
npx --yes img2threejs@latest install --host claude  # one-time
# Then provide reference image of pad cross-section → get Three.js model
# Embed in Quality page as interactive 3D viewer
```

### Decision:
**Defer img2threejs to Phase 8 (polish) as an enhancement.** Build the full site first with the other 3 skills. If the site needs a "wow" moment and client provides good product reference images, add ONE 3D element (pad cross-section on Quality page is strongest candidate). Do NOT force 3D where it doesn't add value.

---

## Integration into Build Phases (updated)

| Phase | taste-skill | impeccable | awesome-design-md | img2threejs |
|-------|-------------|------------|-------------------|-------------|
| **1. Foundation** | — | `/impeccable init` → write PRODUCT.md | Read Oura + Mercury DESIGN.md → refine our DESIGN-SYSTEM.md | — |
| **2. Shell** | — | `/impeccable document` → generate DESIGN.md | — | — |
| **3. Home (dark)** | ✅ Full 6-step flow | `/impeccable audit home` + `/impeccable critique home` | — | — |
| **4. Products (light)** | — | `/impeccable audit products` | Reference Notion/Linear for catalog patterns | — |
| **5. Manufacturing (dark)** | ✅ Full 6-step flow | `/impeccable audit manufacturing` | — | ⚠️ Optional 3D plant diorama |
| **6. White-Label (dark)** | ✅ Full 6-step flow | `/impeccable audit white-label` + `/impeccable critique` | — | — |
| **7. About/Quality/Contact (light)** | — | `/impeccable audit` each | Reference Oura for wellness feel | ⚠️ Optional 3D pad cross-section on Quality |
| **8. Polish** | Look-and-fix loop on all dark pages | `/impeccable polish` whole site + `/impeccable harden` + `/impeccable adapt` | — | Add 3D if decided |

---

## Deliverables from skills (new files to create)

| File | Source skill | Purpose |
|------|-------------|---------|
| `PRODUCT.md` (project root) | impeccable `/init` | Durable product truth — audience, purpose, constraints, voice, evidence |
| `DESIGN.md` (project root) | impeccable `/document` | Design system as AI-readable doc (complements our docs/DESIGN-SYSTEM.md) |
| `.taste-skill/` (project root) | taste-skill | Working files (drawn directions, screenshots, fix logs) |
| Audit reports | impeccable `/audit` | Per-page scorecards (5 dimensions × 0-4) |

---

## Quality Gates (must pass before "done")

Each page must achieve:
1. **impeccable audit** ≥ 3/4 on all 5 dimensions (A11y, Performance, Theming, Responsive, Integrity)
2. **impeccable critique** — no major hierarchy/clarity/emotional resonance issues
3. **taste-skill look-and-fix** (dark pages only) — 3 rounds completed, top issues resolved
4. **Agent Browser verification** — renders, interactive, no console errors, mobile + desktop
5. **Lint clean** — `bun run lint` passes

---

## Summary: Why these 4 skills together

- **taste-skill** = the DESIGNER (makes it look premium, not AI-made)
- **impeccable** = the QA LEAD (catches slop, enforces quality)
- **awesome-design-md** = the MOOD BOARD (reference for what good looks like)
- **img2threejs** = the WOW FACTOR (optional 3D enhancement)

Together: taste-skill designs → impeccable audits → awesome-design-md inspires → img2threejs elevates. Each has a distinct role, no overlap.

---

*End of skills integration strategy. Integrates with PLAN.md Phase order.*
