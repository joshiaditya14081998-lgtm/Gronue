// src/components/pages/ManufacturingPage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  CheckCircle2,
  Factory,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { useEnquiry } from '@/components/shell/SiteShell'
import { navigateTo } from '@/lib/router'

const PLANT_VIDEO = '/assets/video/manufacturing-plant.mp4'

const infrastructure = [
  {
    icon: Factory,
    title: 'Production Line',
    description: '600,000 pcs/day capacity across multiple production lines',
  },
  {
    icon: PackageCheck,
    title: 'Warehouse',
    description:
      'Stocked inventory with transparent poly bag packaging for easy transport',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Lab',
    description: 'In-process quality checks at every production stage',
  },
  {
    icon: FlaskConical,
    title: 'Packing Unit',
    description: 'Customized packing sizes available — loose or brand packing',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Raw Material',
    description: 'Sourced and inspected on arrival',
  },
  {
    number: '02',
    title: 'Processing',
    description: 'HAT cotton top sheet, fluid lock gel technology',
  },
  {
    number: '03',
    title: 'Quality Check',
    description: 'In-process QA at every stage, BIS standards',
  },
  {
    number: '04',
    title: 'Packaging',
    description: 'Customized packing — loose, packet, or brand packing',
  },
  {
    number: '05',
    title: 'Dispatch',
    description: '2-7 day delivery, export-ready documentation',
  },
]

const capacityStats = [
  { value: '600K', unit: 'pcs/day', label: 'Max Production Capacity' },
  { value: '28+', unit: '', label: 'Product Variants' },
  { value: '2-7', unit: 'days', label: 'Lead Time' },
  { value: '100%', unit: '', label: 'MOQ Flexibility' },
]

const plantThumbnails = [
  { icon: Factory, label: 'Production Floor' },
  { icon: PackageCheck, label: 'Packing Unit' },
  { icon: ShieldCheck, label: 'Quality Lab' },
  { icon: Truck, label: 'Dispatch Bay' },
]

export function ManufacturingPage() {
  const { openEnquiry } = useEnquiry()

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            style={{ opacity: 0.4 }}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            src={PLANT_VIDEO}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Manufacturing</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display mt-4 max-w-4xl text-5xl leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Where precision meets <em className="italic text-[#F5B642]">care</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Our manufacturing facility in Palanpur, Gujarat — 600,000 pieces a day,
            built to the same standard every time.
          </motion.p>
        </div>
      </section>

      {/* ===== PLANT SHOWCASE ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Main video player */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="liquid-glass overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                src={PLANT_VIDEO}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* Thumbnail grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {plantThumbnails.map((tile, i) => (
              <GlassCard
                key={tile.label}
                variant="dark"
                delay={i * 0.1}
                className="flex flex-col items-start gap-4 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B642]/10">
                  <tile.icon size={22} className="text-[#F5B642]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Plant Photo
                  </p>
                  <p className="font-serif-display mt-1 text-lg text-white">
                    {tile.label}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFRASTRUCTURE ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <SectionLabel>Inside the facility</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Our <em className="italic text-[#F5B642]">Infrastructure</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item, i) => (
              <GlassCard key={item.title} variant="dark" delay={i * 0.1} className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B642]/10">
                  <item.icon size={22} className="text-[#F5B642]" />
                </div>
                <h3 className="font-serif-display text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS FLOW ===== */}
      <ProcessFlowSection />

      {/* ===== CAPACITY & CAPABILITIES ===== */}
      <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel className="text-center">Capacity &amp; Capabilities</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Built to <em className="italic text-[#F5B642]">scale</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capacityStats.map((stat, i) => (
              <GlassCard
                key={stat.label}
                variant="dark"
                delay={i * 0.1}
                className="p-8 text-center"
              >
                <p className="font-serif-display text-5xl text-white md:text-6xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-2xl text-[#F5B642]">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
            From 50-pack minimums to 50,000-piece bulk orders, we scale to your needs.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,182,66,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center text-center">
            Visit our plant
          </SectionLabel>
          <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-6xl">
            Schedule a <em className="italic text-[#F5B642]">plant visit</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            See the line in action. Walk the floor where 600,000 pieces a day are
            produced, inspected, and dispatched — and discuss your requirements with
            our team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="gold" size="lg" onClick={() => openEnquiry()} showArrow>
              Discuss your requirements
            </CTAButton>
            <CTAButton variant="glass" size="lg" onClick={() => navigateTo('contact')}>
              Contact Us
            </CTAButton>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#F5B642]" /> GST registered
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#F5B642]" /> IEC registered
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#F5B642]" /> 81% response rate
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- Process Flow sub-component ---------- */

function ProcessFlowSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
            How we <em className="italic text-[#F5B642]">make it</em>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line — horizontal on desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
            aria-hidden="true"
          />
          {/* Connecting line — vertical on mobile */}
          <div
            className="pointer-events-none absolute bottom-0 left-8 top-8 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent md:hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i }}
                className="relative flex items-start gap-5 md:block md:gap-0"
              >
                <div className="liquid-glass relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl md:mx-auto">
                  <span className="font-serif-display text-2xl text-[#F5B642]">
                    {step.number}
                  </span>
                </div>
                <div className="md:mt-5 md:text-center">
                  <h3 className="font-serif-display text-xl text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 md:px-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inline CTA at the end of the process flow */}
        <div className="mt-12 flex items-center justify-center">
          <CTAButton variant="ghost" size="sm" navigateToPage="quality" showArrow>
            See our quality standards
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
