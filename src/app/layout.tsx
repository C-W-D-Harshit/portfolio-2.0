import LayoutProvider from "@/components/layout/LayoutProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "typeface-poppins";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Harshit Sharma",
  description: "Harshit Sharma - A Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F7VWJTHCXQ"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F7VWJTHCXQ');
        `}
        </Script>
      </body>
    </html>
  );
}
