/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    swcMinify: true,
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      formats: ['image/avif', 'image/webp'],
      domains: ['images.unsplash.com'],
      remotePatterns: [
        { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**', },
      ],
    },
}

module.exports = nextConfig
