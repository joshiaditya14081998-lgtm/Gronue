'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react'
import AboutSection from '@/components/AboutSection'
import FeaturedVideoSection from '@/components/FeaturedVideoSection'
import PhilosophySection from '@/components/PhilosophySection'
import ServicesSection from '@/components/ServicesSection'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

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

    const handleCanPlay = () => {
      startPlayback()
    }

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

    // If the video is already ready (e.g. cached), kick off playback immediately.
    if (video.readyState >= 3) {
      startPlayback()
    }

    return () => {
      if (fadeFrame !== null) cancelAnimationFrame(fadeFrame)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black">
      {/* SECTION 1 -- HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          style={{ opacity: 0 }}
          muted
          autoPlay
          playsInline
          preload="auto"
          src={HERO_VIDEO}
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-white" />
              <span className="text-lg font-semibold text-white">Asme</span>
              <div className="ml-8 hidden gap-8 md:flex">
                <a
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-white transition-opacity hover:opacity-80">
                Sign Up
              </button>
              <button className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center">
          <h1
            className="whitespace-nowrap text-7xl tracking-tight text-white md:text-8xl lg:text-9xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Know it then <em className="italic">all</em>.
          </h1>

          <div className="mt-8 w-full max-w-xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-full bg-white p-3 text-black transition-transform hover:scale-105"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <p className="mt-6 max-w-md px-4 text-sm leading-relaxed text-white">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>

          <button className="liquid-glass mt-8 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5">
            Manifesto
          </button>
        </div>

        {/* Social icons */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          <a
            href="#"
            aria-label="Instagram"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Website"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Globe size={20} />
          </a>
        </div>
      </section>

      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  )
}
