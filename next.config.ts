/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Active les Server Actions
  },
  images: {
    domains: ["cdn.shopify.com", "images.unsplash.com"], // adapte si tu utilises d'autres domaines
  },
  reactStrictMode: true,
}

export default nextConfig
