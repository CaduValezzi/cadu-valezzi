import { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  /** Atraso, em segundos, antes da animação de entrada começar. */
  delay?: number;
  className?: string;
}
