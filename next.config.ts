import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc","images.unsplash.com","via.placeholder.com","images.pexels.com" ],
  },
  experimental: {
    typedRoutes: false, 
  },
};

export default nextConfig;
