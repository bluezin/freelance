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
        source: "/restaurant",
        destination: "https://restaurant-delta-blond-37.vercel.app/restaurant",
      },
      {
        basePath: false,
        source: "/restaurant/:path*",
        destination:
          "https://restaurant-delta-blond-37.vercel.app/restaurant/:path*",
      },
      {
        basePath: false,
        source: "/inmoviliaria",
        destination: "https://inmoviliaria-mauve.vercel.app/inmoviliaria",
      },
      {
        basePath: false,
        source: "/inmoviliaria/:path*",
        destination:
          "https://inmoviliaria-mauve.vercel.app/inmoviliaria/:path*",
      },
    ];
  },
};

export default nextConfig;
