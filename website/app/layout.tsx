import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TrustFire - Safe, Legal, Simple Firearm Transfers",
  description: "Facilitating legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations.",
  keywords: ["firearm transfer", "FFL", "gun sales", "legal compliance", "firearm marketplace"],
  icons: {
    icon: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'TrustFire - Safe, Legal, Simple Firearm Transfers',
    description: 'Facilitating legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations.',
    siteName: 'TrustFire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrustFire - Safe, Legal, Simple Firearm Transfers',
    description: 'Facilitating legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
