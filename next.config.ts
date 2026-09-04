import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "athens-city";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
