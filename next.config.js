/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.urlcut.app", "uaparser.js.org"],
  },
};

module.exports = nextConfig;
