// src/components/shell/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { navigateTo, type PageId } from '@/lib/router'
import { useTheme } from './ThemeProvider'
import { asset } from '@/lib/asset'

interface NavbarProps {
  currentPage: PageId
}

export function Navbar({ currentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-6 md:py-3"
        style={
          solidBg
            ? { backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }
            : { backgroundColor: 'var(--nav-glass-bg)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }
        }
      >
        {/* Logo (SVG contains "Groneu Health Care" text — no separate label needed) */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5"
          aria-label="Groneu Healthcare home"
        >
          <img
            src={asset('/assets/brand/Groneu-logo.svg')}
            alt="Groneu Healthcare"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
              style={
                currentPage === link.page
                  ? { backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }
                  : { color: 'var(--text-muted)' }
              }
              onMouseEnter={(e) => {
                if (currentPage !== link.page) e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={(e) => {
                if (currentPage !== link.page) e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side: theme toggle + Get Quote + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNav('contact')}
            className="hidden rounded-full px-5 py-2 text-sm font-medium transition-colors lg:block"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Get Quote
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 transition-colors lg:hidden"
            style={{ color: 'var(--text-muted)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (top, opens on hamburger) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 lg:hidden"
          >
            <div
              className="mx-auto max-w-6xl rounded-3xl p-4"
              style={{
                backgroundColor: 'var(--nav-bg)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors"
                    style={
                      currentPage === link.page
                        ? { backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }
                        : { color: 'var(--text-muted)' }
                    }
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('contact')}
                  className="mt-2 rounded-2xl px-4 py-3 text-center text-sm font-medium transition-colors"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
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
