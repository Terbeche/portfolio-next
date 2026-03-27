import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the root to the current directory to avoid workspace inference issues
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats-mostefa.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-streak-stats-872a078eb92b.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
};

export default nextConfig;
