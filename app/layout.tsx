import { Header, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CardProvider } from "@/context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CartFash - E-Commerce",
  description: "CartFash E-Commerce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProvider>
          <Header />
          {children}
          <Footer />
        </CardProvider>
      </body>
    </html>
  );
}
