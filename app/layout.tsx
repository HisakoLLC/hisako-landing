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
    default: 'Hisako — B2B AI Automation Agency | Autonomous Pipelines for Business Operations',
    template: '%s | Hisako',
  },

  description: 'Hisako builds autonomous AI pipelines that replace manual B2B operations. Lead automation, client onboarding, sales pipelines, and internal ops — built in n8n, Make, and custom code for startups globally.',

  keywords: [
    'B2B AI automation',
    'AI automation agency',
    'autonomous pipelines',
    'n8n agency',
    'Make automation agency',
    'lead qualification automation',
    'client onboarding automation',
    'sales pipeline automation',
    'AI workflow automation',
    'business operations automation',
    'LLM integration',
    'AI agents for business',
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
    title: 'Hisako — B2B AI Automation Agency | Autonomous Pipelines for Business Operations',
    description: 'Hisako builds autonomous AI pipelines that replace manual B2B operations. Lead automation, client onboarding, sales pipelines, and internal ops — built in n8n, Make, and custom code for startups globally.',
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
    title: 'Hisako — B2B AI Automation Agency | Autonomous Pipelines for Business Operations',
    description: 'Hisako builds autonomous AI pipelines that replace manual B2B operations. Lead automation, client onboarding, sales pipelines, and internal ops — built in n8n, Make, and custom code for startups globally.',
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hisako.eu" />
        <meta name="theme-color" content="#FFFFFF" />
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
