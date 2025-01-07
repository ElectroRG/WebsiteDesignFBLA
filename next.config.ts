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
  output: "export",  // Enables static exports
  reactStrictMode: true,
  basePath: '/WebsiteDesignFBLA', // Replace 'REPOSITORY_NAME' with your actual GitHub repository name
  assetPrefix: '/WebsiteDesignFBLA/', // Replace 'REPOSITORY_NAME' with your actual GitHub repository name
  trailingSlash: true,  // Ensures proper routing for static pages
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;

export default nextConfig;
