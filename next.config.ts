/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignorer les erreurs ESLint pendant le build sur Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionnellement, ignorer aussi les erreurs TypeScript pendant le build
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  }
};

module.exports = nextConfig;