// src/components/pages/ProductDetailPage.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PackageCheck,
  CheckCircle2,
  Truck,
  Package,
  Factory,
  MessageCircle,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { SectionLabel } from '@/components/primitives/SectionLabel'
import { Badge } from '@/components/primitives/Badge'
import { useEnquiry } from '@/components/shell/SiteShell'
import {
  getProductBySlug,
  getRelatedProducts,
  type Product,
} from '@/data/products'
import { company } from '@/data/company'
import { navigateTo, navigateToProduct } from '@/lib/router'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ProductDetailPage({ slug }: { slug?: string }) {
  const { openEnquiry } = useEnquiry()
  const product = slug ? getProductBySlug(slug) : undefined

  usePageMeta({
    title: product ? `${product.name} — ${product.brand}` : 'Product Not Found',
    description: product
      ? `${product.name} — ${product.size} ${product.length} ${product.topSheet}. MOQ ${product.moq || 'on request'}. Enquire for quote.`
      : 'Product not found.',
  })

  if (!product) {
    return (
      <div className="bg-[#0A0A0A] px-6 py-32 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <PackageCheck size={48} className="mx-auto text-white/40" />
          <h1 className="font-serif-display mt-6 text-4xl md:text-5xl">Product not found</h1>
          <p className="mt-4 text-white/60">
            We couldn&apos;t find the product you were looking for. It may have been moved or
            renamed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="gold" size="md" navigateToPage="products" showArrow>
              Browse all products
            </CTAButton>
            <CTAButton variant="ghost" size="md" navigateToPage="home">
              Back to home
            </CTAButton>
          </div>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product, 3)
  const whatsappUrl = `${company.contact.whatsappLink}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Please share a quote.`,
  )}`

  const openWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* ===== BREADCRUMB ===== */}
      <section className="px-6 pt-8 pb-2">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40">
            <button onClick={() => navigateTo('home')} className="hover:text-[#F5B642]">
              Home
            </button>
            <span aria-hidden>/</span>
            <button onClick={() => navigateTo('products')} className="hover:text-[#F5B642]">
              Products
            </button>
            <span aria-hidden>/</span>
            <span className="text-white/60">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ===== PRODUCT HEADER ===== */}
      <section className="px-6 pt-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex aspect-square items-center justify-center rounded-3xl"
              style={{ backgroundColor: product.placeholderColor }}
            >
              <PackageCheck size={120} className="text-white/30" />
            </motion.div>

            {/* Right column */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#0E8E8E]">{product.brand}</p>
              <h1 className="font-serif-display mt-2 text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              {product.description && (
                <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
                  {product.description}
                </p>
              )}

              {/* Key spec badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.size && product.size !== '—' && (
                  <Badge variant="glass">Size: {product.size}</Badge>
                )}
                {product.length && product.length !== '—' && (
                  <Badge variant="glass">Length: {product.length}</Badge>
                )}
                {product.topSheet && product.topSheet !== '—' && (
                  <Badge variant="glass">{product.topSheet}</Badge>
                )}
                {product.padType && product.padType !== '—' && (
                  <Badge variant="glass">{product.padType}</Badge>
                )}
              </div>

              {/* Certifications */}
              {product.certifications.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} variant="teal">
                      {cert}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Price block */}
              <div className="mt-8 rounded-2xl border border-white/10 liquid-glass p-5">
                <p className="text-xs uppercase tracking-widest text-white/40">Pricing</p>
                <p className="font-serif-display mt-1 text-3xl">
                  {product.price}{' '}
                  <span className="text-base text-white/60">/ {product.priceUnit}</span>
                </p>
                <p className="mt-1 text-sm text-white/60">Price on request for bulk orders</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <CTAButton
                    variant="gold"
                    size="md"
                    onClick={() => openEnquiry(product.name)}
                    showArrow
                  >
                    Enquire for Quote
                  </CTAButton>
                  <CTAButton variant="whatsapp" size="md" onClick={openWhatsApp}>
                    <MessageCircle size={16} /> WhatsApp
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECS TABLE ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Specifications</SectionLabel>
          <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
            Full technical specs
          </h2>
          <div className="liquid-glass mt-6 overflow-hidden rounded-3xl">
            <dl className="divide-y divide-white/10">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4 sm:px-8"
                >
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-white sm:col-span-2">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      {product.features.length > 0 && (
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Features</SectionLabel>
            <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
              What makes it <em className="italic text-[#F5B642]">different</em>
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 liquid-glass p-4"
                >
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[#0E8E8E]" />
                  <p className="text-sm leading-relaxed text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== USAGE + DISPOSAL DIRECTIONS ===== */}
      {(product.usageDirections?.length ?? 0) > 0 ||
      (product.disposalDirections?.length ?? 0) > 0 ? (
        <section className="px-6 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {product.usageDirections && product.usageDirections.length > 0 && (
              <div className="liquid-glass rounded-3xl p-6 md:p-8">
                <SectionLabel>Usage Directions</SectionLabel>
                <h3 className="font-serif-display mt-2 text-2xl text-white">How to use</h3>
                <ol className="mt-4 space-y-3">
                  {product.usageDirections.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F5B642] text-xs font-medium text-black">
                        {i + 1}
                      </span>
                      <span className="text-sm text-white">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {product.disposalDirections && product.disposalDirections.length > 0 && (
              <div className="liquid-glass rounded-3xl p-6 md:p-8">
                <SectionLabel>Disposal Directions</SectionLabel>
                <h3 className="font-serif-display mt-2 text-2xl text-white">How to dispose</h3>
                <ul className="mt-4 space-y-3">
                  {product.disposalDirections.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 size={20} className="flex-shrink-0 text-[#0E8E8E]" />
                      <span className="text-sm text-white">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* ===== MOQ + DELIVERY ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Ordering</SectionLabel>
          <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
            MOQ, delivery &amp; packaging
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoTile
              icon={Package}
              label="Minimum Order Quantity"
              value={
                product.moq
                  ? `${product.moq}${product.moqUnit ? ' ' + product.moqUnit : ''}`.trim()
                  : 'On request'
              }
            />
            <InfoTile
              icon={Truck}
              label="Delivery Time"
              value={product.deliveryTime ?? 'On request'}
            />
            <InfoTile
              icon={Factory}
              label="Production Capacity"
              value={product.productionCapacity ?? 'On request'}
            />
            <InfoTile
              icon={PackageCheck}
              label="Packaging Details"
              value={product.packagingDetails ?? 'Standard export packing'}
            />
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {related.length > 0 && (
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between">
              <div>
                <SectionLabel>You may also like</SectionLabel>
                <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
                  Related products
                </h2>
              </div>
              <CTAButton variant="ghost" size="sm" navigateToPage="products" showArrow>
                View all
              </CTAButton>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <RelatedCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ENQUIRY CTA ===== */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="liquid-glass rounded-3xl p-8 text-center md:p-12">
            <SectionLabel className="text-center">Interested?</SectionLabel>
            <h2 className="font-serif-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
              Interested in this product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Get a custom quote for {product.name}. We respond fast — typically within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton
                variant="gold"
                size="lg"
                onClick={() => openEnquiry(product.name)}
                showArrow
              >
                Enquire for Quote
              </CTAButton>
              <CTAButton variant="whatsapp" size="lg" onClick={openWhatsApp}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ===== Info Tile =====
function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 liquid-glass p-5">
      <Icon size={24} className="text-[#F5B642]" />
      <p className="mt-3 text-xs uppercase tracking-widest text-white/40">{label}</p>
      <p className="mt-1 text-sm leading-snug text-white">{value}</p>
    </div>
  )
}

// ===== Related Product Card =====
function RelatedCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 * index }}
      onClick={() => navigateToProduct(product.slug)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 liquid-glass shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="flex aspect-[4/3] items-center justify-center"
        style={{ backgroundColor: product.placeholderColor }}
      >
        <PackageCheck size={40} className="text-white/30" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-widest text-[#0E8E8E]">{product.brand}</p>
        <h3 className="font-serif-display mt-1 text-base leading-tight text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-white/60">
          {product.size} · {product.length} · {product.topSheet}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-medium text-white">
            {product.price} / {product.priceUnit}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#F5B642] transition-transform group-hover:translate-x-0.5">
            View <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
