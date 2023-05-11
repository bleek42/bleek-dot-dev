export interface BaseComponent {
  id: string | number;
  name: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
}
