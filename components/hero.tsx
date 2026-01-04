'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import backgroundImage1 from '../assets/fantasy-couple-getting-married.jpg';
import backgroundImage2 from '../assets/loving-couple-holding-umbrella.jpg';
import backgroundImage3 from '../assets/man-woman-having-beach-wedding.jpg';

export default function Hero() {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 750); // Half of the transition duration for darkening effect
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Preload Images */}
      <div style={{ display: 'none' }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Preload ${index}`} priority />
        ))}
      </div>

      {/* Background Image Slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Photography Studio Hero ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        animate={{ opacity: isTransitioning ? 0.8 : 0.4 }}
        transition={{ duration: 0.75 }}
      />

      {/* Content */}
      <div className=" flex flex-1 justify-start ps-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <p
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#d4af37' }}
            >
              Welcome to our studio
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-serif font-bold mb-6 text-balance"
            style={{ color: '#e8e8e8' }}
          >
            Capturing Moments
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto mb-6 bg-gradient-to-r"
            style={{
              backgroundImage: 'linear-gradient(to right, #d4af37, #e8e8e8)',
            }}
          />

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-light text-foreground text-balance"
          >
            Defining Legacy
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Professional photography that tells your story with elegance and
            artistry
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 font-semibold rounded-sm transition-colors duration-300"
            style={{ backgroundColor: '#d4af37', color: '#121212' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#e8e8e8')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#d4af37')
            }
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div
          className="w-6 h-10 border rounded-full flex items-center justify-center"
          style={{ borderColor: '#d4af37' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
