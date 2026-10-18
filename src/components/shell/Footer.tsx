// src/components/shell/Footer.tsx
'use client'

import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { company } from '@/data/company'
import { navLinks } from '@/data/navigation'
import { navigateTo, navigateToProduct } from '@/lib/router'
import { asset } from '@/lib/asset'

export function Footer() {
  const year = new Date().getFullYear()

  const linkClass = 'text-sm transition-opacity hover:opacity-70'

  return (
    <footer
      className="px-6 pb-16 pt-16"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src={asset('/assets/brand/Groneu-logo.svg')}
                alt="Groneu Healthcare"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Leading manufacturer of sanitary napkins in Palanpur, Gujarat. White-label &amp;
              own-brand. Crafted with care, built for trust.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={company.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full p-2.5 transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                aria-label="Email"
                className="rounded-full p-2.5 transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="rounded-full p-2.5 transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ color: 'var(--text-dim)' }}
            >
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button onClick={() => navigateTo(link.page)} className={linkClass}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ color: 'var(--text-dim)' }}
            >
              Products
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateTo('products')} className={linkClass}>
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('groneu-super-13-cotton-xxl-320mm')}
                  className={linkClass}
                >
                  Super13 Cotton XXL
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('groneu-ultra-comfort')}
                  className={linkClass}
                >
                  Ultra Comfort
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('super13-dry-net-menstrual-sanitary-napkin')}
                  className={linkClass}
                >
                  Super13 Dry Net
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('white-label')}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--accent)' }}
                >
                  White-Label Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ color: 'var(--text-dim)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--text-dim)' }}
                />
                <span>
                  Unit 4, Shiv Industrial Park, Songadh, Palanpur-Abu Highway, Palanpur - 385001,
                  Gujarat, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0" style={{ color: 'var(--text-dim)' }} />
                <a
                  href={`tel:${company.contact.phone}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {company.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0" style={{ color: 'var(--text-dim)' }} />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs md:flex-row"
          style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
        >
          <p>© {year} Groneu Healthcare. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>GST: {company.gstNo}</span>
            <span>IEC: {company.iecCode}</span>
            <span>Est. {company.established}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
