import { Link } from '@tanstack/react-router'
import { ArrowRight, Phone } from 'lucide-react'
import { DotGrid } from '@/components/marketing/dot-grid'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export function CtaBand({
  title = 'Ready to optimise your warehouse space?',
  lead = 'Share your layout and load requirements. Our team will design, fabricate and install a storage system built around your operation.',
  className,
}: {
  title?: string
  lead?: string
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden bg-navy-800', className)}>
      <DotGrid tone="white" className="absolute -top-6 right-8 hidden md:grid" />
      <span
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 size-56 rounded-full bg-brand-500/20 blur-2xl"
      />
      <div className="wrap relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-navy-100 sm:text-lg">
            {lead}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/contact" className={buttonVariants({ variant: 'default', size: 'lg' })}>
            Get a free quote
            <ArrowRight />
          </Link>
          <a
            href={site.contact.phoneHref}
            className={buttonVariants({ variant: 'light', size: 'lg' })}
          >
            <Phone />
            {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
