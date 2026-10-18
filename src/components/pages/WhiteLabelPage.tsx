// src/components/pages/WhiteLabelPage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Ruler,
  Package,
  Tag,
  Layers,
  CheckCircle2,
  Send,
  Plus,
  Minus,
  Factory,
  ShieldCheck,
  MapPin,
  Globe,
} from 'lucide-react'
import { toast } from 'sonner'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { useEnquiry } from '@/components/shell/SiteShell'
import { usePageMeta } from '@/hooks/usePageMeta'

/* ---------------------------------- data ---------------------------------- */

const explainer = [
  {
    step: '01',
    title: 'Choose Your Spec',
    description: 'Sizes, materials, absorbency, packaging — all customizable to your brand',
  },
  {
    step: '02',
    title: 'We Manufacture',
    description: '600K pcs/day capacity, BIS-standard quality, in our Palanpur facility',
  },
  {
    step: '03',
    title: 'You Sell',
    description: 'Products dispatch under your brand label, ready for your market',
  },
]

const offerings = [
  {
    icon: Ruler,
    title: 'Custom Sizes',
    description: '240mm to 320mm — L, XL, XXL, XXXL',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Loose, packet, trifold, pouch, or brand packing',
  },
  {
    icon: Tag,
    title: 'Private Branding',
    description: 'Your brand on wrapper and outer box',
  },
  {
    icon: Layers,
    title: 'MOQ Flexibility',
    description: 'From 50 packs to 50,000 pieces — we scale with you',
  },
]

const productSpecs = [
  { label: 'Sizes', value: '240–320mm' },
  { label: 'Top Sheet', value: 'Cottony Soft, Dry Net, Non-Woven' },
  { label: 'Absorbency', value: '50–80ml, 2X' },
  { label: 'Pad Type', value: 'Straight, Trifold, Ultra Thin, Maxi, Fluffy Fold' },
  { label: 'Wings', value: 'With or without' },
]

const packagingSpecs = [
  { label: 'Pack Sizes', value: '6–1200 pcs' },
  { label: 'Packaging Types', value: 'Packet, Trifold, Pouch, Box, Loose' },
  { label: 'Branding', value: 'Wrapper, Outer Box, Custom Logo' },
  { label: 'Scented Options', value: 'Scented / Unscented' },
]

const processSteps = [
  {
    step: '01',
    title: 'Enquiry',
    description: 'Share your requirements — product type, volume, timeline',
  },
  {
    step: '02',
    title: 'Spec Finalization',
    description: 'We finalize sizes, materials, packaging, and branding together',
  },
  {
    step: '03',
    title: 'Sample',
    description: 'We produce a sample for your approval before bulk production',
  },
  {
    step: '04',
    title: 'Production',
    description: 'Manufacturing begins — 600K pcs/day capacity, in-process QA',
  },
  {
    step: '05',
    title: 'Dispatch',
    description: 'Quality-checked, packaged, and dispatched with export documentation',
  },
]

const whyPartner = [
  {
    icon: Factory,
    title: 'Manufacturing Edge',
    description: 'Own facility, 600K pcs/day, not just a trader',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'BIS standards, in-process QA, 36-month shelf life',
  },
  {
    icon: MapPin,
    title: 'Gujarat Location',
    description: 'Palanpur, Gujarat — well-connected for domestic and export',
  },
  {
    icon: Globe,
    title: 'Export Ready',
    description: 'IEC registered, export documentation handled, 81% response rate',
  },
]

const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: "MOQ varies by product — from 50 packs to 50,000 pieces. Share your needs and we'll quote accordingly.",
  },
  {
    q: 'What is the lead time?',
    a: 'Typically 2-7 days depending on volume and customization. Bulk orders may take longer.',
  },
  {
    q: 'Do you handle export documentation?',
    a: "Yes. We're IEC registered (AAYFG3170H) and handle all export documentation.",
  },
  {
    q: 'Can I see a sample before bulk order?',
    a: 'Absolutely. We produce a sample for your approval before starting bulk production.',
  },
  {
    q: 'What payment terms do you offer?',
    a: 'Payment terms are discussed during spec finalization. Enquire for a quote to discuss.',
  },
]

const initialForm = {
  company: '',
  name: '',
  email: '',
  phone: '',
  brand: '',
  market: '',
  volume: '',
  productType: '',
  timeline: '',
  message: '',
}

/* --------------------------- helper components ----------------------------- */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ProcessStepData {
  step: string
  title: string
  description: string
}

function ProcessStep({ step, index }: { step: ProcessStepData; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative pl-16"
    >
      {/* Number circle, sits on the vertical line */}
      <div className="absolute left-0 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A0A0A] font-serif-display text-lg text-[#F5B642] ring-1 ring-[#F5B642]/30">
        {step.step}
      </div>
      <GlassCard variant="dark" animate={false} className="p-6" hover>
        <h3 className="font-serif-display text-xl text-white">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
      </GlassCard>
    </motion.div>
  )
}

/* --------------------------------- page ----------------------------------- */

