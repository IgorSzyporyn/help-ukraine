/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  compiler: {
    styledComponents: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    }
  },
}

module.exports = nextConfig
