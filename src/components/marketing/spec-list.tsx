import { cn } from '@/lib/utils'

/** Catalogue-style bullet list with brand dots. */
export function SpecList({
  items,
  className,
  tone = 'dark',
}: {
  items: string[]
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'mt-2 size-2 shrink-0 rounded-full',
              tone === 'light' ? 'bg-brand-400' : 'bg-brand-500',
            )}
          />
          <span
            className={cn(
              'text-sm leading-relaxed sm:text-base',
              tone === 'light' ? 'text-navy-100' : 'text-steel-700',
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
