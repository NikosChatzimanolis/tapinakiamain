'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { MenuItem } from '@/components/menu/MenuItem'
import type { MenuCategory as MenuCategoryType } from '@/lib/menu-data'

interface Props {
  category: MenuCategoryType
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
          <h2 className={`font-display italic text-3xl md:text-4xl mb-2 ${dark ? 'text-text-warm' : 'text-espresso'}`}>
            {category.label}
          </h2>
          {category.description && (
            <p className={`font-body text-sm font-light mb-10 ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
              {category.description}
            </p>
          )}
          {!category.description && <div className="mb-10" />}
        </AnimatedSection>

        <div className="flex flex-col">
          {category.items.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <MenuItem item={item} dark={dark} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
