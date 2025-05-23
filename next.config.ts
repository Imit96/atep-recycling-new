import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'ateprecycling.com',
      }
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
