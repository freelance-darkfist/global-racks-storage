/**
 * Central site configuration for Global Racks Storage Systems.
 *
 * NOTE(client): the `contact` block below still contains PLACEHOLDER address
 * and working-hours values — replace them with the real company details
 * before going live. Everything on the site reads from this single module,
 * so one edit updates header, footer, contact page, JSON-LD and the sitemap.
 */
export const site = {
  name: 'Global Racks Storage Systems',
  legalName: 'Global Racks Storage Systems Private Limited',
  shortName: 'Global Racks',
  url: 'https://globalracksstorage.com',
  tagline: 'Professional Industrial Storage Solutions',
  /** Fastest growing storage racking company in India (per brand positioning). */
  positioning: 'Fastest Growing Storage Racking Company in India',
  founded: '2024',
  description:
    'Global Racks Storage Systems Pvt. Ltd. designs, fabricates and installs industrial storage racking, mezzanine floors, material handling equipment and custom metalwork for warehouses across India.',
  contact: {
    // TODO(client): confirm the registered address and working hours.
    phones: [
      { display: '+91 90045 12052', href: 'tel:+919004512052' },
      { display: '+91 86554 84912', href: 'tel:+918655484912' },
    ],
    /** Primary number, used where only one can be shown (buttons, JSON-LD fallback). */
    phoneDisplay: '+91 90045 12052',
    phoneHref: 'tel:+919004512052',
    whatsappDisplay: '+91 90045 12052',
    whatsappHref: 'https://wa.me/919004512052',
    emailDisplay: 'info@globalracksstorage.com',
    emailHref: 'mailto:info@globalracksstorage.com',
    salesEmailDisplay: 'sales@globalracksstorage.com',
    salesEmailHref: 'mailto:sales@globalracksstorage.com',
    addressLines: [
      'Global Racks Storage Systems Pvt. Ltd.',
      'Warehouse & Works: Industrial Area',
      'India',
    ],
    hours: 'Monday – Saturday, 9:00 AM – 7:00 PM IST',
  },
} as const

export type Site = typeof site

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Material Handling', to: '/material-handling' },
  { label: 'Fabrication', to: '/fabrication' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
] as const

/**
 * Certifications and standards shown on the About page and in the footer.
 * Keep `code` short — it is the prominent line on each badge.
 */
export const certifications = [
  { code: 'ISO 9001:2015', label: 'Quality management system' },
  { code: 'ISO 14001:2015', label: 'Environmental management system' },
  { code: 'BIFMA', label: 'Business & institutional furniture standards' },
  { code: 'EN 15512', label: 'European standard for steel static storage systems' },
] as const

export const stats = [
  { value: '2024', label: 'Established', suffix: '' },
  { value: '11', label: 'Racking system types', suffix: '+' },
  { value: '75', label: 'Warehouse space utilisation', suffix: '%' },
  { value: '4000', label: 'Kg per beam level', suffix: 'kg' },
] as const
