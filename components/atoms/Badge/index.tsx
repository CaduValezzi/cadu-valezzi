import type { BadgeProps } from "./props";

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="font-mono text-xs text-[var(--color-text-muted)] border border-[var(--color-line)] rounded-full px-2.5 py-1">
      {label}
    </span>
  );
}
