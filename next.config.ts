import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.dog.ceo'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dog.ceo',
      },
    ],
  },
};

export default nextConfig;
