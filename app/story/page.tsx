'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { IMAGES } from '@/lib/placeholder-images'
import { ReservationCTA } from '@/components/home/ReservationCTA'

export default function StoryPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Part 1 — Who We Are */}
      <section className="bg-parchment pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 items-center">
            <div className="md:w-1/2">
              <AnimatedSection>
                <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
                  Our Story
                </span>
                <h1 className="font-display italic text-4xl md:text-6xl text-espresso leading-tight mb-8">
                  A table set<br />
                  with intention.
                </h1>
                <div className="font-body font-light text-text-dim leading-relaxed max-w-[65ch] space-y-6">
                  <p>
                    Ta Pinakia was born from a simple conviction: that the best meals
                    happen around shared plates, unhurried time, and people you love.
                  </p>
                  <p>
                    In the heart of Paphos Old Town, one floor above the noise of
                    Kennedy Square, we have built a space that honours the ancient
                    Greek tradition of meze — not as a concept, but as a way of dining.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection delay={0.15}>
                <Image
                  src={IMAGES.storyHero.src}
                  alt={IMAGES.storyHero.alt}
                  width={IMAGES.storyHero.width}
                  height={IMAGES.storyHero.height}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 — From Our Land */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
              From Our Land
            </span>
            <h2 className="font-display italic text-4xl md:text-5xl text-text-warm leading-tight mb-6">
              What we bring<br />
              to the table.
            </h2>
            <p className="font-body font-light text-text-warm/80 leading-relaxed max-w-xl mb-16">
              We don&apos;t just cook traditional food.
              We source it the way it has always been sourced in Cyprus —
              from the land, made by hand.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src={IMAGES.oliveOil.src}
                  alt={IMAGES.oliveOil.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="border-l-2 border-amber pl-6">
                <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-amber mb-4">
                  Our Olive Oil
                </h3>
                <p className="font-body font-light text-text-warm/80 leading-relaxed">
                  We press our own olive oil. Cold-pressed from our own trees.
                  It arrives at your table unfiltered, fresh, and tasting of the island.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src={IMAGES.seasonalKitchen.src}
                  alt={IMAGES.seasonalKitchen.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="border-l-2 border-olive pl-6">
                <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-olive-light mb-4">
                  The Seasonal Kitchen
                </h3>
                <p className="font-body font-light text-text-warm/80 leading-relaxed">
                  Our menu follows the market, not a calendar.
                  What&apos;s fresh today shapes what arrives at your table tonight.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src={IMAGES.madeByHand.src}
                  alt={IMAGES.madeByHand.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="border-l-2 border-terracotta pl-6">
                <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-terracotta mb-4">
                  Made by Hand
                </h3>
                <p className="font-body font-light text-text-warm/80 leading-relaxed">
                  No shortcuts. Bread baked in-house daily.
                  Meats slow-cooked. Pastries built layer by layer.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </motion.div>
  )
}
