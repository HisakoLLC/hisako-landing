import { Hero } from "@/components/sections/Hero"
import { Capabilities } from "@/components/sections/Capabilities"
import { WhyHisako } from "@/components/sections/WhyHisako"
import { HowWeWork } from "@/components/sections/HowWeWork"
import { SelectedWork } from "@/components/sections/SelectedWork"
import { Industries } from "@/components/sections/Industries"
import { WorkWithUs } from "@/components/sections/WorkWithUs"
import { Reveal } from "@/components/ui/reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <WhyHisako />
      </Reveal>
      <HowWeWork />
      <Reveal>
        <SelectedWork />
      </Reveal>
      <Reveal>
        <Industries />
      </Reveal>
      <Reveal>
        <WorkWithUs />
      </Reveal>
    </div>
  )
}
