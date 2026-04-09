'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { RESTAURANT } from '@/lib/restaurant-info'

export function SocialProof() {
  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <p className="font-display text-7xl md:text-8xl text-amber">
            {RESTAURANT.tripadvisor.rating}
          </p>
          <p className="font-body text-sm text-text-muted mt-3 tracking-wide">
            out of 5 · {RESTAURANT.tripadvisor.reviewCount} reviews · TripAdvisor
          </p>
          <p className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted mt-2">
            {RESTAURANT.tripadvisor.rank} of {RESTAURANT.tripadvisor.totalRestaurants} restaurants
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <blockquote className="mt-14 font-display italic text-3xl md:text-5xl text-text-warm leading-tight">
            &ldquo;A little piece of paradise<br />
            in the heart of Paphos.&rdquo;
          </blockquote>
          <p className="mt-6 font-body text-sm text-text-muted">
            — Cyprus Mail, 2025
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
