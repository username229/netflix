/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clonennetflix.blob.core.windows.net",
        pathname: "/images/**"
      }
    ]
  }

};
export default nextConfig;
