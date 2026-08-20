import type { Project } from "@/components/molecules/ProjectCard/props";

// TODO: substitua os placeholders de thumbnail/liveUrl/githubUrl pelos dados reais
// de cada projeto assim que estiverem publicados. Sem thumbnail definido, o card
// mostra um placeholder; sem liveUrl (ou "#"), o link de "ver site" fica desabilitado;
// sem githubUrl, o ícone do GitHub nem aparece (útil pra repositórios privados).
export const PROJECTS: Project[] = [
  {
    tag: "Projeto acadêmico · FIAP",
    title: "Plataforma de gestão de api's",
    // problem: "Equipes precisavam acompanhar entregas e prazos sem depender de planilhas soltas.",
    // solution: "Painel web com quadros Kanban, autenticação de usuários e atualização em tempo real.",
    stack: ["React", "Node.js", "PostgreSQL"],
    thumbnail: undefined, // ex: "/projects/kanban.png"
    liveUrl: "https://custe-ia.vercel.app/",
    githubUrl: "https://github.com/CaduValezzi/Custe_AI",
  },
  {
    tag: "Prova de proficiência · FIAP",
    title: "Landing page",
    // problem: "Loja física sem canal de venda online, perdendo alcance para concorrentes digitais.",
    // solution: "Catálogo responsivo, carrinho, checkout simulado e painel de gestão de produtos.",
    stack: [ "Html", "Scss","Javascript","React.js" ],
    thumbnail: undefined,
    liveUrl: "https://fiap-prova-frontf.vercel.app/",
    githubUrl: "https://github.com/CaduValezzi/fiap_prova_front",
  },
  {
    tag: "Eletro Building",
    title: "Landing page para empresa de engenhria elétrica",
    // problem: "Negócio local sem presença digital, dependendo apenas de indicação boca a boca.",
    // solution: "Página institucional com agendamento via WhatsApp, otimizada para busca local.",
    stack: ["Next.js", "GSAP", "SEO local"],
    thumbnail: undefined,
    liveUrl: "https://www.eletrobuilding.com.br/",
    // githubUrl: 
  },
];
