// src/components/primitives/ProductImage.tsx
'use client'

import { PackageCheck } from 'lucide-react'
import type { Product } from '@/data/products'
import { asset } from '@/lib/asset'

interface ProductImageProps {
  product: Product
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  rounded?: string
}

const iconSizes = {
  sm: 24,
  md: 32,
  lg: 56,
  xl: 120,
}

/**
 * Renders a product image if available, otherwise falls back to a colored placeholder with PackageCheck icon.
 */
export function ProductImage({
  product,
  size = 'md',
  className = '',
  rounded = 'rounded-2xl',
}: ProductImageProps) {
  const iconSize = iconSizes[size]

  if (product.image) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden ${rounded} ${className}`}
        style={{ backgroundColor: 'var(--bg-elevated)' }}
      >
        <img
          src={asset(product.image!)}
          alt={product.name}
          className="h-full w-full object-contain p-3"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex items-center justify-center ${rounded} ${className}`}
      style={{ backgroundColor: product.placeholderColor }}
    >
      <PackageCheck size={iconSize} className="text-[var(--text-dim)]" />
    </div>
  )
}
