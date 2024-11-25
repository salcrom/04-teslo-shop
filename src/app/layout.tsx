import type { Metadata } from "next";

import { geistMono, geistSans, inter } from "@/config/fonts";
import "./globals.css";
import { Providers } from "@/components";


export const metadata: Metadata = {
  title: {
    template: '%s - Teslo | Shop',
    default: 'Home - Teslo | Shop'
  },
  description: "Una tienda virtual de productos",
};

export default function RootLayout({ children,}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
