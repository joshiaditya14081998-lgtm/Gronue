# Groneu Healthcare — Uniformity Decision Matrix (Phase 0)

> **Purpose:** Help client choose the visual direction for the website. This is the Phase 0 decision that blocks all other work.
> **Status:** AWAITING CLIENT DECISION

---

## The Problem

Current site has a **dark/light split**:
- 3 dark pages (Home, Manufacturing, White-Label) — black bg, gold accents, glass
- 5 light pages (Products, About, Quality, Contact, Product Detail) — off-white bg, teal accents, white cards

This causes:
1. **Theme switching jarring** — when navigating dark→light, background snaps from black to white
2. **Uniformity missing** — brand identity feels split, not unified
3. **Inconsistent accents** — gold on dark, teal on light = confused visual language

---

## Three Options

### Option 1 — All Dark (Recommended) ⭐

**Entire site black background.** Gold primary accent, teal secondary (for healthcare signals), liquid-glass throughout.

**What changes:**
- Convert 5 light pages → dark (Products, About, Quality, Contact, Product Detail)
- All glass becomes `liquid-glass` (dark variant)
- All CTAs become gold
- Product image areas use **white inner cards** (for trust contrast inside dark pages)
- Teal stays as secondary accent (product brand labels, BIS/ISO badges, checkmarks)

**Pros:**
- ✅ Maximum uniformity — every page same feel
- ✅ Hero video naturally blends (already dark/cinematic)
- ✅ Logo's gold accent shines on every page
- ✅ Premium B2B manufacturer positioning (strong)
- ✅ Glass effects dramatically better on dark
- ✅ Differentiates from competitors (most healthcare sites are light)
- ✅ Gold accent from logo gets maximum impact

**Cons:**
- ⚠️ Consumer trust pages (Products, About) typically light — dark is unconventional for feminine hygiene
- ⚠️ Need careful contrast management (white inner cards for product images)
- ⚠️ Some users expect "clean white" for healthcare

**Risk mitigation:**
- Product cards: white inner image area + dark glass body = trust + premium
- Teal accents on product labels = healthcare signal
- Soft product imagery (when client uploads) = warmth

**Best for:** Premium B2B manufacturer brand that also serves consumers with confidence.

---

### Option 2 — All Light

**Entire site warm off-white.** Teal primary accent, gold micro-accents, soft white cards.

**What changes:**
- Convert 3 dark pages → light (Home, Manufacturing, White-Label)
- Hero video: add strong dark gradient overlay so video isn't washed out
- All glass becomes `liquid-glass-light`
- All CTAs become teal
- Manufacturing "premium gravitas" achieved through strong typography + imagery, not dark bg

**Pros:**
- ✅ Maximum uniformity
- ✅ Healthcare/feminine-hygiene convention — clean, soft, trustworthy
- ✅ Consumer-friendly (what users expect)
- ✅ Products natural in light
- ✅ Easy to read text, less eye strain

**Cons:**
- ❌ Hero video hard to integrate (needs heavy overlay, loses cinematic feel)
- ❌ Logo's gold accent washes out on light (low contrast)
- ❌ Glass effects subtle, less premium
- ❌ Manufacturing gravitas harder to achieve
- ❌ Looks like every other healthcare site (no differentiation)

**Best for:** Consumer-first brand where B2B is secondary.

---

### Option 3 — Dark Hero + Light Rest

**Only Home hero section dark** (for video), **all other sections + pages light uniform.**

**What changes:**
- HomePage: hero section stays dark, rest of home sections convert to light
- Smooth gradient transition: `bg-gradient-to-b from-[#0A0A0A] to-[#FAFAF7]` between hero and first light section
- All other pages (Manufacturing, White-Label, Products, About, Quality, Contact) = light
- Manufacturing + White-Label lose their dark premium feel
- Navbar: dark glass over hero, light glass after scroll past hero

**Pros:**
- ✅ Hero video perfect blend (dark section for dark video)
- ✅ Rest of site uniform light — consistent
- ✅ Best of both worlds (common Apple/Stripe/Oura pattern)
- ✅ Least disruptive (keep most current work)

**Cons:**
- ⚠️ One transition on Home (dark hero → light sections) — needs smooth gradient
- ⚠️ Manufacturing + White-Label lose dark premium gravitas
- ⚠️ Still has a dark/light mix (just more intentional)
- ⚠️ Navbar theme switching complexity (dark over hero, light elsewhere)

**Best for:** Hybrid approach where video impact matters but rest should be clean/conventional.

