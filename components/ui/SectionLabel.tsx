interface Props {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <span className={`font-body tracking-[0.3em] text-[11px] uppercase text-text-muted ${className}`}>
      {children}
    </span>
  )
}
