// src/components/sections/hero/HeroVideo.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { asset } from '@/lib/asset'

const HERO_VIDEO = asset('/assets/video/manufacturing-plant.mp4')

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let fadeFrame: number | null = null
    let isFadingOut = false

    const animateOpacity = (
      from: number,
      to: number,
      duration: number,
      onComplete?: () => void,
    ) => {
      if (fadeFrame !== null) cancelAnimationFrame(fadeFrame)
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const value = from + (to - from) * progress
        video.style.opacity = String(value)
        if (progress < 1) {
          fadeFrame = requestAnimationFrame(step)
        } else {
          fadeFrame = null
          onComplete?.()
        }
      }
      fadeFrame = requestAnimationFrame(step)
    }

    const startPlayback = () => {
      video
        .play()
        .then(() => animateOpacity(0, 1, 500))
        .catch(() => {})
    }

    const handleCanPlay = () => startPlayback()

    const handleTimeUpdate = () => {
      if (!isFinite(video.duration)) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55 && !isFadingOut) {
        isFadingOut = true
        const current = parseFloat(video.style.opacity || '1')
        animateOpacity(current, 0, 500)
      }
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      isFadingOut = false
      window.setTimeout(() => {
        video.currentTime = 0
        video
          .play()
          .then(() => animateOpacity(0, 1, 500))
          .catch(() => {})
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    if (video.readyState >= 3) startPlayback()

    return () => {
      if (fadeFrame !== null) cancelAnimationFrame(fadeFrame)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted && video.paused) {
      video.play().catch(() => {})
    }
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        src={HERO_VIDEO}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Sound toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="liquid-glass absolute bottom-6 right-6 z-20 rounded-full p-3 text-white/80 transition-colors hover:text-white"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  )
}
