import type { NextConfig } from "next";

// Static export is ONLY needed for GitHub Pages deployment.
// Local dev (next dev) must NOT use output: "export" — it breaks the dev server.
// We detect the GitHub Actions environment via NEXT_PUBLIC_DEPLOY_TARGET env var
// (set in .github/workflows/deploy.yml).
const isStaticExport = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Gronue";

const nextConfig: NextConfig = {
  // Only enable static export for GitHub Pages builds
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: `/${repo}`,
        trailingSlash: true,
      }
    : {
        output: "standalone" as const,
      }),
  // Disable image optimization (needed for static export; harmless for dev)
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
