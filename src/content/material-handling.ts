export type MaterialHandlingItem = {
  slug: string
  name: string
  description: string
  points: string[]
  image?: string
  imageAlt?: string
  icon: string
}

export const materialHandlingIntro =
  'Our comprehensive range of material handling equipment ensures efficient, safe, and ergonomic warehouse operations. From manual solutions to powered options, we offer reliable equipment designed for durability and operational excellence across all industrial environments.'

export const materialHandlingItems: MaterialHandlingItem[] = [
  {
    slug: 'pallet-trucks',
    name: 'Hand Pallet Trucks & Power Pallet Trucks',
    description:
      'Dependable horizontal transport for palletised loads, from lightweight hand trucks for shop floors to powered trucks for long hauls across large warehouses.',
    points: [
      'Hand pallet trucks in 2.5t / 3t / 5t capacities',
      'Power pallet trucks for effortless long-distance moves',
      'Ergonomic handles and smooth-rolling PU / nylon wheels',
    ],
    image: '/images/material-handling/pallet-truck.jpg',
    imageAlt:
      'Orange hand pallet truck standing in a warehouse aisle between pallet racking',
    icon: 'truck',
  },
  {
    slug: 'stackers',
    name: 'Manual & Semi-Electric Stackers',
    description:
      'Compact stacking equipment that lifts pallets to racking and mezzanine heights without the footprint of a forklift.',
    points: [
      'Manual winch and hydraulic lift options',
      'Semi-electric lift for faster, low-effort stacking',
      'Ideal for tight aisles and light-duty racking',
    ],
    icon: 'move-vertical',
  },
  {
    slug: 'cb-stackers-walkie-trucks',
    name: 'CB Stackers & Walkie Pallet Trucks',
    description:
      'Powered walk-behind equipment bridging the gap between manual trucks and ride-on forklifts for medium-duty cycles.',
    points: [
      'Counterbalance (CB) stackers for closed-bottom pallets',
      'Walkie pallet trucks with powered drive and lift',
      'Low-maintenance AC drive technology',
    ],
    icon: 'gauge',
  },
  {
    slug: 'forklifts',
    name: 'Forklifts for Heavy-Duty Applications',
    description:
      'Heavy-duty forklifts matched to your racking heights and load profiles, keeping high-throughput operations moving safely.',
    points: [
      'Diesel, electric and LPG powertrains',
      'Masts configured for your beam heights',
      'Attachments for drums, rolls and cartons',
    ],
    image: '/images/material-handling/forklift.jpg',
    imageAlt:
      'Yellow forklift carrying a palletised load down a warehouse aisle lined with racking',
    icon: 'forklift',
  },
]

export const materialHandlingHeroImage = {
  src: '/images/material-handling/reach-truck.jpg',
  alt: 'Operator working a reach truck beside pallet racking in a distribution warehouse',
}
