import LayoutProvider from "@/components/layout/LayoutProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "typeface-poppins";

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
      </body>
    </html>
  );
}
