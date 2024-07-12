import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "FequerTransportes",
  description: "Projeto Fequer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <body className={roboto.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
