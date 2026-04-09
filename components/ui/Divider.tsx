interface Props {
  className?: string
}

export function Divider({ className = '' }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-amber/20" />
      <span className="text-amber/40 text-xs">·</span>
      <div className="flex-1 h-px bg-amber/20" />
    </div>
  )
}
