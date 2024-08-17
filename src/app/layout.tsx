import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Search from "./components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothes Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
