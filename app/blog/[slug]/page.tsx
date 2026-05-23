import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug} | Hisako AI Agency`,
    alternates: { canonical: `https://hisako.eu/blog/${params.slug}` },
    other: {
      'ai-content-declaration': 'human-authored',
    },
  }
}

export default function BlogPost() {
  return (
    <>
      <Nav />
      <main className="w-full bg-[#0A0A0A] min-h-screen">
        <section style={{ padding: '160px 0' }} className="w-full max-w-3xl mx-auto px-6">
          <h1 
            className="text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '48px', lineHeight: '1.1' }}
          >
            Article coming soon
          </h1>
          <p className="text-[#666] mt-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            We are working on this content. Check back later.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
