export interface ProjectItem {
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
