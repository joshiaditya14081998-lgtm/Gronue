// src/components/shell/FloatingWhatsApp.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company } from '@/data/company'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={company.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 md:bottom-6 md:right-6"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle size={26} className="relative text-white" fill="white" />
    </motion.a>
  )
}
