import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import StructuredData from "@/components/StructuredData";

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
  metadataBase: new URL('https://hisako.eu'),

  title: {
    default: 'Hisako — AI Agency | Custom AI Agents & Automation Systems',
    template: '%s | Hisako AI Agency',
  },

  description: 'Hisako is an AI agency that builds custom AI agents, LLM integrations, and workflow automation systems for startups and businesses globally. Strategy to deployment.',

  keywords: [
    'AI agency',
    'AI automation agency',
    'AI agents development',
    'LLM integration services',
    'AI strategy consulting',
    'custom AI agents',
    'AI workflow automation',
    'build AI agents',
    'AI systems development',
    'artificial intelligence agency',
  ],

  authors: [{ name: 'Hisako Technologies Limited', url: 'https://hisako.eu' }],
  creator: 'Hisako Technologies Limited',
  publisher: 'Hisako Technologies Limited',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hisako.eu',
    siteName: 'Hisako AI Agency',
    title: 'Hisako — AI Agency | Custom AI Agents & Automation Systems',
    description: 'We design and deploy custom AI systems for businesses that want to operate at a different level. AI agents, LLM integration, workflow automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hisako — AI Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hisako — AI Agency | Custom AI Agents & Automation Systems',
    description: 'Custom AI agents, LLM integration, and workflow automation for startups and businesses globally.',
    images: ['/og-image.png'],
    creator: '@hisakoeu',
  },

  alternates: {
    canonical: 'https://hisako.eu',
  },

  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },

  category: 'technology',
  
  other: {
    'ai-content-declaration': 'human-authored',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://hisako.eu" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
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
