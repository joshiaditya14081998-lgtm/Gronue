// src/hooks/useHashRoute.ts
'use client'

import { useEffect, useState } from 'react'
import { parseHash, type RouteState } from '@/lib/router'

export function useHashRoute(): RouteState {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === 'undefined') return { page: 'home' }
    return parseHash(window.location.hash)
  })

  useEffect(() => {
    const handleChange = () => {
      setRoute(parseHash(window.location.hash))
    }
    window.addEventListener('popstate', handleChange)
    window.addEventListener('hashchange', handleChange)
    return () => {
      window.removeEventListener('popstate', handleChange)
      window.removeEventListener('hashchange', handleChange)
    }
  }, [])

  return route
}