export function WhiteLabelPage() {
  const { openEnquiry } = useEnquiry()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState(initialForm)

  usePageMeta({
    title: 'White-Label Manufacturing',
    description:
      'Launch your sanitary product line. Custom sizes, materials, packaging, branding. MOQ flexible. IEC registered exporter. Enquire for quote.',
  })

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(
      'Thank you! Your quote request has been submitted. We will respond within 24 hours.',
    )
    setForm(initialForm)
  }

  const inputClass =
    'w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F5B642]'

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[90vh] flex-col overflow-hidden bg-[#0A0A0A]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,182,66,0.04)_0%,_transparent_70%)]" />
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="justify-center text-center">
              White-Label Manufacturing
            </SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display mt-6 max-w-5xl text-5xl leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Your brand. Our <em className="italic text-[#F5B642]">expertise</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Launch your own sanitary product line without a factory. We manufacture under your
            label — custom sizes, materials, packaging, and branding.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton variant="gold" size="lg" onClick={() => openEnquiry()} showArrow>
              Get Quote
            </CTAButton>
            <CTAButton variant="glass" size="lg" onClick={scrollToProcess}>
              See our process
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT IS WHITE-LABEL ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <SectionLabel className="justify-center text-center">How it works</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              What is white-label <em className="italic text-[#F5B642]">manufacturing</em>?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {explainer.map((item, i) => (
              <GlassCard key={item.step} variant="dark" delay={i * 0.1} className="p-8" hover>
                <p className="font-serif-display text-5xl text-[#F5B642]">{item.step}</p>
                <h3 className="font-serif-display mt-4 text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              What we <em className="italic text-[#F5B642]">offer</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item, i) => (
              <GlassCard key={item.title} variant="dark" delay={i * 0.1} className="p-6" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B642]/10">
                  <item.icon size={22} className="text-[#F5B642]" />
                </div>
                <h3 className="font-serif-display text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMIZATION OPTIONS ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <SectionLabel>Full control</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Customization <em className="italic text-[#F5B642]">options</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <GlassCard variant="dark" className="p-8 md:p-10">
              <h3 className="font-serif-display text-2xl text-white">Product Specifications</h3>
              <ul className="mt-6 space-y-4">
                {productSpecs.map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F5B642]" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {spec.label}
                      </p>
                      <p className="mt-1 text-sm text-white/80">{spec.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard variant="dark" delay={0.1} className="p-8 md:p-10">
              <h3 className="font-serif-display text-2xl text-white">Packaging &amp; Branding</h3>
              <ul className="mt-6 space-y-4">
                {packagingSpecs.map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F5B642]" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {spec.label}
                      </p>
                      <p className="mt-1 text-sm text-white/80">{spec.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <SectionLabel className="justify-center text-center">Step by step</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Our <em className="italic text-[#F5B642]">process</em>
            </h2>
          </Reveal>
          <div className="relative">
            {/* Vertical line — sits behind the number circles */}
            <div className="absolute left-6 top-4 h-[calc(100%-2rem)] w-px bg-white/10" />
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.step} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER WITH US ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <SectionLabel className="justify-center text-center">Why us</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Why partner with <em className="italic text-[#F5B642]">us</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartner.map((item, i) => (
              <GlassCard key={item.title} variant="dark" delay={i * 0.1} className="p-6" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B642]/10">
                  <item.icon size={22} className="text-[#F5B642]" />
                </div>
                <h3 className="font-serif-display text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-12 text-center">
            <SectionLabel className="justify-center text-center">FAQ</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Frequently asked <em className="italic text-[#F5B642]">questions</em>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="liquid-glass w-full rounded-2xl px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif-display text-lg text-white">{faq.q}</span>
                    {isOpen ? (
                      <Minus size={18} className="shrink-0 text-[#F5B642]" />
                    ) : (
                      <Plus size={18} className="shrink-0 text-[#F5B642]" />
                    )}
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/60">{faq.a}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY FORM CTA ===== */}
      <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,182,66,0.04)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal className="mb-10 text-center">
            <SectionLabel className="justify-center text-center">Let&apos;s begin</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-6xl">
              Ready to launch your <em className="italic text-[#F5B642]">brand</em>?
            </h2>
          </Reveal>
          <GlassCard variant="dark" className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-company"
                  >
                    Company Name *
                  </label>
                  <input
                    id="wl-company"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-name"
                  >
                    Your Name *
                  </label>
                  <input
                    id="wl-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-email"
                  >
                    Email *
                  </label>
                  <input
                    id="wl-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-phone"
                  >
                    Phone *
                  </label>
                  <input
                    id="wl-phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-brand"
                  >
                    Brand Name
                  </label>
                  <input
                    id="wl-brand"
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className={inputClass}
                    placeholder="Brand to launch"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-market"
                  >
                    Target Market
                  </label>
                  <input
                    id="wl-market"
                    value={form.market}
                    onChange={(e) => setForm({ ...form, market: e.target.value })}
                    className={inputClass}
                    placeholder="India, export, region..."
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-volume"
                  >
                    Expected Volume
                  </label>
                  <input
                    id="wl-volume"
                    value={form.volume}
                    onChange={(e) => setForm({ ...form, volume: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. 50,000 pcs/month"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-type"
                  >
                    Product Type
                  </label>
                  <input
                    id="wl-type"
                    value={form.productType}
                    onChange={(e) => setForm({ ...form, productType: e.target.value })}
                    className={inputClass}
                    placeholder="Napkin, pad, size..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                    htmlFor="wl-timeline"
                  >
                    Timeline
                  </label>
                  <input
                    id="wl-timeline"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. 30 days, ASAP, Q1 2026..."
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs uppercase tracking-widest text-white/40"
                  htmlFor="wl-message"
                >
                  Message
                </label>
                <textarea
                  id="wl-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F5B642]`}
                  placeholder="Anything else we should know?"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                <p className="text-xs leading-relaxed text-white/40">
                  We respond within 24 hours. No pricing displayed publicly — all quotes are
                  custom.
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F5B642] px-8 py-3.5 text-base font-medium text-black transition-colors hover:bg-[#FFC857]"
                >
                  <Send size={16} /> Request Quote
                </motion.button>
              </div>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
