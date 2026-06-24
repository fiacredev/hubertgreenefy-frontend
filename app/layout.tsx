import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Professional Cleaning & Snow Removal Services | HubertGreenefy",
  description:
    "Professional cleaning services for homes, offices, and commercial facilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}