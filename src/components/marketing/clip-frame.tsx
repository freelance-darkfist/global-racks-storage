import { cn } from '@/lib/utils'

/**
 * Chamfered-corner clip path shared by the catalogue-style frames, including
 * the homepage hero carousel plate.
 */
export const chamferClip =
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
          'absolute -top-2 -right-2 h-full w-full translate-x-2 -translate-y-1 sm:-top-3 sm:-right-3 sm:translate-x-3',
          accent === 'brand' ? 'bg-brand-500' : 'bg-navy-800',
          chamferClip,
        )}
      />
      <div className={cn('relative overflow-hidden bg-white p-2 shadow-lift', chamferClip)}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn('h-full w-full object-cover', chamferClip, imgClassName)}
        />
      </div>
    </div>
  )
}
