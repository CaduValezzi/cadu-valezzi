import Reveal from "@/components/atoms/Reveal";
import type { CredentialCardProps } from "./props";

export default function CredentialCard({ icon: Icon, label, detail, delay = 0 }: CredentialCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="border border-[var(--color-line)] rounded-2xl p-5 h-full bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/60 transition-colors">
        <Icon size={20} className="text-[var(--color-accent-soft)]" />
        <p className="font-display font-semibold mt-4">{label}</p>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">{detail}</p>
      </div>
    </Reveal>
  );
}
