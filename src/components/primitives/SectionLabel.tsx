// src/components/primitives/SectionLabel.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`text-xs uppercase tracking-widest text-[var(--text-dim)] ${className}`}
    >
      {children}
    </motion.p>
  )
}
