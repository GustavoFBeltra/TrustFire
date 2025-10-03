import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustFire - Safe, Legal, Simple Firearm Transfers",
  description: "Facilitating legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations.",
  keywords: ["firearm transfer", "FFL", "gun sales", "legal compliance", "firearm marketplace"],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
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
