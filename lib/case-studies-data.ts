export type ProjectType =
  | "Software"
  | "AI"
  | "Automation"
  | "Infrastructure"
  | "Digital transformation"

export interface CaseStudy {
  slug: string
  name: string
  category: string
  projectType: ProjectType
  oneLiner: string
  image: {
    src: string
    alt: string
    contain?: boolean
  }
  overview: string
  problem: string
  approach: string
  solution: string
  technologies: string[]
  keyCapabilities: string[]
  verifiedResults?: {
    metric?: string
    label: string
    description: string
  }[]
  galleryImages: {
    label: string
    src?: string
    aspectRatio?: "16/9" | "4/3" | "1/1"
  }[]
  nextProjectSlug: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-agency-operations",
    name: "AI Agency Operations Platform",
    category: "AI / Business Operations",
    projectType: "AI",
    oneLiner:
      "A centralized operating system combining CRM, proposal generation, invoicing, and autonomous workflow coordination for modern agencies.",
    image: {
      src: "/images/ai-agency-abstract.png",
      alt: "AI Agency Operations Platform visual - Abstract Color Harmony",
      contain: false,
    },
    overview:
      "Modern professional service agencies often operate across fragmented stacks — juggling separate tools for prospecting, contracts, time tracking, client communication, and accounting. Hisako engineered an integrated operating platform designed to consolidate agency operations and automate repetitive administrative cycles.",
    problem:
      "Manual coordination between distinct software suites caused operational latency, frequent data discrepancies across departments, and hundreds of lost administrative hours spent reconciling client pipelines, contracts, and project delivery milestones.",
    approach:
      "We audited end-to-end agency workflows, identifying repetitive manual tasks that could be governed by event-driven automation. We selected a modular microservices architecture with a unified relational data layer, allowing role-based access for operators, executives, and clients.",
    solution:
      "A unified web application integrating automated proposal-to-invoice pipelines, intelligent task routing, client onboarding workflows, and structured reporting. Embedded automation agents handle document extraction, status reconciliation, and routine client communication.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST & Webhooks API",
      "Automated Agent Frameworks",
    ],
    keyCapabilities: [
      "Unified client CRM and deal-stage lifecycle tracking",
      "Automated proposal-to-contract generation and signature routing",
      "Real-time project milestone tracking and time allocation",
      "Autonomous workflow agents for routine administrative tasks",
      "Integrated multi-currency invoicing and receivables dashboard",
    ],
    verifiedResults: [
      {
        label: "Consolidated Operations",
        description:
          "Replaced five disconnected software subscriptions with a single, synchronized technical core.",
      },
      {
        label: "Automated Onboarding",
        description:
          "Reduced client contract-to-kickoff lead times through end-to-end document automation.",
      },
    ],
    galleryImages: [
      {
        label: "Operations Dashboard & Real-Time Analytics Interface",
        src: "/images/ai-agency-console.png",
        aspectRatio: "16/9",
      },
      {
        label: "Workflow Automation Node Editor & Event Routing",
        src: "/images/ai-agency-workflows.png",
        aspectRatio: "16/9",
      },
      {
        label: "Client Invoicing & Milestone Reconciliation View",
        src: "/images/ai-agency-overview.png",
        aspectRatio: "16/9",
      },
    ],
    nextProjectSlug: "passr",
  },
  {
    slug: "passr",
    name: "Passr",
    category: "Compliance / Technology",
    projectType: "Software",
    oneLiner:
      "Digital product passport and compliance infrastructure for brands navigating regulatory requirements across international markets.",
    image: {
      src: "/images/passr-logo.jpg",
      alt: "Passr Digital Product Passport - Passr logo visual",
      contain: true,
    },
    overview:
      "As regulatory frameworks like the EU Ecodesign and Digital Product Passport directives take effect, physical product brands require verified data infrastructure to track materials, supply chain provenance, lifecycle durability, and recyclability.",
    problem:
      "Supply chain data was dispersed across siloed manufacturer spreadsheets and unstructured third-party audits, creating substantial compliance liability and making verifiable public disclosures exceptionally difficult to coordinate.",
    approach:
      "We engineered a cryptographic and verifiable product data architecture. Each physical item is mapped to a secure digital ledger entry containing standardized, structured JSON schemas that comply with international open data standards.",
    solution:
      "A complete compliance platform providing consumer-facing digital passport portals (accessible via QR and NFC), secure B2B supplier ingestion APIs, and automated regulatory reporting engines ready for European market customs audits.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI / Python",
      "PostgreSQL",
      "Cloudflare Workers",
      "GS1 Open Standards",
      "OpenAPI",
    ],
    keyCapabilities: [
      "GS1-compliant digital identity assignment per SKU and production batch",
      "Structured supply chain tier mapping and material breakdown verification",
      "Granular permissioning between confidential B2B specs and consumer disclosures",
      "High-speed edge resolution for global QR and NFC scanning queries",
    ],
    verifiedResults: [
      {
        label: "Regulatory Readiness",
        description:
          "Compliant schema mapping aligned with emerging EU Digital Product Passport specifications.",
      },
      {
        label: "Edge Resolution",
        description:
          "Sub-100ms global query resolution across consumer-facing verification endpoints.",
      },
    ],
    galleryImages: [
      {
        label: "Digital Product Passport Consumer Interface View",
        src: "/images/passr-dashboard.png",
        aspectRatio: "16/9",
      },
      {
        label: "Manufacturer Supply Chain Data Ingestion Grid",
        src: "/images/passr-products.png",
        aspectRatio: "16/9",
      },
      {
        label: "Regulatory Compliance Audit & Export Console",
        src: "/images/passr-compliance.png",
        aspectRatio: "16/9",
      },
    ],
    nextProjectSlug: "vendoflow",
  },
  {
    slug: "vendoflow",
    name: "VendoFlow",
    category: "Retail / Business Software",
    projectType: "Digital transformation",
    oneLiner:
      "Digital retail operations software engineered for multi-location inventory synchronization, point-of-sale management, and commerce analytics.",
    image: {
      src: "/images/vendoflow.png",
      alt: "VendoFlow retail commerce operations software visual",
      contain: true,
    },
    overview:
      "Modern retail and apparel brands operating both physical storefronts and online channels face chronic inventory reconciliation errors, stockouts, and manual bookkeeping inefficiencies.",
    problem:
      "Legacy point-of-sale hardware and standalone e-commerce storefronts failed to communicate in real-time, resulting in frequent overselling, inaccurate end-of-day balances, and manual stock audits that took days to complete.",
    approach:
      "We architected an offline-resilient, event-driven commerce hub. Every sales transaction or stock transfer broadcasts an atomic state event to all connected endpoints, ensuring instant ledger convergence.",
    solution:
      "A responsive, unified retail platform featuring touch-optimized point-of-sale interfaces, warehouse barcode workflows, automated restock alerts, and live multi-location inventory reconciliation.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Go / Microservices",
      "PostgreSQL",
      "WebSockets",
      "SQLite (Offline Cache)",
    ],
    keyCapabilities: [
      "Offline-first POS checkout with automatic background cloud sync",
      "Centralized multi-store inventory tracking and transfer requests",
      "Barcode scanning and batch warehouse receiving flows",
      "Automated stockout alerts and supplier reorder triggers",
    ],
    verifiedResults: [
      {
        label: "Multi-Location Sync",
        description:
          "Real-time inventory consistency achieved across simultaneous physical and digital registers.",
      },
      {
        label: "Offline Resilience",
        description:
          "Zero transaction drop during local network disruptions through local SQLite caching.",
      },
    ],
    galleryImages: [
      {
        label: "Point of Sale Touch-Optimized Register Layout",
        src: "/images/vendoflow-pos.png",
        aspectRatio: "16/9",
      },
      {
        label: "Multi-Store Warehouse Inventory Matrix",
        src: "/images/vendoflow-inventory.png",
        aspectRatio: "16/9",
      },
      {
        label: "Sales Velocity & Stock Analytics Dashboard",
        src: "/images/vendoflow-analytics.png",
        aspectRatio: "16/9",
      },
    ],
    nextProjectSlug: "ai-agency-operations",
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((item) => item.slug)
}
