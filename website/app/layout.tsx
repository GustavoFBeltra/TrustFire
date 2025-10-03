import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustFire - Safe, Legal, Simple Firearm Transfers",
  description: "Facilitating legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations.",
  keywords: ["firearm transfer", "FFL", "gun sales", "legal compliance", "firearm marketplace"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
