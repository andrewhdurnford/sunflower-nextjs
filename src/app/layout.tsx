import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FFF9DE" />
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
        <meta name="viewport" content="initial-scale=0.9, width=device-width, height=device-height, viewport-fit=cover, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
