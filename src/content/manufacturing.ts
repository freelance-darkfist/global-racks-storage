export const manufacturingIntro =
  'Every Global Racks system is manufactured in house, from high-tensile steel sections to powder-coated beams and uprights. Our design studio, fabrication shop and finishing line work to recognised Indian and European standards, so the racking you receive matches the drawing that was engineered for your loads.'

/** Standards and approvals shown beside the features heading. */
export const manufacturingStandards = ['IS 513', 'IS 2062', 'FEM 10.2.08', 'ISO 9001'] as const

export const manufacturingFeatures = [
  {
    title: 'Best-grade steel',
    description:
      'High-tensile IS 513 / IS 2062 steel for strength and unmatched load-stacking capability',
  },
  {
    title: 'Powder-coat finish',
    description:
      'Finest powder-coating quality for long life, resistant to cracking and peeling',
  },
  {
    title: 'Design strength',
    description: 'Inherent design strength ensuring high safety standards',
  },
  {
    title: 'Adjustable systems',
    description: 'Adjustable racking solutions tailored to client requirements',
  },
  {
    title: 'In-house CAD studio',
    description:
      'Customized designs for optimal storage layouts, engineered to FEM 10.2.08 / Eurocode',
  },
  {
    title: 'Technical team',
    description:
      'Top technical and design team delivering high volumes with consistent quality',
  },
  {
    title: 'Research and development',
    description: 'Strong research thrust on product development and product re-engineering',
  },
  {
    title: 'Section range',
    description: 'Wide array of beam and upright sections for any load size',
  },
] as const

export const manufacturingProcess = [
  {
    step: '01',
    title: 'Design and CAD',
    text: 'Layouts, loading plans and shop drawings produced by our in-house studio to FEM 10.2.08 / Eurocode.',
  },
  {
    step: '02',
    title: 'Steel processing',
    text: 'Beam and upright sections cut, punched and formed from IS 513 / IS 2062 coil and tube.',
  },
  {
    step: '03',
    title: 'Powder coating',
    text: 'Components coated on our finishing line for a finish that resists cracking, peeling and corrosion.',
  },
  {
    step: '04',
    title: 'Quality and dispatch',
    text: 'Dimensional checks, load verification and packed dispatch to site, ready for our erection teams.',
  },
] as const

export const manufacturingImages = {
  /** Landscape shop-floor shot used beside the features list. */
  features: {
    src: '/images/manufacturing/workshop.webp',
    alt: 'Operators assembling orange and blue racking frames beside the press line and overhead crane inside the Global Racks manufacturing plant',
  },
  welding: {
    src: '/images/fabrication/welding.jpg',
    alt: 'Fabricators welding steel rack components inside the Global Racks manufacturing shed',
  },
} as const