import type * as React from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  className,
}: {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'eyebrow mb-3',
            tone === 'light' ? 'text-brand-300' : 'text-brand-600',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-block h-0.5 w-8',
              tone === 'light' ? 'bg-brand-300' : 'bg-brand-500',
            )}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl',
          tone === 'light' ? 'text-white' : 'text-navy-950',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            tone === 'light' ? 'text-navy-100' : 'text-steel-600',
          )}
        >
          {lead}
        </p>
      ) : null}
      {align === 'left' ? (
        <span aria-hidden="true" className="mt-5 block h-1 w-16 rounded-full bg-brand-500" />
      ) : null}
    </div>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('eyebrow text-brand-600', className)}>
      <span aria-hidden="true" className="inline-block h-0.5 w-8 bg-brand-500" />
      {children}
    </p>
  )
}
