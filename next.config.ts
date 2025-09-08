import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/research-portfolio',
  assetPrefix: '/research-portfolio',
  images: {
    unoptimized: true
  }
}

export default nextConfig
