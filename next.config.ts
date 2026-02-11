import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darkred-goldfish-510640.hostingersite.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
