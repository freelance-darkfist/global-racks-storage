import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { ProductIcon } from '@/components/marketing/product-icon'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SpecList } from '@/components/marketing/spec-list'
import { buttonVariants } from '@/components/ui/button'
import { getProduct, products } from '@/content/products'
import { site } from '@/content/site'
import { breadcrumbLd, productLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = getProduct(params.slug)
    if (!product) throw notFound()
    return { product }
  },
  head: ({ params }) => {
    const product = getProduct(params.slug)
    return seoMeta({
      title: `${product?.seoTitle ?? 'Product'} | ${site.name}`,
      description: product?.seoDescription ?? site.description,
      path: `/products/${params.slug}`,
      image: product?.image,
      imageAlt: product?.imageAlt,
    })
  },
  component: ProductDetail,
})

function ProductDetail() {
  const { product } = Route.useLoaderData()
  const index = products.findIndex((p) => p.slug === product.slug)
  const prev = products[(index - 1 + products.length) % products.length] ?? product
  const next = products[(index + 1) % products.length] ?? product

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        lead={product.tagline}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: product.name },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2">
          {product.image ? (
            <ClipFrame
              src={product.image}
              alt={product.imageAlt ?? product.name}
              priority
              imgClassName="aspect-4/4.2"
            />
          ) : (
            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700">
              <ProductIcon name={product.icon} className="size-28 text-brand-400" />
              <span
                aria-hidden="true"
                className="absolute -right-10 -bottom-10 size-40 rounded-full bg-brand-500/20 blur-2xl"
              />
            </div>
          )}
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={product.name}
              lead={product.description}
            />
            {product.extraParagraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-steel-600">
                {paragraph}
              </p>
            ))}
            <h2 className="mt-10 font-display text-xl font-bold text-navy-950">
              {product.highlightsTitle}
            </h2>
            <SpecList items={product.highlights} className="mt-4" />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className={buttonVariants({ variant: 'default' })}>
                Request a quote
                <ArrowRight />
              </Link>
              <Link to="/products" className={buttonVariants({ variant: 'outline' })}>
                All products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Applications"
            title="Where this system works hardest"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((application) => (
              <li
                key={application}
                className="rounded-2xl border border-navy-900/10 bg-white p-5 text-sm font-medium text-steel-700 shadow-card"
              >
                {application}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="Product pagination" className="border-t border-navy-900/10">
        <div className="wrap flex items-center justify-between gap-4 py-8">
          <Link
            to="/products/$slug"
            params={{ slug: prev.slug }}
            className="group flex items-center gap-3 text-sm font-semibold text-navy-900 hover:text-brand-600"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs font-medium text-steel-500">Previous</span>
              {prev.menuLabel}
            </span>
          </Link>
          <Link
            to="/products/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center gap-3 text-right text-sm font-semibold text-navy-900 hover:text-brand-600"
          >
            <span>
              <span className="block text-xs font-medium text-steel-500">Next</span>
              {next.menuLabel}
            </span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      <CtaBand
        title={`Discuss ${product.name} with our engineers`}
        lead="Share your load profiles, building heights and throughput targets, and we'll return a layout, loading plan and quotation."
      />
      <JsonLd
        data={[
          productLd(product),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
    </>
  )
}
