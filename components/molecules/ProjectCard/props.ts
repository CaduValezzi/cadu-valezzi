export interface Project {
  tag: string;
  title: string;
  problem?: string;
  solution?: string;
  stack: string[];
  /** Caminho da imagem em /public (ex: "/projects/kanban.png") ou URL absoluta. Se omitido, mostra um placeholder. */
  thumbnail?: string;
  /** URL da página publicada do projeto. Se omitido ou "#", o link aparece desabilitado. */
  liveUrl?: string;
  /** URL do repositório no GitHub. Se omitido, o link não é exibido. */
  githubUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
  delay?: number;
}
