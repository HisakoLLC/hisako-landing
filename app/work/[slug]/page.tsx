import { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/lib/case-studies-data"
import { CaseStudyTemplate } from "@/components/templates/CaseStudyTemplate"
import { CaseStudyJsonLd } from "@/components/seo/JsonLd"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  const pageUrl = `https://hisako.eu/work/${slug}`

  return {
    title: `${caseStudy.name} — Project Portfolio | Hisako`,
    description: caseStudy.shortDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${caseStudy.name} — Hisako Project Portfolio`,
      description: caseStudy.shortDescription,
      url: pageUrl,
      type: "article",
      siteName: "Hisako",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.name} — Hisako Project Portfolio`,
      description: caseStudy.shortDescription,
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <CaseStudyJsonLd
        title={caseStudy.name}
        description={caseStudy.shortDescription}
        slug={caseStudy.slug}
        category={caseStudy.category}
        technologies={caseStudy.technologies}
      />
      <CaseStudyTemplate caseStudy={caseStudy} />
    </>
  )
}
