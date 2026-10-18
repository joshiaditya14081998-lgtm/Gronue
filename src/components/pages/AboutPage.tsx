// src/components/pages/AboutPage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Users,
  Factory,
  ShieldCheck,
  MapPin,
  Award,
  TrendingUp,
  Heart,
  Target,
  Eye,
} from 'lucide-react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { company } from '@/data/company'
import { productStats } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

export function AboutPage() {
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' })

  usePageMeta({
    title: 'About Us',
    description:
      'Groneu Healthcare — Palanpur, Gujarat. Est. 2022. ₹5-25Cr turnover. Patel family partnership. GST & IEC registered sanitary napkin manufacturer.',
  })

  const stats = [
    { icon: TrendingUp, label: 'Annual Turnover', value: '₹5-25 Cr' },
    { icon: Factory, label: 'Products', value: '28+' },
    { icon: Award, label: 'Established', value: '2022' },
    { icon: Users, label: 'Max Capacity', value: '600K/day' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Care First',
      description:
        'Every product is designed with the end user in mind — comfort, safety, and dignity are non-negotiable.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Without Compromise',
      description:
        'Industrial standards compliance, in-process QA at every stage, and 36-month shelf life on every product.',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description:
        "Our professionals invest long working hours to manufacture products as per clients' exact requirements.",
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'GST & IEC registered, export-ready, with honest communication about capabilities and timelines.',
    },
  ]

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,182,66,0.04)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center text-center">About Us</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif-display mt-6 text-5xl leading-[1.1] tracking-tight text-[var(--text)] md:text-7xl"
          >
            Pioneering care since{' '}
            <em className="italic text-[var(--accent)]">2022</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
          >
            Groneu Healthcare is a leading manufacturer of sanitary napkins based in Palanpur,
            Gujarat. Founded as a proprietor firm in 2022, we&apos;ve grown into a partnership with
            ₹5-25 crore turnover — serving both white-label partners and our own brand customers
            across India and beyond.
          </motion.p>
        </div>
      </section>

      {/* Story — Mission / Vision */}
      <section ref={storyRef} className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                What began as a proprietor firm in 2022 has grown into a trusted partnership. Today,
                Groneu Healthcare operates a modern manufacturing facility in Palanpur, producing
                600,000 pieces per day across 28+ product variants — serving brands, distributors,
                NGOs, and hospitality industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-surface rounded-3xl p-6 md:p-8"
            >
              <Target size={24} className="text-[var(--accent)]" />
              <h3 className="font-serif-display mt-4 text-2xl text-[var(--text)]">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                To manufacture sanitary products that combine comfort, quality, and affordability —
                making reliable feminine hygiene accessible to every woman, while empowering brands
                to launch their own product lines without barriers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-surface rounded-3xl p-6 md:p-8"
            >
              <Eye size={24} className="text-[var(--accent)]" />
              <h3 className="font-serif-display mt-4 text-2xl text-[var(--text)]">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                To be India&apos;s most trusted white-label sanitary manufacturer — known for
                quality, reliability, and the partnerships we build with brands who share our
                commitment to care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              The people behind <em className="italic text-[var(--accent)]">Groneu</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Nitin Patel', role: 'CEO', desc: 'Leading Groneu Healthcare with vision and industry expertise.' },
              { name: 'Nitinkumar K. Patel', role: 'Partner', desc: 'Overseeing production and operational excellence.' },
              { name: 'Kamleshkumar K. Patel', role: 'Partner', desc: 'Managing supply chain and vendor relationships.' },
              { name: 'Manan S. Patel', role: 'Partner', desc: 'Driving quality assurance and client relations.' },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-surface rounded-3xl p-6 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                  <Users size={32} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-serif-display mt-4 text-xl text-[var(--text)]">{person.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--accent)]">{person.role}</p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-surface rounded-3xl p-6 text-center"
              >
                <stat.icon size={24} className="mx-auto text-[var(--accent)]" />
                <p className="font-serif-display mt-3 text-3xl text-[var(--text)] md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--text-dim)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <SectionLabel>What drives us</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              Our <em className="italic text-[var(--accent)]">values</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-surface rounded-3xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                  <val.icon size={22} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-serif-display mt-4 text-xl text-[var(--text)]">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Profile */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <SectionLabel className="justify-center text-center">Statutory Profile</SectionLabel>
            <h2 className="font-serif-display mt-4 text-4xl tracking-tight text-[var(--text)] md:text-5xl">
              Registered & <em className="italic text-[var(--accent)]">compliant</em>
            </h2>
          </div>
          <div className="glass-surface rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
              {company.statutory.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0"
                >
                  <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                  <span className="font-serif-display text-base text-[var(--text)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <GlassCard variant="dark" className="p-8 md:p-10">
              <MapPin size={28} className="text-[var(--accent)]" />
              <h3 className="font-serif-display mt-4 text-2xl text-[var(--text)]">Our Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {company.officeAddress.line2}
                {company.officeAddress.line3}
                {company.officeAddress.line4}
                {company.officeAddress.line5}
              </p>
            </GlassCard>

            <GlassCard variant="dark" className="p-8 md:p-10">
              <Factory size={28} className="text-[var(--accent)]" />
              <h3 className="font-serif-display mt-4 text-2xl text-[var(--text)]">Our Factory</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {company.factoryAddress.line1}
                {company.factoryAddress.line2}
                {company.factoryAddress.line3}
              </p>
              <div className="mt-6">
                <CTAButton variant="gold" size="md" navigateToPage="manufacturing" showArrow>
                  See our plant
                </CTAButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
