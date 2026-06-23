import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hisako Technologies.",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-28 px-6">
      <div className="max-w-2xl mx-auto text-left">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-6">
          Contact
        </p>

        {/* Headline */}
        <h1 className="font-bold text-[52px] leading-[1.02] text-foreground">
          Let's talk.
        </h1>

        {/* Paragraph */}
        <p className="mt-5 text-base text-muted-foreground leading-relaxed">
          For product enquiries, partnerships, or anything else — reach us directly.
        </p>

        {/* Email link */}
        <a 
          href="mailto:hello@hisako.eu"
          className="mt-10 inline-block text-[28px] font-semibold text-foreground hover:text-brand transition-colors underline underline-offset-8 decoration-border hover:decoration-brand"
        >
          hello@hisako.eu
        </a>

        {/* Response note */}
        <p className="mt-6 text-sm text-muted-foreground">
          We typically respond within 24 hours.
        </p>
      </div>
    </main>
  );
}
