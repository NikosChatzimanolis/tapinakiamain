'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { MenuItem } from '@/components/menu/MenuItem'
import type { MezeMenu } from '@/lib/menu-data'

interface Props {
  category: MezeMenu
  dark?: boolean
}

export function MenuCategory({ category, dark = false }: Props) {
  return (
    <section
      id={category.id}
      className={`py-16 md:py-20 scroll-mt-40 ${dark ? 'bg-espresso' : 'bg-parchment'}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          {/* Meze header */}
          <div className="mb-10">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className={`font-display italic text-3xl md:text-4xl ${dark ? 'text-text-warm' : 'text-espresso'}`}>
                {category.label}
              </h2>
              <span className={`font-display italic text-lg ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
                {category.labelGr}
              </span>
            </div>
            <div className={`flex items-center gap-3 mt-3 font-body text-sm ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
              <span className="text-amber font-medium text-lg">
                &euro;{category.price.toFixed(2)}
              </span>
              <span>per person</span>
              <span className={`${dark ? 'text-white/20' : 'text-black/20'}`}>·</span>
              <span>Minimum {category.minPersons} persons</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Dish list */}
        <div className="flex flex-col">
          {category.items.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.04}>
              <MenuItem item={item} dark={dark} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
