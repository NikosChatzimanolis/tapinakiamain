'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function IntroSection() {
  return (
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Left - large quote */}
          <div className="md:w-[58%] md:pr-16">
            <AnimatedSection>
              <blockquote className="font-display italic text-3xl md:text-5xl lg:text-[60px] leading-[1.15] text-espresso tracking-tight">
                &ldquo;Richness lived through<br />
                the purity of<br />
                traditional ingredients.&rdquo;
              </blockquote>
            </AnimatedSection>
          </div>

          {/* Vertical divider (desktop) */}
          <div className="hidden md:block w-px bg-amber/40" />

          {/* Horizontal divider (mobile) */}
          <div className="md:hidden h-px bg-amber/40" />

          {/* Right - detail blocks */}
          <div className="md:w-[42%] md:pl-16 flex flex-col gap-10">
            <AnimatedSection delay={0.1}>
              <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-amber-muted mb-3">
                Our Name
              </h3>
              <p className="font-body font-light text-text-dim leading-relaxed">
                Ta Pinakia — Ancient Greek for &ldquo;Small Plates&rdquo;
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-amber-muted mb-3">
                Our Philosophy
              </h3>
              <p className="font-body font-light text-text-dim leading-relaxed">
                Every dish arrives to share. Every table becomes a gathering.
                Meze is not a meal. It is a ritual.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-amber-muted mb-3">
                Our Place
              </h3>
              <p className="font-body font-light text-text-dim leading-relaxed">
                First floor, Kennedy Square.<br />
                Easy to miss. Impossible to forget.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
