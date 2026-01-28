import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
