import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use governing access to the Hisako website and services.",
  alternates: {
    canonical: "https://hisako.eu/terms",
  },
  openGraph: {
    title: "Terms of Use | Hisako",
    description: "Terms of use governing access to the Hisako website and services.",
    url: "https://hisako.eu/terms",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Hisako",
    description: "Terms of use governing access to the Hisako website and services.",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-mono font-medium uppercase tracking-[0.12em] text-primary mb-3">
            LEGAL & COMPLIANCE
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
            Terms of Use
          </h1>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Last updated: June 2026
          </p>
        </div>

        {/* Body sections */}
        <div className="space-y-8 sm:space-y-10">
          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Use of this site
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              hisako.eu is a corporate website operated by Hisako. By accessing this site, 
              you agree to use it only for legitimate informational and business engagement 
              purposes, and in a manner that complies with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Intellectual property
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              All materials on this site — including architectural text, graphics, branding, 
              and code samples — are the property of Hisako. Reproduction, distribution, or 
              unauthorized modification without prior written permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              External resources
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              This site may include links to external technical specifications, cloud partners, 
              or third-party documentation. Hisako is not liable for the content or availability 
              of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Disclaimer
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              The information presented on this site is provided on an &ldquo;as is&rdquo; basis. 
              While we strive to ensure technical accuracy, Hisako makes no warranties regarding 
              uninterrupted service or absolute completeness.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Modifications
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              We may revise these terms periodically. Continued access to the website after 
              updates are published constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
              Contact
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              Questions regarding these terms may be directed to{" "}
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
