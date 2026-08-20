import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Anima a entrada de um elemento assim que ele cruza o viewport (scroll reveal).
 * Retorna uma função de limpeza para ser usada no cleanup do useEffect.
 */
export function animateReveal(el: HTMLElement, delay: number) {
  if (prefersReducedMotion()) {
    gsap.set(el, { opacity: 1, y: 0 });
    return () => {};
  }

  const ctx = gsap.context(() => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, el);

  return () => ctx.revert();
}
