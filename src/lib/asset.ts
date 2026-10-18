// src/lib/asset.ts
// Helper for prefixing asset paths with basePath (for GitHub Pages subpath hosting)
// In dev/preview: basePath is empty → paths are root-relative (works with next dev)
// On GitHub Pages: basePath is "/Gronue" → set via NEXT_PUBLIC_BASE_PATH in workflow

export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path}`
}
