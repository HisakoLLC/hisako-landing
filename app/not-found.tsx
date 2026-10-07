import Link from "next/link"
import { ArrowLeft, Home, Layers, Briefcase, Mail } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found.",
}

const helpfulLinks = [
  {
    title: "Capabilities",
    description: "Explore our software engineering, AI, and infrastructure services.",
    href: "/capabilities",
    icon: Layers,
  },
  {
    title: "Our Work",
    description: "Review case studies and systems engineered by Hisako.",
    href: "/work",
    icon: Briefcase,
  },
  {
    title: "Contact",
    description: "Discuss a technology requirement or operational problem.",
    href: "/contact",
    icon: Mail,
  },
]

export default function NotFound() {
  return (
    <div className="bg-background min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-12 sm:space-y-16">
        {/* Hero Notice */}
        <div className="space-y-4 sm:space-y-6">
          <SectionLabel index="STATUS 404" variant="default">
            PAGE NOT FOUND
          </SectionLabel>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
            The requested page does not exist.
          </h1>

          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            The link you followed may be outdated, or the system address may have moved. You can return to the homepage or explore our core services below.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="navy" size="default" className="w-full sm:w-auto min-h-[44px] gap-2">
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="default" className="w-full sm:w-auto min-h-[44px] gap-2">
                <span>Start a Project &rarr;</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Recovery Navigation */}
        <div className="border-t border-border pt-8 sm:pt-12 space-y-6">
          <div className="space-y-1">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
              Explore Hisako
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Direct access to our primary technology areas and work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {helpfulLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="group block focus-ring rounded-md">
                  <Card
                    variant="interactive"
                    className="h-full p-5 sm:p-6 flex flex-col justify-between group-hover:border-primary/40 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-md bg-accent/60 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-xs pt-1 leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </div>
                    <div className="pt-4 text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View page</span>
                      <span>&rarr;</span>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
