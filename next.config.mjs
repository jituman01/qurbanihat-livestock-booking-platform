/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        hostname: 'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;