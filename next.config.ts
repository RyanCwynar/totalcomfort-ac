import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/totalcomfort-ac",
  assetPrefix: "/totalcomfort-ac/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
