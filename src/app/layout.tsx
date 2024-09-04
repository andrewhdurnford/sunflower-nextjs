import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the Google font 'Inter'
const inter = Inter({ subsets: ["latin"] });

// Define the metadata for SEO and accessibility
export const metadata: Metadata = {
  title: "Sunflower Capital",
  description: "We invest at the earliest stages in companies building foundational picks and shovels infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFF9DE" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
