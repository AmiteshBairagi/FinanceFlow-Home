import TestimonialsSection  from "@/components/sections/TestimonialsSection"

import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import CTASection from "@/components/sections/CTASection"
import FAQSection from "@/components/sections/FAQSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
