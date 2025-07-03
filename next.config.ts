import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
  },
  experimental: {
    typedRoutes: false, 
  },
};

export default nextConfig;
