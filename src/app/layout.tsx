import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Carrega as fontes utilizadas globalmente pela aplicação.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata padrão da aplicação.
// As páginas de artigos podem sobrescrever esses valores com generateMetadata.
export const metadata: Metadata = {
  title: "DevLog",
  description: "Blog de artigos sobre tecnologia e desenvolvimento.",
};

// Layout raiz compartilhado por todas as páginas da aplicação.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
