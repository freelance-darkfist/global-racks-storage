import { createFileRoute } from '@tanstack/react-router'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { ProductIcon } from '@/components/marketing/product-icon'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SpecList } from '@/components/marketing/spec-list'
import {
  materialHandlingHeroImage,
  materialHandlingIntro,
  materialHandlingItems,
} from '@/content/material-handling'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/material-handling')({
  head: () =>
    seoMeta({
      title: `Material Handling Equipment | Pallet Trucks, Stackers and Forklifts | ${site.name}`,
      description:
        'Hand and power pallet trucks, manual and semi-electric stackers, CB stackers, walkie pallet trucks and heavy-duty forklifts, a reliable range of material handling equipment for Indian warehouses.',
      path: '/material-handling',
      image: materialHandlingHeroImage.src,
      imageAlt: materialHandlingHeroImage.alt,
    }),
  component: MaterialHandling,
})

function MaterialHandling() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Material handling equipment"
        lead={materialHandlingIntro}
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Material Handling' }]}
      >
        <div className="mt-10 max-w-lg">
          <ClipFrame
            src={materialHandlingHeroImage.src}
            alt={materialHandlingHeroImage.alt}
            priority
            imgClassName="aspect-16/10"
          />
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="wrap space-y-16">
          {materialHandlingItems.map((item, i) => (
            <article
              key={item.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
              id={item.slug}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : undefined}>
                {item.image ? (
                  <ClipFrame
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    accent={i % 2 === 1 ? 'navy' : 'brand'}
                    imgClassName="aspect-16/10"
                  />
                ) : (
                  <div className="flex aspect-16/10 items-center justify-center rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700">
                    <ProductIcon name={item.icon} className="size-20 text-brand-400" />
                  </div>
                )}
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
                <SectionHeading
                  eyebrow={`Range ${String(i + 1).padStart(2, '0')}`}
                  title={item.name}
                  lead={item.description}
                />
                <SpecList items={item.points} className="mt-6" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Match the right equipment to your racking"
        lead="Aisle widths, beam heights and cycle counts decide the truck. Tell us yours and we'll specify the equipment that fits."
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Material Handling', path: '/material-handling' },
        ])}
      />
    </>
  )
}
