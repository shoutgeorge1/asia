import type { NextConfig } from "next";

const LIVE_PROTOTYPE = "https://asia-wagyu-growth.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wagyushop.com",
        pathname: "/cdn/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/landing/vip",
        destination: `${LIVE_PROTOTYPE}/landing/vip`,
        permanent: false,
      },
      {
        source: "/landing/gifting",
        destination: `${LIVE_PROTOTYPE}/landing/gifting`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
