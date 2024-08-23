import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyler Randall's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
