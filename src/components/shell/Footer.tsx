// src/components/shell/Footer.tsx
'use client'

import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { company } from '@/data/company'
import { navLinks } from '@/data/navigation'
import { navigateTo, navigateToProduct } from '@/lib/router'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black px-6 py-16 text-white/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src="/assets/brand/Groneu-logo.png"
                alt="Groneu Healthcare"
                className="h-10 w-auto"
              />
              <span className="font-serif-display text-xl text-white">Groneu Healthcare</span>
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
                className="rounded-full bg-white/5 p-2.5 text-white/60 transition-colors hover:bg-[#25D366]/20 hover:text-[#25D366]"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                aria-label="Email"
                className="rounded-full bg-white/5 p-2.5 text-white/60 transition-colors hover:bg-[#0E8E8E]/20 hover:text-[#0E8E8E]"
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="rounded-full bg-white/5 p-2.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">Navigate</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">Products</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="text-sm transition-colors hover:text-white"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('groneu-super-13-cotton-xxl-320mm')}
                  className="text-sm transition-colors hover:text-white"
                >
                  Super13 Cotton XXL
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('groneu-ultra-comfort')}
                  className="text-sm transition-colors hover:text-white"
                >
                  Ultra Comfort
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToProduct('super13-dry-net-menstrual-sanitary-napkin')}
                  className="text-sm transition-colors hover:text-white"
                >
                  Super13 Dry Net
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('white-label')}
                  className="text-sm text-[#F5B642] transition-colors hover:text-[#FFC857]"
                >
                  White-Label Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <span>
                  Unit 4, Shiv Industrial Park, Songadh, Palanpur-Abu Highway, Palanpur - 385001,
                  Gujarat, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-white/40" />
                <a
                  href={`tel:${company.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {company.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-white/40" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
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
