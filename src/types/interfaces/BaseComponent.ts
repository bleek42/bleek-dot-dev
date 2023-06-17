import type { ReactNode } from 'react';
import {
  StyledComponentProps,
  AnyStyledComponent,
  DefaultTheme,
} from 'styled-components';

export interface ComponentBase<K extends keyof JSX.IntrinsicElements> {
  styleProps: StyledComponentProps<
    K | AnyStyledComponent,
    DefaultTheme,
    object,
    string | number | symbol
  >;
  id?: unknown;
  name?: string | symbol;
  title?: string | symbol;
  content?: string | string[] | symbol;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | null;
}
export interface XTermComponent extends ComponentBase<'textarea'> {
  name: 'tty0' | string | symbol;
  prompt: '[visitor@bleek.dev(v0.9)]λ->>' | string | symbol;
  isExec: boolean | null;
  result: string | null;
  hasError: boolean | null;
}
