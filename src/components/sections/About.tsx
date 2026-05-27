"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format')",
              }}
            />
            <div className="absolute inset-0 bg-purple/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-purple-mid">
              Our Story
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-normal leading-snug md:text-4xl lg:text-5xl">
              Born from a passion
              <br />
              for refined beauty
            </h2>
            <div className="mt-8 space-y-6 text-sm font-light leading-relaxed text-muted">
              <p>
                Violette Milano was born in the heart of Milan, where art,
                fashion, and beauty converge into a singular expression of
                elegance. Our journey began with a simple yet profound belief:
                that skincare is not merely a routine, but an intimate ritual of
                self-care and transformation.
              </p>
              <p>
                Every product we create is a testament to our commitment to
                excellence. We source the finest ingredients from around the
                world, combining time-honored botanical wisdom with cutting-edge
                scientific innovation to deliver results that are as luxurious as
                they are effective.
              </p>
              <p>
                Our philosophy is rooted in the idea that true beauty is an
                expression of confidence, care, and authenticity. We believe that
                every woman deserves to feel extraordinary in her own skin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
