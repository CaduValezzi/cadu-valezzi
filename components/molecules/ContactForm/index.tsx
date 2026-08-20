"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { ContactFormData } from "./props";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState<ContactFormData>({ nome: "", email: "", projeto: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a um endpoint real (ex: Resend, Formspree, ou API route própria)
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-[var(--color-line)] rounded-2xl p-10 bg-[var(--color-bg-card)] h-full flex flex-col justify-center">
        <p className="font-display text-2xl font-semibold text-[var(--color-accent-soft)]">
          Mensagem enviada.
        </p>
        <p className="text-[var(--color-text-muted)] mt-3">
          Obrigado, {form.nome.split(" ")[0] || "!"} Recebi sua mensagem e retorno em breve —
          se preferir uma resposta mais rápida, me chama no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="font-mono text-xs text-[var(--color-text-muted)]">
            nome
          </label>
          <input
            id="nome"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full mt-2 bg-transparent border-b border-[var(--color-line)] py-2.5 focus:border-[var(--color-accent)] transition-colors outline-none"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs text-[var(--color-text-muted)]">
            e-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-2 bg-transparent border-b border-[var(--color-line)] py-2.5 focus:border-[var(--color-accent)] transition-colors outline-none"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projeto" className="font-mono text-xs text-[var(--color-text-muted)]">
          conte sobre o projeto
        </label>
        <textarea
          id="projeto"
          required
          rows={4}
          value={form.projeto}
          onChange={(e) => setForm({ ...form, projeto: e.target.value })}
          className="w-full mt-2 bg-transparent border-b border-[var(--color-line)] py-2.5 focus:border-[var(--color-accent)] transition-colors outline-none resize-none"
          placeholder="Tipo de site, prazo desejado, orçamento estimado..."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 font-mono text-sm bg-[var(--color-text)] text-[#0a0a0f] rounded-full pl-5 pr-4 py-3 hover:bg-[var(--color-accent-soft)] transition-colors"
      >
        enviar mensagem
        <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
