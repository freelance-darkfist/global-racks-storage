import { cn } from '@/lib/utils'

/** Decorative dot matrix, echoing the catalogue artwork. */
export function DotGrid({
  className,
  tone = 'navy',
}: {
  className?: string
  tone?: 'navy' | 'brand' | 'white'
}) {
  const color =
    tone === 'brand' ? 'bg-brand-500' : tone === 'white' ? 'bg-white' : 'bg-navy-900'
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none grid grid-cols-6 gap-2 opacity-25', className)}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className={cn('size-1.5 rounded-full', color)} />
      ))}
    </div>
  )
}
