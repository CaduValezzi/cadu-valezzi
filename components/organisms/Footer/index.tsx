import { FOOTER_LINKS } from "./constants";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-[var(--color-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Cadu Valezzi. Todos os direitos reservados.
      </span>
      <div className="flex items-center gap-5 font-mono text-xs text-[var(--color-text-muted)]">
        {FOOTER_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-[var(--color-text)] transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
