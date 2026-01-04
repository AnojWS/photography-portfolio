"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  style?: React.CSSProperties
}

export default function SectionWrapper({ children, id, className = "", style }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  )
}
