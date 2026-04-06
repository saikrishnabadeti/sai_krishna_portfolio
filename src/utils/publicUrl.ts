/**
 * Paths for files in `/public`. Uses Vite `base` so assets work on GitHub Pages
 * project sites (e.g. /repo-name/).
 */
export function publicUrl(assetPath: string): string {
  const base = import.meta.env.BASE_URL
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const path = assetPath.replace(/^\/+/, '')
  return `${normalizedBase}${path}`
}
