import { createServerFileRoute } from '@tanstack/react-start/server'
import { z } from 'zod'

const enquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(8),
  email: z.email(),
  interest: z.string().min(1),
  message: z.string().min(10),
})

/**
 * POST /api/contact, receives the website enquiry form.
 *
 * TODO(integration): forward validated enquiries to the client's inbox/CRM
 * (SMTP relay, Resend, or a CRM webhook). Until then enquiries are logged
 * server-side so no lead is silently dropped.
 */
export const ServerRoute = createServerFileRoute('/api/contact').methods({
  POST: async ({ request }) => {
    const body: unknown = await request.json().catch(() => null)
    const parsed = enquirySchema.safeParse(body)
    if (!parsed.success) {
      return Response.json(
        { ok: false, issues: parsed.error.issues },
        { status: 422 },
      )
    }
    console.info('[enquiry]', JSON.stringify(parsed.data))
    return Response.json({ ok: true, receivedAt: new Date().toISOString() })
  },
})
