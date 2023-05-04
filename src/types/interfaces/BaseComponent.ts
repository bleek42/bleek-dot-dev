export interface BaseComponent {
  id: string | number;
  name?: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
}

export interface XTermInputOutput extends BaseComponent {
  name: string | 'tty0';
  prompt: string | '[visitor@bleek.dev(v0.7)->/tty0]/λ->';
  exec: boolean | null;
}
