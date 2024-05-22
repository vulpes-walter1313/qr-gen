import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free QR Code Generator",
  description: "This is a simple and free qr code generator. No CC or email required!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="qrgen.iamvosram.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
