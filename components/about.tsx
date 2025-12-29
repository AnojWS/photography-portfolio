"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "./section-wrapper"

const stats = [
  { label: "500+", value: "Projects" },
  { label: "10+", value: "Awards" },
  { label: "15", value: "Years" },
  { label: "98%", value: "Satisfaction" },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/photographer-portrait-professional.jpg"
              alt="Photographer portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">Our Story</h2>

            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              With over 15 years of experience in photography, we've dedicated ourselves to capturing the most precious
              moments of our clients' lives. Our approach combines technical excellence with artistic vision.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Every photograph tells a story. We believe in creating images that transcend the moment— ones that evoke
              emotion, preserve memories, and define legacies for generations to come.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 pl-4"
                  style={{ borderColor: "#d4af37" }}
                >
                  <p className="text-3xl font-serif font-bold mb-1" style={{ color: "#d4af37" }}>
                    {stat.label}
                  </p>
                  <p className="text-foreground/60 text-sm uppercase tracking-widest">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
