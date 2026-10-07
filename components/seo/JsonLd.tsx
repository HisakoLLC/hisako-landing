export interface OrganizationJsonLdProps {
  url?: string
}

export function OrganizationJsonLd({ url = "https://hisako.eu" }: OrganizationJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Hisako",
    legalName: "Hisako",
    url: url,
    logo: `${url}/logo.png`,
    slogan: "Technology that moves businesses forward.",
    description:
      "Hisako is a technology company providing software, AI, automation, digital transformation and infrastructure solutions for organizations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@hisako.eu",
      availableLanguage: ["English"],
    },
    sameAs: [],
    knowsAbout: [
      "Custom Enterprise Software Development",
      "Artificial Intelligence & Machine Learning Integration",
      "Business Process Automation",
      "Digital Transformation",
      "Cloud & Systems Infrastructure",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteJsonLd({ url = "https://hisako.eu" }: { url?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hisako",
    url: url,
    description:
      "Hisako provides enterprise software, AI, automation, digital transformation and infrastructure solutions.",
    publisher: {
      "@type": "Corporation",
      name: "Hisako",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export interface CaseStudyJsonLdProps {
  title: string
  description: string
  slug: string
  category: string
  technologies: string[]
  url?: string
}

export function CaseStudyJsonLd({
  title,
  description,
  slug,
  category,
  technologies,
  url = "https://hisako.eu",
}: CaseStudyJsonLdProps) {
  const pageUrl = `${url}/work/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Corporation",
      name: "Hisako",
      url: url,
    },
    publisher: {
      "@type": "Corporation",
      name: "Hisako",
      url: url,
    },
    about: {
      "@type": "Thing",
      name: category,
    },
    keywords: technologies.join(", "),
  }

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${url}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  )
}
