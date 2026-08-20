import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface MagneticSetters {
  x: gsap.QuickToFunc;
  y: gsap.QuickToFunc;
}

/** Cria os setters suavizados de posição (x/y) usados no efeito magnético. */
export function createMagneticSetters(el: HTMLElement): MagneticSetters | null {
  if (prefersReducedMotion()) return null;
  return {
    x: gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" }),
    y: gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" }),
  };
}

/** Calcula o deslocamento do botão em relação ao centro, a partir da posição do cursor. */
export function getMagneticOffset(e: { clientX: number; clientY: number }, rect: DOMRect) {
  return {
    x: (e.clientX - (rect.left + rect.width / 2)) * 0.35,
    y: (e.clientY - (rect.top + rect.height / 2)) * 0.35,
  };
}
