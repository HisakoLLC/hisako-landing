"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    helpCategory: "Software Development",
    projectDescription: "",
    budgetRange: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const helpCategories = [
    "Software Development",
    "AI & Automation",
    "Digital Transformation",
    "Technology Infrastructure",
    "Systems Integration",
    "Other Technology Need",
  ]

  const budgetOptions = [
    "Under $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000 – $100,000",
    "$100,000+",
    "Not yet defined",
  ]

  const timelineOptions = [
    "Immediate (< 1 month)",
    "1 – 3 months",
    "3 – 6 months",
    "Flexible / Exploratory",
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Basic validation
    if (!formData.name || !formData.organization || !formData.email || !formData.projectDescription) {
      setError("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    try {
      // Emulate brief submission processing
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSubmitted(true)
    } catch {
      setError("An unexpected error occurred. Please try emailing us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-6 sm:p-10 rounded-lg border border-border bg-card/60 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
          Message Received
        </h3>
        <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you, {formData.name}. We&rsquo;ll review your request and get back to you and the team at {formData.organization}.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="default"
            onClick={() => {
              setSubmitted(false)
              setFormData({
                name: "",
                organization: "",
                email: "",
                phone: "",
                helpCategory: "Software Development",
                projectDescription: "",
                budgetRange: "",
                timeline: "",
              })
            }}
          >
            Send another inquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {error && (
        <div className="p-4 rounded-md border border-destructive/20 bg-destructive/10 text-destructive text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="name" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="organization" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Organization <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            placeholder="Acme Corporation"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone (optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="email" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@organization.com"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="phone" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Phone <span className="text-muted-foreground font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 700 000 000"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          />
        </div>
      </div>

      {/* Row 3: What do you need help with? */}
      <div className="space-y-1.5 sm:space-y-2">
        <label htmlFor="helpCategory" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
          What do you need help with? <span className="text-primary">*</span>
        </label>
        <select
          id="helpCategory"
          name="helpCategory"
          value={formData.helpCategory}
          onChange={handleChange}
          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
        >
          {helpCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Project description */}
      <div className="space-y-1.5 sm:space-y-2">
        <label htmlFor="projectDescription" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
          Project Description <span className="text-primary">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Briefly describe the operational problem, system requirements, or technology you are planning to build or modernize..."
          className="w-full px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors leading-relaxed"
        />
      </div>

      {/* Row 5: Budget Range (Optional) & Timeline (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="budgetRange" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Budget Range <span className="text-muted-foreground font-normal">(Optional)</span>
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          >
            <option value="">Select an estimated range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label htmlFor="timeline" className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Timeline <span className="text-muted-foreground font-normal">(Optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-border bg-card text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          >
            <option value="">Select target timeline</option>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reassurance and Submit Button */}
      <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
        <Button
          type="submit"
          variant="navy"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-h-[48px] px-8 text-sm"
        >
          <span>{isSubmitting ? "Submitting..." : "Start the conversation →"}</span>
        </Button>

        <p className="text-xs font-mono text-muted-foreground">
          We&rsquo;ll review your request and get back to you.
        </p>
      </div>
    </form>
  )
}
