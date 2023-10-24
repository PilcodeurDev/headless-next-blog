/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'dist',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        // port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
