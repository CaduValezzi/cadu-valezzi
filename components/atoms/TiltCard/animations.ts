import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface TiltSetters {
  rotateX: gsap.QuickToFunc;
  rotateY: gsap.QuickToFunc;
  glowX: gsap.QuickToFunc;
  glowY: gsap.QuickToFunc;
}

/** Cria os setters suavizados de rotação 3D + posição do brilho interno do card. */
export function createTiltSetters(el: HTMLElement): TiltSetters | null {
  if (prefersReducedMotion()) return null;
  return {
    rotateX: gsap.quickTo(el, "rotateX", { duration: 0.4, ease: "power3.out" }),
    rotateY: gsap.quickTo(el, "rotateY", { duration: 0.4, ease: "power3.out" }),
    glowX: gsap.quickTo(el, "--gx", { duration: 0.3, ease: "power3.out" }),
    glowY: gsap.quickTo(el, "--gy", { duration: 0.3, ease: "power3.out" }),
  };
}

/** Aplica a inclinação com base na posição relativa (0–1) do cursor dentro do card. */
export function applyTilt(setters: TiltSetters, relativeX: number, relativeY: number) {
  setters.rotateX((0.5 - relativeY) * 10);
  setters.rotateY((relativeX - 0.5) * 10);
  setters.glowX(relativeX * 100);
  setters.glowY(relativeY * 100);
}

/** Retorna o card à posição neutra quando o cursor sai. */
export function resetTilt(setters: TiltSetters) {
  setters.rotateX(0);
  setters.rotateY(0);
}
