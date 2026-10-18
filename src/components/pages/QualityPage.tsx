// src/components/pages/QualityPage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ShieldCheck,
  FileCheck,
  Beaker,
  PackageCheck,
  Truck,
  Microscope,
  Award,
  CheckCircle2,
} from 'lucide-react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { useEnquiry } from '@/components/shell/SiteShell'
import { company } from '@/data/company'
import { products } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

export function QualityPage() {
  const { openEnquiry } = useEnquiry()
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-100px' })

  usePageMeta({
    title: 'Quality & Compliance',
    description:
      'GST & IEC registered. 5-stage QA process. BIS-certified products. 36-month shelf life. Honest quality commitment from Groneu Healthcare.',
  })

  const qaSteps = [
    {
      icon: PackageCheck,
      title: 'Incoming Material Inspection',
      description: 'Raw materials — cotton, dry net, non-woven, adhesives — inspected on arrival for quality and consistency.',
    },
    {
      icon: Beaker,
      title: 'In-Process Quality Checks',
      description: 'During production, each line is monitored for absorbency, seal integrity, wing attachment, and dimensional accuracy.',
    },
    {
      icon: Microscope,
      title: 'Final Product Testing',
      description: 'Finished products tested for absorbency (50-80ml), pH, shelf life (36 months), and overall integrity before packaging.',
    },
    {
      icon: ShieldCheck,
      title: 'Packaging Inspection',
      description: 'Sealed packets checked for proper sealing, label accuracy, and packaging integrity — whether loose, packet, or brand packing.',
    },
    {
      icon: Truck,
      title: 'Dispatch Verification',
      description: 'Final verification before dispatch — count accuracy, documentation, and export-ready packaging for international orders.',
    },
  ]

  const standards = [
    {
      label: 'BIS Compliance',
      value: 'Multiple products BIS certified',
      note: 'Referenced across our Super13, Xtra New, and Dry Net product lines',
    },
    {
      label: 'Product-Level Certifications',
      value: 'WHO-GMP, BIS, ISO',
      note: 'Groneu Super13 Maxi Care carries WHO-GMP, BIS, and ISO certifications',
    },
    {
      label: 'Shelf Life',
      value: '36 months',
      note: 'All products tested for 36-month shelf life',
    },
    {
      label: 'Absorbency Range',
      value: '50-80 ml',
      note: 'Tested across product range, with 2X absorbency variants available',
    },
  ]

  const statutoryCreds = [
    { label: 'GST No.', value: company.gstNo, icon: FileCheck },
    { label: 'Import Export Code', value: company.iecCode, icon: Award },
  ]

  const bisProducts = products.filter((p) => p.certifications.includes('BIS'))

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,182,66,0.04)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center text-center">Quality &amp; Compliance</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif-display mt-6 text-5xl leading-[1.1] tracking-tight text-white md:text-7xl"
          >
            Our commitment to <em className="italic text-[#F5B642]">quality</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            Quality isn&apos;t a checkpoint — it&apos;s built into every step. From raw material
            inspection to final dispatch, our products are manufactured in compliance with industrial
            standards, with internal QA at every production stage.
          </motion.p>
        </div>
      </section>

      {/* Statutory Credentials */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <SectionLabel className="justify-center text-center">Registered &amp; Verified</SectionLabel>
            <h2 className="font-serif-display mt-4 text-3xl tracking-tight text-white md:text-4xl">
              Statutory credentials
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {statutoryCreds.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass flex items-center gap-5 rounded-3xl p-6 md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0E8E8E]/10">
                  <cred.icon size={26} className="text-[#0E8E8E]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">{cred.label}</p>
                  <p className="font-serif-display mt-1 text-2xl text-white">{cred.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-white/40">
            These are our verified statutory credentials. GST registration date: {company.gstRegistrationDate} · Legal status: {company.legalStatus}
          </p>
        </div>
      </section>

      {/* QA Process */}
      <section ref={processRef} className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <SectionLabel>Our QA Process</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Five stages of <em className="italic text-[#F5B642]">assurance</em>
            </h2>
          </div>
          <div className="space-y-4">
            {qaSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="liquid-glass flex items-start gap-5 rounded-3xl p-6 md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5B642] text-black">
                  <span className="font-serif-display text-lg">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <step.icon size={20} className="text-[#F5B642]" />
                    <h3 className="font-serif-display text-xl text-white md:text-2xl">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <SectionLabel>Standards We Follow</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Tested &amp; <em className="italic text-[#F5B642]">verified</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {standards.map((std, i) => (
              <motion.div
                key={std.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass rounded-3xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">{std.label}</p>
                    <p className="font-serif-display mt-1 text-2xl text-white">{std.value}</p>
                  </div>
                  <CheckCircle2 size={24} className="shrink-0 text-[#0E8E8E]" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{std.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIS Products */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <SectionLabel>BIS Certified Products</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              Products with <em className="italic text-[#F5B642]">BIS certification</em>
            </h2>
            <p className="mt-4 text-sm text-white/60">
              The following products carry BIS certification as stated in their specifications:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bisProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="liquid-glass flex items-center gap-4 rounded-2xl p-4"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: product.placeholderColor }}
                >
                  <ShieldCheck size={20} className="text-[#0E8E8E]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-widest text-[#F5B642]">{product.brand}</p>
                  <p className="truncate font-serif-display text-base text-white">{product.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <GlassCard variant="dark" className="p-8 text-center md:p-12">
            <Microscope size={32} className="mx-auto text-[#F5B642]" />
            <h2 className="font-serif-display mt-4 text-3xl text-white md:text-4xl">
              Continuously <em className="italic text-[#F5B642]">improving</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              We&apos;re committed to strengthening our quality systems. Our team invests long
              working hours in manufacturing products as per clients&apos; specifications — and
              we&apos;re always working towards broader certifications and tighter standards.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton variant="gold" size="md" onClick={() => openEnquiry()} showArrow>
                Discuss your quality requirements
              </CTAButton>
              <CTAButton variant="glass" size="md" navigateToPage="products">
                View our products
              </CTAButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
