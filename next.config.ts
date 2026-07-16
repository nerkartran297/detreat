import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "detreat.com.vn",
      },
    ],
  },
};

export default nextConfig;
