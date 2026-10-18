// src/components/primitives/GlassCard.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface GlassCardProps {
  children: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
  animate?: boolean
  delay?: number
  hover?: boolean
}

export function GlassCard({
  children,
  variant = 'dark',
  className = '',
  animate = true,
  delay = 0,
  hover = false,
}: GlassCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const glassClass = 'glass-surface'

  if (!animate) {
    return (
      <div
        className={`${glassClass} ${hover ? 'transition-transform duration-300 hover:-translate-y-1' : ''} ${className}`}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={`${glassClass} ${hover ? 'transition-transform duration-300 hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
