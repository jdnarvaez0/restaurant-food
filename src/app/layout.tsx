import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notitication from "@/components/Notitication";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kentucky Pizza",
  description: "La mejor Pizza de Buenos Aires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notitication />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
