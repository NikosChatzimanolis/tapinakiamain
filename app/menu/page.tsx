'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MENU } from '@/lib/menu-data'
import { MenuCategory } from '@/components/menu/MenuCategory'
import { ReservationCTA } from '@/components/home/ReservationCTA'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    MENU.forEach((cat) => {
      const el = document.getElementById(cat.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <section className="bg-parchment pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted block mb-4">
              The Menu
            </span>
            <h1 className="font-display italic text-4xl md:text-6xl text-espresso leading-tight">
              What arrives<br />
              at the table.
            </h1>
            <p className="mt-6 font-body font-light text-text-dim leading-relaxed">
              All dishes are designed to share. Meze portions serve 2–4.
            </p>
            <Link
              href="/find-us"
              className="inline-block mt-4 font-body text-sm text-amber hover:text-amber-muted transition-colors"
            >
              &rarr; Reserve a Table
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav className="sticky top-20 z-30 bg-parchment backdrop-blur-md border-b border-black/8">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-6 py-4 min-w-max">
              {MENU.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`font-body text-sm tracking-wide whitespace-nowrap transition-colors pb-1 border-b-2 min-h-[48px] flex items-center ${
                    activeCategory === cat.id
                      ? 'text-amber border-amber'
                      : 'text-text-dim border-transparent hover:text-espresso'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          {/* Fade hint on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-parchment to-transparent pointer-events-none md:hidden" />
        </div>
      </nav>

      {/* Menu categories */}
      {MENU.map((category, i) => (
        <MenuCategory
          key={category.id}
          category={category}
          dark={i % 2 === 1}
        />
      ))}

      <ReservationCTA />
    </motion.div>
  )
}
