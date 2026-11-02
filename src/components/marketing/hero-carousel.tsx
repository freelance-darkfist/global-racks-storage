import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { heroSlides } from '@/content/hero'
import { cn } from '@/lib/utils'

/** Autoplay dwell for each slide, in milliseconds. */
const AUTOPLAY_MS = 6500

type HeroCarouselProps = {
  /** Hero copy laid over the full-bleed slides. */
  children: ReactNode
  className?: string
}

/**
 * Full-bleed hero carousel, the featured storage systems fill the entire hero
 * behind the headline, with the active slide's product caption docked along the
 * bottom edge.
 *
 * The carousel is deliberately button-free: slides advance on their own every
 * `AUTOPLAY_MS`, and the rotation keeps running while the page is visible (there
 * is no hover, focus or reduced-motion hold, the hero covers most of the
 * viewport, so a pointer resting anywhere on it would otherwise stall the
 * slideshow). Arrow keys and touch swipes still move between slides, and the
 * slideshow only waits while the tab is hidden.
 */
export function HeroCarousel({ children, className }: HeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const [tabHidden, setTabHidden] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const count = heroSlides.length
  const current = heroSlides[index] ?? heroSlides[0]

  useEffect(() => {
    const sync = () => setTabHidden(document.visibilityState === 'hidden')
    sync()
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [])

  // Timer-driven autoplay: each tick schedules the next advance, so a manual
  // slide change (keyboard/swipe) restarts the dwell instead of double-stepping.
  useEffect(() => {
    if (tabHidden) return
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [count, index, tabHidden])

  if (!current) return null

  const step = (delta: number) => setIndex((i) => (i + delta + count) % count)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured storage systems"
      className={cn(
        'relative isolate flex min-h-[30rem] flex-col overflow-hidden bg-navy-950',
        className,
      )}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current
        touchStartX.current = null
        if (start === null) return
        const delta = (event.changedTouches[0]?.clientX ?? start) - start
        if (Math.abs(delta) > 40) step(delta < 0 ? 1 : -1)
      }}
    >
      {/* Slides + scrims, full-bleed background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, slideIndex) => {
          const isActive = slideIndex === index
          return (
            <div
              key={slide.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${count}`}
              aria-hidden={!isActive}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none',
                isActive ? 'opacity-100' : 'opacity-0',
              )}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={slideIndex === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={slideIndex === 0 ? 'high' : undefined}
                className={cn(
                  'size-full object-cover transition-transform duration-[1400ms] ease-out motion-reduce:transition-none',
                  isActive ? 'scale-100' : 'scale-105',
                )}
              />
            </div>
          )
        })}
        <span aria-hidden="true" className="absolute inset-0 bg-navy-950/75 lg:hidden" />
        <span
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-navy-950/90 from-10% via-navy-950/80 via-60% to-navy-950/15 lg:block"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950 via-navy-950/55 to-transparent"
        />
      </div>
      {/* Hero copy + slide caption */}
      <div className="wrap relative flex flex-1 flex-col pt-12 pb-8 sm:pt-14 lg:pt-14 lg:pb-8">
        <div className="flex-1">{children}</div>

        <div className="mt-9 border-t border-white/20 pt-5 sm:mt-10">
          <Link
            to="/products/$slug"
            params={{ slug: current.slug }}
            className="group inline-flex min-w-0 items-center gap-3 rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
          >
            <span className="eyebrow shrink-0 text-brand-300">{current.eyebrow}</span>
            <span className="hidden min-w-0 truncate text-sm font-medium text-white/70 transition-colors group-hover:text-white md:inline">
              {current.title}
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
      <span aria-live="off" aria-atomic="true" className="sr-only">
        Slide {index + 1} of {count}: {current.eyebrow}
      </span>
    </div>
  )
}