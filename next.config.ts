import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100], // ✅ allow high quality
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gyatanutrition.com",
      },
    ],
  },
};

export default nextConfig;