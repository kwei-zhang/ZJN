import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const applications = [
      { prefix: "/interview", key: "INTERVIEW_APP_ORIGIN", value: process.env.INTERVIEW_APP_ORIGIN },
      { prefix: "/career", key: "CAREER_APP_ORIGIN", value: process.env.CAREER_APP_ORIGIN },
    ];
    return {
      beforeFiles: applications.flatMap(({ prefix, key, value }) => {
        const origin = value?.replace(/\/$/, "");
        if (!origin) return [];
        const url = new URL(origin);
        if (url.protocol !== "https:" || url.origin !== origin) {
          throw new Error(`${key} must be the application's HTTPS deployment origin, without a path.`);
        }
        return [
          { source: prefix, destination: `${origin}${prefix}` },
          { source: `${prefix}/:path*`, destination: `${origin}${prefix}/:path*` },
        ];
      }),
    };
  },
};

export default nextConfig;
