import { useEffect, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/** Efeito de "digitação" progressiva de um texto. */
export function useTypedText(text: string, speed = 38, startDelay = 500) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}

/** Timeline de entrada: nav e eyebrow aparecem assim que a seção monta. */
export function animateHeroIntro(navEl: HTMLElement | null, eyebrowEl: HTMLElement | null) {
  if (prefersReducedMotion() || !navEl || !eyebrowEl) return () => {};

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(navEl, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 }).fromTo(
      eyebrowEl,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.25"
    );
  });

  return () => ctx.revert();
}

/** Anima a entrada do subtítulo + CTA assim que a digitação do headline termina. */
export function animateHeroSubtitle(el: HTMLElement | null) {
  if (!el) return;
  if (prefersReducedMotion()) {
    gsap.set(el, { opacity: 1, y: 0 });
    return;
  }
  gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
}

/** Configura o brilho radial que acompanha o mouse dentro da seção (sem re-render React). */
export function createHeroGlowTracker(sectionEl: HTMLElement, glowEl: HTMLElement) {
  if (prefersReducedMotion()) return () => {};

  const setX = gsap.quickTo(glowEl, "--mx", { duration: 0.5, ease: "power3.out" });
  const setY = gsap.quickTo(glowEl, "--my", { duration: 0.5, ease: "power3.out" });

  const handleMove = (e: MouseEvent) => {
    const rect = sectionEl.getBoundingClientRect();
    setX(((e.clientX - rect.left) / rect.width) * 100);
    setY(((e.clientY - rect.top) / rect.height) * 100);
  };

  sectionEl.addEventListener("mousemove", handleMove);
  return () => sectionEl.removeEventListener("mousemove", handleMove);
}
