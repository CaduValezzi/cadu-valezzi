import type { Project } from "@/components/molecules/ProjectCard/props";

export const PROJECTS: Project[] = [
  {
    tag: "Projeto acadêmico · FIAP",
    title: "Plataforma de gestão de projetos",
    problem: "Equipes precisavam acompanhar entregas e prazos sem depender de planilhas soltas.",
    solution: "Painel web com quadros Kanban, autenticação de usuários e atualização em tempo real.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    tag: "Projeto acadêmico · FIAP",
    title: "E-commerce para pequeno varejo",
    problem: "Loja física sem canal de venda online, perdendo alcance para concorrentes digitais.",
    solution: "Catálogo responsivo, carrinho, checkout simulado e painel de gestão de produtos.",
    stack: ["Next.js", "Tailwind", "Stripe (sandbox)"],
  },
  {
    tag: "Estudo de caso",
    title: "Landing page para clínica de estética",
    problem: "Negócio local sem presença digital, dependendo apenas de indicação boca a boca.",
    solution: "Página institucional com agendamento via WhatsApp, otimizada para busca local.",
    stack: ["Next.js", "GSAP", "SEO local"],
  },
];
