/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true, // This enables strict mode for React
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false, // Disable the use of 'fs' module for the client-side
          path: false, // Disable the use of 'path' module for the client-side
        }
      }
      return config;
    },
  }
  