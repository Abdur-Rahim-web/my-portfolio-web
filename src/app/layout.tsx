import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://my-portfolio-web-kappa-sepia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Abdur Rahim | Full Stack Developer",
    template: "%s | Abdur Rahim",
  },

  description:
    "Portfolio of Abdur Rahim, a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, and MongoDB.",

  keywords: [
    "Abdur Rahim",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Abdur Rahim",
    },
  ],

  creator: "Abdur Rahim",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abdur Rahim | Full Stack Developer",

    description:
      "Explore the portfolio of Abdur Rahim featuring modern full-stack web applications built with Next.js, TypeScript, Express.js, and MongoDB.",

    url: SITE_URL,

    siteName: "Abdur Rahim Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahim Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Abdur Rahim | Full Stack Developer",

    description:
      "Modern Full Stack Developer Portfolio built with Next.js and TypeScript.",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}