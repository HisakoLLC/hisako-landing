import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling practices for Hisako.",
  alternates: {
    canonical: "https://hisako.eu/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Hisako",
    description: "Privacy policy and data handling practices for Hisako.",
    url: "https://hisako.eu/privacy",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Hisako",
    description: "Privacy policy and data handling practices for Hisako.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-mono font-medium uppercase tracking-[0.12em] text-primary mb-3">
            LEGAL & COMPLIANCE
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Last updated: June 2026
          </p>
        </div>

        {/* Body sections */}
        <div className="space-y-8 sm:space-y-10">
          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Information we collect
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              We collect information you provide directly — such as your name, organization, and email 
              address when you submit a project inquiry or contact request. We do not collect personal 
              data automatically beyond standard technical server access logs.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              How we use your information
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              We use project inquiries and contact details solely to evaluate technical requirements, 
              communicate with you regarding your request, and provide services. We do not sell, rent, 
              or distribute your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Cookies and tracking
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              hisako.eu does not use third-party tracking cookies or behavioral profiling tools. 
              No invasive cookie banners are required.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              External links
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our website may contain links to external sites, repositories, or documentation. 
              Hisako is not responsible for the privacy practices or contents of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Contact
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              For any privacy or data handling inquiries, please reach out to{" "}
              <a 
                href="mailto:hello@hisako.eu" 
                className="text-primary hover:underline font-mono text-sm underline-offset-4"
              >
                hello@hisako.eu
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
