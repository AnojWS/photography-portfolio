"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ArrowUpRight } from "lucide-react"
import SectionWrapper from "./section-wrapper" // Assuming this exists, or remove if not needed
import { cn } from "@/lib/utils"

// Defining specific sizes for the layout to match the video composition
// The layout is: Left Stack (2 imgs) | Center Big (1 img) | Right Stack (2 imgs)
const galleryImages = [
  // Left Column Top
  {
    id: "1",
    src: "/wedding-photography-elegant.jpg",
    title: "The Preparation",
    category: "Backstage",
    className: "h-64 md:h-[280px]", 
  },
  // Left Column Bottom
  {
    id: "2",
    src: "/tools-closeup.jpg", // changed to match "video" context (details)
    title: "Fine Details",
    category: "Close-up",
    className: "h-64 md:h-[320px]",
  },
  // Center Hero Image
  {
    id: "3",
    src: "/portrait-photography-studio.jpg",
    title: "The Masterpiece",
    category: "Portrait",
    className: "h-64 md:h-[624px]", // Full height of the two side stacks + gap
  },
  // Right Column Top
  {
    id: "4",
    src: "/event-photography-celebration.jpg",
    title: "In Motion",
    category: "Action",
    className: "h-64 md:h-[320px]",
  },
  // Right Column Bottom
  {
    id: "5",
    src: "/fashion-photography-editorial.jpg",
    title: "Styling",
    category: "Fashion",
    className: "h-64 md:h-[280px]",
  },
]

export default function SmoothGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  
  // Ref for scroll activation
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <SectionWrapper id="gallery" className="py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Container is wider now (max-w-[1800px]) to fill more screen real estate */}
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
        
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Visual <span className="text-neutral-500">Narratives</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
            Capturing moments with a cinematic perspective. Explore the collection.
          </p>
        </motion.div>

        {/* CUSTOM GRID LAYOUT 
          Using Flexbox for mobile, CSS Grid for Desktop
          Grid is 12 columns: 3 (Left) - 6 (Center) - 3 (Right)
        */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* --- LEFT COLUMN (Stack of 2) --- */}
          <div className="md:col-span-3 flex flex-col gap-4 md:gap-6">
             <GalleryCard item={galleryImages[0]} index={0} isInView={isInView} setSelectedId={setSelectedId} />
             <GalleryCard item={galleryImages[1]} index={1} isInView={isInView} setSelectedId={setSelectedId} />
          </div>

          {/* --- CENTER COLUMN (Hero Image) --- */}
          <div className="md:col-span-6">
            <GalleryCard item={galleryImages[2]} index={2} isInView={isInView} setSelectedId={setSelectedId} priority />
          </div>

          {/* --- RIGHT COLUMN (Stack of 2) --- */}
          <div className="md:col-span-3 flex flex-col gap-4 md:gap-6">
            <GalleryCard item={galleryImages[3]} index={3} isInView={isInView} setSelectedId={setSelectedId} />
            <GalleryCard item={galleryImages[4]} index={4} isInView={isInView} setSelectedId={setSelectedId} />
          </div>

        </div>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pr-4 md:pr-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] mx-4 overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages.find((img) => img.id === selectedId)?.src || ""}
                alt="Selected"
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

// Sub-component for individual cards to keep code clean
function GalleryCard({ item, index, isInView, setSelectedId, priority = false }: any) {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1.2,
        delay: index * 0.15, // Stagger effect
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for "Smooth" feel
      }}
      onClick={() => setSelectedId(item.id)}
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-neutral-900 cursor-pointer group",
        item.className
      )}
    >
      <Image
        src={item.src || "/placeholder.svg"}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase mb-2">{item.category}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
            <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}