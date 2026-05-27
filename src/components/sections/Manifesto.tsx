"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "Beauty as expression.",
  "Elegance as identity.",
  "Care as experience.",
];

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="manifesto"
      className="bg-purple py-32 lg:py-44"
      ref={ref}
    >
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-accent"
        >
          Our Manifesto
        </motion.p>

        <div className="mt-16 space-y-10 md:mt-20 md:space-y-14">
          {phrases.map((phrase, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.25,
                ease: "easeOut",
              }}
              className="font-[family-name:var(--font-playfair)] text-3xl font-normal leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {phrase}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-16 h-px w-16 bg-accent/40"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-8 max-w-lg text-sm font-light leading-relaxed text-white/50"
        >
          We believe that beauty is not about perfection — it is about
          intention, presence, and the quiet confidence that comes from truly
          caring for yourself.
        </motion.p>
      </div>
    </section>
  );
}
