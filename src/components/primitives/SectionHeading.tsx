// src/components/primitives/SectionHeading.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingProps {
  children: React.ReactNode
  italicWord?: string
  italicColor?: 'gold' | 'teal' | 'muted'
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'text-3xl md:text-4xl',
  md: 'text-4xl md:text-5xl',
  lg: 'text-5xl md:text-6xl lg:text-7xl',
  xl: 'text-5xl md:text-7xl lg:text-8xl',
}

const italicColorClasses = {
  gold: 'text-[var(--accent)]',
  teal: 'text-[var(--trust)]',
  muted: 'text-[var(--text-dim)]',
}

export function SectionHeading({
  children,
  italicWord,
  italicColor = 'gold',
  align = 'left',
  size = 'lg',
  className = '',
}: SectionHeadingProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`font-serif-display tracking-tight ${sizeClasses[size]} ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
      {italicWord && (
        <>
          {' '}
          <em className={`italic ${italicColorClasses[italicColor]}`}>{italicWord}</em>
        </>
      )}
    </motion.h2>
  )
}
