/**
 * Renders a JSON-LD structured-data block. Placed in the route body so it
 * ships in the prerendered/SSR HTML for search engines.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
