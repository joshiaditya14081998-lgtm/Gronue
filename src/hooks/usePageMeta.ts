// src/hooks/usePageMeta.ts
'use client'

import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
}

const SITE_NAME = 'Groneu Healthcare'

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
    document.title = fullTitle

    setMetaTag('description', description)
    setMetaTag('og:title', fullTitle, 'property')
    setMetaTag('og:description', description, 'property')
    setMetaTag('og:site_name', SITE_NAME, 'property')
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:card', 'summary_large_image')
  }, [title, description])
}
