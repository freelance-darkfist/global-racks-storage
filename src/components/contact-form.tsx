import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheck, Loader2, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { productCategories } from '@/content/products'

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().optional(),
  phone: z.string().min(8, 'Please enter a reachable phone number'),
  email: z.email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please choose an area of interest'),
  message: z.string().min(10, 'Please tell us a little more (at least 10 characters)'),
})

type EnquiryValues = z.infer<typeof enquirySchema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: '', company: '', phone: '', email: '', interest: '', message: '' },
  })

  async function onSubmit(values: EnquiryValues) {
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Enquiry failed: ${response.status}`)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" autoComplete="name" placeholder="Full name" {...register('name')} />
          {errors.name ? <FieldError message={errors.name.message} /> : null}
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name (optional)"
            {...register('company')}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 …"
            {...register('phone')}
          />
          {errors.phone ? <FieldError message={errors.phone.message} /> : null}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            {...register('email')}
          />
          {errors.email ? <FieldError message={errors.email.message} /> : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="interest">I&apos;m interested in *</Label>
          <select
            id="interest"
            className="flex h-11 w-full rounded-xl border border-navy-900/15 bg-white px-4 text-sm text-navy-950 shadow-xs focus-visible:border-brand-500 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-500"
            {...register('interest')}
          >
            <option value="">Select an area…</option>
            {productCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
            <option value="Material Handling Equipment">Material Handling Equipment</option>
            <option value="Fabrication & Custom Metalwork">
              Fabrication &amp; Custom Metalwork
            </option>
            <option value="Other">Other / not sure yet</option>
          </select>
          {errors.interest ? <FieldError message={errors.interest.message} /> : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Requirements *</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Warehouse size, load per pallet, beam heights, timelines…"
            {...register('message')}
          />
          {errors.message ? <FieldError message={errors.message.message} /> : null}
        </div>
      </div>

      {status === 'success' ? (
        <p
          role="status"
          className="mt-6 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700"
        >
          <CircleCheck className="size-5" />
          Thank you — your enquiry has been recorded. Our team will call you back shortly.
        </p>
      ) : null}
      {status === 'error' ? (
        <p
          role="alert"
          className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          <TriangleAlert className="size-5" />
          Something went wrong sending your enquiry. Please call us or try again.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? <Loader2 className="animate-spin" /> : null}
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </Button>
    </form>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
      {message}
    </p>
  )
}
