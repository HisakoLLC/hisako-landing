import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'Blog — AI Insights & Agency Updates | Hisako',
  description: 'Insights on AI agents, LLM integration, workflow automation, and building AI systems for business. From the Hisako team.',
  alternates: { canonical: 'https://hisako.eu/blog' },
  other: {
    'ai-content-declaration': 'human-authored',
  },
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-[#0A0A0A] min-h-screen">
        <section style={{ padding: '160px 0' }} className="w-full max-w-5xl mx-auto px-6">
          <h1 
            className="text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '72px', lineHeight: '1' }}
          >
            Insights
          </h1>
          <p 
            className="text-[#666] mt-4" 
            style={{ fontSize: '18px', fontFamily: 'var(--font-dm-sans), sans-serif', maxWidth: '600px', lineHeight: '1.6' }}
          >
            Perspectives on AI systems, agents, and automation from the Hisako team.
          </p>

          <div 
            className="mt-16"
            style={{ maxWidth: '520px', border: '1px solid #1E1E1E', padding: '40px', background: '#090909' }}
          >
            <h2 
              className="text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}
            >
              First article coming soon.
            </h2>
            <p className="text-[#555]" style={{ fontSize: '14px', fontFamily: 'var(--font-dm-sans), sans-serif', marginBottom: '32px', lineHeight: '1.6' }}>
              We're drafting deep-dive guides on AI agents, LLM integration, and operational strategy. Get notified when we publish.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="hs-form-group" style={{ marginBottom: '16px' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    fontFamily: 'var(--font-jetbrains-mono), monospace', 
                    fontSize: '11px', 
                    letterSpacing: '0.1em',
                    color: '#666',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  GET NOTIFIED
                </label>
                <input 
                  id="email" 
                  type="email" 
                  className="hs-form-input"
                  placeholder="Enter your email" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="hs-submit"
                style={{ width: '100%' }}
              >
                SUBSCRIBE →
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
