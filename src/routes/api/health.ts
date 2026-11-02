import { createServerFileRoute } from '@tanstack/react-start/server'

/**
 * GET /api/health, lightweight health check for Coolify / load-balancers.
 *
 * Returns 200 with a JSON body so container orchestrators and uptime monitors
 * can verify the server is responding without rendering a full page.
 */
export const ServerRoute = createServerFileRoute('/api/health').methods({
  GET: () => {
    return Response.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    })
  },
})
