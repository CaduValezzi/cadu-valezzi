import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "./constants";

export default function ContactLinks() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá, Cadu! Vi seu site e gostaria de conversar sobre um projeto."
  )}`;

  return (
    <div className="flex flex-col gap-3 mt-8">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 font-mono text-sm bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-full px-5 py-3 hover:bg-[#25D366]/20 transition-colors w-fit"
      >
        <MessageCircle size={16} />
        chamar no WhatsApp
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors w-fit"
      >
        <Mail size={16} />
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}
