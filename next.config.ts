import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',  // Use the path pattern to match all image paths
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',  // Use the path pattern to match all image paths
      },
    ],
  },
};

export default nextConfig;
