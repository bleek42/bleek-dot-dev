export enum TechStackCategories {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools',
}

type K = keyof typeof TechStackCategories;
interface TechStack<K> {
  name: string;
  techCategory: Array<K>;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  description: string;
  link: URL;
  sourceCode: Array<URL | string> | URL | string;
  screenShots?: Array<URL | string> | URL | string;
  techStack: TechStack<K>[] | TechStack<K>;
  version: number;
  readonly latestReleaseDate: Date;
  createdAt: Date;
  updatedAt?: Date;
}
