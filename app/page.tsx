"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { OutlineText } from "@/components/ui/outline-text"
import { HoverSliderDemo } from "@/components/demo/hover-slider-demo"
import { TestimonialsDemo } from "@/components/demo/testimonials-demo"
import { Header } from "@/components/ui/header"
import BentoGridSecondDemo from "@/components/demo/bento-grid-demo-2"
import { ContactSection } from "@/components/ui/contact-section"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="bg-black">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <HeroGeometric 
          badge="Next.js TypeScript Tailwind" 
          title1="Elevate Your" 
          title2="Digital Vision" 
        />
      </section>
      
      {/* Works Section */}
      <section id="works" className="bg-black py-16 scroll-mt-24">
        <div className="container mx-auto px-4 text-center mb-8">
          <OutlineText className="text-white text-[2rem] md:text-[3rem]">My Works</OutlineText>
        </div>
        <div className="container mx-auto px-4">
          <HoverSliderDemo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="feedback" className="bg-black py-16 scroll-mt-24">
        <div className="container mx-auto px-4 text-center mb-8">
          <OutlineText className="text-white text-[2rem] md:text-[3rem]">Feedback</OutlineText>
        </div>
        <div className="container mx-auto px-4">
          <TestimonialsDemo />
        </div>
      </section>

      {/* About Me heading with Bento Grid */}
      <section id="about" className="bg-black py-16 scroll-mt-24">
        <div className="container mx-auto px-4 text-center mb-8">
          <OutlineText className="text-white text-[2rem] md:text-[3rem]">About Me</OutlineText>
        </div>
        <div className="container mx-auto px-4">
          <BentoGridSecondDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
