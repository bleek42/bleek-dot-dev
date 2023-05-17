import type { ReactNode } from 'react';

export interface BaseComponent<ID extends unknown> {
  id?: ID;
  name?: string | symbol;
  title?: string | symbol;
  content?: string | string[] | symbol;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | null;
}

export interface XTermInputOutput extends BaseComponent<unknown> {
  id?: unknown;
  name: 'tty0' | string | symbol;
  prompt: '[visitor@bleek.dev(v0.9)]λ->>' | string | symbol;
  exec: boolean | null;
}
