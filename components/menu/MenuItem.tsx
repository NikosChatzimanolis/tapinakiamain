import type { MenuItem as MenuItemType } from '@/lib/menu-data'

interface Props {
  item: MenuItemType
  dark?: boolean
}

export function MenuItem({ item, dark = false }: Props) {
  const isSignature = item.tags?.includes('signature')
  const isVegan = item.tags?.includes('vegan')
  const isFish = item.tags?.includes('fish')

  return (
    <div className={`py-5 border-b ${dark ? 'border-white/8' : 'border-black/8'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {isSignature && (
              <span className="text-amber text-xs">·</span>
            )}
            <h3 className={`font-display text-xl ${dark ? 'text-text-warm' : 'text-espresso'}`}>
              {item.name}
            </h3>
            {item.nameGr && (
              <span className={`font-display italic text-sm ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
                {item.nameGr}
              </span>
            )}
            {isSignature && (
              <span className="font-body tracking-[0.3em] text-[10px] uppercase text-amber">
                Signature
              </span>
            )}
          </div>
          {item.description && (
            <p className={`font-body text-sm font-light mt-1 ${dark ? 'text-text-muted' : 'text-text-dim'}`}>
              {item.description}
            </p>
          )}
          <div className="flex items-center gap-3 mt-2">
            {isVegan && (
              <span className="inline-flex items-center gap-1 text-olive text-xs font-body">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                </svg>
                vegan
              </span>
            )}
            {isFish && (
              <span className="inline-flex items-center gap-1 text-olive text-xs font-body">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 20L12.76 17C9.5 16.79 6.59 15.4 5.75 14.5C8.37 12.6 10 9.73 10 7C10 5.82 9.78 4.69 9.38 3.66L12 2L14.62 3.66C14.22 4.69 14 5.82 14 7C14 9.73 15.63 12.6 18.25 14.5C17.41 15.4 14.5 16.79 11.24 17L12 20Z"/>
                </svg>
                fish
              </span>
            )}
          </div>
        </div>
        <span className={`font-body font-medium text-amber shrink-0 pt-1`}>
          &euro;{item.price.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
