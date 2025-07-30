import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
