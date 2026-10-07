import { Metadata } from "next"
import { Mail, MapPin, Shield, Clock } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/ContactForm"

export const metadata: Metadata = {
  title: "Contact — Discuss Your Technology Project",
  description:
    "Connect with Hisako. Tell us what you're trying to solve across custom software development, AI, automation, or infrastructure modernization.",
  alternates: {
    canonical: "https://hisako.eu/contact",
  },
  openGraph: {
    title: "Contact — Discuss Your Technology Project | Hisako",
    description:
      "Connect with Hisako. Tell us what you're trying to solve across custom software development, AI, automation, or infrastructure modernization.",
    url: "https://hisako.eu/contact",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Discuss Your Technology Project | Hisako",
    description:
      "Connect with Hisako. Tell us what you're trying to solve across custom software development, AI, automation, or infrastructure modernization.",
  },
}

export default function ContactPage() {
  // Configurable contact email rather than hardcoded value
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@hisako.eu"

  return (
    <div className="bg-background min-h-screen py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        {/* =========================================================================
            HERO SECTION — Exact Copy & Positioning
            ========================================================================= */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <SectionLabel index="01" variant="default">
            GET IN TOUCH
          </SectionLabel>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
            Have a technology problem?
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Tell us what you&rsquo;re trying to solve. Whether you need to build a new system, automate an existing process, integrate your technology or modernize your operations, let&rsquo;s discuss it.
          </p>
        </div>

        {/* =========================================================================
            MAIN CONTENT: FORM & VERIFIED COMPANY DETAILS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-border pt-8 sm:pt-12">
          {/* Left: Contact Form (8 cols desktop, full width mobile/tablet) */}
          <div className="lg:col-span-8 space-y-6">
            <Card variant="default" className="p-5 sm:p-8 md:p-10 bg-card/40 shadow-2xs">
              <ContactForm />
            </Card>
          </div>

          {/* Right: Company Information & Configurable Channel (4 cols desktop) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Organization Card */}
            <Card variant="default" className="p-6 sm:p-7 space-y-5 sm:space-y-6 bg-card/40">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                  Company
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  Hisako
                </h2>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-2 border-t border-border/80">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Headquarters</span>
                </span>
                <p className="font-sans text-sm font-medium text-foreground pt-0.5">
                  Nairobi, Kenya
                </p>
              </div>

              {/* Configurable Email Channel */}
              <div className="space-y-1 pt-2 border-t border-border/80">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Direct Inquiries</span>
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors block pt-0.5 underline underline-offset-4 decoration-border hover:decoration-primary break-all"
                >
                  {contactEmail}
                </a>
              </div>

              {/* Operational Assurances */}
              <div className="pt-4 border-t border-border/80 space-y-2 text-xs font-mono text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Standard review timeframe: 1 business day</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>NDAs provided upon request</span>
                </div>
              </div>
            </Card>

            {/* Reassurance Callout */}
            <div className="p-5 sm:p-6 rounded-md border border-navy-border bg-navy text-white space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold block">
                Next Steps
              </span>
              <p className="font-heading text-base font-bold text-white">
                &ldquo;We&rsquo;ll review your request and get back to you.&rdquo;
              </p>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Our engineering leadership reviews inquiries directly to confirm technical feasibility and schedule an initial discovery conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
