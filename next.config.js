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
    config.resolve.alias["@"] = path.resolve(__dirname, ".");

    console.log(config.resolve.alias);

    return config;
  },
};

module.exports = nextConfig;
