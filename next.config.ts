import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mxcrbn.com',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
