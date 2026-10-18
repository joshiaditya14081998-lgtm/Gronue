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
  gold: 'bg-[#F5B642] text-black hover:bg-[#FFC857]',
  teal: 'bg-[#0E8E8E] text-white hover:bg-[#0A6E6E]',
  glass: 'liquid-glass text-white hover:bg-white/5',
  'glass-light': 'liquid-glass-light text-[#1A2E2E] hover:bg-[#0E8E8E]/5',
  ghost: 'text-current/80 hover:text-current hover:opacity-80',
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
