type Title = 'bleekDotDev' | 'bleek.dev';

export type MetaProps = JSX.IntrinsicElements['meta'] & {
  title: Title;
  description: string;
  keywords?: string | string[];
  image?: string;
};
