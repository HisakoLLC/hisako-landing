import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'FAQ — AI Agency Services | Hisako',
  description: 'Common questions about AI agents development, LLM integration, AI workflow automation, and working with Hisako as your AI agency.',
  alternates: { canonical: 'https://hisako.eu/faq' },
  other: {
    'ai-content-declaration': 'human-authored',
  },
}

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does an AI agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI agency designs, builds, and deploys custom artificial intelligence systems for businesses. Unlike general software agencies, an AI agency specializes in language models, autonomous agents, intelligent automation, and AI-powered products. Hisako builds custom AI agents, integrates LLMs into existing software, automates workflows with AI, and advises on AI strategy — from initial brief to production deployment."
        }
      },
      {
        "@type": "Question",
        "name": "How is an AI agency different from a traditional software agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A traditional software agency builds what you specify. An AI agency helps you identify what to build, then builds systems that can learn, reason, and act autonomously. The core difference is that AI systems evolve with use — they don't just execute instructions, they make decisions. Hisako specializes exclusively in AI-native architecture: every system we build has intelligence at its foundation, not bolted on."
        }
      },
      {
        "@type": "Question",
        "name": "What types of businesses benefit most from working with an AI agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Startups and scale-ups with high-volume, repetitive operational processes get the fastest ROI from AI. SaaS companies integrating AI features into existing products, businesses with large volumes of unstructured data, and operators running manual workflows that could be automated are the highest-fit clients. Hisako works with global startups and growth-stage businesses across industries."
        }
      },
      {
        "@type": "Question",
        "name": "What is a custom AI agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom AI agent is an autonomous software system that uses large language models and programmatic tools to complete complex tasks with minimal human input. Unlike simple chatbots, agents can plan multi-step workflows, use external tools and APIs, make decisions based on context, and execute actions — like sending emails, querying databases, generating reports, or managing workflows — end to end."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom AI agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple single-task agents (research, summarization, outreach) take 2–4 weeks. Multi-step autonomous agents with tool use and memory typically take 4–8 weeks from architecture to deployment. Timeline depends on integration complexity, data availability, and the number of tools the agent needs access to. Hisako scopes every engagement during the Discover phase before committing to a timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What can AI agents be used for in a business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common use cases include: lead research and outreach automation, customer support triage and routing, document processing and data extraction, internal knowledge retrieval, competitor and market monitoring, report generation, and operational workflow orchestration. The highest-value agents are those that replace a process currently requiring a full-time human operator."
        }
      },
      {
        "@type": "Question",
        "name": "What LLMs does Hisako integrate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hisako is model-agnostic. We integrate Anthropic Claude, OpenAI GPT-4o, Google Gemini, and open-source models including LLaMA, Mistral, and Qwen. Model selection is driven by the use case: latency requirements, context window needs, cost constraints, and whether the data can leave your infrastructure. We recommend the right model for your specific requirements during the Architect phase."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI into our existing software without rebuilding it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — and this is often the right approach. Most LLM integrations are additive: we expose AI capabilities through your existing product's API layer or UI without requiring a ground-up rebuild. Common patterns include adding an AI layer to an existing SaaS product, building AI-powered internal tools that connect to existing databases, and creating agent pipelines that orchestrate existing business software."
        }
      },
      {
        "@type": "Question",
        "name": "How does Hisako's engagement process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work in four phases. Discover: we audit your operations and identify where AI creates real leverage. Architect: we design the complete system — models, data flows, integrations, and infrastructure — before writing code. Build: we build and iterate fast, with working systems delivered in weeks. Deploy & Evolve: we ship to production and stay engaged to monitor, retrain, and improve the system as your business grows."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Hisako based and do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hisako is headquartered in Nairobi, Kenya, and operates globally. The majority of our clients are startups and scale-ups in the US, Europe, and globally. We work fully remotely and have delivered projects across multiple time zones. Being based in Nairobi gives us access to exceptional engineering talent at competitive rates without sacrificing quality."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build an AI system with Hisako?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engagements are scoped per project based on complexity, timeline, and ongoing support requirements. We do not publish standard pricing because AI systems vary significantly in scope — a simple LLM integration differs substantially from a multi-agent autonomous system. Contact us at hello@hisako.eu to discuss your project and receive a scoped proposal."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main className="w-full bg-[#0A0A0A] min-h-screen">
        <section style={{ padding: '160px 0' }} className="w-full max-w-5xl mx-auto px-6">
          <h1 
            className="text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '72px', lineHeight: '1' }}
          >
            Frequently Asked Questions
          </h1>

          <div className="mt-12">
            {/* SECTION: About AI Agency Services */}
            <h2 
              className="text-[#F5F5F0] border-b border-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '36px', paddingBottom: '16px', margin: '64px 0 32px' }}
            >
              About AI Agency Services
            </h2>
            
            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                What does an AI agency do?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                An AI agency designs, builds, and deploys custom artificial intelligence systems for businesses. Unlike general software agencies, an AI agency specializes in language models, autonomous agents, intelligent automation, and AI-powered products. Hisako builds custom AI agents, integrates LLMs into existing software, automates workflows with AI, and advises on AI strategy — from initial brief to production deployment.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                How is an AI agency different from a traditional software agency?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                A traditional software agency builds what you specify. An AI agency helps you identify what to build, then builds systems that can learn, reason, and act autonomously. The core difference is that AI systems evolve with use — they don&apos;t just execute instructions, they make decisions. Hisako specializes exclusively in AI-native architecture: every system we build has intelligence at its foundation, not bolted on.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                What types of businesses benefit most from working with an AI agency?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Startups and scale-ups with high-volume, repetitive operational processes get the fastest ROI from AI. SaaS companies integrating AI features into existing products, businesses with large volumes of unstructured data, and operators running manual workflows that could be automated are the highest-fit clients. Hisako works with global startups and growth-stage businesses across industries.
              </p>
            </div>

            {/* SECTION: Custom AI Agents */}
            <h2 
              className="text-[#F5F5F0] border-b border-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '36px', paddingBottom: '16px', margin: '64px 0 32px' }}
            >
              Custom AI Agents
            </h2>
            
            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                What is a custom AI agent?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                A custom AI agent is an autonomous software system that uses large language models and programmatic tools to complete complex tasks with minimal human input. Unlike simple chatbots, agents can plan multi-step workflows, use external tools and APIs, make decisions based on context, and execute actions — like sending emails, querying databases, generating reports, or managing workflows — end to end.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                How long does it take to build a custom AI agent?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Simple single-task agents (research, summarization, outreach) take 2–4 weeks. Multi-step autonomous agents with tool use and memory typically take 4–8 weeks from architecture to deployment. Timeline depends on integration complexity, data availability, and the number of tools the agent needs access to. Hisako scopes every engagement during the Discover phase before committing to a timeline.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                What can AI agents be used for in a business?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Common use cases include: lead research and outreach automation, customer support triage and routing, document processing and data extraction, internal knowledge retrieval, competitor and market monitoring, report generation, and operational workflow orchestration. The highest-value agents are those that replace a process currently requiring a full-time human operator.
              </p>
            </div>

            {/* SECTION: LLM Integration */}
            <h2 
              className="text-[#F5F5F0] border-b border-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '36px', paddingBottom: '16px', margin: '64px 0 32px' }}
            >
              LLM Integration
            </h2>
            
            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                What LLMs does Hisako integrate?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Hisako is model-agnostic. We integrate Anthropic Claude, OpenAI GPT-4o, Google Gemini, and open-source models including LLaMA, Mistral, and Qwen. Model selection is driven by the use case: latency requirements, context window needs, cost constraints, and whether the data can leave your infrastructure. We recommend the right model for your specific requirements during the Architect phase.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                Can you integrate AI into our existing software without rebuilding it?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Yes — and this is often the right approach. Most LLM integrations are additive: we expose AI capabilities through your existing product&apos;s API layer or UI without requiring a ground-up rebuild. Common patterns include adding an AI layer to an existing SaaS product, building AI-powered internal tools that connect to existing databases, and creating agent pipelines that orchestrate existing business software.
              </p>
            </div>

            {/* SECTION: Working with Hisako */}
            <h2 
              className="text-[#F5F5F0] border-b border-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '36px', paddingBottom: '16px', margin: '64px 0 32px' }}
            >
              Working with Hisako
            </h2>
            
            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                How does Hisako&apos;s engagement process work?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                We work in four phases. Discover: we audit your operations and identify where AI creates real leverage. Architect: we design the complete system — models, data flows, integrations, and infrastructure — before writing code. Build: we build and iterate fast, with working systems delivered in weeks. Deploy & Evolve: we ship to production and stay engaged to monitor, retrain, and improve the system as your business grows.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                Where is Hisako based and do you work with international clients?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Hisako is headquartered in Nairobi, Kenya, and operates globally. The majority of our clients are startups and scale-ups in the US, Europe, and globally. We work fully remotely and have delivered projects across multiple time zones. Being based in Nairobi gives us access to exceptional engineering talent at competitive rates without sacrificing quality.
              </p>
            </div>

            <div className="border-b border-[#111]" style={{ marginBottom: '40px', paddingBottom: '40px' }}>
              <h3 className="font-medium text-[#F5F5F0]" style={{ fontSize: '18px', marginBottom: '12px' }}>
                How much does it cost to build an AI system with Hisako?
              </h3>
              <p className="font-normal text-[#666]" style={{ fontSize: '15px', lineHeight: '1.85', maxWidth: '720px' }}>
                Engagements are scoped per project based on complexity, timeline, and ongoing support requirements. We do not publish standard pricing because AI systems vary significantly in scope — a simple LLM integration differs substantially from a multi-agent autonomous system. Contact us at hello@hisako.eu to discuss your project and receive a scoped proposal.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
