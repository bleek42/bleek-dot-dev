<<<<<<<< HEAD:types/interfaces/ProjectItem.ts
export interface ProjectItem {
========
export interface Project {
>>>>>>>> ece49da (working on react query codegen from hygraph with axios fetcher):interfaces/Project.ts
  readonly id: number;
  readonly title: string;
  description: string;
  link: Array<URL | string>;
  tech: string;
  sourceCode: Array<URL | string | null>;
  screenShots?: Array<URL | string>;
  readonly dateReleased: Date;
  dateUpdated: Date;
  version: number;
}
