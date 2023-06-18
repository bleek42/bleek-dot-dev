import { type ReactNode } from 'react';
import {
  StyledComponent,
  StyledComponentProps,
  AnyStyledComponent,
  DefaultTheme,
} from 'styled-components';

export interface Component {
  id?: unknown;
  name?: string | symbol;
  className?: string | null;
  title?: string | symbol;
  content?: string | string[] | symbol;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[] | null;
}
export interface XTermComponent extends Component {
  name: 'tty0' | string | symbol;
  prompt: '[visitor@bleek.dev(v0.9)]λ->>' | string | symbol;
  stdin: string | null;
  stdio: string | null;
  isExec: boolean | null;
  stderr?: string | null;
}

export interface MetaComponent extends Component {
  title: string;
  description: string;
  keywords: string | string[];
  id?: unknown;
  name?: string | symbol;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
}
