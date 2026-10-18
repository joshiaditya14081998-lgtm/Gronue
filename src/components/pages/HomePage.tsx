// src/components/pages/HomePage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight,
  Factory,
  PackageCheck,
  ShieldCheck,
  Settings,
  Users,
  Truck,
  CheckCircle2,
} from 'lucide-react'
import { HeroVideo } from '@/components/sections/hero/HeroVideo'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { useEnquiry } from '@/components/shell/SiteShell'
import { company } from '@/data/company'
import { products } from '@/data/products'
import { navigateTo, navigateToProduct } from '@/lib/router'
import { usePageMeta } from '@/hooks/usePageMeta'

const capabilities = [
  {
    icon: Factory,
    title: 'Manufacturing Capacity',
    value: '600,000 pcs/day',
    description: 'High-volume production across multiple product lines',
  },
  {
    icon: PackageCheck,
    title: 'Product Range',
    value: '28+ products',
    description: 'Sanitary napkins & pads in sizes L to XXXL',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Standards',
    value: 'BIS compliant',
    description: 'Industrial standards with internal QA at every stage',
  },
  {
    icon: Settings,
    title: 'Customization',
    value: 'White-label ready',
    description: 'Custom sizes, materials, packaging & branding',
  },
]

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Superior Quality',
    description:
      'Products in compliance with industrial standards, offered at most affordable prices.',
  },
  {
    icon: Users,
    title: 'Client-Focused Team',
    description:
      "Our professionals invest long working hours to manufacture products as per clients' exact requirements.",
  },
  {
    icon: Factory,
    title: 'Real Manufacturing',
    description:
      'Own facility in Palanpur, Gujarat with 600K pcs/day capacity. GST & IEC registered exporter.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: '2-7 day delivery times with 81% response rate. Export-ready with IEC code.',
  },
]

