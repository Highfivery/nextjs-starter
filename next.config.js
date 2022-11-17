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
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "./app/components"
    );

    return config;
  },
};

module.exports = nextConfig;
