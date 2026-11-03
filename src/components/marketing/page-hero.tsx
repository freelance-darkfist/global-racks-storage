import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import type * as React from 'react'
import { DotGrid } from '@/components/marketing/dot-grid'
import { cn } from '@/lib/utils'

export type Crumb = { name: string; path?: string }

/**
 * Page hero used on every interior page: navy panel, eyebrow, title, lead and
 * optional breadcrumb trail.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  className,
}: {
  eyebrow: string
  title: string
  lead?: string
  crumbs?: Crumb[]
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden bg-navy-900', className)}>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-transparent"
      />
      <DotGrid tone="white" className="absolute top-10 right-10 hidden lg:grid" />
      <span
        aria-hidden="true"
        className="absolute -right-24 -bottom-32 size-96 rotate-12 rounded-3xl bg-navy-700/60"
      />
      <div className="wrap relative py-16 sm:py-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wide text-navy-200 uppercase">
              {crumbs.map((crumb, i) => (
                <li key={crumb.name} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="size-3.5 text-brand-400" /> : null}
                  {crumb.path ? (
                    <Link to={crumb.path} className="transition-colors hover:text-brand-300">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-brand-300">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="eyebrow text-brand-300">
          {/* <span aria-hidden="true" className="inline-block h-0.5 w-8 bg-brand-400" /> */}
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-pretty text-navy-100 sm:text-lg">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
