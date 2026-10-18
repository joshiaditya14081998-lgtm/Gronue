# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences:

1. **B2B Brands (White-Label Partners)** — Companies that sell sanitary products but don't have their own manufacturing facility. They need a reliable manufacturer to produce under their brand label. They evaluate based on: manufacturing capacity, quality standards, MOQ flexibility, export capability, and trust signals (GST/IEC registration). They arrive looking for a manufacturing partner, not a product to buy.

2. **B2C Consumers & Distributors** — End users and distributors looking for quality sanitary napkins under the Groneu, Super13, or Xtra New brands. They evaluate based on: product range, specs (size, material, absorbency), trust signals, and availability. Distributors also care about MOQ and bulk pricing.

## Product Purpose

Groneu Healthcare's website serves as the primary digital presence for a sanitary napkin manufacturer based in Palanpur, Gujarat. Success is measured in:

1. **B2B lead generation** — White-label enquiry form submissions from brands seeking a manufacturing partner
2. **B2C/distributor enquiries** — Product enquiries and bulk order requests
3. **Trust establishment** — Visitors understand Groneu is a real manufacturer (not just a trader), with verified GST/IEC credentials, real production capacity, and quality standards
4. **Brand positioning** — Premium, caring, trustworthy — differentiated from generic competitors

## Positioning

Groneu Healthcare is a Gujarat-based sanitary napkin manufacturer offering both white-label/contract manufacturing (for brands without their own facility) and own-brand products (Groneu, Super13, Xtra New). Founded 2022, ₹5-25Cr turnover, 600K pcs/day capacity, GST & IEC registered, export-ready. The website must communicate "real manufacturer" credibility — not a trading company — while serving both B2B and B2C audiences.

## Operating Context

- Multi-page Next.js 16 website with hash-based routing (single `/` route due to sandbox constraint)
- 8 pages: Home, Products, Product Detail, Manufacturing, White-Label, About, Quality, Contact
- All-dark theme (Option 1) — black background, gold primary accent, teal secondary for healthcare trust signals
- Liquid-glass aesthetic with Instrument Serif + Inter typography
- Hero video (manufacturing plant) with fade-loop
- 28 products with real specs from old site
- Enquiry modal (global) + contact form + white-label B2B form
- English only (structure for future i18n)
- Floating WhatsApp + Get Quote CTAs throughout

## Capabilities and Constraints

- All product data (28 products) is real, extracted from groneuhealthcare.com — no fabricated specs
- Only verified statutory credentials: GST No. 24AAYFG3170H1Z5, IEC AAYFG3170H
- Product-level certifications (BIS, WHO-GMP, ISO) stated per product as claimed on old site — NOT company-level certificates
- Product photos: placeholders until client uploads (colored bg + PackageCheck icon)
- Plant photos: placeholders until client uploads
- Forms currently show toast success only — real email service deferred to post-launch
- No pricing displayed publicly — "Enquire for Quote" per client decision
- Hero video has audio track but muted by default (autoplay policy + UX); sound toggle provided

## Brand Commitments

**Caring, Premium, Trustworthy.** Groneu speaks with a confident, caring voice: a manufacturer that knows its craft and stands behind its products. The tone is:

- **Caring** — feminine hygiene is trust-critical; comfort, safety, and dignity are non-negotiable
- **Premium** — not the cheapest, but worth it; industrial precision meets human care
- **Trustworthy** — honest about capabilities (only 2 certs, not claiming more), real factory, real capacity, real specs
- **Direct** — no hedging, no "maybe consider" — clear positioning and clear CTAs

Three-word personality: **caring, premium, trustworthy**.

The site must avoid:
- **Generic healthcare clichés** — soft pink, cartoonish icons, patronizing tone
- **Industrial coldness** — sterile factory imagery without human warmth
- **Fake credentials** — no claiming certifications that don't exist
- **Over-promising** — honest about what we have, transparent about what we're working towards
- **AI-generated slop** — no generic icon-in-rounded-square tiles, no purple gradients, no bounce easing

## Evidence on Hand

- `docs/CONTENT.md` — all 28 products with real specs, prices, MOQs, features (extracted from old site)
- `src/data/products.ts` — typed product data, directly importable
- `src/data/company.ts` — company info, statutory credentials, capabilities
- `public/assets/brand/Groneu-logo.png` — real logo (teal + gold)
- `public/assets/video/manufacturing-plant.mp4` — real 10s plant video (720p, has audio)
- GST No. 24AAYFG3170H1Z5 — verified
- IEC Code AAYFG3170H — verified
- Office address: Palanpur, Gujarat — verified
- Phone: +91-8047844175 — verified
- Response rate: 81% — from old site

No customer testimonials or quantified outcome studies are claimed. Future surfaces must not fabricate them.

## Product Principles

1. **Practice what we preach.** The site must demonstrate manufacturing credibility through execution — real specs, real capacity numbers, real process — not just claims.

2. **Show, don't tell.** Manufacturing plant video, real product specs, actual MOQ/delivery times — demonstrate quality through specifics, not adjectives.

3. **Honest confidence.** Direct about capabilities and limitations. Only 2 statutory credentials? Show them proudly, don't hide behind vague "compliance" language. No fake certs.

4. **Caring over clinical.** Feminine hygiene is personal. The dark premium aesthetic must not feel cold or sterile — teal accents, soft product imagery (when available), and warm copy keep it human.

5. **Every element earns its place.** No ornament for ornament's sake. The liquid-glass aesthetic serves the premium positioning. Gold accents guide attention. Teal signals trust. Nothing decorative without function.

6. **Two audiences, one standard.** B2B and B2C visitors see the same quality bar. The white-label partner and the end consumer both deserve a premium, trustworthy experience.
