import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Beratung-Haas',
  assetPrefix: '/Beratung-Haas',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

export default nextConfig
