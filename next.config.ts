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
  },
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // scan all files in the `src/app` directory
    './src/components/**/*.{js,ts,jsx,tsx}', // scan all files in the `src/components` directory
    './src/components/ui/**/*.{js,ts,jsx,tsx}', // scan all files in `src/components/ui` directory
    './public/**/*.{html,js}', // scan any public HTML files (if used)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = nextConfig;

export default nextConfig;
