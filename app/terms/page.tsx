import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Terms of Service | Hisako Technologies",
};

export default function Terms() {
  return (
    <div className="hs-wrap">
      <Nav />
      <main className="hs-section" style={{ borderTop: "none", paddingTop: "140px", minHeight: "100svh" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className="hs-mono-label" style={{ marginBottom: "20px" }}>[ LEGAL ]</div>
          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 0.9, color: "#0A0A0A", marginBottom: "64px" }}>
            TERMS OF SERVICE
          </h1>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            
            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                1. Acceptance of Terms
              </h2>
              <p className="hs-body">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                2. Intellectual Property
              </h2>
              <p className="hs-body">
                The Site and its original content, features, and functionality are owned by Hisako Technologies Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                3. Use License
              </h2>
              <p className="hs-body">
                Permission is granted to temporarily download one copy of the materials (information or software) on Hisako Technologies&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul style={{ color: "#666", fontSize: "14px", lineHeight: 1.8, marginTop: "16px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Hisako Technologies&apos;s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                4. Disclaimer
              </h2>
              <p className="hs-body">
                The materials on Hisako Technologies&apos;s website are provided on an &apos;as is&apos; basis. Hisako Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                5. Limitations
              </h2>
              <p className="hs-body">
                In no event shall Hisako Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hisako Technologies&apos;s website, even if Hisako Technologies or a Hisako Technologies authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                6. Revisions and Errata
              </h2>
              <p className="hs-body">
                The materials appearing on Hisako Technologies&apos;s website could include technical, typographical, or photographic errors. Hisako Technologies does not warrant that any of the materials on its website are accurate, complete or current. Hisako Technologies may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
