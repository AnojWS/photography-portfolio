"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import SectionWrapper from "./section-wrapper"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@studiophoto.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "New York, NY 10001" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <SectionWrapper className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-foreground/60 mb-8">Ready to capture your next moment? We'd love to hear from you.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 transition-colors duration-300"
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderColor: "#2a2a2a",
                    color: "#f5f5f5",
                    border: "1px solid",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 transition-colors duration-300"
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderColor: "#2a2a2a",
                    color: "#f5f5f5",
                    border: "1px solid",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 transition-colors duration-300 resize-none"
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderColor: "#2a2a2a",
                    color: "#f5f5f5",
                    border: "1px solid",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 font-semibold transition-colors duration-300"
                style={{ backgroundColor: "#d4af37", color: "#121212" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8e8e8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Contact Information</h3>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#1a1a1a" }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: "#d4af37" }} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-foreground/60 mb-1">{info.label}</p>
                      <p className="text-foreground text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm uppercase tracking-widest text-foreground/60 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: "#1a1a1a", color: "#d4af37" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#d4af37"
                        e.currentTarget.style.color = "#121212"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#1a1a1a"
                        e.currentTarget.style.color = "#d4af37"
                      }}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ borderColor: "#2a2a2a" }}
              className="border-t pt-8 mt-12"
            >
              <p className="text-foreground/60 text-sm">© 2025 Studio Photography. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
