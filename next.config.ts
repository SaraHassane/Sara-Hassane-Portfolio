import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,  // Add this line to ignore TypeScript errors during build
  },
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com'
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;