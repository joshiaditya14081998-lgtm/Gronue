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
    gold: 'bg-[var(--accent)] text-[var(--accent-text)]',
    teal: 'bg-[var(--trust)] text-white',
    glass: 'glass-surface text-[var(--text-muted)]',
    'glass-light': 'glass-surface text-[var(--text-muted)]',
    outline: 'border border-[var(--border)] text-[var(--text-muted)]',
  }
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>
}
