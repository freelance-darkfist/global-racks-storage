export type ProductCategory =
  | 'Pallet Racking'
  | 'Shelving & Light Duty'
  | 'High-Density Systems'
  | 'Platforms & Floors'
  | 'Decking & Pallets'

export type Product = {
  slug: string
  name: string
  /** Short label used in navigation menus and cards. */
  menuLabel: string
  category: ProductCategory
  /** One-line value proposition shown on cards. */
  tagline: string
  /** Catalogue description paragraph. */
  description: string
  /** Optional extra paragraphs (two-column catalogue pages). */
  extraParagraphs?: string[]
  image?: string
  imageAlt?: string
  /** Heading for the highlight list, e.g. "Key Features". */
  highlightsTitle: string
  highlights: string[]
  /** Typical applications — used on detail pages and JSON-LD. */
  applications: string[]
  /** Lucide icon key (see components/marketing/product-icon.tsx). */
  icon: string
  seoTitle: string
  seoDescription: string
}

export const products: Product[] = [
  {
    slug: 'heavy-duty-pallet-racking',
    name: 'Heavy Duty Pallet Racking',
    menuLabel: 'Heavy Duty Pallet Racking',
    category: 'Pallet Racking',
    tagline:
      'Robust uprights and beams engineered for maximum load capacity in any warehouse layout.',
    description:
      'Our heavy duty pallet racking system features robust vertical uprights and horizontal beams designed for maximum load capacity. Fully customizable heights and configurations to suit any warehouse layout.',
    image: '/images/products/heavy-duty-pallet-racking.jpg',
    imageAlt:
      'Heavy duty pallet racking with orange beams and blue uprights storing palletised cartons in a warehouse',
    highlightsTitle: 'Technical Specifications',
    highlights: [
      'Load Capacity: 500kg - 4,000kg per beam level',
      'Upright Heights: 3m - 12m customizable',
      'Beam Lengths: 1.8m - 3.6m standard options',
    ],
    applications: [
      'Distribution & logistics warehouses',
      'Manufacturing raw-material and FG stores',
      'Retail and e-commerce fulfilment centres',
      'Cold storage with galvanised finishes',
    ],
    icon: 'warehouse',
    seoTitle: 'Heavy Duty Pallet Racking | 500–4000 kg Beam Loads',
    seoDescription:
      'Heavy duty pallet racking with 500kg–4,000kg beam capacity, 3m–12m uprights and 1.8m–3.6m beams. Manufactured and installed across India by Global Racks Storage Systems.',
  },
  {
    slug: 'multitier-shelving-racking',
    name: 'Multitier Shelving Racking',
    menuLabel: 'Multitier Shelving',
    category: 'Shelving & Light Duty',
    tagline:
      'Configurable multi-level shelving that turns vertical space into pick & pack capacity.',
    description:
      'Maximize your warehouse vertical space with our configurable multitier shelving systems. Ideal for small parts storage, pick & pack operations, and high-density inventory management.',
    image: '/images/products/multitier-shelving.jpg',
    imageAlt:
      'Multitier shelving racking with steel staircases and multiple picking levels in a warehouse',
    highlightsTitle: 'Key Benefits',
    highlights: [
      'Multiple configurable levels with adjustable access points',
      'Built-in safety features including handrails and anti-slip flooring',
      'Modular design allows easy expansion and reconfiguration',
    ],
    applications: [
      'E-commerce pick & pack mezzanines',
      'Small parts and spare-parts stores',
      'Pharma and FMCG case-picking operations',
      'Retail back-of-house storage',
    ],
    icon: 'layers',
    seoTitle: 'Multitier Shelving Racking Systems | Multi-Level Storage',
    seoDescription:
      'Multitier shelving racking with adjustable levels, handrails and anti-slip flooring for small parts storage and high-density pick & pack operations.',
  },
  {
    slug: 'cantilever-racks',
    name: 'Cantilever Racks',
    menuLabel: 'Cantilever Racks',
    category: 'Pallet Racking',
    tagline:
      'Adjustable arms for long, bulky and irregular loads — pipes, lumber, sheets and more.',
    description:
      'Purpose-built for storing long, bulky, and irregularly shaped items. Cantilever racks feature adjustable arms that provide flexibility for various load sizes and configurations.',
    image: '/images/products/cantilever-racks.jpg',
    imageAlt:
      'Industrial cantilever racks with adjustable arms storing long loads in a warehouse',
    highlightsTitle: 'Key Features',
    highlights: [
      'Single or double-sided configurations for maximum versatility.',
      'Ideal for pipes, lumber, metal sheets, and long materials.',
      'Heavy-duty construction ensures superior load capacity.',
    ],
    applications: [
      'Steel, pipe and tube stockists',
      'Timber, board and building-materials yards',
      'Automotive extrusions and profiles',
      'Furniture and white-goods manufacturing',
    ],
    icon: 'move-horizontal',
    seoTitle: 'Cantilever Racks for Pipes, Lumber & Long Loads',
    seoDescription:
      'Single or double-sided cantilever racks with adjustable arms for pipes, lumber, metal sheets and other long, bulky items. Heavy-duty construction, made in India.',
  },
  {
    slug: 'drive-in-racks',
    name: 'Drive-In Racks',
    menuLabel: 'Drive-In Racks',
    category: 'High-Density Systems',
    tagline:
      'High-density bulk storage with up to 75% space utilisation using FIFO/LIFO lanes.',
    description:
      'High-density storage solution designed for bulk storage of homogeneous products. Achieve up to 75% space utilization with FIFO/LIFO storage methods for maximum warehouse efficiency.',
    image: '/images/products/drive-in-racks.jpg',
    imageAlt:
      'Forklift operating inside a high-density drive-in racking aisle stocked with palletised loads',
    highlightsTitle: 'Key Features',
    highlights: [
      'Supports both FIFO and LIFO storage methods',
      'Up to 75% warehouse space utilization',
      'Enhanced safety and operational efficiency',
    ],
    applications: [
      'Food & beverage bulk stores',
      'Cold rooms and chillers',
      'Seasonal homogeneous inventory',
      'FMCG buffer warehouses',
    ],
    icon: 'truck',
    seoTitle: 'Drive-In Racks | High-Density FIFO/LIFO Pallet Storage',
    seoDescription:
      'Drive-in racking for bulk homogeneous pallets with up to 75% space utilisation and FIFO/LIFO operation. Designed, manufactured and installed by Global Racks.',
  },
  {
    slug: 'mezzanine-floor-systems',
    name: 'Mezzanine Floor Systems',
    menuLabel: 'Mezzanine Floors',
    category: 'Platforms & Floors',
    tagline:
      'Steel platforms that multiply floor space without costly building expansion.',
    description:
      'Steel platform solutions that multiply your warehouse floor space without costly building expansion. Customizable configurations for diverse storage and operational needs.',
    image: '/images/products/mezzanine-floor.jpg',
    imageAlt:
      'Steel mezzanine floor system with integrated staircase, handrails and storage platforms',
    highlightsTitle: 'Key Features',
    highlights: [
      '2-3 configurable levels with adjustable heights from 5-9 meters',
      'Heavy-duty steel construction with integrated stairs and flooring',
      'Customizable load capacities to match your specific requirements',
    ],
    applications: [
      'Office and storage platforms over production',
      'E-commerce fulfilment pick faces',
      'Spare-parts and archive stores',
      'Plant and equipment platforms',
    ],
    icon: 'building',
    seoTitle: 'Mezzanine Floor Systems | 2–3 Level Steel Platforms',
    seoDescription:
      'Custom mezzanine floor systems with 2–3 levels, 5–9m heights, integrated stairs and flooring. Multiply warehouse floor space without building expansion.',
  },
  {
    slug: 'radio-shuttle-system',
    name: 'Radio Shuttle System',
    menuLabel: 'Radio Shuttle',
    category: 'High-Density Systems',
    tagline:
      'Semi-automated pallet shuttles with 80%+ space utilisation and minimal forklift travel.',
    description:
      'Semi-automated storage with remote-controlled shuttles that transport pallets within the racking structure.',
    extraParagraphs: [
      '80%+ warehouse space utilization with reduced forklift travel time.',
      'Supports FIFO/LIFO operations with minimal labor requirements.',
      'Perfect for high-density bulk storage of homogeneous products.',
    ],
    image: '/images/products/radio-shuttle-system.jpg',
    imageAlt:
      'Radio shuttle racking system with high-density pallet lanes inside a warehouse',
    highlightsTitle: 'Key Features',
    highlights: [
      'Remote-controlled shuttles move pallets deep inside rack lanes',
      '80%+ warehouse space utilization with reduced forklift travel time',
      'Supports FIFO/LIFO operations with minimal labor requirements',
      'Perfect for high-density bulk storage of homogeneous products',
    ],
    applications: [
      'Cold storage and frozen foods',
      'Beverage and FMCG bulk lanes',
      'Pharma batch-buffer storage',
      'High-throughput distribution centres',
    ],
    icon: 'radio',
    seoTitle: 'Radio Shuttle System | Semi-Automated Pallet Storage',
    seoDescription:
      'Radio shuttle racking with remote-controlled shuttles for 80%+ space utilisation, FIFO/LIFO operation and reduced forklift travel in high-density warehouses.',
  },
  {
    slug: 'mobile-racking-system',
    name: 'Mobile Racking System',
    menuLabel: 'Mobile Racking',
    category: 'High-Density Systems',
    tagline:
      'Electrically driven mobile bases eliminate fixed aisles for maximum floor utilisation.',
    description:
      'Electrically driven trolley-mounted racks that eliminate fixed aisles for maximum floor utilization.',
    extraParagraphs: [
      'Racks move on rails to create aisles only when needed.',
      'Ideal for cold storage and high-value inventory management.',
      'Maximizes storage capacity while maintaining direct access.',
    ],
    image: '/images/products/mobile-racking-system.jpg',
    imageAlt:
      'Mobile racking system with trolley-mounted shelving on rails in a modern warehouse',
    highlightsTitle: 'Key Features',
    highlights: [
      'Electrically driven trolley-mounted racks on guided rails',
      'Aisles open only when needed — every other lane stores product',
      'Ideal for cold storage and high-value inventory management',
      'Maximizes storage capacity while maintaining direct access',
    ],
    applications: [
      'Cold stores where cube is costly',
      'High-value pharmaceutical inventory',
      'Archive and records storage',
      'Space-constrained urban warehouses',
    ],
    icon: 'move-3d',
    seoTitle: 'Mobile Racking Systems | Aisle-Eliminating Storage',
    seoDescription:
      'Electrically driven mobile racking on rails eliminates fixed aisles for maximum floor utilisation — ideal for cold storage and high-value inventory.',
  },
  {
    slug: 'slotted-angle-racks',
    name: 'Slotted Angle Racks',
    menuLabel: 'Slotted Angle Racks',
    category: 'Shelving & Light Duty',
    tagline:
      'Versatile bolt-free shelving for warehouses, workshops and retail backrooms.',
    description:
      'Versatile and portable storage solution ideal for warehouses, workshops, and retail environments.',
    image: '/images/products/slotted-angle-racks.jpg',
    imageAlt:
      'Slotted angle racks with adjustable galvanised shelves holding cartons and blue bins in a warehouse',
    extraParagraphs: [
      'Easy bolt-free assembly with adjustable shelf heights for various goods.',
      'Lightweight yet durable construction suitable for light to medium loads.',
      'Modular design allows quick reconfiguration as storage needs change.',
    ],
    highlightsTitle: 'Key Features',
    highlights: [
      'Easy bolt-free assembly with adjustable shelf heights',
      'Lightweight yet durable construction for light to medium loads',
      'Modular design allows quick reconfiguration as needs change',
      'Portable and reusable across sites',
    ],
    applications: [
      'Workshop and maintenance stores',
      'Retail stockrooms and offices',
      'Light carton and container storage',
      'Temporary and project site stores',
    ],
    icon: 'frame',
    seoTitle: 'Slotted Angle Racks | Bolt-Free Modular Shelving',
    seoDescription:
      'Slotted angle racks with bolt-free assembly and adjustable shelves — versatile, portable storage for warehouses, workshops and retail environments.',
  },
  {
    slug: 'gravity-flow-racks',
    name: 'Gravity Flow Racks',
    menuLabel: 'Gravity Flow Racks',
    category: 'High-Density Systems',
    tagline:
      'Roller-based live racking that guarantees FIFO and cuts handling time.',
    description:
      'Roller-based live racking system ensuring First-In-First-Out (FIFO) inventory management.',
    extraParagraphs: [
      'Pallets slide automatically from loading to picking end via gravity rollers.',
      'Optimizes warehouse workflow and reduces handling time significantly.',
      'Perfect for perishable goods and high-turnover inventory applications.',
    ],
    image: '/images/products/gravity-flow-racks.jpg',
    imageAlt:
      'Gravity flow racking with cartons moving on roller lanes to the picking face',
    highlightsTitle: 'Key Features',
    highlights: [
      'Gravity rollers move pallets from loading to picking face automatically',
      'Guarantees First-In-First-Out (FIFO) inventory rotation',
      'Optimizes workflow and reduces handling time significantly',
      'Perfect for perishable goods and high-turnover inventory',
    ],
    applications: [
      'Perishable food distribution',
      'Pharma expiry-sensitive stock',
      'High-turnover case picking',
      'Production line feeding',
    ],
    icon: 'arrow-down-wide-narrow',
    seoTitle: 'Gravity Flow Racks | FIFO Live Pallet Racking',
    seoDescription:
      'Gravity flow (live) racking with roller lanes for guaranteed FIFO rotation, faster picking and reduced handling of perishable, high-turnover goods.',
  },
  {
    slug: 'wire-mesh-decking',
    name: 'Wire Mesh Decking',
    menuLabel: 'Wire Mesh Decking',
    category: 'Decking & Pallets',
    tagline:
      'Heavy-duty mesh panels (300–1000 kg per deck) that improve rack safety and visibility.',
    description:
      'Heavy-duty wire mesh panels designed to enhance rack safety and visibility. Load capacity range from 300kg to 1000kg per deck, ideal for pallet racking systems.',
    image: '/images/products/wire-mesh-decking.jpg',
    imageAlt:
      'Wire mesh decking panels fitted to pallet racking beams to support cartons and pallets',
    highlightsTitle: 'Wire Mesh Decking Benefits',
    highlights: [
      'Prevents items from falling through rack beams',
      'Improves fire safety with better sprinkler penetration',
      'Easy installation on existing beam structures',
    ],
    applications: [
      'Mixed-SKU pallet positions',
      'Fire-sensitive storage zones',
      'Retrofit of existing pallet racking',
      'Picking levels over walkways',
    ],
    icon: 'grid-3x3',
    seoTitle: 'Wire Mesh Decking | 300–1000 kg Rack Deck Panels',
    seoDescription:
      'Wire mesh decking panels with 300–1000kg capacity improve rack safety, visibility and sprinkler penetration. Fits existing pallet racking beams.',
  },
  {
    slug: 'metal-pallets-and-metal-bins',
    name: 'Metal Pallet and Metal Bins',
    menuLabel: 'Metal Pallets & Bins',
    category: 'Decking & Pallets',
    tagline:
      'Heavy-duty steel pallets, stackable metal bins and packing workstations for organised industrial storage.',
    description:
      'Our metal pallets, metal storage bins and packing workstations provide durable, space-efficient solutions for organized industrial storage and packing operations. Built for demanding warehouse and manufacturing environments, they support reliable storage, safe handling and efficient packing workflows.',
    extraParagraphs: [
      'Metal pallets: heavy-duty steel construction with 2-way and 4-way forklift access.',
      'Stackable metal bins optimise vertical space for components, cartons and small parts.',
      'Packing workstations create a dedicated space for packing tasks.',
    ],
    image: '/images/products/metal-pallets-and-metal-bins.jpg',
    imageAlt:
      'Steel pallets and blue industrial storage bins stored together in a warehouse',
    highlightsTitle: 'Key Features',
    highlights: [
      'Metal pallets: heavy-duty steel with 2-way and 4-way forklift access',
      'High load capacity for heavy industrial unit loads',
      'Stackable metal bins that help optimize storage space',
      'Packing workstations with dedicated space for packing tasks',
      'Durable powder coating for a corrosion-resistant finish',
    ],
    applications: [
      'Heavy industrial unit loads',
      'Picking and packing zones',
      'Spare-parts and component storage',
      'Dispatch and e-commerce packing benches',
    ],
    icon: 'package',
    seoTitle: 'Metal Pallet and Metal Bins | Steel Pallets, Bins & Workstations',
    seoDescription:
      'Heavy-duty metal pallets, stackable metal storage bins and packing workstations with 2-way/4-way forklift access and corrosion-resistant powder-coated steel construction.',
  },
]

export const productCategories: { name: ProductCategory; blurb: string }[] = [
  {
    name: 'Pallet Racking',
    blurb: 'Selective and cantilevered systems for palletised and long loads.',
  },
  {
    name: 'Shelving & Light Duty',
    blurb: 'Multitier and slotted angle shelving for cases, cartons and parts.',
  },
  {
    name: 'High-Density Systems',
    blurb: 'Drive-in, radio shuttle, mobile and gravity flow for maximum cube.',
  },
  {
    name: 'Platforms & Floors',
    blurb: 'Mezzanine floors and steel platforms that multiply usable area.',
  },
  {
    name: 'Decking & Pallets',
    blurb: 'Wire mesh decking, metal pallets, bins and packing workstations.',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
