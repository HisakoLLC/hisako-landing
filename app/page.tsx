import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Manifesto } from "@/components/sections/Manifesto";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Manifesto />
    </>
  );
}
