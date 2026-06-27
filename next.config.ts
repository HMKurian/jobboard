import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/jobboard",
  assetPrefix: "/jobboard",
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
