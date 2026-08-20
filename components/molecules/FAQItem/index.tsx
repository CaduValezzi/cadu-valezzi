"use client";

import { Plus } from "lucide-react";
import type { FAQItemProps } from "./props";

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-medium">{question}</span>
        <Plus
          size={18}
          className={`shrink-0 text-[var(--color-accent-soft)] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--color-text-muted)] leading-relaxed pb-6 max-w-xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}
