'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IMAGES } from '@/lib/placeholder-images'
import { RESTAURANT } from '@/lib/restaurant-info'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[150px] -bottom-[150px]">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-espresso/25" aria-hidden />

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body tracking-[0.3em] text-[11px] uppercase text-text-warm/70 mb-8"
        >
          Paphos · Kennedy Square
        </motion.span>

        <div className="flex flex-col items-center gap-10">
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-text-warm/40 origin-top"
          />
        </motion.div>
      </div>
    </section>
  )
}
