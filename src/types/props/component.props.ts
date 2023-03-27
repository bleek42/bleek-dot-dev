export type ComponentProps = keyof JSX.IntrinsicElements & {
  id: number;
  name: string;
  title?: string;
  keywords?: string;
  icon?: string;
  image?: Array<URL | string> | URL | string;
};
