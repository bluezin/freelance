import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuDev | Desarrollo web para tu negocio",
  description:
    "Desarrollo web independiente. Creo sitios web modernos, rápidos y atractivos para emprendedores y pequeñas empresas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}