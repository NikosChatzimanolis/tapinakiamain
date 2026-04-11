import type { MezeDish } from '@/lib/menu-data'

interface Props {
  item: MezeDish
  dark?: boolean
}

export function MenuItem({ item, dark = false }: Props) {
  const hasAllergens = item.allergens && item.allergens.length > 0

  return (
    <div className={`py-4 border-b ${dark ? 'border-white/8' : 'border-black/8'} last:border-b-0`}>
      <div className="flex items-start gap-3">
        {/* Dish number */}
        <span className={`font-body text-sm tabular-nums shrink-0 w-6 text-right pt-0.5 ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
          {item.number}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className={`font-display text-lg ${dark ? 'text-text-warm' : 'text-espresso'}`}>
              {item.name}
            </h3>
            {item.nameGr && (
              <span className={`font-display italic text-sm ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
                {item.nameGr}
              </span>
            )}
            {/* Allergen numbers */}
            {hasAllergens && (
              <span className="font-body text-[11px] text-amber font-medium tracking-wide">
                {item.allergens!.join(',')}
              </span>
            )}
          </div>
          {item.description && (
            <p className={`font-body text-sm font-light mt-0.5 ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
