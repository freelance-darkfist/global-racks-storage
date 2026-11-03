import { createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionHeading } from '@/components/marketing/section-heading'
import {
  manufacturingFeatures,
  manufacturingImages,
  manufacturingIntro,
  manufacturingProcess,
  manufacturingStandards,
} from '@/content/manufacturing'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/manufacturing')({
  head: () =>
    seoMeta({
      title: `Manufacturing and Product Advantages | ${site.name}`,
      description:
        'Manufactured in house from high-tensile IS 513 and IS 2062 steel: in-house CAD design to FEM 10.2.08, powder-coated beams and uprights, and a wide section range for any load size.',
      path: '/manufacturing',
      image: manufacturingImages.welding.src,
      imageAlt: manufacturingImages.welding.alt,
    }),
  component: Manufacturing,
})

function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Manufacturing and product advantages"
        lead={manufacturingIntro}
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Manufacturing' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <SectionHeading eyebrow="Product advantages" title="Our features" />
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {manufacturingStandards.map((standard) => (
                <li
                  key={standard}
                  className="rounded-md border border-navy-900/20 bg-white px-4 py-2 text-center text-xs font-bold tracking-[0.14em] text-navy-900 uppercase shadow-xs"
                >
                  {standard}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ClipFrame
                src={manufacturingImages.features.src}
                alt={manufacturingImages.features.alt}
                imgClassName="aspect-4/3"
              />
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {manufacturingFeatures.map((feature) => (
                <article key={feature.title} className="flex gap-3">
                  <Check
                    aria-hidden="true"
                    strokeWidth={3}
                    className="mt-0.5 size-5 shrink-0 text-brand-500"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="From coil to load"
              title="How we manufacture"
              lead="Four stages, one team, and the same tolerances whether the order is ten bays or a thousand."
            />
            <ol className="mt-8 grid gap-6">
              {manufacturingProcess.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display text-2xl font-extrabold text-brand-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <ClipFrame
            src={manufacturingImages.welding.src}
            alt={manufacturingImages.welding.alt}
            imgClassName="aspect-4/3"
          />
        </div>
      </section>

      <CtaBand
        title="Need a system built to your loads?"
        lead="Share your drawings, load profiles or a site visit date and our manufacturing team will quote the sections, finish and delivery schedule."
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Manufacturing', path: '/manufacturing' },
        ])}
      />
    </>
  )
}