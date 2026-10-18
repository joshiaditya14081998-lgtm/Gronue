import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Groneu Healthcare — Crafted with care. Built for trust.",
  description:
    "Groneu Healthcare is a leading manufacturer of sanitary napkins in Palanpur, Gujarat. White-label & contract manufacturing plus own-brand products. GST & IEC registered, export-ready.",
  keywords: [
    "Groneu Healthcare",
    "sanitary napkins manufacturer",
    "sanitary pads",
    "white label manufacturing",
    "contract manufacturing",
    "Palanpur Gujarat",
    "feminine hygiene India",
  ],
  authors: [{ name: "Groneu Healthcare" }],
  icons: {
    icon: "/assets/brand/Groneu-logo.png",
  },
  openGraph: {
    title: "Groneu Healthcare — Crafted with care. Built for trust.",
    description:
      "Leading manufacturer of sanitary napkins in Palanpur, Gujarat. White-label + own-brand. 600K pcs/day capacity.",
    url: "https://www.groneuhealthcare.com",
    siteName: "Groneu Healthcare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groneu Healthcare",
    description: "Pioneering care since 2022. Sanitary napkin manufacturer in Palanpur, Gujarat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
