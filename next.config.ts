// next.config.ts
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "images.unsplash.com", "picsum.photos"],
  },
}

export default nextConfig
