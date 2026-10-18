import type { NextConfig } from "next";

// Detect GitHub Pages repo name for basePath.
// Repo: joshiaditya14081998-lgtm/Gronue → basePath: "/Gronue"
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Gronue";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no server needed — site is fully client-side)
  output: "export",
  // basePath for GitHub Pages project sites (https://user.github.io/<repo>)
  basePath: isGitHubPages ? `/${repo}` : "",
  // Use trailing slashes for static hosting compatibility
  trailingSlash: true,
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
