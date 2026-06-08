'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IMAGES } from '@/lib/placeholder-images'
import { RESTAURANT } from '@/lib/restaurant-info'

export function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-espresso/25" aria-hidden />

      {/* Content pinned to bottom */}
      <div className="absolute inset-x-0 bottom-4 md:bottom-5 z-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-5 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-body tracking-[0.3em] text-[11px] uppercase text-text-warm/70"
          >
            Paphos · Kennedy Square
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-text-warm/30 text-text-warm font-body text-sm tracking-wide hover:border-amber hover:text-amber transition-colors min-h-[48px]"
            >
              {RESTAURANT.phoneDisplay}
            </a>
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber border border-amber text-espresso font-body text-sm tracking-wide font-medium hover:bg-amber-muted hover:border-amber-muted transition-colors min-h-[48px]"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
