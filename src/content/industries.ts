export type Industry = {
  slug: string
  name: string
  description: string
  icon: string
  solutions: string[]
}

export const industriesIntro =
  'Global Racks Storage Systems Private Limited is a leading rack manufacturing company specializing in the design, fabrication, and installation of high-quality storage and racking solutions. We manufacture a wide range of industrial racks and warehouse storage systems tailored to meet the needs of industries such as logistics, manufacturing, retail, pharmaceuticals, automotive, and more.'

export const industries: Industry[] = [
  {
    slug: 'logistics-3pl',
    name: 'Logistics & 3PL',
    description:
      'High-turnover distribution centres needing flexible beam levels and fast reconfiguration between clients.',
    icon: 'truck',
    solutions: ['heavy-duty-pallet-racking', 'mezzanine-floor-systems', 'radio-shuttle-system'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description:
      'Raw material, WIP and finished-goods storage integrated with production flow and line feeding.',
    icon: 'factory',
    solutions: [
      'heavy-duty-pallet-racking',
      'cantilever-racks',
      'gravity-flow-racks',
      'metal-pallets-and-metal-bins',
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    description:
      'Case and piece picking with multitier pick faces, replenishment buffers and returns handling.',
    icon: 'shopping-cart',
    solutions: [
      'multitier-shelving-racking',
      'mezzanine-floor-systems',
      'slotted-angle-racks',
      'metal-pallets-and-metal-bins',
    ],
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    description:
      'Batch-controlled, hygienic storage with FIFO discipline and cleanable surfaces.',
    icon: 'pill',
    solutions: ['gravity-flow-racks', 'mobile-racking-system', 'metal-pallets-and-metal-bins'],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    description:
      'Long, heavy and irregular components — axles, extrusions, panels — stored damage-free.',
    icon: 'car',
    solutions: ['cantilever-racks', 'heavy-duty-pallet-racking', 'mobile-racking-system'],
  },
  {
    slug: 'food-beverage-cold-storage',
    name: 'Food, Beverage & Cold Storage',
    description:
      'Maximum cube inside costly chilled and frozen chambers with strict FIFO rotation.',
    icon: 'snowflake',
    solutions: ['drive-in-racks', 'radio-shuttle-system', 'mobile-racking-system'],
  },
]
