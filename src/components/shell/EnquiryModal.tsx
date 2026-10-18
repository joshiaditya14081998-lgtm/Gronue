// src/components/shell/EnquiryModal.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface EnquiryModalProps {
  open: boolean
  onClose: () => void
  prefillProduct?: string
  variant?: 'dark' | 'light' // kept for backwards compat but now theme-aware
}

export function EnquiryModal({
  open,
  onClose,
  prefillProduct,
}: EnquiryModalProps) {
  const [form, setForm] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    message: prefillProduct
      ? `I'm interested in: ${prefillProduct}. Please share more details.`
      : '',
  }))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you! Your enquiry has been sent. We will contact you shortly.')
    setForm({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  const inputStyle = {
    backgroundColor: 'var(--bg-input)',
    borderColor: 'var(--border)',
    color: 'var(--text)',
  } as React.CSSProperties

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="glass-surface relative z-10 w-full max-w-md rounded-3xl p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry form"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h3
              className="font-serif-display text-2xl"
              style={{ color: 'var(--text)' }}
            >
              Enquire for Quote
            </h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: 'var(--text-muted)' }}
                  htmlFor="em-name"
                >
                  Name *
                </label>
                <input
                  id="em-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  className="w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: 'var(--text-muted)' }}
                    htmlFor="em-email"
                  >
                    Email *
                  </label>
                  <input
                    id="em-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    className="w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: 'var(--text-muted)' }}
                    htmlFor="em-phone"
                  >
                    Phone
                  </label>
                  <input
                    id="em-phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    className="w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="+91 ..."
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: 'var(--text-muted)' }}
                  htmlFor="em-msg"
                >
                  Message
                </label>
                <textarea
                  id="em-msg"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={inputStyle}
                  className="w-full rounded-2xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                  placeholder="Tell us what you need..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-colors"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'var(--accent)')
                }
              >
                <Send size={16} /> Send Enquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
