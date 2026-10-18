import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Asme — Know it all",
  description: "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.",
  keywords: ["Asme", "innovation", "design", "strategy", "newsletter"],
  authors: [{ name: "Asme" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Asme — Know it all",
    description: "Pioneering ideas for minds that create, build, and inspire.",
    url: "https://chat.z.ai",
    siteName: "Asme",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asme — Know it all",
    description: "Pioneering ideas for minds that create, build, and inspire.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
