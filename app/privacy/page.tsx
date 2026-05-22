import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Privacy Policy | Hisako Technologies",
};

export default function Privacy() {
  return (
    <div className="hs-wrap">
      <Nav />
      <main className="hs-section" style={{ borderTop: "none", paddingTop: "140px", minHeight: "100svh" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className="hs-mono-label" style={{ marginBottom: "20px" }}>[ LEGAL ]</div>
          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 0.9, color: "#F5F5F0", marginBottom: "64px" }}>
            PRIVACY POLICY
          </h1>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            
            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                1. Information Collection
              </h2>
              <p className="hs-body">
                We collect information from you when you visit our site, fill out a form, or communicate with us. The collected information includes your name, email address, and any project details you choose to share with us via our contact channels.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                2. Use of Information
              </h2>
              <p className="hs-body">
                Any of the information we collect from you may be used in one of the following ways:
              </p>
              <ul style={{ color: "#666", fontSize: "14px", lineHeight: 1.8, marginTop: "16px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website in order to better serve you.</li>
                <li>To allow us to better service you in responding to your customer service requests.</li>
                <li>To send periodic emails regarding your order or other products and services.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                3. Information Protection
              </h2>
              <p className="hs-body">
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                4. Cookies
              </h2>
              <p className="hs-body">
                We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                5. Third-Party Disclosure
              </h2>
              <p className="hs-body">
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "14px", fontWeight: 500, color: "#F5F5F0", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "12px" }}>
                6. Your Consent
              </h2>
              <p className="hs-body">
                By using our site, you consent to our web site privacy policy.
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
