import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { ContactForm } from '@/components/contact-form'
import { JsonLd } from '@/components/marketing/json-ld'
import { PageHero } from '@/components/marketing/page-hero'
import { site } from '@/content/site'
import { breadcrumbLd, seoMeta } from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () =>
    seoMeta({
      title: `Contact & Enquiry | ${site.name}`,
      description:
        'Contact Global Racks Storage Systems for racking quotations, warehouse surveys and custom fabrication enquiries. Call, WhatsApp or send the enquiry form — we respond within one working day.',
      path: '/contact',
    }),
  component: Contact,
})

function Contact() {
  const { contact } = site
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan your warehouse"
        lead="Send an enquiry or call us directly — our team responds within one working day with next steps, site-visit slots or a preliminary layout."
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactCard
              icon={<Phone className="size-5" />}
              title="Phone"
              lines={[contact.phoneDisplay, contact.hours]}
              href={contact.phoneHref}
            />
            <ContactCard
              icon={<Mail className="size-5" />}
              title="Email"
              lines={[contact.emailDisplay, contact.salesEmailDisplay]}
              href={contact.emailHref}
            />
            <ContactCard
              icon={<MapPin className="size-5" />}
              title="Office & Works"
              lines={contact.addressLines}
            />
            <ContactCard
              icon={<Clock className="size-5" />}
              title="Working hours"
              lines={[contact.hours, 'Site visits by appointment']}
            />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
    </>
  )
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: ReactNode
  title: string
  lines: readonly string[]
  href?: string
}) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-card">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
        {icon}
      </span>
      <div>
        <h2 className="font-display font-bold text-navy-950">{title}</h2>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {lines[0]}
          </a>
        ) : (
          <p className="mt-1 text-sm font-semibold text-steel-700">{lines[0]}</p>
        )}
        {lines.slice(1).map((line) => (
          <p key={line} className="text-sm text-steel-600">
            {line}
          </p>
        ))}
      </div>
    </article>
  )
}
