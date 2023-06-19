import { type ReactNode } from 'react';
import {
  StyledComponent,
  StyledComponentProps,
  AnyStyledComponent,
  DefaultTheme,
} from 'styled-components';

export interface Component {
  name?: string | symbol;
  className?: string | null;
  id?: unknown;
  title?: string | symbol;
  content?: string | string[] | symbol;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[] | null;
}

export interface XTermComponent extends Component {
  name: string | symbol;
  prompt: string | symbol;
  stdin: string | null;
  stdio: string | null;
  isExec: boolean | null;
  stderr?: string | null;
}

export interface MetaComponent extends Component {
  title: string;
  description: string;
  keywords: string | string[];
  name: string | symbol;
  id?: unknown;
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
}

export interface LayoutComponent extends Component {
  children: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[] | null;
}
