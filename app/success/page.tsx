import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Message Received | Hisako Technologies",
};

export default function Success() {
  return (
    <div className="hs-wrap">
      <Nav />
      <main className="hs-section" style={{ borderTop: "none", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingLeft: "max(40px, 10vw)", paddingTop: "120px" }}>
        
        <div className="hs-mono-label" style={{ marginBottom: "24px", color: "#E8400C" }}>
          [ STATUS: 200 OK ]
        </div>
        
        <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(64px, 10vw, 120px)", lineHeight: 0.9, color: "#F5F5F0", marginBottom: "32px" }}>
          MESSAGE<br/>RECEIVED.
        </h1>
        
        <p className="hs-body" style={{ maxWidth: "480px", marginBottom: "48px" }}>
          Your transmission has been logged. We will review your brief and be in touch shortly to discuss architecture and next steps.
        </p>
        
        <Link href="/" className="hs-btn-primary" style={{ display: "inline-flex", textDecoration: "none" }}>
          Return to Base →
        </Link>
        
      </main>
      <Footer />
    </div>
  );
}
