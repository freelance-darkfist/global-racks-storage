import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-brand-500 text-white shadow-card hover:bg-brand-600 hover:shadow-lift',
        navy: 'bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:shadow-lift',
        outline:
          'border-2 border-navy-900/15 bg-white text-navy-900 hover:border-brand-500 hover:text-brand-600',
        ghost: 'text-navy-900 hover:bg-navy-900/5',
        light: 'bg-white text-navy-900 shadow-card hover:bg-navy-50 hover:shadow-lift',
      },
      size: {
        default: 'h-11 px-6 text-sm [&_svg]:size-4',
        sm: 'h-9 px-4 text-xs [&_svg]:size-3.5',
        lg: 'h-13 px-8 text-base [&_svg]:size-5',
        icon: 'size-11 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
