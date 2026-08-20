import type { LucideIcon } from "lucide-react";

export interface CredentialCardProps {
  icon: LucideIcon;
  label: string;
  detail: string;
  delay?: number;
}
