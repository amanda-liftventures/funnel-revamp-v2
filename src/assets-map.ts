/**
 * Resolves the '/assets/...' paths used in funnel.json and the screen
 * components to bundled asset URLs. Keeping assets as modules (instead of
 * public/) lets the single-file prototype build inline every image.
 */
const modules = import.meta.glob('./funnel-assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function asset(path: string): string {
  return modules[path.replace(/^\/assets/, './funnel-assets')] ?? path
}
