import type { NextConfig } from "next";
import { version } from "./package.json";
import withMDX from "@next/mdx";

const withMdx = withMDX({
  extension: /\.mdx?$/,
});

const baseConfig: NextConfig = {
  env: {
    APP_VERSION: version,
  },
  output: "export",
  typescript: {
    // ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMdx(baseConfig);
