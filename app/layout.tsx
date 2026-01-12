import type { Metadata, Viewport } from "next";
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

const meta = {
  title: "Default title",
  description: "Default description",
  url: "https://jemeni.vercel.app/",
  name: "Emmanuel C. Jemeni",
  image: "https://jemeni.vercel.app/opengraph-image.jpg",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | App Name",
  },
  description: meta.description,
  keywords: ["keywords"],
  creator: meta.name,
  metadataBase: new URL(meta.url),
  openGraph: {
    title: meta.title,
    url: meta.url,
    siteName: "vercel.app",
    locale: "en-US",
    type: "website",
    images: meta.image,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    site: meta.url,
    description: meta.description,
    creator: "@Jemeni11_",
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
};

export const viewport: Viewport = {
  themeColor: "theme-color",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
