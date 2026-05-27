"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-purple-mid">
              Entre em contato
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-normal leading-snug md:text-4xl lg:text-5xl">
              Vamos iniciar
              <br />uma conversa
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-muted">
              Se você tem interesse em nossos produtos, 
              busca oportunidades de parceria ou simplesmente 
              quer saber mais sobre a Violette Milano, adoraríamos ouvir você.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-purple-mid" />
                <a
                  href="mailto:VioletteMilanoComercial@outlook.com"
                  className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
                >
                  VioletteMilanoComercial@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <InstagramIcon size={18} className="text-purple-mid" />
                <a
                  href="https://instagram.com/violettemilano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
                >
                  @violettemilano
                </a>
              </div>

              <div className="flex items-center gap-4">
                <LinkedinIcon size={18} className="text-purple-mid" />
                <a
                  href="https://linkedin.com/company/violettemilano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
                >
                  Violette Milano
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-xs tracking-[0.2em] uppercase text-purple-mid">
                Parcerias
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                Para assuntos comerciais e oportunidades de parceria, entre em contato pelo e-mail{" "}
                <a
                  href="mailto:VioletteMilanoComercial@outlook.com"
                  className="text-foreground underline underline-offset-4 transition-colors duration-300 hover:text-purple-mid"
                >
                  VioletteMilanoComercial@outlook.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm font-light text-foreground outline-none transition-colors duration-300 placeholder:text-muted/40 focus:border-purple-mid"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm font-light text-foreground outline-none transition-colors duration-300 placeholder:text-muted/40 focus:border-purple-mid"
                  placeholder="seuemail@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-sm font-light text-foreground outline-none transition-colors duration-300 placeholder:text-muted/40 focus:border-purple-mid"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 border border-purple px-10 py-3.5 text-xs tracking-[0.25em] uppercase text-purple transition-all duration-500 hover:bg-purple hover:text-white"
              >
                Enviar Mensagem
                <Send
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
