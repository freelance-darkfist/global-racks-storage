import { createFileRoute } from '@tanstack/react-router'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { ProductCard } from '@/components/marketing/product-card'
import { SectionHeading } from '@/components/marketing/section-heading'
import { productCategories, products } from '@/content/products'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/products/')({
  head: () =>
    seoMeta({
      title: `Industrial Storage Racking Systems (11 Types) | ${site.name}`,
      description:
        'Browse all eleven Global Racks storage systems: heavy duty pallet racking, multitier shelving, cantilever, drive-in, mezzanine floors, radio shuttle, mobile racking, slotted angle, gravity flow, wire mesh decking, metal pallets and metal bins.',
      path: '/products',
    }),
  component: ProductsIndex,
})

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title="Industrial storage racking systems"
        lead="We offer comprehensive warehousing solutions tailored to your specific operational needs, from storage to handling to custom fabrication."
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Products' }]}
      />
      <div className="bg-steel-50 py-16 sm:py-20">
        <div className="wrap space-y-16">
          {productCategories.map((category) => {
            const categoryProducts = products.filter((p) => p.category === category.name)
            return (
              <section key={category.name} aria-labelledby={`cat-${category.name}`}>
                <SectionHeading title={category.name} lead={category.blurb} />
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
      <CtaBand
        title="Not sure which system fits your warehouse?"
        lead="Send us your layout, load sizes and throughput — we'll recommend the right racking family and configuration, free of charge."
      />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Industrial Storage Racking Systems',
            itemListElement: products.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.name,
              url: `${site.url}/products/${p.slug}`,
            })),
          },
        ]}
      />
    </>
  )
}
