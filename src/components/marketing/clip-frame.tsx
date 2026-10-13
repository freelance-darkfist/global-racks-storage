import { cn } from '@/lib/utils'

const clip =
  '[clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_2.5rem,100%_100%,2.5rem_100%,0_calc(100%-2.5rem))]'

/**
 * Catalogue-style photo frame: chamfered corners with an offset brand-orange
 * panel behind, mirroring the printed catalogue artwork.
 */
export function ClipFrame({
  src,
  alt,
  className,
  imgClassName,
  accent = 'brand',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  accent?: 'brand' | 'navy'
  priority?: boolean
}) {
  return (
    <div className={cn('relative', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'absolute -top-3 -right-3 h-full w-full translate-x-3 -translate-y-1',
          accent === 'brand' ? 'bg-brand-500' : 'bg-navy-800',
          clip,
        )}
      />
      <div className={cn('relative overflow-hidden bg-white p-2 shadow-lift', clip)}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn('h-full w-full object-cover', clip, imgClassName)}
        />
      </div>
    </div>
  )
}
