import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/board-game-card-reference",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
