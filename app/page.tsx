"use client"
import { CyberGrid } from "@/components/cyber-grid"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThreatsSection } from "@/components/threats-section"
import { SafePracticesSection } from "@/components/safe-practices-section"
import { HelplineSection } from "@/components/helpline-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <CyberGrid />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ThreatsSection />
        <SafePracticesSection />
        <HelplineSection />
        <ResourcesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
