/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/NatalyEllen',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
