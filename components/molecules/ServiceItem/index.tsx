import Reveal from "@/components/atoms/Reveal";
import type { ServiceItemProps } from "./props";

export default function ServiceItem({ index, title, description, delay = 0 }: ServiceItemProps) {
  return (
    <Reveal delay={delay}>
      <div className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-baseline hover:bg-[var(--color-bg-card)] transition-colors px-2 -mx-2 rounded-lg">
        <span className="font-mono text-sm text-[var(--color-text-muted)] md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl md:text-2xl font-semibold md:col-span-4 group-hover:text-[var(--color-accent-soft)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-muted)] md:col-span-7 leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}
