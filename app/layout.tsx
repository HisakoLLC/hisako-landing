import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hisako Technologies — Software Agency & Product Studio",
  description: "Building the systems that power modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0A0A] text-[#F5F5F0]`}
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
