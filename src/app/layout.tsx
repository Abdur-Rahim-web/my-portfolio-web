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

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR_PORTFOLIO_DOMAIN.vercel.app"),

  title: {
    default: "Abdur Rahim | Full Stack Developer",
    template: "%s | Abdur Rahim",
  },

  description:
    "Portfolio of Abdur Rahim, a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, and MongoDB.",

  keywords: [
    "Abdur Rahim",
    "Full Stack Developer",
    "Frontend Developer",
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

  openGraph: {
    title: "Abdur Rahim | Full Stack Developer",

    description:
      "Modern Full Stack Developer Portfolio built with Next.js and TypeScript.",

    url: "https://YOUR_PORTFOLIO_DOMAIN.vercel.app",

    siteName: "Abdur Rahim Portfolio",

    locale: "en_US",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}