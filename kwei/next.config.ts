import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Properly nested under `typescript`
  },
  eslint: {
    ignoreDuringBuilds: true, // Optionally disable ESLint errors during builds
  },
};

export default nextConfig;
