"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Badge from "@/components/atoms/Badge";
import type { TechStackAccordionProps } from "./props";

/**
 * Accordion compacto para revelar a stack técnica de um projeto sob demanda,
 * mantendo o card enxuto por padrão. Animação via CSS grid-template-rows —
 * dispensa GSAP para um toggle desse tamanho.
 */
export default function TechStackAccordion({ stack, label = "tecnologias usadas" }: TechStackAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 pt-5 border-t border-[var(--color-line)]">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-2 font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
      >
        {label}
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-2 pt-4">
            {stack.map((s) => (
              <Badge key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
