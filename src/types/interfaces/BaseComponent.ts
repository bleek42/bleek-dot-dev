import type { ReactNode } from 'react';

export interface BaseComponent {
  id: string | number;
  name?: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | null;
}

export interface XTermInputOutput extends BaseComponent {
  name: string | 'tty0';
  prompt: string | '[visitor@bleek.dev(v0.9)]λ->>';
  exec: boolean | null;
}
