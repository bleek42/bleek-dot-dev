enum TechStackCategories {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools',
}

interface TechStack {
  name: string;
  techCategory: TechStackCategories;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  description: string;
  link: URL;
  sourceCode: Array<URL | string> | URL | string;
  screenShots?: Array<URL | string> | URL | string;
  techStack: TechStack[] | TechStack;
  version: number;
  readonly latestReleaseDate: Date;
  createdAt: Date;
  updatedAt?: Date;
}
