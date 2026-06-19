import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Recomandat pentru export static pe Cloudflare
  },
};

export default nextConfig;