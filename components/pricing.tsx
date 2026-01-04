"use client"

import { motion } from "framer-motion"
import SectionWrapper from "./section-wrapper"
import PricingLayout, { PricingTier } from "./pricing-layout"

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for small projects, portraits, and intimate moments. We capture the essence of your story in a concise, high-quality session.",
    features: [
      "4 hours of coverage",
      "300+ edited photos",
      "Digital gallery",
      "Fast delivery (2 weeks)",
      "Usage rights included",
    ],
    image: "/portrait-photography-studio.jpg",
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Our most popular package for memorable occasions like weddings and engagements. Comprehensive coverage ensuring every detail is preserved.",
    features: [
      "8 hours of coverage",
      "800+ edited photos",
      "Premium digital gallery",
      "Private online album",
      "Print-ready files",
      "Custom album design",
      "Dedicated assistant",
    ],
    featured: true,
    image: "/wedding-photography-elegant.jpg",
  },
  {
    name: "Event",
    price: "$5,000+",
    description: "Complete coverage for large-scale events, corporate functions, or multi-day celebrations. No moment goes missed with our full team.",
    features: [
      "Full-day coverage",
      "2000+ photos",
      "Multiple photographers",
      "Same-day highlights video",
      "Premium album",
      "Print package included",
      "Unlimited revisions",
    ],
    image: "/event-photography-celebration.jpg",
  },
]

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Investment</h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Transparent pricing for every occasion. Choose the package that best fits your needs, or contact us for a custom quote.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {pricingTiers.map((tier, index) => (
            <PricingLayout
              key={tier.name}
              tier={tier}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