---

## Side-by-Side Comparison

| Criteria | Option 1: All Dark | Option 2: All Light | Option 3: Dark Hero + Light |
|----------|-------------------|--------------------|-----------------------------|
| **Uniformity** | ✅ Full | ✅ Full | ⚠️ Mostly (1 transition) |
| **Hero video blend** | ✅ Perfect | ⚠️ Needs heavy overlay | ✅ Perfect |
| **Logo gold shine** | ✅ Best | ❌ Washed out | ✅ Good (hero only) |
| **Healthcare trust (convention)** | ⚠️ Unconventional | ✅ Conventional | ✅ Good balance |
| **B2B premium feel** | ✅ Strong | ⚠️ Softer | ⚠️ Lost on Mfg/WL pages |
| **Product showcase** | ⚠️ Needs white cards | ✅ Natural | ✅ Natural |
| **Differentiation** | ✅ Stands out | ❌ Like competitors | ⚠️ Mixed |
| **Glass effect quality** | ✅ Premium | ⚠️ Subtle | ⚠️ Mixed |
| **Effort to change** | Medium (recolor 5 pages) | Medium (recolor 3 + hero) | Low (keep mostly as-is) |
| **Risk** | Medium (healthcare dark unconventional) | Low (safe) | Low |

---

## My Recommendation: Option 1 (All Dark)

### Why

1. **Logo analysis supports it** — Groneu's logo has gold + teal. Gold on dark pops; on light it washes out. The gold accent is the brand's premium signal. Dark lets it shine everywhere.

2. **Hero video is already dark/cinematic** — the manufacturing plant video has dark tones. Making the whole site dark means the video blends naturally on Home AND can be reused on Manufacturing page without jarring transition.

3. **Manufacturing B2B positioning** — Groneu is a manufacturer, not a consumer wellness app. Premium industrial brands (Tesla, Apple Pro, high-end machinery) use dark. Competitors (Nirlon, other pad manufacturers) all use generic light sites. Dark differentiates.

4. **Glass effects are wasted on light** — the liquid-glass aesthetic (which the original template was built around) looks dramatically better on dark. On light it's barely visible. Going all-dark unleashes the full design language.

5. **Healthcare dark is possible** — examples: Cleveland Clinic dark sections, Hims dark hero, Oura (has dark sections). With teal accents for healthcare signals + white inner cards for product images, trust is maintained.

6. **Client's original instinct** — the user liked the dark liquid-glass template (that's why we started with it). Going all-dark honors that original vision instead of fighting it.

### The one risk (and how to mitigate)

**Risk:** Dark feels unconventional for feminine hygiene consumer products.

**Mitigation:**
- Product cards: **white inner image area** inside dark glass card = trust + premium (like Apple product cards on dark bg)
- Teal `#0E8E8E` as secondary accent on product labels, BIS/ISO badges, checkmarks = healthcare signal
- Soft, warm product imagery (when client uploads) = warmth in dark frame
- Clean typography (Instrument Serif) = editorial elegance, not "tech bro dark"
- Generous whitespace + breathing room = doesn't feel claustrophobic

---

## How to decide

**Ask yourself:**

1. **Who is the primary audience?**
   - B2B brands (white-label partners) → **Option 1** (dark = premium manufacturer)
   - B2C consumers/distributors → Option 2 (light = conventional trust)
   - Both equally → Option 1 or 3

2. **What feeling do you want?**
   - "Premium industrial manufacturer" → **Option 1**
   - "Friendly healthcare brand" → Option 2
   - "Modern with video impact" → Option 3

3. **How much risk are you comfortable with?**
   - Want to stand out, differentiate → **Option 1** (dark, unconventional but memorable)
   - Play it safe, follow convention → Option 2
   - Balance → Option 3

4. **Look at the logo** — does the gold accent matter to you?
   - Yes, it should be prominent → **Option 1** (gold shines on dark)
   - No, teal is enough → Option 2 or 3

---

## Decision Record

| Field | Value |
|-------|-------|
| Date | *(to be filled when client decides)* |
| Client decision | Option 1 / 2 / 3 *(circle one)* |
| Rationale | *(client to fill)* |
| Signed off by | *(client)* |

Once filled, this decision is LOCKED. All subsequent phases (1-10) follow this direction.

---

## What happens next (after decision)

- Phase 1 (Theme Refactor) begins immediately
- Estimated time to complete Phases 1-10: see `BUILD-PHASES.md`
- No further design decisions needed — execution phase
