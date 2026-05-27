"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "Origin",
    title: "Born in Milan",
    description:
      "Founded at the crossroads of Italian artistry and modern skincare innovation, Violette Milano set out to redefine luxury beauty.",
  },
  {
    year: "Growth",
    title: "Expanding Horizons",
    description:
      "Building a curated collection of premium formulations, each crafted with intention and an unwavering attention to detail.",
  },
  {
    year: "Present",
    title: "International Presence",
    description:
      "Establishing our footprint in key markets worldwide, bringing the Milanese philosophy of beauty to discerning clients globally.",
  },
  {
    year: "Future",
    title: "Global Vision",
    description:
      "Pioneering the next generation of luxury skincare, with sustainable innovation and a commitment to timeless elegance.",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="relative overflow-hidden py-32 lg:py-40" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1920&q=80&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-purple/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-accent"
          >
            Nossa Visão
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-normal text-white md:text-4xl lg:text-5xl"
          >
            Uma jornada de elegância
          </motion.h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.2,
                  ease: "easeOut",
                }}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent md:left-1/2" />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-normal text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
