export interface ProjectImage {
  src?: string
  alt: string
  contain?: boolean
}

export interface WorkflowStep {
  step: string
  title: string
  description?: string
}

export interface ProjectGalleryItem {
  label: string
  src?: string
  aspectRatio?: "16/9" | "auto" | "4/3" | "1/1" | "21/9"
}

export interface Project {
  slug: string
  name: string
  category: string
  filterCategories: string[]
  shortDescription: string
  status?: string
  statusNote?: string
  badgeLabel?: string
  projectType: string
  logo?: ProjectImage
  heroImage?: ProjectImage
  overview: string
  problem: string
  approach: string
  solution: string
  capabilities: string[]
  workflow?: WorkflowStep[]
  technologies: string[]
  galleryImages: ProjectGalleryItem[]
  featured?: boolean
  relatedProjects: string[]
}

export const CATEGORY_FILTERS = [
  "All",
  "AI & Automation",
  "Business Systems",
  "Platforms",
  "Cybersecurity",
  "Government & Civic Technology",
  "Education",
  "Retail & Commerce",
  "Hospitality",
  "Open Source",
] as const

export type CategoryFilter = (typeof CATEGORY_FILTERS)[number]

export const projects: Project[] = [
  {
    slug: "ai-agency-operations-platform",
    name: "AI Agency Operations Platform",
    category: "AI / Business Operations",
    filterCategories: ["AI & Automation", "Business Systems"],
    projectType: "Internal Operations Platform",
    shortDescription:
      "An AI-powered operating system designed to help modern agencies manage their operations, clients and projects in one place.",
    overview:
      "An internal operations platform developed by Hisako to bring agency operations into a single system.",
    problem:
      "Modern professional service agencies often operate across fragmented stacks — juggling separate tools for prospecting, proposals, time tracking, client communication, and accounting. Manual coordination between disjointed software suites created operational latency, frequent data discrepancies across departments, and hundreds of administrative hours lost reconciling client pipelines, contracts, and project delivery milestones.",
    approach:
      "We engineered an integrated operating platform using a modular service architecture with a unified relational data layer. Instead of loose webhook integrations between disparate third-party SaaS products, Hisako developed a single cohesive technical core featuring role-based access for operators, executives, and clients, augmented with autonomous workflow agents.",
    solution:
      "A unified web application integrating automated proposal-to-invoice pipelines, intelligent task routing, client onboarding workflows, and structured reporting. Embedded automation agents handle document extraction, status reconciliation, and routine client communication.",
    capabilities: [
      "CRM and lead management",
      "Proposals",
      "Invoicing",
      "Projects and tasks",
      "Client onboarding",
      "Reporting",
      "Employee management",
      "AI agents",
      "Workflow automation",
      "Client portal",
      "AI command center",
    ],
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
    logo: {
      src: "/images/Abstract Color Harmony.png",
      alt: "AI Agency Operations Platform brand identity",
      contain: true,
    },
    heroImage: {
      src: "/images/ai-agency-settings.png",
      alt: "AI Agency Operations Platform workspace and settings console",
      contain: false,
    },
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
        label: "Agency Workspace & Operational Settings Console",
        src: "/images/ai-agency-settings.png",
        aspectRatio: "16/9",
      },
    ],
    featured: true,
    relatedProjects: [
      "ai-sales-assistant",
      "ai-lead-qualification",
      "vendoflow",
    ],
  },
  {
    slug: "ai-sales-assistant",
    name: "AI Sales Assistant",
    category: "AI / Sales",
    filterCategories: ["AI & Automation"],
    projectType: "Sales Enablement System",
    shortDescription:
      "An AI-assisted sales system designed to help sales teams research prospects, prepare outreach and support sales activities.",
    overview:
      "An AI-assisted sales system engineered by Hisako to streamline prospect research and assist sales teams during pre-meeting preparation, communication drafting, and ongoing sales pipeline support.",
    problem:
      "Sales professionals spend substantial portions of their working hours on manual background research across company registries, public filings, and professional profiles before conducting outreach. Gathering account context manually slows down response times and detracts from active consultative conversations.",
    approach:
      "We engineered an intelligent assistant architecture that interfaces with structured web search APIs, corporate data registries, and internal communication records. The system synthesizes public company data into standardized briefing dossiers and outreach suggestions tailored to specific business contexts.",
    solution:
      "A centralized sales support copilot interface that automatically prepares structured prospect dossiers, summarizes account developments, drafts contextual talking points, and coordinates follow-up tasks without manual data entry.",
    capabilities: [
      "Prospect research",
      "Sales assistance",
      "Lead intelligence",
      "Outreach support",
      "Conversation assistance",
      "Sales workflow automation",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Vector Embeddings",
      "LLM APIs",
      "Structured Search APIs",
    ],
    heroImage: {
      src: "/images/assistant 1.png",
      alt: "AI Sales Assistant workspace interface",
      contain: false,
    },
    galleryImages: [
      {
        label: "Account Intelligence & Prospect Dossier Inspector",
        src: "/images/assistant 2.png",
        aspectRatio: "16/9",
      },
      {
        label: "Outreach Generation & Contextual Messaging Studio",
        src: "/images/asssitant 3.png",
        aspectRatio: "16/9",
      },
      {
        label: "Conversation Debrief & Action Item Pipeline",
        src: "/images/assistant 1.png",
        aspectRatio: "16/9",
      },
    ],
    featured: true,
    relatedProjects: [
      "ai-lead-qualification",
      "autonomous-outbound-ai-engine",
      "ai-agency-operations-platform",
    ],
  },
  {
    slug: "ai-lead-qualification",
    name: "AI Lead Qualification System",
    category: "AI / Sales Automation",
    filterCategories: ["AI & Automation"],
    projectType: "Inbound Pipeline Intelligence",
    shortDescription:
      "An AI-powered system designed to evaluate and qualify incoming leads before they reach a sales team.",
    overview:
      "An AI-powered qualification engine developed by Hisako to systematically assess inbound prospect inquiries against structured business criteria before routing them to sales representatives.",
    problem:
      "Inbound sales pipelines often receive heterogeneous inquiries ranging from spam submissions to high-priority enterprise briefs. Manually triaging and verifying inbound leads creates operational delays and diverts sales bandwidth away from high-priority discussions.",
    approach:
      "We architected an asynchronous evaluation pipeline triggered upon form submission or email ingestion. The system enriches applicant records with publicly verifiable company metadata and evaluates intent, budget parameters, and technical fit against predefined rule models.",
    solution:
      "An automated qualification pipeline that parses incoming inquiries, enriches domain records, evaluates technical and commercial alignment, assigns structured priority rankings, and routes qualified briefs directly to designated account representatives.",
    workflow: [
      { step: "01", title: "Lead Ingestion", description: "Inbound form submission or email brief received" },
      { step: "02", title: "Data Collection", description: "Domain extraction and corporate metadata lookup" },
      { step: "03", title: "AI Analysis", description: "Intent, scope and technical parameter parsing" },
      { step: "04", title: "Qualification", description: "Criteria scoring against ICP rule definitions" },
      { step: "05", title: "Priority Assignment", description: "Tier classification and routing urgency" },
      { step: "06", title: "Sales Team Handoff", description: "Brief delivered to designated account owner" },
    ],
    capabilities: [
      "Automated inbound inquiry parsing",
      "Domain and organization metadata enrichment",
      "Intent and technical fit assessment",
      "Dynamic lead scoring and priority assignment",
      "Intelligent routing to designated account representatives",
      "Real-time CRM synchronization and audit trail",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis Queues",
      "Webhook Ingestion",
      "LLM Evaluation Pipelines",
    ],
    heroImage: {
      src: "/images/lead qualifier logo.png",
      alt: "AI Lead Qualification System logo and status badge",
      contain: true,
    },
    galleryImages: [
      {
        label: "Conversational Inbound Lead Assessment & Qualification Interface",
        src: "/images/lead qualifier 2.png",
        aspectRatio: "16/9",
      },
      {
        label: "Objection Analysis & Multi-Turn Inquiry Evaluation Engine",
        src: "/images/lead qualifer 4.png",
        aspectRatio: "16/9",
      },
      {
        label: "Automated Calendar Scheduling & Sales Pipeline Handoff",
        src: "/images/lead qualifier 3.png",
        aspectRatio: "16/9",
      },
    ],
    featured: true,
    relatedProjects: [
      "ai-sales-assistant",
      "autonomous-outbound-ai-engine",
      "ai-agency-operations-platform",
    ],
  },
  {
    slug: "autonomous-outbound-ai-engine",
    name: "Autonomous Outbound AI Engine",
    category: "AI / Sales Automation",
    filterCategories: ["AI & Automation"],
    projectType: "Automated Outbound Pipeline",
    shortDescription:
      "An autonomous AI system designed to support outbound sales workflows through research, personalization and automated outreach processes.",
    overview:
      "An autonomous outbound workflow engine developed by Hisako to coordinate multi-stage business development processes from target account research through personalized messaging and reply categorization.",
    problem:
      "Traditional outbound sales campaigns rely either on generic mass templates with low relevance or labor-intensive manual drafting that cannot scale across diverse market segments.",
    approach:
      "We engineered an autonomous multi-agent pipeline where discrete micro-tasks — account research, signal identification, message drafting, and reply sentiment classification — are handled by specialized automation routines governed by human-in-the-loop review thresholds.",
    solution:
      "An integrated outbound operations system that continuously scans target parameters, synthesizes relevant business hooks, composes customized outreach drafts, and analyzes incoming replies to trigger appropriate next-step actions.",
    workflow: [
      { step: "01", title: "Research", description: "Market signals, firmographic scans and ICP matching" },
      { step: "02", title: "Prospect Selection", description: "Identification of relevant verified contact roles" },
      { step: "03", title: "Personalization", description: "Contextual angle generation based on company initiatives" },
      { step: "04", title: "Outreach Dispatch", description: "Scheduled multi-touch delivery with deliverability pacing" },
      { step: "05", title: "Response Analysis", description: "NLP sentiment categorization of incoming emails" },
      { step: "06", title: "Follow-up Routing", description: "Human checkpoint escalation or sequence adaptation" },
    ],
    capabilities: [
      "Target account criteria scanning",
      "Public business signals and trigger detection",
      "Contextual multi-touch draft composition",
      "Reply intent classification (interested, referral, objection, unsubscribe)",
      "Automated follow-up sequencing with escalation rules",
      "Human review checkpoint gates",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Celery / Redis",
      "SMTP Engine",
      "LLM Orchestration Frameworks",
    ],
    heroImage: {
      src: "/images/AOE 1.png",
      alt: "Autonomous Outbound AI Engine workflow orchestrator and banner",
      contain: false,
    },
    galleryImages: [
      {
        label: "Autonomous Pipeline Overview & Value Proposition",
        src: "/images/AOE 1.png",
        aspectRatio: "16/9",
      },
      {
        label: "Automated Pipeline Stages & Company Intelligence Inspector",
        src: "/images/AOE 2.png",
        aspectRatio: "16/9",
      },
      {
        label: "AI Multi-Touch Sequence Generation & Variant Testing Studio",
        src: "/images/AOE 3.png",
        aspectRatio: "16/9",
      },
    ],
    featured: false,
    relatedProjects: [
      "ai-lead-qualification",
      "ai-sales-assistant",
      "ai-agency-operations-platform",
    ],
  },
  {
    slug: "zetafo",
    name: "Zetafo",
    category: "AI / Revenue Operations",
    filterCategories: ["AI & Automation", "Platforms"],
    projectType: "Revenue Operating System",
    shortDescription:
      "An AI revenue intelligence and outbound sales operating system that identifies high-fit B2B prospects, evaluates real-time buying signals, and generates contextual sales dossiers.",
    overview:
      "An AI-powered revenue intelligence platform engineered by Hisako to discover target B2B accounts, score prospect fit against ideal customer profiles, and generate actionable sales dossiers equipped with verified contacts and real-time buying triggers.",
    problem:
      "Traditional B2B outbound workflows rely on static, bloated contact databases filled with unverified emails, stale company records, and zero timing context. Sales development teams waste hours manually sifting through low-intent lead lists, degrading domain reputation through blind mass outreach while paying high per-seat subscription taxes for generic data.",
    approach:
      "We engineered an asynchronous AI intelligence engine that qualifies target accounts before consuming third-party enrichment credits. The system scrapes real-time business signals (hiring milestones, leadership additions, and tech stack adoption) and uses semantic embeddings to match account characteristics with natural-language ICP models in under 15 seconds.",
    solution:
      "A comprehensive sales operating platform combining natural language ICP modeling, pre-enrichment scoring heuristics, waterfall contact verification, and contextual lead card generation — replacing generic spreadsheets with actionable intelligence dossiers.",
    capabilities: [
      "Natural language ICP modeling and semantic account discovery",
      "Pre-enrichment qualification algorithms to eliminate wasted credit consumption",
      "Multi-dimensional fit scoring (Company Fit, Contact Fit, Buying Signals, Data Confidence)",
      "Real-time trigger event and hiring signal detection",
      "Waterfall contact enrichment with multi-provider verification",
      "Compounding entity knowledge graph to accelerate repeated domain lookups",
      "Actionable lead dossier cards with plain-English outreach rationale",
      "Direct CRM synchronization and structured data exports",
    ],
    workflow: [
      {
        step: "01",
        title: "ICP Definition",
        description:
          "Define target customer criteria using natural language descriptions, competitor URLs, or firmographic parameters.",
      },
      {
        step: "02",
        title: "Account Discovery",
        description:
          "Semantic search algorithms crawl and identify matching corporate entities across global company datasets.",
      },
      {
        step: "03",
        title: "Pre-Enrichment Scoring",
        description:
          "Heuristic and embedding models compute match strength scores prior to spending external API enrichment credits.",
      },
      {
        step: "04",
        title: "Signal Detection",
        description:
          "Monitors active trigger events including open job postings, executive moves, and web technology shifts.",
      },
      {
        step: "05",
        title: "Waterfall Contact Verification",
        description:
          "Queries multi-source provider waterfalls with MX syntax validation to resolve verified decision-maker emails and direct dials.",
      },
      {
        step: "06",
        title: "Sales Dossier Delivery",
        description:
          "Synthesizes company intelligence, pain points, and why-now context into ready-to-work sales cards.",
      },
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Vector Embeddings",
      "LLM Orchestration",
      "Tech Stack Detection Engines",
      "Waterfall Enrichment APIs",
    ],
    logo: {
      src: "/images/zetafo 4.png",
      alt: "Zetafo logo",
      contain: true,
    },
    heroImage: {
      src: "/images/zetafo 2.png",
      alt: "Zetafo AI Revenue Operating System console",
      contain: false,
    },
    galleryImages: [
      {
        label: "How Zetafo Works — Automated AI Prospect Qualification Pipeline",
        src: "/images/zetafo 1.png",
        aspectRatio: "16/9",
      },
      {
        label: "AI Revenue Intelligence & Account Match Strength Console",
        src: "/images/zetafo 2.png",
        aspectRatio: "16/9",
      },
      {
        label: "Waitlist Onboarding & Evaluation Workspace",
        src: "/images/zetafo 3.png",
        aspectRatio: "16/9",
      },
    ],
    featured: false,
    relatedProjects: [
      "autonomous-outbound-ai-engine",
      "ai-lead-qualification",
      "ai-sales-assistant",
    ],
  },
  {
    slug: "passr",
    name: "Passr",
    category: "Compliance / Product Technology",
    filterCategories: ["Platforms", "Business Systems"],
    projectType: "Compliance Infrastructure",
    shortDescription:
      "Compliance infrastructure for physical products entering regulated markets.",
    overview:
      "A digital compliance and product identity platform engineered by Hisako to help brands track materials, supply chain provenance, and regulatory disclosures for physical goods.",
    problem:
      "Emerging international regulatory frameworks — such as the EU Ecodesign and Digital Product Passport directives — require physical product brands to maintain verifiable, machine-readable records of material composition, lifecycle durability, and recyclability. Most brands store this data across siloed supplier spreadsheets and disparate lab test PDFs.",
    approach:
      "We architected a verifiable product data ledger adhering to GS1 open standards and standardized JSON-LD schemas. Every physical SKU and production batch receives a unique cryptographic identifier resolvable via edge infrastructure.",
    solution:
      "A complete compliance infrastructure platform featuring consumer-facing digital passport portals (accessible via QR and NFC), secure supplier ingestion APIs, and structured regulatory export engines for customs audits.",
    capabilities: [
      "GS1-compliant digital identity assignment per SKU and production batch",
      "Structured supply chain tier mapping and material breakdown verification",
      "Granular permissioning between confidential B2B specs and consumer disclosures",
      "High-speed edge resolution for global QR and NFC scanning queries",
      "Automated regulatory report compilation and export",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI / Python",
      "PostgreSQL",
      "Cloudflare Workers",
      "GS1 Open Standards",
      "OpenAPI",
    ],
    logo: {
      src: "/images/Passr original Logo.jpg",
      alt: "Passr platform logo",
      contain: true,
    },
    heroImage: {
      src: "/images/passr image.png",
      alt: "Passr Digital Product Passport platform overview",
      contain: false,
    },
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
    featured: true,
    relatedProjects: [
      "vendoflow",
      "ai-agency-operations-platform",
      "spyblocker",
    ],
  },
  {
    slug: "vendoflow",
    name: "VendoFlow",
    category: "Retail / Business Software",
    filterCategories: ["Retail & Commerce", "Business Systems"],
    projectType: "Retail Software Platform",
    shortDescription:
      "Business software designed for fashion retailers to manage inventory, sales and day-to-day operations.",
    overview:
      "A retail commerce operations platform developed by Hisako for fashion and apparel retailers to synchronize multi-location inventory, streamline point-of-sale transactions, and manage daily store workflows.",
    problem:
      "Independent retail boutiques and apparel businesses operating physical storefronts alongside digital sales channels frequently struggle with inventory reconciliation latency, overselling, and manual end-of-day register balancing across fragmented systems.",
    approach:
      "We engineered an offline-resilient, event-driven commerce architecture. Every transaction, return, or stock movement broadcasts an atomic event to a centralized inventory service with local SQLite caching on client registers to maintain uptime during connectivity drops.",
    solution:
      "A unified retail operations platform providing touch-optimized POS checkout, multi-location inventory matrixes, warehouse barcode scanning workflows, and real-time sales reporting.",
    capabilities: [
      "Inventory",
      "Products",
      "Sales",
      "POS",
      "Business dashboard",
      "Customer management",
      "Reporting",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Go / Microservices",
      "PostgreSQL",
      "WebSockets",
      "SQLite",
    ],
    logo: {
      src: "/images/vendoflow.png",
      alt: "VendoFlow logo",
      contain: true,
    },
    heroImage: {
      src: "/images/og-image.png",
      alt: "VendoFlow retail commerce operations platform interface",
      contain: false,
    },
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
    featured: true,
    relatedProjects: [
      "restaurant-pos",
      "passr",
      "ai-agency-operations-platform",
    ],
  },
  {
    slug: "restaurant-pos",
    name: "Restaurant POS System",
    category: "Hospitality / Business Software",
    filterCategories: ["Hospitality", "Business Systems"],
    projectType: "Hospitality Operations System",
    shortDescription:
      "A point-of-sale and restaurant management system designed to support day-to-day restaurant operations.",
    overview:
      "A point-of-sale and restaurant management system developed by Hisako to support day-to-day restaurant operations, from table-side ordering and kitchen dispatch to payment reconciliation.",
    problem:
      "Restaurant environments require rapid ticket processing and reliable floor coordination. Disconnected hardware terminals, manual kitchen tickets, and rigid bill-splitting workflows lead to ordering errors, kitchen bottlenecks, and slow table turnover during peak dining hours.",
    approach:
      "We engineered an event-driven local-network architecture connecting floor tablets with kitchen display stations. The user interface was tailored with high-contrast touch targets, quick item modifier selectors, and real-time socket communication to withstand busy service shifts.",
    solution:
      "A point-of-sale and restaurant management platform integrating real-time floor plan visualization, interactive table billing with split-check support, kitchen display system (KDS) routing, and live stock tracking.",
    capabilities: [
      "Point of sale",
      "Orders",
      "Menu management",
      "Tables",
      "Inventory",
      "Sales",
      "Reporting",
      "Staff operations",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Tailwind CSS",
      "Thermal Receipt APIs",
    ],
    heroImage: {
      src: "/images/chapchap 1.png",
      alt: "ChapChap POS restaurant point-of-sale platform interface",
      contain: false,
    },
    galleryImages: [
      {
        label: "Core POS Management & Feature Overview",
        src: "/images/chapchap 2.png",
        aspectRatio: "16/9",
      },
      {
        label: "Subscription Tiers & Capability Matrix",
        src: "/images/chapchap 3.png",
        aspectRatio: "16/9",
      },
      {
        label: "Order Terminal & Operations Workspace",
        src: "/images/chapchap 1.png",
        aspectRatio: "16/9",
      },
    ],
    featured: false,
    relatedProjects: [
      "vendoflow",
      "school-management-system",
      "ai-agency-operations-platform",
    ],
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    category: "Education / Business Software",
    filterCategories: ["Education", "Business Systems"],
    projectType: "Academic Administration Platform",
    shortDescription:
      "A digital management system designed to centralize administrative and operational workflows for schools.",
    overview:
      "A digital management system engineered by Hisako to centralize administrative and operational workflows for schools, connecting student records, attendance, fee ledgers, and academic reporting in one portal.",
    problem:
      "Educational institutions frequently coordinate student attendance, tuition fees, grading records, and guardian notifications across fragmented paper registers and standalone spreadsheets, creating administrative bottlenecks and information silos.",
    approach:
      "We designed a multi-role relational data platform with strict role-based access for school administrators, instructors, and parents. The system models academic terms, course curricula, grading schemes, and fee schedules as modular entities.",
    solution:
      "A comprehensive digital school administration platform unifying student enrollment, timetable scheduling, daily attendance logging, automated fee invoice tracking, gradebook calculations, and parent communication.",
    capabilities: [
      "Student management",
      "Staff management",
      "Classes",
      "Attendance",
      "Academic records",
      "Fees",
      "Communication",
      "Administration",
      "Reporting",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "Prisma ORM",
      "Docker",
      "Tailwind CSS",
    ],
    heroImage: {
      src: "/images/skoolish 4.jpeg",
      alt: "Skoolish School Management System administrative portal",
      contain: false,
    },
    galleryImages: [
      {
        label: "Student Information & Academic Directory View",
        src: "/images/skoolish 1.jpeg",
        aspectRatio: "16/9",
      },
      {
        label: "Support Desk & AI Chatbot Assistant Interface",
        src: "/images/skoolish 2.jpeg",
        aspectRatio: "16/9",
      },
      {
        label: "Tuition Invoicing & Finance Management Ledger",
        src: "/images/skoolish 3.jpeg",
        aspectRatio: "16/9",
      },
      {
        label: "School Administration Platform Overview",
        src: "/images/skoolish 4.jpeg",
        aspectRatio: "16/9",
      },
    ],
    featured: false,
    relatedProjects: [
      "ai-agency-operations-platform",
      "citizen-government-engagement",
      "restaurant-pos",
    ],
  },
  {
    slug: "spyblocker",
    name: "SpyBlocker",
    category: "Cybersecurity / Browser Extension",
    filterCategories: ["Cybersecurity", "Platforms"],
    badgeLabel: "Browser Extension",
    projectType: "Browser Security Extension",
    shortDescription:
      "A Chrome extension designed to help users identify and block unwanted tracking and privacy-invasive behavior while browsing.",
    overview:
      "A Chrome extension designed by Hisako to help users identify and block unwanted tracking scripts, telemetry beacons, and privacy-invasive data collection while browsing.",
    problem:
      "Modern web browsing exposes individuals to pervasive tracking beacons, cross-site identity graphs, and fingerprinting scripts embedded across consumer websites without transparent disclosure or straightforward opt-out mechanisms.",
    approach:
      "We built a lightweight Manifest V3 browser extension utilizing declarative net request filtering and local heuristic rules. The extension operates completely on-device without telemetry or cloud dependencies, inspecting web requests locally against privacy rule sets.",
    solution:
      "A transparent browser extension that intercepts known tracking scripts, strips identifiable query parameters from URLs, prevents fingerprinting attempts, and provides users with a real-time domain security inspector.",
    capabilities: [
      "Declarative network blocking for known telemetry and tracking scripts",
      "Real-time tracker count and domain inspection badge",
      "URL tracking parameter sanitizer (strips identifiable tracking tokens)",
      "Canvas and audio fingerprinting mitigation heuristics",
      "Custom domain whitelist and blacklist configuration",
      "Zero remote logging — 100% client-side local execution",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "WebExtensions API",
      "Manifest V3",
      "Chrome DeclarativeNetRequest",
      "HTML/CSS",
    ],
    logo: {
      src: "/images/butterfly motion.gif",
      alt: "SpyBlocker motion logo",
      contain: false,
    },
    heroImage: {
      src: "/images/butterfly motion.gif",
      alt: "SpyBlocker motion visual",
      contain: false,
    },
    galleryImages: [],
    featured: false,
    relatedProjects: [
      "inteldrop",
      "passr",
      "citizen-government-engagement",
    ],
  },
  {
    slug: "citizen-government-engagement",
    name: "Citizen-Government Engagement Platform",
    category: "Government / Civic Technology",
    filterCategories: ["Government & Civic Technology", "AI & Automation"],
    projectType: "Civic Engagement Platform",
    shortDescription:
      "An AI-assisted digital platform designed to improve communication and engagement between citizens and government.",
    overview:
      "An AI-assisted digital platform designed to improve communication and engagement between citizens and government by streamlining public requests, feedback submission, and administrative issue routing.",
    problem:
      "Municipalities and public agencies often experience backlogs of citizen inquiries and service requests submitted across disparate, unstructured channels. Public servants spend hours manually triaging and routing cases to the correct departments, resulting in delayed resolutions.",
    approach:
      "We designed an accessible, multilingual public portal paired with an internal administrative routing system. Natural language models classify citizen submissions, verify required documentation, and direct cases to the relevant municipal department.",
    solution:
      "A civic engagement platform featuring an intuitive citizen submission interface, automated request categorization, live casework tracking, and municipal workflow dashboards that help public servants manage inquiries efficiently.",
    capabilities: [
      "Citizen requests",
      "Feedback",
      "Government communication",
      "Issue reporting",
      "AI-assisted processing",
      "Information access",
      "Administrative workflows",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "NLP Classification Models",
      "Docker",
    ],
    logo: {
      src: "/images/butterfly motion.gif",
      alt: "Citizen Government Engagement motion logo",
      contain: false,
    },
    heroImage: {
      src: "/images/butterfly motion.gif",
      alt: "Citizen Government Engagement motion visual",
      contain: false,
    },
    galleryImages: [],
    featured: false,
    relatedProjects: [
      "school-management-system",
      "ai-agency-operations-platform",
      "ai-lead-qualification",
    ],
  },
  {
    slug: "inteldrop",
    name: "IntelDrop",
    category: "Open Source / Whistleblowing",
    filterCategories: ["Open Source", "Cybersecurity"],
    status: "Prototype / Unfinished",
    statusNote:
      "IntelDrop was an open-source project initiated by Hisako to explore technology for secure whistleblowing and source communication. The initial system was developed, but the project was ultimately not completed.",
    projectType: "Open-Source Prototype",
    shortDescription:
      "An open-source whistleblowing platform concept designed for news organizations to securely receive and manage sensitive submissions.",
    overview:
      "An open-source whistleblowing platform concept designed for news organizations to securely receive and manage sensitive submissions.",
    problem:
      "Whistleblowers and investigative sources taking substantial personal risks require verifiable, tamper-resistant channels to submit evidence to news organizations without leaving traceable digital footprints or metadata fingerprints.",
    approach:
      "The initial architecture investigated end-to-end PGP public-key encryption, automated file metadata excision (removing EXIF, author tags, and GPS coordinates), and Tor onion service routing to decouple source IP addresses from submissions.",
    solution:
      "An early-stage prototype demonstrating a zero-knowledge upload portal where incoming files are automatically scrubbed of metadata, encrypted in-memory before disk write, and stored in isolated storage volumes accessible only by newsroom cryptographic keys.",
    capabilities: [
      "Tor-compatible web submission portal prototype",
      "In-memory cryptographic encryption using OpenPGP",
      "Automated EXIF and document metadata scrubbing pipeline",
      "Anonymous source two-way passphrase messaging",
      "Zero persistent IP logging or browser fingerprint storage",
      "Multi-key newsroom verification protocol",
    ],
    technologies: [
      "Go",
      "TypeScript",
      "React",
      "OpenPGP.js",
      "Docker",
      "Tor Hidden Service Architecture",
      "SQLite",
    ],
    logo: {
      src: "/images/butterfly motion.gif",
      alt: "IntelDrop motion logo",
      contain: false,
    },
    heroImage: {
      src: "/images/butterfly motion.gif",
      alt: "IntelDrop motion visual",
      contain: false,
    },
    galleryImages: [],
    featured: false,
    relatedProjects: [
      "spyblocker",
      "citizen-government-engagement",
      "passr",
    ],
  },
]

// Slug aliases for backwards compatibility
const SLUG_ALIASES: Record<string, string> = {
  "ai-agency-operations": "ai-agency-operations-platform",
}

export function getProjectBySlug(slug: string): Project | undefined {
  const resolvedSlug = SLUG_ALIASES[slug] || slug
  return projects.find((p) => p.slug === resolvedSlug)
}

export function getAllProjectSlugs(): string[] {
  const slugs = projects.map((p) => p.slug)
  // Include aliases so static params and routes resolve smoothly
  return [...slugs, ...Object.keys(SLUG_ALIASES)]
}

export function getRelatedProjects(currentSlug: string): Project[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return []
  return current.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p))
    .slice(0, 3)
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project
  next: Project
} {
  const resolvedSlug = SLUG_ALIASES[currentSlug] || currentSlug
  const index = projects.findIndex((p) => p.slug === resolvedSlug)
  const prevIndex = index > 0 ? index - 1 : projects.length - 1
  const nextIndex = index < projects.length - 1 ? index + 1 : 0
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  }
}
