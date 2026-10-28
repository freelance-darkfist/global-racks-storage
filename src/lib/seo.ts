import { site } from '@/content/site'

export type SeoInput = {
  title: string
  description: string
  /** Path including leading slash, e.g. "/products/cantilever-racks". */
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

/** Builds the meta/link arrays consumed by a route's `head()` function. */
export function seoMeta({ title, description, path, image, imageAlt, type = 'website' }: SeoInput) {
  const url = `${site.url}${path === '/' ? '/' : path}`
  const ogImage = image ? `${site.url}${image}` : `${site.url}/images/logo.jpg`
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      ...(imageAlt ? [{ property: 'og:image:alt', content: imageAlt }] : []),
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

type Json = Record<string, unknown>

export function organizationLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    alternateName: [site.name, site.shortName],
    url: site.url,
    logo: `${site.url}/images/logo.jpg`,
    foundingDate: site.founded,
    slogan: site.tagline,
    description: site.description,
    contactPoint: site.contact.phones.map((phone, index) => ({
      '@type': 'ContactPoint',
      telephone: phone.display,
      email: site.contact.emailDisplay,
      contactType: index === 0 ? 'sales' : 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    })),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      streetAddress: site.contact.addressLines[1],
      addressLocality: 'India',
    },
  }
}

export function websiteLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    publisher: { '@id': `${site.url}/#organization` },
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function productLd(product: {
  name: string
  slug: string
  description: string
  image?: string
  category: string
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? `${site.url}${product.image}` : `${site.url}/images/logo.jpg`,
    category: product.category,
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'Offer',
      url: `${site.url}/products/${product.slug}`,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      // Pricing is quotation-based; 0 signals "contact for price" without claiming a price.
      price: '0',
      seller: { '@type': 'Organization', name: site.legalName },
    },
  }
}

export function localBusinessLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#organization`,
    name: site.legalName,
    image: `${site.url}/images/logo.jpg`,
    url: site.url,
    telephone: site.contact.phones.map((phone) => phone.display),
    email: site.contact.emailDisplay,
    foundingDate: site.founded,
    priceRange: 'INR',
    openingHours: 'Mo-Sa 09:00-19:00',
  }
}
