/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "image.shutterstock.com",
      "media-cdn.tripadvisor.com",
      "cdn.tripadvisor.com",
      "images.adsttc.com",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
