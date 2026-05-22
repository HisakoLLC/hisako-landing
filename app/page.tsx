import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Proof from "@/components/sections/Proof";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="hs-wrap">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Proof />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
