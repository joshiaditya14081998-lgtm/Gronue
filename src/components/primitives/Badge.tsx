// src/components/primitives/Badge.tsx
'use client'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'teal' | 'glass' | 'glass-light' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'glass', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium'
  const variants = {
    gold: 'bg-[#F5B642] text-black',
    teal: 'bg-[#0E8E8E] text-white',
    glass: 'liquid-glass text-white/80',
    'glass-light': 'liquid-glass-light text-[#1A2E2E]',
    outline: 'border border-current/30 text-current/70',
  }
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>
}
