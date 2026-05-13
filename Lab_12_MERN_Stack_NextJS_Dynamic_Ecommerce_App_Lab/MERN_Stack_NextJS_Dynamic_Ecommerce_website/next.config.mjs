/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  devIndicators: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
