/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clonennetflix.blob.core.windows.net',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
