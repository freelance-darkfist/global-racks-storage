import { Link } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { products } from '@/content/products'
import { certifications, navLinks, site } from '@/content/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
            <img
              src="/images/logo.jpg"
              alt=""
              width={120}
              height={80}
              className="h-12 w-auto rounded-md bg-white object-contain p-1"
            />
          </Link>
          <p className="mt-3 text-sm font-bold tracking-[0.2em] text-white uppercase">
            {site.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-200">{site.description}</p>
          <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase">
            {site.positioning}
          </p>
          <p className="mt-4 text-xs text-navy-300">
            <span className="font-semibold text-navy-200">Certifications:</span>{' '}
            {certifications.map((certification) => certification.code).join(' · ')}
          </p>
        </div>

        <nav aria-label="Products">
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white uppercase">
            Products
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-brand-300"
                >
                  {p.menuLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white uppercase">
            Company
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {navLinks
              .filter((l) => l.to !== '/')
              .map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/contact" className="transition-colors hover:text-brand-300">
                Contact and Enquiry
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white uppercase">
            Get in touch
          </h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span className="grid gap-1">
                {site.contact.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="transition-colors hover:text-brand-300"
                  >
                    {phone.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <a href={site.contact.emailHref} className="transition-colors hover:text-brand-300">
                {site.contact.emailDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <address className="not-italic">
                {site.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-300 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-brand-300"
            >
              Sitemap
            </a>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
