import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites() {
    return [
      {
        basePath: false,
        source: "/estudio-abogados",
        destination:
          "https://estudio-de-abogados-eosin.vercel.app/estudio-abogados",
      },
      {
        basePath: false,
        source: "/estudio-abogados/:path*",
        destination:
          "https://estudio-de-abogados-eosin.vercel.app/estudio-abogados/:path*",
      },
      {
        basePath: false,
        source: "/restaurant/:path*",
        destination:
          "https://restaurant-delta-blond-37.vercel.app/restaurant:path*",
      },
    ];
  },
};

export default nextConfig;
