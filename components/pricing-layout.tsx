"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
  image: string
}

interface PricingLayoutProps {
  tier: PricingTier
  isReversed: boolean
}

export default function PricingLayout({ tier, isReversed }: PricingLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-16 lg:py-24 border-b border-white/10 last:border-0"
    >
      {/* Image Section */}
      <div 
        className={cn(
          "w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg",
          isReversed ? "lg:order-2" : "lg:order-1"
        )}
      >
        <Image
          src={tier.image}
          alt={tier.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {tier.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-[#d4af37] text-[#121212] px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
              Most Popular
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div 
        className={cn(
          "w-full lg:w-1/2 flex flex-col justify-center",
          isReversed ? "lg:order-1" : "lg:order-2"
        )}
      >
        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
          {tier.name}
        </h3>
        <p className="text-5xl lg:text-6xl font-bold mb-6 text-[#d4af37]">
          {tier.price}
        </p>
        <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
          {tier.description}
        </p>

        <ul className="space-y-4 mb-10">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-4">
              <div className="mt-1 bg-[#d4af37]/10 p-1 rounded-full">
                <Check className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span className="text-foreground/80 text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300",
            tier.featured
              ? "bg-[#d4af37] text-[#121212] hover:bg-[#e6c248]"
              : "border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#121212]"
          )}
        >
          Select {tier.name}
        </motion.button>
      </div>
    </motion.div>
  )
}
