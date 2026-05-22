import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hisako — AI Agency",
  description: "Hisako is an AI agency that builds custom AI agents, workflow automation, and intelligent systems for global startups and businesses.",
  openGraph: {
    title: "Hisako — AI Agency",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#000000] text-[#ffffff]`}
      >
        <LazyMotionProvider>
          <Nav />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </LazyMotionProvider>
      </body>
    </html>
  );
}
