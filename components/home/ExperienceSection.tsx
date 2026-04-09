'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { IMAGES } from '@/lib/placeholder-images'

export function ExperienceSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Winter panel */}
        <div className="relative md:w-1/2 bg-espresso py-20 px-8 md:px-16">
          <AnimatedSection>
            <div className="relative aspect-[3/2] mb-10 overflow-hidden">
              <Image
                src={IMAGES.winterMood.src}
                alt={IMAGES.winterMood.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
              October — April
            </span>
            <h3 className="font-display italic text-3xl md:text-4xl text-text-warm mb-4">
              The Fireplace
            </h3>
            <p className="font-body font-light text-text-warm/70 leading-relaxed max-w-sm">
              Long evenings. Warm plates.<br />
              Zivania poured slowly.<br />
              Live music on Wednesdays and Sundays.
            </p>
          </AnimatedSection>
        </div>

        {/* Center divider (desktop) */}
        <div className="hidden md:flex flex-col items-center w-px bg-amber/30 relative">
          <span className="absolute top-1/2 -translate-y-1/2 text-amber/50 text-sm">·</span>
        </div>

        {/* Horizontal divider (mobile) */}
        <div className="md:hidden h-px bg-amber/30 mx-8" />

        {/* Summer panel */}
        <div className="relative md:w-1/2 bg-parchment py-20 px-8 md:px-16">
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[3/2] mb-10 overflow-hidden">
              <Image
                src={IMAGES.summerMood.src}
                alt={IMAGES.summerMood.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
              May — September
            </span>
            <h3 className="font-display italic text-3xl md:text-4xl text-espresso mb-4">
              The Terrace
            </h3>
            <p className="font-body font-light text-text-dim leading-relaxed max-w-sm">
              Blue doors open. The breeze rolls in.<br />
              Views over the old town toward the sea.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
