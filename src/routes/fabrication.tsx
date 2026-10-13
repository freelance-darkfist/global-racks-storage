import { createFileRoute } from '@tanstack/react-router'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { ProductIcon } from '@/components/marketing/product-icon'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SpecList } from '@/components/marketing/spec-list'
import {
  fabricationCapabilities,
  fabricationImages,
  fabricationIntro,
  fabricationServices,
} from '@/content/fabrication'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/fabrication')({
  head: () =>
    seoMeta({
      title: `Fabrication Work & Custom Metal Solutions | ${site.name}`,
      description:
        'Custom metal fabrication: structural steel work, warehouse infrastructure, pre-engineered metal buildings, rack-supported warehouses, welding, metal forming and bespoke storage solutions.',
      path: '/fabrication',
      image: fabricationImages.welding.src,
      imageAlt: fabricationImages.welding.alt,
    }),
  component: Fabrication,
})

function Fabrication() {
  return (
    <>
      <PageHero
        eyebrow="Custom metalwork"
        title="Fabrication work & custom solutions"
        lead={fabricationIntro}
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Fabrication' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <ClipFrame
              src={fabricationImages.welding.src}
              alt={fabricationImages.welding.alt}
              imgClassName="aspect-4/3"
            />
            <ClipFrame
              src={fabricationImages.structure.src}
              alt={fabricationImages.structure.alt}
              accent="navy"
              className="sm:mt-10"
              imgClassName="aspect-4/3"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our capabilities"
              title="From beam to building"
              lead="Our skilled team provides welding, metal forming, and bespoke storage solutions tailored to your exact specifications."
            />
            <SpecList items={fabricationCapabilities} className="mt-6" />
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            align="center"
            eyebrow="Services"
            title="What our fabrication shop delivers"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fabricationServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <ProductIcon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a drawing, a sketch or just a problem?"
        lead="Our fabrication team quotes from drawings, samples or a site visit — whichever you have first."
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Fabrication', path: '/fabrication' },
        ])}
      />
    </>
  )
}
