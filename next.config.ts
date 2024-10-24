import type { NextConfig } from "next";

// const isDev = process?.env?.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: 'blazers-ticket-simulator',
  assetPrefix: '/blazers-ticket-simulator/',
  images: {
    unoptimized: true, 
  }
};

export default nextConfig;
