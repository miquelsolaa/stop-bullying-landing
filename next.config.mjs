import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  // Ignorar errors de tipus i linting durant el build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimitzacions de cache i rendiment
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Configuració per a errors
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stopbullyingmobbing.com',
      },
      {
        protocol: 'http',
        hostname: 'stopbullyingmobbing.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Permet qualsevol hostname HTTPS
      },
      {
        protocol: 'http',
        hostname: '**', // Permet qualsevol hostname HTTP
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 any
    unoptimized: true, // Permet imatges sense optimitzar de la carpeta public
    loader: 'default',
  },
  // Configuració de cache per a fitxers estàtics
  async headers() {
    return [
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/blog/:locale/:slug',
        destination: '/api/blog/:locale/:slug',
      },
    ];
  },
};

export default withNextIntl(nextConfig);