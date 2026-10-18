// src/components/primitives/CTAButton.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { navigateTo, navigateToProduct, type PageId } from '@/lib/router'

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  navigateToPage?: PageId
  navigateToProductSlug?: string
  variant?: 'gold' | 'teal' | 'glass' | 'glass-light' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  className?: string
}

const variantClasses = {
  gold: 'bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]',
  teal: 'bg-[var(--trust)] text-white hover:bg-[var(--trust)]/80',
  glass: 'glass-surface text-[var(--text)] hover:bg-[var(--bg-elevated)]',
  'glass-light': 'glass-surface text-[var(--text)] hover:bg-[var(--bg-elevated)]',
  ghost: 'text-[var(--text-muted)] hover:text-[var(--text)]',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1FB855]',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function CTAButton({
  children,
  onClick,
  navigateToPage,
  navigateToProductSlug,
  variant = 'gold',
  size = 'md',
  showArrow = false,
  className = '',
}: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (navigateToProductSlug) {
      navigateToProduct(navigateToProductSlug)
    } else if (navigateToPage) {
      navigateTo(navigateToPage)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight size={16} />}
    </motion.button>
  )
}
