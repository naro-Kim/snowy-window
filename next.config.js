/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: `/_next/static/sounds/`,
          outputPath: `${options.isServer ? "../" : ""}static/sounds/`,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
