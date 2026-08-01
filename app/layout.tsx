import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Hisako | Venture Studio, Capital & Software',
    template: '%s | Hisako',
  },
  description: 'Hisako is a venture studio, early-stage capital provider, and independent software company.',
  metadataBase: new URL('https://hisako.eu'),
  openGraph: {
    title: 'Hisako | Venture Studio, Capital & Software',
    description: 'Hisako is a venture studio, early-stage capital provider, and independent software company.',
    url: 'https://hisako.eu',
    siteName: 'Hisako',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hisako | Venture Studio, Capital & Software',
    description: 'Hisako is a venture studio, early-stage capital provider, and independent software company.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Nav />
        <main className="pt-14 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
