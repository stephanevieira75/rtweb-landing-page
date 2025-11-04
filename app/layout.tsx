import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/custom/navbar";
import { NextSectionHandler } from "@/components/custom/next-section-handler";
import FooterSection from "@/components/sections/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " RTWeb - Développement d'applications web et mobiles à Paris",
  description:
    "Nous aidons les entreprises à concevoir, développer et lancer des produits digitaux innovants. Nous proposons aussi nos propres solutions web.",
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
        <Script strategy="lazyOnload" id="glyph-widget">
          {`window.GLYPH_WEBSITE_ID='38c5a0ad-a9fd-467c-aa84-a78b6addfc9e';(function(){d=document;s=d.createElement("script");s.src="https://widget.glyph.chat/g.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>

        <Navbar />

        <NextSectionHandler>
          <main>{children}</main>
        </NextSectionHandler>

        <FooterSection />
      </body>
    </html>
  );
}
