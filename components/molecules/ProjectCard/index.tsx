import { ExternalLink, Code2, ImageOff } from "lucide-react";
import Reveal from "@/components/atoms/Reveal";
import TiltCard from "@/components/atoms/TiltCard";
import TechStackAccordion from "@/components/molecules/TechStackAccordion";
import type { ProjectCardProps } from "./props";

function isLinkReady(url?: string) {
  return Boolean(url) && url !== "#";
}

export default function ProjectCard({ project, delay = 0}: ProjectCardProps) {
  const liveReady = isLinkReady(project.liveUrl);
  const githubReady = isLinkReady(project.githubUrl);

  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="border border-[var(--color-line)] rounded-2xl p-6 h-full flex flex-col bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/60 transition-colors duration-300">
        {/* miniatura */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-[var(--color-line)]">
          {project.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element -- fonte dinâmica; troque por next/image quando os domínios das capturas forem definidos
            <img
              src={project.thumbnail}
              alt={`Prévia do projeto ${project.title}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="grid-lines w-full h-full flex flex-col items-center justify-center gap-2 bg-[var(--color-bg-elevated)]">
              <ImageOff size={20} className="text-[var(--color-text-muted)]" />
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                prévia em breve
              </span>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-[var(--color-coral)]">{project.tag}</span>
            <h3 className="font-display text-xl font-semibold mt-1">{project.title}</h3>
          </div>

          {/* links do projeto */}
          <div className="flex items-center gap-1.5 shrink-0 mt-1">
            <a
              href={liveReady ? project.liveUrl : undefined}
              target={liveReady ? "_blank" : undefined}
              rel={liveReady ? "noopener noreferrer" : undefined}
              aria-disabled={!liveReady}
              title={liveReady ? "Ver site" : "Site ainda não publicado"}
              className={`p-2 rounded-full border border-[var(--color-line)] transition-colors ${
                liveReady
                  ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)]/40 cursor-not-allowed"
              }`}
            >
              <ExternalLink size={14} />
            </a>
            {project.githubUrl !== undefined && (
              <a
                href={githubReady ? project.githubUrl : undefined}
                target={githubReady ? "_blank" : undefined}
                rel={githubReady ? "noopener noreferrer" : undefined}
                aria-disabled={!githubReady}
                title={githubReady ? "Ver código-fonte" : "Repositório privado"}
                className={`p-2 rounded-full border border-[var(--color-line)] transition-colors ${
                  githubReady
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)]/40 cursor-not-allowed"
                }`}
              >
                <Code2 size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm flex-1">
         {project.problem?  <div>
            <p className="text-[var(--color-text-muted)] font-mono text-xs mb-1">problema</p>
            <p className="text-[var(--color-text)]/90 leading-relaxed">{project.problem}</p>
          </div>:
          ''}
          {project.solution? <div>
            <p className="text-[var(--color-text-muted)] font-mono text-xs mb-1">solução</p>
            <p className="text-[var(--color-text)]/90 leading-relaxed">{project.solution}</p>
          </div>:
          ''}
        </div>

        <TechStackAccordion stack={project.stack} />
      </TiltCard>
    </Reveal>
  );
}
