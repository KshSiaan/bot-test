import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push(
        "discord.js",
        "discord.js/rest",
        "@discordjs/rest",
        "@discordjs/ws",
        "zlib-sync",
      );
    }
    return config;
  },
};

export default nextConfig;
