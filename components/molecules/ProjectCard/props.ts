export interface Project {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
}

export interface ProjectCardProps {
  project: Project;
  delay?: number;
}
