import Reveal from "@/components/atoms/Reveal";
import ServiceItem from "@/components/molecules/ServiceItem";
import { SERVICES } from "./constants";

export default function Services() {
  return (
    <section id="servicos" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <Reveal>
        <span className="font-mono text-xs text-[var(--color-accent-soft)]">02 · serviços</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 max-w-xl leading-tight">
          O que eu construo pra você.
        </h2>
      </Reveal>

      <div className="mt-14 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {SERVICES.map((s, i) => (
          <ServiceItem key={s.title} index={i} title={s.title} description={s.description} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
