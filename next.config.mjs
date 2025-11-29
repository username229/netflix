/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: "standalone",
};

export default nextConfig;
