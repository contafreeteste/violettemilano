import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Manifesto from "@/components/sections/Manifesto";
import Philosophy from "@/components/sections/Philosophy";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Manifesto />
        <Philosophy />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
