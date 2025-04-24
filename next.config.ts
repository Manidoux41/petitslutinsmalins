/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    serverActions: true, // ✅ CORRECT
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "images.unsplash.com"],
  },
}

module.exports = nextConfig
