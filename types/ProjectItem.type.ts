export type ProjectItem = {
  readonly id: number;
  readonly title: string;
  description: string;
  externalLinks: Array<URL | string>;
  tech: string;
  sourceCode: Array<URL | string | null>;
  screenShots?: Array<URL | string>;
  readonly dateReleased: Date;
  dateUpdated: Date;
  version: number;
}
