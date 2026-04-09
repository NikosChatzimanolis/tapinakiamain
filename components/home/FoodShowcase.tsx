'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { IMAGES } from '@/lib/placeholder-images'

const DISH_NAMES = [
  'Kolokithokeftedes — Courgette Fritters',
  'Keftedakia — Meatballs in Tomato Sauce',
  'Tigania Kotopoulo — Chicken with Peppers',
  'Manitaria — Sautéed Mushrooms',
  'Meat Meze',
  'Homemade Dips',
]

const DISH_CATEGORIES = [
  'Small Plates',
  'Small Plates',
  'Signatures',
  'Small Plates',
  'Meze',
  'Small Plates',
]

function DishImage({ image, name, category, className }: {
  image: (typeof IMAGES.dishes)[number]
  name: string
  category: string
  className?: string
}) {
  const [shown, setShown] = useState(false)

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => setShown((prev) => !prev)}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <AnimatePresence>
        {shown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-espresso/60 flex items-end p-6"
          >
            <div>
              <p className="font-body tracking-[0.3em] text-[10px] uppercase text-amber mb-1">
                {category}
              </p>
              <p className="font-display text-xl text-text-warm">{name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FoodShowcase() {
  const dishes = IMAGES.dishes

  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Row 1 */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="md:w-2/3">
              <DishImage
                image={dishes[0]}
                name={DISH_NAMES[0]}
                category={DISH_CATEGORIES[0]}
                className="aspect-[4/3] h-full"
              />
            </div>
            <div className="md:w-1/3 flex flex-col gap-3">
              <DishImage
                image={dishes[1]}
                name={DISH_NAMES[1]}
                category={DISH_CATEGORIES[1]}
                className="aspect-square flex-1"
              />
              <DishImage
                image={dishes[2]}
                name={DISH_NAMES[2]}
                category={DISH_CATEGORIES[2]}
                className="aspect-square flex-1"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Text band */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-6 py-10">
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted">
              The Dishes
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted">
              Meze · Small Plates · Shared
            </span>
          </div>
        </AnimatedSection>

        {/* Row 2 */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex flex-col gap-3">
              <DishImage
                image={dishes[3]}
                name={DISH_NAMES[3]}
                category={DISH_CATEGORIES[3]}
                className="aspect-[4/3] flex-1"
              />
              <DishImage
                image={dishes[4]}
                name={DISH_NAMES[4]}
                category={DISH_CATEGORIES[4]}
                className="aspect-[4/3] flex-1"
              />
            </div>
            <DishImage
              image={dishes[5]}
              name={DISH_NAMES[5]}
              category={DISH_CATEGORIES[5]}
              className="md:col-span-2 aspect-[4/3]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
