"use client";

import { useState } from "react";
import Reveal from "@/components/atoms/Reveal";
import FAQItem from "@/components/molecules/FAQItem";
import { FAQS } from "./constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--color-line)]">
      <Reveal>
        <span className="font-mono text-xs text-[var(--color-accent-soft)]">05 · perguntas</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 max-w-xl leading-tight">
          Perguntas frequentes.
        </h2>
      </Reveal>

      <div className="mt-14 max-w-3xl divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
