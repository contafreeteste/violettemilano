"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Gem,
  Sparkles,
  Crown,
  Heart,
  Lightbulb,
  Flower2,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Crown,
    title: "Sophistication",
    description:
      "Every detail is meticulously considered, from formulation to presentation.",
  },
  {
    icon: Gem,
    title: "Quality",
    description:
      "We source only the finest ingredients, ensuring uncompromising standards.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Each interaction with our brand is designed to feel extraordinary.",
  },
  {
    icon: Flower2,
    title: "Modern Femininity",
    description:
      "Celebrating the multifaceted nature of contemporary women.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Bridging timeless wisdom with cutting-edge skincare science.",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description:
      "Empowering rituals of self-care that nurture body and spirit.",
  },
  {
    icon: Palette,
    title: "Refined Aesthetic",
    description:
      "A visual language that embodies elegance in every expression.",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-purple-mid"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-normal md:text-4xl lg:text-5xl"
          >
            The pillars of our identity
          </motion.h2>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: "easeOut",
                }}
                className="group border border-border p-8 transition-all duration-500 hover:border-purple-mid/30 hover:shadow-md hover:shadow-purple-mid/5"
              >
                <Icon
                  size={24}
                  className="text-purple-mid transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-lg font-normal">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
