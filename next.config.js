const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    console.log(config.resolve);
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "."),
    };

    return config;
  },
};

module.exports = nextConfig;
