import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { productCategories, products } from '@/content/products'
import { navLinks, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const inProducts = pathname.startsWith('/products')

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-900 text-navy-100 md:block">
        <div className="wrap flex items-center justify-between py-1.5 text-xs">
          <p className="font-medium tracking-wide">{site.positioning}</p>
          <div className="flex items-center gap-5">
            {site.contact.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="transition-colors hover:text-brand-300"
              >
                {phone.display}
              </a>
            ))}
            <a
              href={site.contact.emailHref}
              className="hidden transition-colors hover:text-brand-300 lg:inline"
            >
              {site.contact.emailDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap flex h-18 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img
            src="/images/logo.jpg"
            alt=""
            width={132}
            height={88}
            className="h-12 w-auto rounded-md object-contain sm:h-14"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-extrabold tracking-tight text-navy-950">
              GLOBAL<span className="text-brand-500">RACKS</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-steel-500 uppercase">
              Storage Systems Pvt. Ltd.
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.to === '/products' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to={link.to}
                  className={cn(
                    'flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                    inProducts
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-navy-900 hover:bg-navy-900/5',
                  )}
                  aria-expanded={productsOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn('size-4 transition-transform', productsOpen && 'rotate-180')}
                  />
                </Link>
                {productsOpen ? (
                  <div className="absolute top-full left-1/2 w-[36rem] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-lift">
                      {productCategories.map((category) => (
                        <div key={category.name}>
                          <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-steel-500 uppercase">
                            {category.name}
                          </p>
                          <ul className="space-y-1">
                            {products
                              .filter((p) => p.category === category.name)
                              .map((p) => (
                                <li key={p.slug}>
                                  <Link
                                    to="/products/$slug"
                                    params={{ slug: p.slug }}
                                    onClick={() => setProductsOpen(false)}
                                    className="block rounded-md px-2 py-1 text-sm font-medium text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
                                  >
                                    {p.menuLabel}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        className="col-span-2 mt-1 rounded-xl bg-navy-50 px-4 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-100"
                      >
                        View all products and systems
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                  pathname === link.to
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-navy-900 hover:bg-navy-900/5',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'default' }),
              'hidden lg:inline-flex',
            )}
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'lg:hidden')}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-navy-900/10 bg-white lg:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm font-semibold',
                  pathname === link.to || (link.to === '/products' && inProducts)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-navy-900 hover:bg-navy-900/5',
                )}
              >
                {link.label}
              </Link>
            ))}
            <details className="group rounded-lg px-3 py-2.5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-navy-900">
                All products
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1 border-l-2 border-brand-200 pl-4">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-steel-700 hover:text-brand-600"
                    >
                      {p.menuLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={cn(buttonVariants({ variant: 'default' }), 'mt-2')}
            >
              Get a Quote
            </Link>
            {site.contact.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center justify-center gap-2 py-1.5 text-sm font-semibold text-navy-900"
              >
                <Phone className="size-4 text-brand-500" />
                {phone.display}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
