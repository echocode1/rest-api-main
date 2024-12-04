/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flagcdn.com", // Add this line to allow flagcdn.com images
      // Add other domains if you have additional external image sources
      // 'example.com',
    ],
  },
  // Optional: Add other configuration as needed
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
