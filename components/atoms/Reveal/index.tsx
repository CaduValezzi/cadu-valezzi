"use client";

import { useEffect, useRef } from "react";
import { animateReveal } from "./animations";
import type { RevealProps } from "./props";

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return animateReveal(el, delay);
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
