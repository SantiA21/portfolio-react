/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 NUEVO
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
