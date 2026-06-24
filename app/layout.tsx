import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// meta data just for search engine optimization to handle speed and performance of web application

export const metadata: Metadata = {
  metadataBase: new URL("https://hubertgreenefy-frontend.vercel.app"),

  title: {
    default: "HubertGreenefy | Cleaning Services",
    template: "%s | HubertGreenefy",
  },

  description:
    "Professional residential and commercial cleaning services. Reliable, affordable, and high-quality cleaning solutions for homes, offices, and facilities.",

  keywords: [
    "cleaning services",
    "commercial cleaning",
    "residential cleaning",
    "office cleaning",
    "facility cleaning",
    "deep cleaning",
    "snow cleaning",
  ],

  authors: [{ name: "HubertGreenefy" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "HubertGreenefy Cleaning Services",
    description:
      "Professional residential and commercial cleaning services.",
    url: "https://hubertgreenefy-frontend.vercel.app",
    siteName: "HubertGreenefy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HubertGreenefy Cleaning Services",
    description:
      "Professional residential and commercial cleaning services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
