import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites() {
    return [
      {
        basePath: false,
        source: "/estudio-abogados/:path*",
        destination:
          "https://estudio-de-abogados-eosin.vercel.app/estudio-abogados/:path*",
      },
    ];
  },
};

export default nextConfig;
