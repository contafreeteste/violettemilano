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
              Nossa História
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-normal leading-snug md:text-4xl lg:text-5xl">
              Nascida da paixão
              <br />
              pela beleza refinada
            </h2>
            <div className="mt-8 space-y-6 text-sm font-light leading-relaxed text-muted">
              <p>
                A Violette Milano nasce inspirada na sofisticação italiana
                e no conceito de luxo acessível, transformando o autocuidado
                diário em experiência sensorial refinada.
              </p>
              <p>
                A marca foi criada para mulheres que valorizam a beleza, elegância,
                feminilidade e bem-estar, oferencendo produtos de alta performance
                aliados a fragrâncias sofisticadas, texturas premium e identidade
                visual marcante.
              </p>
              <p>
                Nosso objetivo é desenvolver uma linha que desperte o desejo,
                gere conexão emocional e transforme o momento de cuidado
                em um ritual de autoestima.
                <br />
                Inspirada na elegância de Milão e criada para mulheres que
                enxergam o cuidado como um ritual
              </p>
              <p>
                BEM VINDA AO COMEÇO DE ALGO EXTRAORDINÁRIO.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
