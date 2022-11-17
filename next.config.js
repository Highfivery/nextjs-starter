const { resolve } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  resolve: {
    alias: {
      "@": resolve("."),
    },
  },
};

module.exports = nextConfig;
