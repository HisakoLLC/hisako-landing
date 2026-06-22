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
    default: 'Hisako Technologies',
    template: '%s | Hisako Technologies',
  },
  description: 'We build software products that solve hard problems. Three products, one team, one mission.',
  metadataBase: new URL('https://hisako.eu'),
  openGraph: {
    title: 'Hisako Technologies',
    description: 'We build software products that solve hard problems.',
    url: 'https://hisako.eu',
    siteName: 'Hisako Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hisako Technologies',
    description: 'We build software products that solve hard problems.',
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
