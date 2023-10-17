/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
