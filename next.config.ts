import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const origin = process.env.INTERVIEW_APP_ORIGIN?.replace(/\/$/, "");
    if (!origin) return [];
    const url = new URL(origin);
    if (url.protocol !== "https:" || url.origin !== origin) {
      throw new Error("INTERVIEW_APP_ORIGIN must be the Interview Pal HTTPS deployment origin, without a path.");
    }
    return {
      beforeFiles: [
        {source: "/interview", destination: `${origin}/interview`},
        {source: "/interview/:path*", destination: `${origin}/interview/:path*`},
      ],
    };
  },
};

export default nextConfig;
