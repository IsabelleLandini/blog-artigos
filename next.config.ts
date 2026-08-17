import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploadas.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
