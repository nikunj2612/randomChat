import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aavgo | The Future of Hospitality",
  description: "AI-powered hospitality solutions that enhance guest satisfaction and optimize costs for owners. Smart Reception, Guest Experience Platform, and Staff Operations Platform.",
  keywords: "hospitality, hotels, AI, smart reception, contactless check-in, guest experience, hotel technology",
  authors: [{ name: "Aavgo" }],
  creator: "Aavgo",
  publisher: "Aavgo",
  openGraph: {
    title: "Aavgo | The Future of Hospitality",
    description: "AI-powered hospitality solutions that enhance guest satisfaction and optimize costs for owners.",
    url: "https://aavgo.com",
    siteName: "Aavgo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aavgo | The Future of Hospitality",
    description: "AI-powered hospitality solutions that enhance guest satisfaction and optimize costs for owners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