export function HomePage() {
  const { openEnquiry } = useEnquiry()
  const featuredProducts = products.slice(0, 4)

  usePageMeta({
    title: 'Groneu Healthcare — Crafted with care. Built for trust.',
    description:
      'Leading sanitary napkin manufacturer in Palanpur, Gujarat. White-label + own-brand. 600K pcs/day capacity. GST & IEC registered, export-ready.',
  })

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* ===== HERO ===== */}
      <section className="relative -mt-20 flex min-h-[100vh] flex-col overflow-hidden">
        <HeroVideo />

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="liquid-glass mb-8 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-white/80"
          >
            Est. 2022 · Palanpur, Gujarat · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display max-w-5xl text-5xl leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Crafted with care.
            <br />
            Built for <em className="italic text-[var(--accent)]">trust</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Leading manufacturer of sanitary napkins in Gujarat. White-label manufacturing for
            brands, plus our own trusted product range — 600,000 pieces a day, built to industrial
            standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton variant="gold" size="lg" navigateToPage="products" showArrow>
              Explore Products
            </CTAButton>
            <CTAButton variant="glass" size="lg" navigateToPage="white-label">
              White-Label Enquiry
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="relative z-10 -mt-px bg-[var(--bg)] px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="glass-surface flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full px-6 py-4 text-sm text-[var(--text-muted)] md:gap-x-12">
            {company.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-serif-display text-lg text-[var(--accent)]">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO PATHWAYS ===== */}
      <section className="bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel className="justify-center text-center">Who we serve</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              Two paths, one standard of <em className="italic text-[var(--accent)]">care</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <GlassCard variant="dark" className="p-8 md:p-10" hover>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                <Factory size={28} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-serif-display text-3xl text-[var(--text)]">For Brands</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Launch your own sanitary product line without a factory. We manufacture under your
                label — custom sizes, materials, packaging, and branding. From sample to dispatch.
              </p>
              <div className="mt-6">
                <CTAButton variant="glass" size="sm" navigateToPage="white-label" showArrow>
                  White-Label Services
                </CTAButton>
              </div>
            </GlassCard>

            <GlassCard variant="dark" className="p-8 md:p-10" hover>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                <PackageCheck size={28} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-serif-display text-3xl text-[var(--text)]">For Consumers</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Explore our own-brand range — Groneu, Super13, and Xtra New. 28+ products in cottony
                soft and dry net, sizes L to XXXL, with gel technology and rash-free design.
              </p>
              <div className="mt-6">
                <CTAButton variant="glass" size="sm" navigateToPage="products" showArrow>
                  Browse Products
                </CTAButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              What we <em className="italic text-[var(--accent)]">make possible</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <GlassCard
                key={cap.title}
                variant="dark"
                delay={i * 0.1}
                className="p-6"
              >
                <cap.icon size={28} className="text-[var(--accent)]" />
                <p className="mt-4 font-serif-display text-2xl text-[var(--text)]">{cap.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--text-dim)]">{cap.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{cap.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Featured products</SectionLabel>
              <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
                Trusted by <em className="italic text-[var(--accent)]">thousands</em>
              </h2>
            </div>
            <CTAButton variant="ghost" size="sm" navigateToPage="products" showArrow>
              View all 28 products
            </CTAButton>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <GlassCard
                key={product.id}
                variant="dark"
                delay={i * 0.1}
                className="cursor-pointer p-5"
              >
                <button
                  onClick={() => navigateToProduct(product.slug)}
                  className="w-full text-left"
                >
                  {/* Placeholder image area */}
                  <div
                    className="mb-4 flex aspect-square items-center justify-center rounded-2xl"
                    style={{ backgroundColor: product.placeholderColor }}
                  >
                    <PackageCheck size={32} className="text-[var(--text-dim)]" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[var(--accent)]">
                    {product.brand}
                  </p>
                  <h3 className="font-serif-display mt-1 text-lg leading-tight text-[var(--text)]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-dim)]">
                    {product.size} · {product.length} · {product.topSheet}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[var(--text-muted)]">
                    {product.price} / {product.priceUnit}
                  </p>
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING TEASER ===== */}
      <section className="relative overflow-hidden bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,182,66,0.04)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <GlassCard variant="dark" className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <video
                  className="h-full w-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  src="/assets/video/manufacturing-plant.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 md:p-12">
                <SectionLabel>Inside our plant</SectionLabel>
                <h2 className="font-serif-display mt-4 text-3xl tracking-tight text-[var(--text)] md:text-4xl">
                  Where precision meets <em className="italic text-[var(--accent)]">care</em>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  Step inside our manufacturing facility in Palanpur, Gujarat. From raw material
                  inspection to final dispatch, every pad passes through rigorous quality checks —
                  600,000 pieces a day, built to the same standard every time.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Raw Material', 'Processing', 'Quality Check', 'Packaging', 'Dispatch'].map(
                    (step) => (
                      <span
                        key={step}
                        className="rounded-full bg-[var(--bg-elevated)] px-3 py-1 text-xs text-[var(--text-muted)]"
                      >
                        {step}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-8">
                  <CTAButton variant="gold" size="md" navigateToPage="manufacturing" showArrow>
                    Step inside our plant
                  </CTAButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ===== WHY GRONEU ===== */}
      <section className="bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel className="text-center">Why Groneu</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              The difference is in the <em className="italic text-[var(--accent)]">details</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <GlassCard key={item.title} variant="dark" delay={i * 0.1} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-elevated)]">
                  <item.icon size={22} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-serif-display text-xl text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="relative overflow-hidden bg-[var(--bg)] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,182,66,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center text-center">Partner with us</SectionLabel>
          <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-6xl">
            Let&apos;s build something
            <br />
            <em className="italic text-[var(--accent)]">worth trusting</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            Whether you&apos;re a brand looking for a manufacturing partner or a distributor seeking
            quality products, we&apos;d love to hear from you. Enquire for a quote — we respond
            fast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="gold" size="lg" onClick={() => openEnquiry()} showArrow>
              Enquire for Quote
            </CTAButton>
            <CTAButton variant="glass" size="lg" navigateToPage="contact">
              Contact Us
            </CTAButton>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--text-dim)]">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--accent)]" /> 81% response rate
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--accent)]" /> GST &amp; IEC registered
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--accent)]" /> Export-ready
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
