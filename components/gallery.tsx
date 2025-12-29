"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import SectionWrapper from "./section-wrapper"

interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
}

const galleryItems: GalleryItem[] = [
  { id: "1", src: "/wedding-photography-elegant.jpg", alt: "Wedding ceremony", title: "Timeless Wedding" },
  { id: "2", src: "/portrait-photography-studio.jpg", alt: "Professional portrait", title: "Studio Portrait" },
  { id: "3", src: "/landscape-photography-sunset.jpg", alt: "Golden hour landscape", title: "Golden Hour" },
  { id: "4", src: "/event-photography-celebration.jpg", alt: "Event celebration", title: "Celebration Moment" },
  { id: "5", src: "/fashion-photography-editorial.jpg", alt: "Fashion editorial", title: "Editorial Collection" },
  { id: "6", src: "/travel-photography-adventure.jpg", alt: "Travel photography", title: "World Travels" },
]

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <SectionWrapper id="gallery" className="py-20 px-6" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A curated selection of our most compelling photography projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`gallery-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(item.id)}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/5] bg-background overflow-hidden"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:brightness-75 transition-all duration-500"
                />

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-end justify-start p-6"
                >
                  <div>
                    <p className="text-foreground text-lg font-serif font-bold">{item.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`gallery-${selectedId}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <Image
                src={
                  galleryItems.find((item) => item.id === selectedId)?.src || "/placeholder.svg" || "/placeholder.svg"
                }
                alt="Gallery item"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
