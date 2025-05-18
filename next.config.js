/** @type {import('next').NextConfig} */

const nextConfig = {
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

module.exports = nextConfig;
