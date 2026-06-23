import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hisako Technologies.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-28 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-bold text-[40px] text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Last updated: June 2026
          </p>
        </div>

        {/* Body sections */}
        <div>
          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Information we collect
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We collect information you provide directly — such as your name and email 
              address when you contact us. We do not collect any data automatically 
              beyond standard server logs.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              How we use your information
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We use contact information solely to respond to your enquiries. 
              We do not sell, share, or distribute your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Cookies
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              hisako.eu does not use tracking cookies or third-party analytics. 
              No cookie consent banner is required.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Third-party links
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our website links to our products (Zetafo, VendoFlow, Passr), each of 
              which operates under its own privacy policy. We are not responsible for 
              the content or practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-3 mt-10">
              Contact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              For any privacy-related questions, contact us at <a href="mailto:hello@hisako.eu" className="hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">hello@hisako.eu</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
