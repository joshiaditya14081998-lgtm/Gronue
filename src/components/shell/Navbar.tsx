// src/components/shell/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { navLinks } from '@/data/navigation'
import { navigateTo, type PageId } from '@/lib/router'

interface NavbarProps {
  currentPage: PageId
}

export function Navbar({ currentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page: PageId) => {
    navigateTo(page)
    setMobileOpen(false)
  }

  // Solid background when scrolled OR mobile menu open (prevents content bleed-through)
  const solidBg = scrolled || mobileOpen

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6 md:py-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-6 md:py-3 ${
          solidBg
            ? 'bg-[#0A0A0A]/80 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'liquid-glass'
        }`}
      >
        {/* Logo + Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5"
          aria-label="Groneu Healthcare home"
        >
          <Image
            src="/assets/brand/Groneu-logo.png"
            alt="Groneu Healthcare logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-serif-display text-lg text-white">Groneu</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                currentPage === link.page
                  ? 'bg-white/10 text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('contact')}
            className="rounded-full bg-[#F5B642] px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-[#FFC857]"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-full p-2 text-white/80 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 lg:hidden"
          >
            <div className="mx-auto max-w-6xl rounded-3xl bg-[#0A0A0A]/90 p-4 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      currentPage === link.page
                        ? 'bg-white/10 text-white'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('contact')}
                  className="mt-2 rounded-2xl bg-[#F5B642] px-4 py-3 text-center text-sm font-medium text-black transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
