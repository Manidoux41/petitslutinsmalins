const nextConfig = {
  experimental: {
    serverActions: true, // ✅ CORRECT
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "images.unsplash.com"],
  },
}

export default nextConfig
