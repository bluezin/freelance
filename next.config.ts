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
    ];
  },
};

export default nextConfig;
