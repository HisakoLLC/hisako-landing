import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="hs-wrap">
      <Nav />
      <main className="hs-section" style={{ borderTop: "none", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: "120px" }}>
        
        <div className="hs-mono-label" style={{ marginBottom: "24px" }}>
          [ SYSTEM ERROR: 404 ]
        </div>
        
        <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(80px, 15vw, 160px)", lineHeight: 0.85, color: "#F5F5F0", marginBottom: "24px" }}>
          NOT FOUND.
        </h1>
        
        <p className="hs-body" style={{ maxWidth: "400px", margin: "0 auto 48px" }}>
          The requested endpoint does not exist or has been removed from the architecture.
        </p>
        
        <Link href="/" className="hs-btn-ghost" style={{ display: "inline-flex", textDecoration: "none" }}>
          Return to Base →
        </Link>
        
      </main>
      <Footer />
    </div>
  );
}
