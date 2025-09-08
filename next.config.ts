/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 generates static HTML export
  images: {
    unoptimized: true, // since Next Image optimization won’t work on GH Pages
  },
  basePath: "/research-portfolio", // 👈 required if your repo is not <username>.github.io
  assetPrefix: "/research-portfolio/",
};

module.exports = nextConfig;
