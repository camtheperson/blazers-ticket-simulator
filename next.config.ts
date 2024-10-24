import type { NextConfig } from "next";

const isDev = process?.env?.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isDev ? '' : '/blazers-ticket-simulator',
  assetPrefix: isDev ? '' : '/blazers-ticket-simulator/',
  images: {
    unoptimized: true, 
  }
};

export default nextConfig;
