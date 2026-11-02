import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, Compass, Handshake, Wrench } from 'lucide-react'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { SectionHeading } from '@/components/marketing/section-heading'
import { certifications, site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

const values = [
  {
    icon: BadgeCheck,
    title: 'Quality',
    text: 'Certified steel, controlled welding and load-tested designs on every project.',
  },
  {
    icon: Compass,
    title: 'Innovation',
    text: 'Modern high-density systems such as radio shuttle, mobile and gravity flow, alongside proven racking.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    text: 'Every warehouse is different; every system is engineered to fit yours.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    text: 'From first survey to handover and beyond, one team owns your project.',
  },
]

const process = [
  {
    step: '01',
    title: 'Survey and design',
    text: 'Site measurement, load analysis and layout options with loading plans.',
  },
  {
    step: '02',
    title: 'Fabrication',
    text: 'In-house cutting, rolling, welding and powder coating to specification.',
  },
  {
    step: '03',
    title: 'Installation',
    text: 'Anchored, levelled and torque-checked erection by our own teams.',
  },
  {
    step: '04',
    title: 'Support and expansion',
    text: 'Inspections, reconfigurations and extensions as your operation grows.',
  },
]

export const Route = createFileRoute('/about')({
  head: () =>
    seoMeta({
      title: `About Global Racks Storage Systems | Rack Manufacturer India`,
      description:
        'Global Racks Storage Systems Private Limited is a leading rack manufacturing company specializing in the design, fabrication and installation of high-quality storage and racking solutions since 2024.',
      path: '/about',
      image: '/images/about-warehouse.jpg',
      imageAlt: 'Warehouse aisle with Global Racks pallet racking',
    }),
  component: About,
})

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Global Racks Storage Systems"
        lead="A leading rack manufacturing company specializing in the design, fabrication, and installation of high-quality storage and racking solutions."
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <ClipFrame
            src="/images/about-warehouse.jpg"
            alt="Warehouse aisle lined with Global Racks storage racking"
            priority
            imgClassName="aspect-4/4.2"
          />
          <div>
            <SectionHeading eyebrow="Who we are" title="Storage systems, tailored" />
            <p className="mt-6 text-base leading-relaxed text-steel-700">
              Global Racks Storage Systems Private Limited is a leading rack manufacturing
              company specializing in the design, fabrication, and installation of
              high-quality storage and racking solutions. We manufacture a wide range of
              industrial racks and warehouse storage systems tailored to meet the needs of
              industries such as logistics, manufacturing, retail, pharmaceuticals,
              automotive, and more.
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel-700">
              Our commitment to quality fabrication and custom solutions ensures every
              client receives storage systems tailored to their unique operational
              requirements.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-navy-900 p-5 text-white">
                <dt className="text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase">
                  Established
                </dt>
                <dd className="mt-1 font-display text-3xl font-extrabold">{site.founded}</dd>
              </div>
              <div className="rounded-2xl bg-brand-500 p-5 text-white">
                <dt className="text-xs font-semibold tracking-[0.14em] text-white/80 uppercase">
                  Racking families
                </dt>
                <dd className="mt-1 font-display text-3xl font-extrabold">11</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading align="center" eyebrow="Our values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
              >
                <value.icon aria-hidden="true" className="size-8 text-brand-500" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            align="center"
            eyebrow="Certifications"
            title="Certified to international standards"
            lead="Our racking systems are designed, fabricated and load-tested against recognised quality, environmental and structural standards."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification) => (
              <li
                key={certification.code}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
              >
                <BadgeCheck aria-hidden="true" className="size-8 text-brand-500" />
                <p className="mt-4 font-display text-lg font-bold text-navy-950">
                  {certification.code}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                  {certification.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="From survey to handover"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <li
                key={item.step}
                className="relative rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
              >
                <span className="font-display text-4xl font-extrabold text-brand-200">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
    </>
  )
}
