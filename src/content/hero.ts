/**
 * Homepage hero carousel slides.
 *
 * Order matters: the first slide is the LCP image, so it loads eagerly.
 * Every slide links to the matching /products/$slug page.
 */
export type HeroSlide = {
  src: string
  alt: string
  /** Short product-family label shown above the slide title. */
  eyebrow: string
  title: string
  slug: string
}

export const heroSlides: readonly HeroSlide[] = [
  {
    src: '/images/warehouse-hero.jpg',
    alt: 'Forklift moving palletised loads through a drive-in racking aisle',
    eyebrow: 'Drive-in racking',
    title: 'High-density pallet storage in tight footprints',
    slug: 'drive-in-racks',
  },
  {
    src: '/images/products/radio-shuttle-system.jpg',
    alt: 'Radio shuttle racking system with high-density pallet lanes inside a warehouse',
    eyebrow: 'Radio shuttle systems',
    title: 'Semi-automated storage that reaches deep',
    slug: 'radio-shuttle-system',
  },
  {
    src: '/images/products/mobile-racking-system.jpg',
    alt: 'Mobile racking system with trolley-mounted shelving on rails in a modern warehouse',
    eyebrow: 'Mobile racking',
    title: 'Aisles that open only when you need them',
    slug: 'mobile-racking-system',
  },
  {
    src: '/images/products/metal-pallets-and-metal-bins.jpg',
    alt: 'Steel pallets and blue industrial storage bins stored together in a warehouse',
    eyebrow: 'Metal pallets & bins',
    title: 'Rugged steel handling equipment built to last',
    slug: 'metal-pallets-and-metal-bins',
  },
]