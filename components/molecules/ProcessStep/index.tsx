import Reveal from "@/components/atoms/Reveal";
import type { ProcessStepProps } from "./props";

export default function ProcessStep({ step, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <Reveal delay={delay}>
      <div className="relative pl-6 border-l border-[var(--color-line)] h-full">
        <span className="font-mono text-xs text-[var(--color-accent-soft)] absolute -left-[1px] top-0 -translate-x-1/2 bg-[var(--color-bg)] px-1">
          {step}
        </span>
        <h3 className="font-display text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}
