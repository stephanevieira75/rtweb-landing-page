import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/custom/navbar";
import { NextSectionHandler } from "@/components/custom/next-section-handler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RTWeb",
  description:
    "Nous aidons les entreprises à améliorer leur efficacité en automatisant les tâches, en centralisant le service client, en suivant les performances et en réduisant les coûts de support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NextSectionHandler>
          <main>{children}</main>
        </NextSectionHandler>
      </body>
    </html>
  );
}
