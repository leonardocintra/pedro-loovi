import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import FooterComponent from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diniz Executivo Loovi",
  description: "O seguro auto mais rápido e querido do Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FooterComponent />
        <footer className="text-center mt-10 space-y-4 my-8">
          <div className="text-lg">
            2024 - {new Date().getFullYear()} | Diniz Executivo Loovi
            <br />
            Todos os direitos reservados
          </div>
          <div>
            Desenvolvido por{" "}
            <Link
              href={"https://www.leonardocintra.com.br/"}
              className="underline hover:font-bold"
              target="_blank"
            >
              Leonardo Cintra
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
