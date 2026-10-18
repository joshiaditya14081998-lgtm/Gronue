// src/components/shell/MobileBottomNav.tsx
'use client'

import { Home, Package, Factory, Handshake, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { navigateTo, type PageId } from '@/lib/router'

interface MobileBottomNavProps {
  currentPage: PageId
}

const bottomNavItems: { page: PageId; label: string; icon: typeof Home }[] = [
  { page: 'home', label: 'Home', icon: Home },
  { page: 'products', label: 'Products', icon: Package },
  { page: 'manufacturing', label: 'Plant', icon: Factory },
  { page: 'white-label', label: 'Partner', icon: Handshake },
  { page: 'contact', label: 'Contact', icon: Phone },
]

export function MobileBottomNav({ currentPage }: MobileBottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Mobile navigation"
    >
      <div
        className="mx-auto mb-3 flex max-w-sm items-center justify-around rounded-full px-2 py-2"
        style={{
          backgroundColor: 'var(--nav-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 1px var(--accent-soft)',
          border: '1px solid var(--border)',
          margin: '0 12px',
        }}
      >
        {bottomNavItems.map((item) => {
          const active = currentPage === item.page
          const Icon = item.icon
          return (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className="relative flex flex-1 flex-col items-center gap-1 rounded-full px-2 py-2"
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={
                  active
                    ? { backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }
                    : { color: 'var(--text-muted)' }
                }
              >
                <Icon size={18} />
              </motion.div>
              <span
                className="text-[10px] font-medium leading-none"
                style={{ color: active ? 'var(--accent)' : 'var(--text-dim)' }}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
