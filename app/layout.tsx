import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Hisako — Technology That Moves Businesses Forward",
    template: "%s | Hisako",
  },
  description:
    "Hisako is a technology company providing software, AI, automation, digital transformation, and infrastructure solutions for organizations.",
  metadataBase: new URL("https://hisako.eu"),
  alternates: {
    canonical: "https://hisako.eu",
  },
  openGraph: {
    title: "Hisako — Technology That Moves Businesses Forward",
    description:
      "Hisako is a technology company providing software, AI, automation, digital transformation, and infrastructure solutions for organizations.",
    url: "https://hisako.eu",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisako — Technology That Moves Businesses Forward",
    description:
      "Hisako is a technology company providing software, AI, automation, digital transformation, and infrastructure solutions for organizations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.jpg" },
    ],
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
        <Nav />
        <main className="pt-16 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
