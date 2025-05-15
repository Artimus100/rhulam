import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,
};

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
});

export default nextConfig;
