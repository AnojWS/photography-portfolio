"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import SectionWrapper from "./section-wrapper"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for small projects and intimate moments",
    features: [
      "4 hours of coverage",
      "300+ edited photos",
      "Digital gallery",
      "Fast delivery (2 weeks)",
      "Usage rights included",
    ],
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Our most popular package for memorable occasions",
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
  },
  {
    name: "Event",
    price: "$5,000+",
    description: "Complete coverage for large-scale events",
    features: [
      "Full-day coverage",
      "2000+ photos",
      "Multiple photographers",
      "Same-day highlights video",
      "Premium album",
      "Print package included",
      "Unlimited revisions",
    ],
  },
]

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-20 px-6" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Pricing Packages</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Transparent pricing for every occasion and budget</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-lg p-8 transition-all duration-300 ${tier.featured ? "md:scale-105" : ""}`}
              style={{
                backgroundColor: tier.featured ? "rgba(212, 175, 55, 0.1)" : "#121212",
                border: tier.featured ? "2px solid rgba(212, 175, 55, 0.5)" : "1px solid #2a2a2a",
              }}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
                    style={{ backgroundColor: "#d4af37", color: "#121212" }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: "#d4af37" }}>
                {tier.price}
              </p>
              <p className="text-foreground/60 text-sm mb-8">{tier.description}</p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#d4af37" }} />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-sm font-semibold transition-colors duration-300"
                style={{
                  backgroundColor: tier.featured ? "#d4af37" : "#121212",
                  color: tier.featured ? "#121212" : "#d4af37",
                  border: tier.featured ? "none" : "1px solid #d4af37",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = tier.featured ? "#e8e8e8" : "rgba(212, 175, 55, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = tier.featured ? "#d4af37" : "#121212"
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
