import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 Force static HTML export
  images: {
    unoptimized: true, // 🔥 Required for GitHub Pages
  },
};

export default nextConfig;
