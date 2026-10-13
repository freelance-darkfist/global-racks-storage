import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { JsonLd } from '@/components/marketing/json-ld'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/content/site'
import { localBusinessLd, organizationLd, seoMeta, websiteLd } from '@/lib/seo'
import appCss from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#063062' },
      ...seoMeta({
        title: `${site.name} | ${site.tagline}`,
        description: site.description,
        path: '/',
      }).meta,
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpg' },
      { rel: 'apple-touch-icon', href: '/images/logo.jpg' },
      { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFoundDocument,
})

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
        <JsonLd data={[organizationLd(), websiteLd(), localBusinessLd()]} />
        <Scripts />
      </body>
    </html>
  )
}

function NotFoundDocument() {
  return (
    <section className="wrap flex flex-col items-center gap-6 py-24 text-center">
      <p className="eyebrow text-brand-600">Error 404</p>
      <h1 className="font-display text-4xl font-extrabold text-navy-950 sm:text-5xl">
        This aisle doesn&apos;t exist
      </h1>
      <p className="max-w-md text-steel-600">
        The page you&apos;re looking for was moved or never stocked here. Head back to the
        warehouse floor or browse our storage systems.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className={buttonVariants({ variant: 'default' })}>
          Back to home
        </Link>
        <Link to="/products" className={buttonVariants({ variant: 'outline' })}>
          Browse products
        </Link>
      </div>
    </section>
  )
}
