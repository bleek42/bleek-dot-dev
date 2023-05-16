import type { ReactNode } from 'react';

export interface BaseComponent<ID extends unknown> {
  id: ID;
  name?: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | null;
}

export interface XTermInputOutput extends BaseComponent<unknown> {
  id: unknown;
  name: string | 'tty0';
  prompt: string | '[visitor@bleek.dev(v0.9)]λ->>';
  exec: boolean | null;
}
