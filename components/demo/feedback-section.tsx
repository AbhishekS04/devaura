import { TestimonialsSection } from "@/components/blocks/testimonials-1"

const demoTestimonials = [
  {
    name: "Sir kitty cat the cat the third",
    rating: 4,
    role: "Lead cuteness manager",
    text: `MeowCorp has purr-transformed how our clowder prowls together. The pawsome interface and claw-some features have boosted our productivity by 30%... or at least that's what the hoomans think. Meow.`,
    avatar:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Mr. Barkinson Barker",
    rating: 3,
    role: "CEO, Anti-cat league",
    text: `bcuz we got meowcorp earlier, we were able to beat the cats in revenue by 69%`,
    avatar:
      "https://images.unsplash.com/photo-1522276498395-f4f68f7f8452?q=80&w=2574&auto=format&fit=crop",
  },
]

export function FeedbackSection() {
  return <TestimonialsSection testimonials={demoTestimonials} />
}
