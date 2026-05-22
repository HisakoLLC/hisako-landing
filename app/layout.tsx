import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
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
        className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LazyMotionProvider>
          {children}
        </LazyMotionProvider>
      </body>
    </html>
  );
}
