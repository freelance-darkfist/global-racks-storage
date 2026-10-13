import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/content/products'
import { ProductIcon } from '@/components/marketing/product-icon'
import { cn } from '@/lib/utils'

export function ProductCard({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-navy-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.imageAlt ?? product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-900 to-navy-700">
            <ProductIcon
              name={product.icon}
              className="size-16 text-brand-400 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wide text-navy-900 uppercase shadow-xs">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-bold text-navy-950 group-hover:text-brand-600">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-steel-600">{product.tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-600">
          View details
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
