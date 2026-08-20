import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Services from "@/components/organisms/Services";
import Portfolio from "@/components/organisms/Portfolio";
import Process from "@/components/organisms/Process";
import FAQ from "@/components/organisms/FAQ";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";

export default function HomeTemplate() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
