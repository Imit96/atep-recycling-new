/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ateprecycling.com',
      }
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  poweredByHeader: false,
  reactStrictMode: false, // Disable strict mode to prevent double transitions
  swcMinify: true,
};

module.exports = nextConfig;
