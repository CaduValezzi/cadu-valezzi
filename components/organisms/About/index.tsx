import Reveal from "@/components/atoms/Reveal";
import CredentialCard from "@/components/molecules/CredentialCard";
import { CREDENTIALS } from "./constants";

export default function About() {
  return (
    <section id="sobre" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <div className="grid md:grid-cols-12 gap-10 md:gap-6">
        <Reveal className="md:col-span-4">
          <span className="font-mono text-xs text-[var(--color-accent-soft)]">01 · sobre</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
            Técnica de mercado,
            <br />
            visão de designer.
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Trabalho na fronteira entre desenvolvimento e design. Depois de
              dois anos construindo interfaces em produção, decidi migrar para
              o trabalho autônomo — trazendo pra cada cliente a mesma exigência
              técnica de um time de produto, sem a burocracia de um.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {CREDENTIALS.map((c, i) => (
              <CredentialCard key={c.label} icon={c.icon} label={c.label} detail={c.detail} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
