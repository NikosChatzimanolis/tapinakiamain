'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { IMAGES } from '@/lib/placeholder-images'
import { RESTAURANT } from '@/lib/restaurant-info'

const CAPTIONS = [
  'Grilled Halloumi',
  'Loukoumades',
  'Veal Cheeks Orzo',
  'Greek Salad',
  'The Interior',
  'The Fireplace',
  'Table Details',
  'The Blue Doors',
  'Zivania',
  'Bread & Oil',
  'Live Music',
  'The Terrace View',
]

const LABELS: Record<number, string> = {
  0: 'Food',
  4: 'Atmosphere',
  8: 'The Terrace',
  10: 'Live Music',
}

function GalleryImage({ image, caption, index }: {
  image: (typeof IMAGES.gallery)[number]
  caption: string
  index: number
}) {
  const [shown, setShown] = useState(false)

  return (
    <div
      className="break-inside-avoid mb-3 relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => setShown((prev) => !prev)}
    >
      <AnimatedSection delay={index * 0.05}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <AnimatePresence>
          {shown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-espresso/60 flex items-end p-4"
            >
              <p className="font-display text-lg text-text-warm">{caption}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <section className="bg-espresso pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
              The Gallery
            </span>
            <h1 className="font-display italic text-4xl md:text-6xl text-text-warm leading-tight">
              What a meal<br />
              looks like here.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-espresso pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-2 md:columns-3 gap-3">
            {IMAGES.gallery.map((image, i) => (
              <div key={i}>
                {LABELS[i] && (
                  <p className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted mb-3 mt-3 first:mt-0">
                    {LABELS[i]}
                  </p>
                )}
                <GalleryImage image={image} caption={CAPTIONS[i]} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-amber py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="font-display italic text-2xl md:text-3xl text-espresso mb-4">
              Follow our table on Instagram.
            </p>
            <a
              href={RESTAURANT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-espresso text-lg hover:opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @tapinakia
            </a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
