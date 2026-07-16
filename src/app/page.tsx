import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Journey from "@/components/ui/Journey";
import DesignWork from "@/components/ui/DesignWork";
import Building from "@/components/ui/Building";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <DesignWork />
      <Building />
      <Contact />
      <Footer />
    </main>
  );
}
