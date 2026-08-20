"use client";

import { forwardRef } from "react";
import { NAV_LINKS } from "./constants";

/** forwardRef para permitir que o Hero anime a entrada da nav com GSAP. */
const NavBar = forwardRef<HTMLDivElement>(function NavBar(_props, ref) {
  return (
    <div ref={ref} className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8">
      <span className="font-display font-semibold tracking-tight text-lg">
        Cadu<span className="text-[var(--color-accent-soft)]">.</span>Valezzi
      </span>
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-[var(--color-text-muted)]">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-[var(--color-text)] transition-colors">
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          className="text-[var(--color-text)] border border-[var(--color-line)] rounded-full px-4 py-2 hover:border-[var(--color-accent)] transition-colors"
        >
          orçamento →
        </a>
      </nav>
      <a
        href="#contato"
        className="md:hidden font-mono text-sm border border-[var(--color-line)] rounded-full px-3 py-1.5"
      >
        menu
      </a>
    </div>
  );
});

export default NavBar;
