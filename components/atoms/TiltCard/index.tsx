"use client";

import { useRef } from "react";
import { createTiltSetters, applyTilt, resetTilt, type TiltSetters } from "./animations";
import type { TiltCardProps } from "./props";

/**
 * Card com leve inclinação 3D acompanhando o cursor + brilho que segue o mouse.
 * Efeito sutil para reforçar a ideia de "interface com identidade" sem distrair
 * do conteúdo.
 */
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const setters = useRef<TiltSetters | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    if (!setters.current) {
      setters.current = createTiltSetters(el);
    }
    if (!setters.current) return;

    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    applyTilt(setters.current, relX, relY);
  }

  function handleLeave() {
    if (setters.current) resetTilt(setters.current);
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`relative h-full [transform-style:preserve-3d] ${className}`}
        style={{ "--gx": "50%", "--gy": "50%" } as React.CSSProperties}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(280px circle at var(--gx) var(--gy), rgba(124,92,255,0.15), transparent 70%)",
          }}
        />
        {children}
      </div>
    </div>
  );
}
