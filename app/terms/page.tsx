import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Hisako Technologies.",
};

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-28 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-bold text-[40px] text-foreground">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Last updated: June 2026
          </p>
        </div>

        {/* Body sections */}
        <div>
          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Use of this site
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              hisako.eu is an informational website operated by Hisako Technologies. 
              By accessing this site, you agree to use it only for lawful purposes 
              and in a manner that does not infringe the rights of others.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Intellectual property
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              All content on this site — including text, design, and the Hisako 
              name and mark — is the property of Hisako Technologies. 
              You may not reproduce or distribute any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Product links
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Links to our products (Zetafo, VendoFlow, Passr) direct you to 
              separately operated platforms. Each is governed by its own terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Disclaimer
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              This website is provided as-is. Hisako Technologies makes no warranties 
              regarding the accuracy or completeness of the information presented here.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Changes
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We may update these terms from time to time. Continued use of the site 
              after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Contact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Questions about these terms? Email us at <a href="mailto:hello@hisako.eu" className="hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">hello@hisako.eu</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
