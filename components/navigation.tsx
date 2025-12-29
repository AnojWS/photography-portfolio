"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg border-b" : "bg-transparent"
      }`}
      style={{ borderColor: isScrolled ? "rgba(212, 175, 55, 0.2)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-serif font-bold tracking-widest"
          style={{ color: "#d4af37" }}
        >
          STUDIO
        </motion.div>

        <div className="flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-sm font-medium text-foreground transition-colors duration-300 hover:opacity-70"
              style={{ "--hover-color": "#d4af37" } as any}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
