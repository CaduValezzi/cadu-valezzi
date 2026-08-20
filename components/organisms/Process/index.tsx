import Reveal from "@/components/atoms/Reveal";
import ProcessStep from "@/components/molecules/ProcessStep";
import { PROCESS_STEPS } from "./constants";

export default function Process() {
  return (
    <section id="processo" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <Reveal>
        <span className="font-mono text-xs text-[var(--color-accent-soft)]">04 · processo</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 max-w-xl leading-tight">
          Como funciona, do primeiro contato à entrega.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-4 gap-6 mt-14">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep key={s.step} step={s.step} title={s.title} description={s.description} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
