// src/components/pages/ProductsPage.tsx
'use client'

import { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, PackageCheck } from 'lucide-react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { ProductImage } from '@/components/primitives/ProductImage'
import { useEnquiry } from '@/components/shell/SiteShell'
import { products, productStats, type Product } from '@/data/products'
import { navigateToProduct } from '@/lib/router'
import { usePageMeta } from '@/hooks/usePageMeta'

const CATEGORIES = [
  { id: 'all', label: 'All', count: products.length },
  { id: 'sanitary-napkins', label: 'Sanitary Napkins', count: productStats.napkins },
  { id: 'sanitary-pad', label: 'Sanitary Pad', count: productStats.pads },
]

const SIZES = ['All', 'L', 'XL', 'XXL', 'XXXL'] as const
const TOP_SHEETS = ['All', 'Cottony', 'Dry Net'] as const

// Match a product's size string against a normalized size filter.
function matchesSize(size: string, filter: string): boolean {
  if (filter === 'All') return true
  const s = size.toUpperCase()
  if (filter === 'XXXL') return s.includes('XXXL')
  if (filter === 'XXL') return s.includes('XXL') && !s.includes('XXXL')
  if (filter === 'XL') {
    if (s.includes('XXL') || s.includes('XXXL')) return false
    return s.includes('XL') || s.includes('280')
  }
  if (filter === 'L') {
    if (s.includes('XL')) return false
    return /^\s*L\s*$/.test(s) || s === 'L'
  }
  return true
}

function matchesTopSheet(topSheet: string, filter: string): boolean {
  if (filter === 'All') return true
  const s = topSheet.toLowerCase()
  if (filter === 'Cottony') return s.includes('cotton')
  if (filter === 'Dry Net') return s.includes('dry net') || s.includes('drynet')
  return true
}

export function ProductsPage() {
  const { openEnquiry } = useEnquiry()
  const [category, setCategory] = useState<string>('all')
  const [size, setSize] = useState<string>('All')
  const [topSheet, setTopSheet] = useState<string>('All')

  usePageMeta({
    title: 'Products',
    description:
      '28+ sanitary napkins & pads. Cottony soft, dry net. Sizes L to XXXL. Super13, Groneu, Xtra New brands. Manufactured in Palanpur, Gujarat.',
  })

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = category === 'all' || p.category === category
      const sizeMatch = matchesSize(p.size, size)
      const topSheetMatch = matchesTopSheet(p.topSheet, topSheet)
      return categoryMatch && sizeMatch && topSheetMatch
    })
  }, [category, size, topSheet])

  const clearFilters = () => {
    setCategory('all')
    setSize('All')
    setTopSheet('All')
  }

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* ===== HERO ===== */}
      <section className="px-6 pt-12 pb-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Our Products</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl"
          >
            Designed for comfort. Made for <em className="italic text-[var(--accent)]">you</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
          >
            28+ products in cottony soft and dry net, sizes L to XXXL. Manufactured in Palanpur,
            Gujarat.
          </motion.p>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="sticky top-20 z-20 px-6 pb-6">
        <div className="mx-auto max-w-6xl">
          <div className="glass-surface rounded-3xl p-4 md:p-5">
            <div className="flex flex-col gap-4">
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-xs uppercase tracking-widest text-[var(--text-dim)]">
                  Category
                </span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      category === cat.id
                        ? 'bg-[var(--accent)] text-[var(--accent-text)]'
                        : 'border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:bg-[var(--bg-elevated)]'
                    }`}
                  >
                    {cat.label} <span className="opacity-60">({cat.count})</span>
                  </button>
                ))}
              </div>

              {/* Sizes + Top sheet */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs uppercase tracking-widest text-[var(--text-dim)]">Size</span>
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        size === s
                          ? 'bg-[var(--bg-elevated)] text-[var(--text)]'
                          : 'border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:bg-[var(--bg-elevated)]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs uppercase tracking-widest text-[var(--text-dim)]">
                    Top Sheet
                  </span>
                  {TOP_SHEETS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTopSheet(t)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        topSheet === t
                          ? 'bg-[var(--bg-elevated)] text-[var(--text)]'
                          : 'border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:bg-[var(--bg-elevated)]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[var(--text-muted)]">
              Showing{' '}
              <span className="font-medium text-[var(--text)]">{filtered.length}</span> of{' '}
              {products.length} products
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-[var(--border)] glass-surface p-12 text-center">
              <PackageCheck size={48} className="mx-auto text-[var(--text-dim)]" />
              <p className="mt-4 text-[var(--text-muted)]">No products match these filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== BULK ENQUIRY CTA ===== */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="glass-surface rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <SectionLabel>Bulk &amp; Distributor Enquiry</SectionLabel>
                <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-[var(--text)] md:text-4xl">
                  Looking for bulk quantities?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                  We offer competitive pricing for distributors, wholesalers, NGOs and hospitality
                  buyers. Tell us your volume and we&apos;ll send a custom quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <CTAButton variant="gold" size="lg" onClick={() => openEnquiry()} showArrow>
                  Distributor / Bulk enquiry
                </CTAButton>
                <CTAButton variant="ghost" size="lg" navigateToPage="white-label" showArrow>
                  White-Label Services
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ===== Product Card =====
function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      onClick={() => navigateToProduct(product.slug)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-[var(--border)] glass-surface shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Image area */}
      <ProductImage product={product} size="lg" rounded="rounded-none" className="aspect-square" />

      {/* Body */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-[var(--trust)]">{product.brand}</p>
        <h3 className="font-serif-display mt-1 text-lg leading-tight text-[var(--text)]">
          {product.name}
        </h3>
        <p className="mt-2 text-xs text-[var(--text-muted)]">
          {product.size} · {product.length} · {product.topSheet}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-[var(--text)]">
            {product.price} / {product.priceUnit}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
