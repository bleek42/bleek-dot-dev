export enum TechStackCategories {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools',
}

type Category = keyof typeof TechStackCategories;
interface TechStack<C extends Category> {
  name: string;
  categories: Array<C> | C;
}

export interface ImageAsset {
  id: string;
  url: string;
  fileName: string;
  width?: number;
  height?: number;
  mimeType?: string | null;
  __typename?: 'Asset';
}

export interface Project {
  readonly id: number;
  readonly title: string;
  description: string;
  link: URL;
  active: boolean;
  sourceCode: Array<URL | string> | URL | string;
  screenShots?: Array<URL | string> | URL | string;
  techStack: TechStack<Category>;
  version: number;
  screenshots?: ImageAsset[] | ImageAsset;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProjectQuery {
  __typename?: 'Query';
  projects: Array<Project> | Project | null | undefined;
}
