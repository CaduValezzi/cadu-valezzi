"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import NavBar from "@/components/molecules/NavBar";
import MagneticButton from "@/components/atoms/MagneticButton";
import { HERO_HEADLINE, HERO_EYEBROW, HERO_SUBTITLE } from "./constants";
import { useTypedText, animateHeroIntro, animateHeroSubtitle, createHeroGlowTracker } from "./animations";

export default function Hero() {
  const { output, done } = useTypedText(HERO_HEADLINE);
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => animateHeroIntro(navRef.current, eyebrowRef.current), []);

  useEffect(() => {
    if (done) animateHeroSubtitle(subRef.current);
  }, [done]);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;
    return createHeroGlowTracker(section, glow);
  }, []);

  const lines = output.split("\n");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden grid-lines flex flex-col justify-between"
    >
      {/* mouse-reactive gradient mesh */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={
          {
            "--mx": "50%",
            "--my": "35%",
            background:
              "radial-gradient(600px circle at var(--mx) var(--my), rgba(124,92,255,0.25), transparent 60%)",
          } as React.CSSProperties
        }
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #ff6b4a, transparent 70%)" }}
      />

      <NavBar ref={navRef} />

      {/* hero content */}
      <div className="relative z-10 px-6 md:px-12 pb-10 md:pb-16">
        <p ref={eyebrowRef} className="font-mono text-xs md:text-sm text-[var(--color-coral)] mb-4 md:mb-6">
          {HERO_EYEBROW}
        </p>

        <h1 className="font-display font-semibold text-[12vw] md:text-[6.2vw] leading-[0.95] tracking-tight whitespace-pre-wrap min-h-[2.1em] md:min-h-[2.05em]">
          {lines.map((line, idx) => (
            <span key={idx} className="block">
              {idx === 1 ? <span className="text-gradient">{line}</span> : line}
            </span>
          ))}
          <span
            className={`inline-block w-[0.5ch] md:w-[0.4ch] h-[0.8em] align-middle ml-1 bg-[var(--color-accent)] ${
              done ? "animate-pulse" : ""
            }`}
          />
        </h1>

        <div
          ref={subRef}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0"
        >
          <p className="max-w-md text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
            {HERO_SUBTITLE}
          </p>

          <MagneticButton
            href="#contato"
            className="group inline-flex items-center gap-2 self-start font-mono text-sm bg-[var(--color-text)] text-[#0a0a0f] rounded-full pl-5 pr-4 py-3 hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            solicitar orçamento
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
