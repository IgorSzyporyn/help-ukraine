/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pwa: {
    dest: "public",
  },
}

module.exports = withPWA(nextConfig)
