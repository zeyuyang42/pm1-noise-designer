import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FixedLogos from "./components/fixed-logos";

import dynamic from 'next/dynamic'
 
// const FixedLogos = dynamic(() => import('./components/fixed-logos'), { ssr: false })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pm1 noise designer",
  description: "Designed by the peace company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-bg-gray-dark to-bg-gray-light`}
      >
        {children}
        <FixedLogos />
      </body>
    </html>
  );
}
