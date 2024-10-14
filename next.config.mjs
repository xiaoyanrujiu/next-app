import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 客户端端打包时，添加 MiniCssExtractPlugin
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        })
      );
    }

    return config;
  },
};

export default nextConfig;
