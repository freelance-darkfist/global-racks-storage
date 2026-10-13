import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BadgeCheck, Phone } from 'lucide-react'
import { ClipFrame } from '@/components/marketing/clip-frame'
import { CtaBand } from '@/components/marketing/cta-band'
import { DotGrid } from '@/components/marketing/dot-grid'
import { ProductCard } from '@/components/marketing/product-card'
import { SectionHeading } from '@/components/marketing/section-heading'
import { buttonVariants } from '@/components/ui/button'
import { products } from '@/content/products'
import { industries } from '@/content/industries'
import { site, stats } from '@/content/site'
import { seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    seoMeta({
      title: `${site.name} | Industrial Racking, Mezzanine Floors & Warehouse Storage India`,
      description:
        'Global Racks Storage Systems manufactures heavy duty pallet racking, cantilever racks, drive-in and radio shuttle systems, mezzanine floors, material handling equipment and custom fabrication for warehouses across India.',
      path: '/',
      image: '/images/warehouse-hero.jpg',
      imageAlt: 'Aerial view of a warehouse filled with Global Racks pallet racking',
    }),
  component: Home,
})

function Home() {
  const featured = products.slice(0, 6)
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <DotGrid tone="white" className="absolute top-12 left-8 hidden lg:grid" />
        <span
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-500/15 blur-3xl"
        />
        <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow text-brand-300">
              <span aria-hidden="true" className="inline-block h-0.5 w-8 bg-brand-400" />
              {site.positioning}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              Professional Industrial{' '}
              <span className="text-brand-400">Storage Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-navy-100 sm:text-lg">
              We design, fabricate and install high-quality storage and racking systems —
              from heavy duty pallet racking to mezzanine floors, radio shuttle systems and
              custom metalwork — tailored to your warehouse, your loads and your workflow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/products" className={buttonVariants({ size: 'lg' })}>
                Explore our products
                <ArrowRight />
              </Link>
              <Link to="/contact" className={buttonVariants({ variant: 'light', size: 'lg' })}>
                Get a free quote
              </Link>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-100 transition-colors hover:text-brand-300"
              >
                <Phone className="size-4 text-brand-400" />
                {site.contact.phoneDisplay}
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-brand-500 pl-4">
                  <dt className="order-2 text-xs font-medium tracking-wide text-navy-200 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-2xl font-extrabold text-white">
                    {stat.value}
                    <span className="text-brand-400">{stat.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <ClipFrame
              src="/images/warehouse-hero.jpg"
              alt="Aerial view of a distribution warehouse filled with Global Racks pallet racking"
              priority
              className="mx-auto max-w-xl"
              imgClassName="aspect-16/10"
            />
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                <BadgeCheck className="size-4 text-brand-400" />
                Quality fabrication
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                <BadgeCheck className="size-4 text-brand-400" />
                Custom solutions since {site.founded}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Featured products */}
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our product portfolio"
              title="Storage systems for every warehouse need"
              lead="Pallet racks, cantilever, mezzanines, drive-in systems, mobile racks and more — eleven racking families engineered, fabricated and installed in-house."
            />
            <Link to="/products" className={buttonVariants({ variant: 'outline' })}>
              View all 11 systems
              <ArrowRight />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Global Racks */}
      <section className="py-16 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <ClipFrame
            src="/images/about-warehouse.jpg"
            alt="Long warehouse aisle lined with Global Racks heavy duty pallet racking"
            accent="navy"
            imgClassName="aspect-4/4.2"
          />
          <div>
            <SectionHeading
              eyebrow="Why Global Racks"
              title="Quality fabrication. Custom solutions. Since 2024."
              lead="Global Racks Storage Systems Private Limited is a leading rack manufacturing company specializing in the design, fabrication, and installation of high-quality storage and racking solutions."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'In-house fabrication',
                  text: 'Welding, forming and finishing under one roof for consistent quality.',
                },
                {
                  title: 'Engineered to your loads',
                  text: 'Beam levels from 500kg to 4,000kg, uprights up to 12m.',
                },
                {
                  title: 'Turnkey installation',
                  text: 'Survey, design, supply, erection and handover — one team.',
                },
                {
                  title: 'Every industry',
                  text: 'Logistics, manufacturing, retail, pharma, automotive and more.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-card"
                >
                  <p className="font-display font-bold text-navy-950">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className={buttonVariants({ variant: 'navy' })}>
                More about us
              </Link>
              <Link to="/fabrication" className={buttonVariants({ variant: 'outline' })}>
                Fabrication capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Industries + adjacent offerings */}
      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="wrap">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Industries we serve"
            title="Built around your operation"
            lead="From 3PL distribution to cold storage and automotive — we tailor racking geometry, finishes and accessories to each sector's realities."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to="/industries"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-400/50 hover:bg-white/10"
              >
                <p className="font-display text-lg font-bold text-white group-hover:text-brand-300">
                  {industry.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              to="/material-handling"
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src="/images/material-handling/reach-truck.jpg"
                alt="Operator working a reach truck beside pallet racking"
                loading="lazy"
                decoding="async"
                className="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-display text-xl font-bold text-white">
                  Material Handling Equipment
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  Pallet trucks, stackers, walkies and forklifts.
                </p>
              </div>
            </Link>
            <Link
              to="/fabrication"
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src="/images/fabrication/welding.jpg"
                alt="Fabricators welding steel in the Global Racks workshop"
                loading="lazy"
                decoding="async"
                className="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-display text-xl font-bold text-white">
                  Fabrication &amp; Custom Metalwork
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  Structural steel, PEB buildings and bespoke storage.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
