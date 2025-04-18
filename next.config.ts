import type { NextConfig } from "next";
import { version } from './package.json';


const nextConfig: NextConfig = {
  env: {
    APP_VERSION: version,
  },
  output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "",
    //   },
    // ],
  },
  // if used turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
