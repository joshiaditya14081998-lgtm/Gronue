// src/lib/router.ts
// Hash-based router for the multi-page site (sandbox only allows `/` route)
// Pages: home, about, products, product/:slug, manufacturing, white-label, quality, contact

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'product'
  | 'manufacturing'
  | 'white-label'
  | 'quality'
  | 'contact'

export interface RouteState {
  page: PageId
  productSlug?: string
}

export const HOME_HASH = '#home'

const PRODUCT_PATH_RE = /^#product\/(.+)$/

export function parseHash(hash: string): RouteState {
  const clean = hash.startsWith('#') ? hash : `#${hash}`
  if (clean === '' || clean === '#' || clean === '#home' || clean === '#/') {
    return { page: 'home' }
  }
  const productMatch = clean.match(PRODUCT_PATH_RE)
  if (productMatch) {
    return { page: 'product', productSlug: decodeURIComponent(productMatch[1]) }
  }
  const pageId = clean.slice(1).split('/')[0] as PageId
  const validPages: PageId[] = [
    'home',
    'about',
    'products',
    'product',
    'manufacturing',
    'white-label',
    'quality',
    'contact',
  ]
  if (validPages.includes(pageId)) {
    return { page: pageId }
  }
  return { page: 'home' }
}

export function buildHash(route: RouteState): string {
  if (route.page === 'product' && route.productSlug) {
    return `#product/${encodeURIComponent(route.productSlug)}`
  }
  return `#${route.page}`
}

export function navigateTo(page: PageId, productSlug?: string): void {
  const hash = buildHash({ page, productSlug })
  if (typeof window === 'undefined') return
  window.history.pushState({}, '', hash)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export function navigateToProduct(slug: string): void {
  navigateTo('product', slug)
}

// Which pages use dark mode vs light mode
export const DARK_PAGES: PageId[] = ['home', 'manufacturing', 'white-label']
export const LIGHT_PAGES: PageId[] = ['about', 'products', 'product', 'quality', 'contact']

export function isDarkPage(page: PageId): boolean {
  return DARK_PAGES.includes(page)
}
