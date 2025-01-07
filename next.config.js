/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'social-media-analysis-backend.vercel.app'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        '*.json': ['json']
      }
    }
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://social-media-analysis-backend.vercel.app/:path*'
      }
    ]
  },
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig 