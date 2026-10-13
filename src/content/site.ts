/**
 * Central site configuration for Global Racks Storage Systems.
 *
 * NOTE(client): the `contact` block below contains PLACEHOLDER values —
 * replace phone numbers, emails and the registered address with the real
 * company details before going live. Everything on the site reads from
 * this single module, so one edit updates header, footer, contact page,
 * JSON-LD and the sitemap.
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
    // TODO(client): replace placeholder contact details.
    phoneDisplay: '+91 90000 00000',
    phoneHref: 'tel:+919000000000',
    whatsappDisplay: '+91 90000 00000',
    whatsappHref: 'https://wa.me/919000000000',
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

export const stats = [
  { value: '2024', label: 'Established', suffix: '' },
  { value: '11', label: 'Racking system types', suffix: '+' },
  { value: '75', label: 'Warehouse space utilisation', suffix: '%' },
  { value: '4000', label: 'Kg per beam level', suffix: 'kg' },
] as const
