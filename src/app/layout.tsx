import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Sunflower Capital",
  description:
    "We partner at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world.",
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Basic Meta Tags */}
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, height=device-height, viewport-fit=cover, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta
          name="description"
          content="We partner at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world."
        />
        <meta
          name="keywords"
          content="venture capital, early-stage investments, startup funding, infrastructure investments, Sunflower Capital, Liu Jiang"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://sunflowercapital.co" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:description" content="We partner at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world." />
        <meta property="og:site_name" content="Sunflower Capital" />
        <meta property="og:title" content="Sunflower Capital" />
        <meta property="og:image" content="https://sunflowercapital.co/images/og-image.png" />
        <meta name="og:image:alt" content="Sunflower Capital - Investing in Early-Stage Companies" />
        <meta property="og:url" content="https://sunflowercapital.co" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sunflower Capital" />
        <meta
          name="twitter:description"
          content="We partner at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world."
        />
        <meta name="twitter:image" content="https://sunflowercapital.co/images/og-image.png" />
        <meta name="twitter:image:alt" content="Sunflower Capital - Investing in Early-Stage Infrastructure" />

        {/* Preload Fonts for Better Performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sunflower Capital",
              url: "https://sunflowercapital.co",
              logo: "https://sunflowercapital.co/images/logo.png",
              description:
                "We partner at the earliest stage with companies building foundational infrastructure for modern enterprises, critical industries, and the physical world.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "liu@sunflowercapital.co",
                contactType: "Inquiries",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-offwhite`}>
        <main role="main" className="min-h-screen flex flex-col items-center justify-center">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
