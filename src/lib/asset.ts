// src/lib/asset.ts
// Helper for prefixing asset paths with basePath (for GitHub Pages subpath hosting)
// In dev/preview: NEXT_PUBLIC_BASE_PATH is empty → paths are root-relative
// On GitHub Pages: NEXT_PUBLIC_BASE_PATH is set to "/Gronue" in workflow

export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path}`
}
