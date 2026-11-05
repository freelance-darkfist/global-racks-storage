import { Link, createFileRoute } from '@tanstack/react-router'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { ProductIcon } from '@/components/marketing/product-icon'
import { getProduct } from '@/content/products'
import { industries, industriesIntro } from '@/content/industries'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/industries')({
  head: () =>
    seoMeta({
      title: `Industries We Serve | Logistics, Manufacturing, Retail, Pharma, Automotive | ${site.name}`,
      description:
        'Storage and racking solutions tailored for logistics and 3PL, manufacturing, retail and e-commerce, pharmaceuticals, automotive and food, beverage and cold storage industries across India.',
      path: '/industries',
    }),
  component: Industries,
})

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Storage engineered for your sector"
        lead={industriesIntro}
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Industries' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
                <ProductIcon name={industry.icon} className="size-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-navy-950">
                {industry.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {industry.description}
              </p>
              <p className="mt-5 text-[11px] font-bold tracking-[0.14em] text-steel-500 uppercase">
                Recommended systems
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {industry.solutions.map((slug) => {
                  const product = getProduct(slug)
                  if (!product) return null
                  return (
                    <li key={slug}>
                      <Link
                        to="/products/$slug"
                        params={{ slug }}
                        className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100"
                      >
                        {product.menuLabel}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your industry, your loads, your constraints"
        lead="Tell us what you store and how fast it moves, and we'll design the racking around it."
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
    </>
  )
}
