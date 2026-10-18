// src/data/navigation.ts
import type { PageId } from '@/lib/router'

export interface NavLink {
  label: string
  page: PageId
}

export const navLinks: NavLink[] = [
  { label: 'Home', page: 'home' },
  { label: 'Products', page: 'products' },
  { label: 'Manufacturing', page: 'manufacturing' },
  { label: 'White-Label', page: 'white-label' },
  { label: 'About', page: 'about' },
  { label: 'Quality', page: 'quality' },
  { label: 'Contact', page: 'contact' },
]
