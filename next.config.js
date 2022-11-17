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
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "./app/components"
    );

    config.resolve.alias["@/functions"] = path.resolve(
      __dirname,
      "./functions"
    );

    config.resolve.alias["@/lib"] = path.resolve(__dirname, "./lib");

    config.resolve.alias["@/scss"] = path.resolve(__dirname, "./scss");

    config.resolve.alias["@/app"] = path.resolve(__dirname, "./app");

    return config;
  },
};

module.exports = nextConfig;
