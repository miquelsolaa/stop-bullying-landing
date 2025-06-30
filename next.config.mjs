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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permet qualsevol hostname
      },
      {
        protocol: 'http',
        hostname: '**', // També permet HTTP per si de cas
      },
    ],
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