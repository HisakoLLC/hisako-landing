import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'About Hisako | AI Agency & Tech Studio',
  description: 'Hisako Technologies Limited is an AI agency founded in 2024 and headquartered in Nairobi, Kenya.',
  alternates: { canonical: 'https://hisako.eu/about' },
  other: {
    'ai-content-declaration': 'human-authored',
  }
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hisako.eu/#organization",
    "name": "Hisako Technologies Limited",
    "alternateName": ["Hisako", "Hisako AI", "Hisako AI Agency"],
    "url": "https://hisako.eu",
    "logo": "https://hisako.eu/logo.png",
    "description": "Hisako is an AI agency that designs and deploys custom AI agents, LLM integrations, and workflow automation systems for startups and businesses globally.",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "name": "Nairobi, Kenya"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@hisako.eu",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hisakotech",
      "https://github.com/hisakotech"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Nav />
      <main className="w-full bg-[#0A0A0A] min-h-screen">
        <section style={{ padding: '160px 0' }} className="w-full max-w-3xl mx-auto px-6">
          <h1 
            className="text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '72px', lineHeight: '1', marginBottom: '40px' }}
          >
            About Hisako
          </h1>
          
          <div 
            className="text-[#666]" 
            style={{ 
              fontSize: '16px', 
              fontFamily: 'var(--font-dm-sans), sans-serif', 
              lineHeight: '1.85',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <p>
              Hisako Technologies Limited is an AI agency founded in 2024 and headquartered in Nairobi, Kenya. The company designs, builds, and deploys custom AI systems for startups and businesses globally.
            </p>
            <p>
              Hisako&apos;s core services include custom AI agents development, AI workflow automation, LLM integration into existing software products, and AI strategy consulting. The company is model-agnostic, working with Anthropic Claude, OpenAI GPT-4o, Google Gemini, and open-source large language models.
            </p>
            <p>
              Hisako operates as both an AI agency serving external clients and a product studio that builds and owns its own AI-powered software products, including VendoFlow, a retail management platform built on AI-native architecture.
            </p>
            <p>
              The company&apos;s engagement methodology consists of four phases: Discover (operations audit and AI opportunity mapping), Architect (system design before any code is written), Build (fast iteration with working systems in weeks), and Deploy & Evolve (production deployment with ongoing improvement).
            </p>
            <p style={{ marginTop: '16px', paddingTop: '24px', borderTop: '1px solid #1E1E1E' }}>
              Contact: hello@hisako.eu | Website: hisako.eu
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
