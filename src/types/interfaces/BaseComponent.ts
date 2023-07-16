import type { ReactNode } from 'react';
import {
  StyledComponentProps,
  AnyStyledComponent,
  DefaultTheme,
} from 'styled-components';

// type K = K extends keyof JSX.IntrinsicElements
// styleProps: StyledComponentProps<
//   K | AnyStyledComponent,
//   DefaultTheme,
//   object,
//   string | number | symbol
// styleProps: StyledComponentProps<'form' | 'input' | 'textarea', DefaultTheme, object, string | number | symbol>;
// >; <'form' | 'input' | 'textarea'>

export interface ComponentBase {
  id?: unknown;
  name?: string;
  title?: string | symbol;
  content?: string | string[] | symbol;
  icon?: string;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | null;
}
export interface XTermComponent extends ComponentBase {
  id: 'tty0' | string | symbol;
  prompt: '[visitor@bleek.dev(v0.9)]λ->>' | string | symbol;
  name: string;
  isExec: boolean | null;
  result: string | null;
  hasError: boolean | null;
}
