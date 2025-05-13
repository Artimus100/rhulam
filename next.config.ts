import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for additional checks during development
  swcMinify: true, // Enables the SWC-based minifier for faster builds
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Add file extensions Next.js should consider as pages
  images: {
    domains: ['example.com', 'another-domain.com'], // Add any domains you want to load images from
  },
  eslint: {
    ignoreDuringBuilds: true, // Option to skip ESLint checks during builds (useful for production)
  },
  i18n: {
    locales: ['en', 'fr', 'de'], // Example of multilingual setup (add locales as needed)
    defaultLocale: 'en',
  },
  experimental: {
    // Removed 'appDir' as it is not a valid property of 'ExperimentalConfig'
  },
};

export default nextConfig;
