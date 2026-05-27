"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/violettemilanomarca2.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple/70 via-purple/50 to-purple/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs tracking-[0.4em] uppercase text-accent"
        >
          {/* Violette Milano */}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {/* Luxury skincare inspired
          <br />
          by timeless elegance */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-sm font-light leading-relaxed tracking-wide text-white/60"
        >
          {/* Where science meets artistry. Each formulation is a tribute to the
          pursuit of beauty in its most refined form. */}
        </motion.p>

        {/* <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 inline-block border border-accent/50 px-10 py-3.5 text-xs tracking-[0.25em] uppercase text-accent transition-all duration-500 hover:border-accent hover:bg-accent hover:text-purple"
        >
          Discover More
        </motion.a> */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={24} className="text-accent/50" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
