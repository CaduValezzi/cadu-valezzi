import Reveal from "@/components/atoms/Reveal";
import ContactLinks from "@/components/molecules/ContactLinks";
import ContactForm from "@/components/molecules/ContactForm";
import { CONTACT_INTRO } from "./constants";

export default function Contact() {
  return (
    <section id="contato" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-5">
          <span className="font-mono text-xs text-[var(--color-accent-soft)]">06 · contato</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
            {CONTACT_INTRO.titleLines[0]}
            <br />
            {CONTACT_INTRO.titleLines[1]}
          </h2>
          <p className="text-[var(--color-text-muted)] mt-5 leading-relaxed max-w-sm">
            {CONTACT_INTRO.description}
          </p>
          <ContactLinks />
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
