"use client";

import { useEffect, useRef } from "react";
import { createMagneticSetters, getMagneticOffset, type MagneticSetters } from "./animations";
import type { MagneticButtonProps } from "./props";

export default function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const setters = useRef<MagneticSetters | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setters.current = createMagneticSetters(el);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || !setters.current) return;
    const { x, y } = getMagneticOffset(e, el.getBoundingClientRect());
    setters.current.x(x);
    setters.current.y(y);
  }

  function handleLeave() {
    setters.current?.x(0);
    setters.current?.y(0);
  }

  return (
    <a ref={ref} href={href} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {children}
    </a>
  );
}
