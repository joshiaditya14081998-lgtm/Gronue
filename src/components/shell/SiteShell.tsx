// src/components/shell/SiteShell.tsx
'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'
import { EnquiryModal } from './EnquiryModal'
import { useHashRoute } from '@/hooks/useHashRoute'
import { isDarkPage } from '@/lib/router'
import { HomePage } from '@/components/pages/HomePage'
import { AboutPage } from '@/components/pages/AboutPage'
import { ProductsPage } from '@/components/pages/ProductsPage'
import { ProductDetailPage } from '@/components/pages/ProductDetailPage'
import { ManufacturingPage } from '@/components/pages/ManufacturingPage'
import { WhiteLabelPage } from '@/components/pages/WhiteLabelPage'
import { QualityPage } from '@/components/pages/QualityPage'
import { ContactPage } from '@/components/pages/ContactPage'

interface EnquiryContextValue {
  openEnquiry: (product?: string) => void
  isDark: boolean
}

const EnquiryContext = createContext<EnquiryContextValue>({
  openEnquiry: () => {},
  isDark: true,
})

export function useEnquiry() {
  return useContext(EnquiryContext)
}

export function SiteShell() {
  const route = useHashRoute()
  const dark = isDarkPage(route.page)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [enquiryProduct, setEnquiryProduct] = useState<string | undefined>(undefined)

  const openEnquiry = useCallback((product?: string) => {
    setEnquiryProduct(product)
    setEnquiryOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => setEnquiryOpen(false), [])

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'products':
        return <ProductsPage />
      case 'product':
        return <ProductDetailPage slug={route.productSlug} />
      case 'manufacturing':
        return <ManufacturingPage />
      case 'white-label':
        return <WhiteLabelPage />
      case 'quality':
        return <QualityPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <EnquiryContext.Provider value={{ openEnquiry, isDark: dark }}>
      <div
        className={`flex min-h-screen flex-col transition-colors duration-500 ${
          dark ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAFAF7] text-[#1A2E2E]'
        }`}
      >
        <Navbar currentPage={route.page} isDark={dark} />

        <main className="flex-1 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={route.page + (route.productSlug ?? '')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <EnquiryModal
          key={enquiryProduct ?? 'default'}
          open={enquiryOpen}
          onClose={closeEnquiry}
          prefillProduct={enquiryProduct}
          variant={dark ? 'dark' : 'light'}
        />
      </div>
    </EnquiryContext.Provider>
  )
}
