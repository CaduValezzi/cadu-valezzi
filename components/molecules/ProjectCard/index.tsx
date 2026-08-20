import Reveal from "@/components/atoms/Reveal";
import TiltCard from "@/components/atoms/TiltCard";
import Badge from "@/components/atoms/Badge";
import type { ProjectCardProps } from "./props";

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="border border-[var(--color-line)] rounded-2xl p-6 h-full flex flex-col bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/60 transition-colors duration-300">
        <span className="font-mono text-xs text-[var(--color-coral)]">{project.tag}</span>
        <h3 className="font-display text-xl font-semibold mt-3">{project.title}</h3>

        <div className="mt-5 space-y-3 text-sm flex-1">
          <div>
            <p className="text-[var(--color-text-muted)] font-mono text-xs mb-1">problema</p>
            <p className="text-[var(--color-text)]/90 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-[var(--color-text-muted)] font-mono text-xs mb-1">solução</p>
            <p className="text-[var(--color-text)]/90 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[var(--color-line)]">
          {project.stack.map((s) => (
            <Badge key={s} label={s} />
          ))}
        </div>
      </TiltCard>
    </Reveal>
  );
}
