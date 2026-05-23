export default function StructuredData() {
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
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "AI Agents",
      "Large Language Models",
      "Workflow Automation",
      "LLM Integration",
      "AI Strategy",
      "Machine Learning Systems",
      "Natural Language Processing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Agency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Agents Development",
            "description": "We design and build autonomous AI agents that handle complex, repeatable tasks including research, outreach, operations, and data processing without human intervention.",
            "provider": { "@id": "https://hisako.eu/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflow Automation",
            "description": "We map manual business processes and replace them with intelligent automated pipelines, reducing overhead and increasing operational efficiency.",
            "provider": { "@id": "https://hisako.eu/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLM Integration Services",
            "description": "We integrate large language models including Claude, GPT-4o, Gemini, and open-source models into existing software stacks.",
            "provider": { "@id": "https://hisako.eu/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy Consulting",
            "description": "We help businesses identify where AI creates real leverage, architect the right technical approach, and develop a roadmap for AI implementation.",
            "provider": { "@id": "https://hisako.eu/#organization" }
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hisako.eu/#website",
    "url": "https://hisako.eu",
    "name": "Hisako AI Agency",
    "description": "Custom AI agents, LLM integration, and workflow automation for startups and businesses globally.",
    "publisher": { "@id": "https://hisako.eu/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hisako.eu/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hisako.eu/#service",
    "name": "Hisako AI Agency",
    "image": "https://hisako.eu/og-image.png",
    "url": "https://hisako.eu",
    "description": "AI agency specializing in custom AI agents development, LLM integration, AI workflow automation, and AI strategy consulting for global startups and businesses.",
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Agency",
      "AI Agents Development",
      "LLM Integration",
      "AI Workflow Automation",
      "AI Strategy Consulting"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
