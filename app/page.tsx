import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { Timeline } from "@/components/timeline"
import { RegistrationCTA } from "@/components/registration-cta"
import { TermsConditions } from "@/components/terms-conditions"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Highlights />
        <Timeline />
        <Gallery/>
        <RegistrationCTA />
        <TermsConditions />
        <Footer />
      </div>
    </div>
  )
}
