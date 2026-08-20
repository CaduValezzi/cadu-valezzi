import Reveal from "@/components/atoms/Reveal";
import ProjectCard from "@/components/molecules/ProjectCard";
import { PROJECTS } from "./constants";

export default function Portfolio() {
  return (
    <section id="projetos" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <Reveal>
        <span className="font-mono text-xs text-[var(--color-accent-soft)]">03 · projetos</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl leading-tight">
            Alguns estudos de caso.
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] max-w-sm">
            Portfólio em construção — projetos acadêmicos e de estudo aplicados
            a problemas reais de negócio. Novos cases entram conforme os
            primeiros clientes.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
