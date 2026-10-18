// src/components/pages/ContactPage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Factory,
  Building2,
  Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import { CTAButton } from '@/components/primitives/CTAButton'
import { GlassCard } from '@/components/primitives/GlassCard'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { company } from '@/data/company'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ContactPage() {
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-100px' })
  const [enquiryType, setEnquiryType] = useState<'general' | 'b2b'>('general')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  usePageMeta({
    title: 'Contact',
    description:
      'Get in touch. Palanpur, Gujarat. Phone +91-8047844175. Email info@groneuhealthcare.com. WhatsApp available. Enquire for quote — 81% response rate.',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you! Your enquiry has been sent. We will contact you shortly.')
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: company.contact.phoneDisplay,
      href: `tel:${company.contact.phone}`,
      note: '81% response rate',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
      note: 'We respond within 24 hours',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: company.contact.phoneDisplay,
      href: company.contact.whatsappLink,
      note: 'Quick chat for quick questions',
    },
  ]

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-12 pb-12 md:pt-20 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,182,66,0.04)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center text-center">Get in touch</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif-display mt-6 text-5xl leading-[1.1] tracking-tight text-[var(--text)] md:text-7xl"
          >
            Let&apos;s <em className="italic text-[var(--accent)]">talk</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
          >
            Whether you&apos;re a brand looking for a manufacturing partner, a distributor seeking
            quality products, or just have a question — we&apos;d love to hear from you. Enquire for
            a quote and we&apos;ll get back fast.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-surface rounded-3xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                  <method.icon size={22} className="text-[var(--accent)]" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-[var(--text-dim)]">
                  {method.label}
                </p>
                <p className="font-serif-display mt-1 text-lg text-[var(--text)]">{method.value}</p>
                <p className="mt-1 text-xs text-[var(--text-dim)]">{method.note}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Send us a message</SectionLabel>
              <h2 className="font-serif-display mt-4 text-3xl tracking-tight text-[var(--text)] md:text-4xl">
                Enquire for <em className="italic text-[var(--accent)]">quote</em>
              </h2>

              {/* Enquiry type toggle */}
              <div className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-1">
                <button
                  onClick={() => setEnquiryType('general')}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    enquiryType === 'general'
                      ? 'bg-[var(--accent)] text-[var(--accent-text)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  General Enquiry
                </button>
                <button
                  onClick={() => setEnquiryType('b2b')}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    enquiryType === 'b2b'
                      ? 'bg-[var(--accent)] text-[var(--accent-text)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  White-Label / B2B
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]" htmlFor="c-name">
                      Name *
                    </label>
                    <input
                      id="c-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-input)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]" htmlFor="c-email">
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-input)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]" htmlFor="c-phone">
                      Phone
                    </label>
                    <input
                      id="c-phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-input)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]"
                      placeholder="+91 ..."
                    />
                  </div>
                  {enquiryType === 'b2b' && (
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]" htmlFor="c-company">
                        Company
                      </label>
                      <input
                        id="c-company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-input)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]"
                        placeholder="Your company"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]" htmlFor="c-msg">
                    Message *
                  </label>
                  <textarea
                    id="c-msg"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-input)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder={
                      enquiryType === 'b2b'
                        ? 'Tell us about your brand, target market, expected volume, and timeline...'
                        : 'How can we help you?'
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-3 text-sm font-medium text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <Send size={16} /> Send Enquiry
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <GlassCard variant="dark" className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Building2 size={24} className="mt-1 shrink-0 text-[var(--accent)]" />
                  <div>
                    <h3 className="font-serif-display text-xl text-[var(--text)]">Office Address</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {company.officeAddress.line1}
                      <br />
                      {company.officeAddress.line2}
                      <br />
                      {company.officeAddress.line3}
                      {company.officeAddress.line4}
                      <br />
                      {company.officeAddress.line5}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="dark" className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Factory size={24} className="mt-1 shrink-0 text-[var(--accent)]" />
                  <div>
                    <h3 className="font-serif-display text-xl text-[var(--text)]">Factory Address</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {company.factoryAddress.line1}
                      <br />
                      {company.factoryAddress.line2}
                      {company.factoryAddress.line3}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="dark" className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Clock size={24} className="mt-1 shrink-0 text-[var(--accent)]" />
                  <div>
                    <h3 className="font-serif-display text-xl text-[var(--text)]">Response Stats</h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Response Rate</span>
                        <span className="font-serif-display text-[var(--accent)]">81%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Typical Response</span>
                        <span className="font-serif-display text-[var(--accent)]">Within 24 hours</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Delivery Time</span>
                        <span className="font-serif-display text-[var(--accent)]">2-7 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* WhatsApp quick CTA */}
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-3xl bg-[#25D366] p-6 text-white transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={28} fill="white" />
                  <div>
                    <p className="font-serif-display text-xl">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">Fastest way to reach us</p>
                  </div>
                </div>
                <Zap size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <SectionLabel className="justify-center text-center">Find us</SectionLabel>
            <h2 className="font-serif-display mt-4 text-3xl tracking-tight text-[var(--text)] md:text-4xl">
              Palanpur, <em className="italic text-[var(--accent)]">Gujarat</em>
            </h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <iframe
              src={company.contact.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Groneu Healthcare location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
