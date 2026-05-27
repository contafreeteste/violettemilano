"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-purple-light/20 bg-purple text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg tracking-[0.15em] uppercase text-accent">
              Violette Milano
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/50">
              Nem toda marca nasce para vender.
              Algumas nascem para transformar
              a forma como uma mulher se sente.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3">
              {["Sobre", "Manifesto", "Filosofia", "Visão", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-light text-white/60 transition-colors duration-300 hover:text-accent"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40">
              Conectar
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:VioletteMilanoComercial@outlook.com"
                className="block text-sm font-light text-white/60 transition-colors duration-300 hover:text-accent"
              >
                VioletteMilanoComercial@outlook.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/violettemilano"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/40 transition-colors duration-300 hover:text-accent"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/violettemilano"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/40 transition-colors duration-300 hover:text-accent"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <p className="text-xs font-light text-white/30">
            &copy; {new Date().getFullYear()} Violette Milano. All rights
            reserved.
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white/30 transition-colors duration-300 hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
