import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  async redirects() {
    return [
      {
        source: '/blog-listing-page',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/serialization',
        destination: '/aggregation',
        permanent: true,
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
  }
};
export default nextConfig;