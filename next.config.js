/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  // Add any other Next.js config options you need
}

module.exports = nextConfig 