import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost"],
  devIndicators: false,
  distDir: "build",
};

export default nextConfig;
