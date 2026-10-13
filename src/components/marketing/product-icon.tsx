import {
  ArrowDownWideNarrow,
  Building,
  Car,
  Factory,
  Flame,
  Forklift,
  Frame,
  Gauge,
  Grid3x3,
  HardHat,
  Layers,
  Move3d,
  MoveHorizontal,
  MoveVertical,
  Package,
  Pill,
  Radio,
  Ruler,
  ShoppingCart,
  Snowflake,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  warehouse: Warehouse,
  layers: Layers,
  'move-horizontal': MoveHorizontal,
  truck: Truck,
  building: Building,
  radio: Radio,
  'move-3d': Move3d,
  frame: Frame,
  'arrow-down-wide-narrow': ArrowDownWideNarrow,
  'grid-3x3': Grid3x3,
  package: Package,
  'move-vertical': MoveVertical,
  gauge: Gauge,
  forklift: Forklift,
  flame: Flame,
  wrench: Wrench,
  ruler: Ruler,
  'hard-hat': HardHat,
  factory: Factory,
  'shopping-cart': ShoppingCart,
  pill: Pill,
  car: Car,
  snowflake: Snowflake,
}

export function ProductIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = iconMap[name] ?? Warehouse
  return <Icon aria-hidden="true" className={className} />
}
