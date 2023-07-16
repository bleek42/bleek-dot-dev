import { type Key, type ReactNode } from 'react';
import { type AnyStyledComponent } from 'styled-components';

export interface Component {
  id?: Key | null;
  // className?: string | null;
  name?: string;
  title?: string;
  description?: string | string[] | unknown;
  icon?: string | unknown;
  image?: Array<URL | string> | URL | string;
  locale?: 'en' | 'en_US' | string;
  children?:
    | ReactNode
    | ReactNode[]
    | AnyStyledComponent
    | AnyStyledComponent[]
    | unknown;
}

// type K = K extends keyof JSX.IntrinsicElements
// styleProps: StyledComponentProps<
//   K | AnyStyledComponent,
//   DefaultTheme,
//   object,
//   string | number | symbol
// styleProps: StyledComponentProps<'form' | 'input' | 'textarea', DefaultTheme, object, string | number | symbol>;
// >; <'form' | 'input' | 'textarea'>
export interface XTermComponent extends Component {
  id: string | 'tty0';
  name: string | '/dev/tty0';
  prompt: '[visitor@bleek.dev(v0.9)]λ->>' | string | symbol;
  isExec: boolean | null;
  stdin: string | null;
  stdio: string | null;
  stderr: string | null;
}

export interface MetaComponent extends Component {
  title: string;
  description: string;
  keywords: string | string[];
  locale?: 'en' | 'en_US' | string;
}

export interface LayoutComponent extends Component {
  children: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[] | null;
}
export interface HeaderComponent extends Component {
  children?:
    | ReactNode
    | ReactNode[]
    | AnyStyledComponent
    | AnyStyledComponent[]
    | unknown;
}

export interface NavbarComponent extends Component {
  toggle: boolean;
}

export interface DetailsComponent extends Component {
  title: string;
  image: URL | string;
}

export interface SectionComponent extends Component {
  name: string;
  description: string | string[];
  id?: Key | null;
  content?: string | string[] | null;
}

export interface ListComponent extends Component {}

export interface FooterComponent extends Component {}

export type PageID = 1 | 2 | 3 | 4 | 5 | number;
export type Title = 'Home' | 'About' | 'Contact' | 'Projects' | 'Resume';
export type Href = '/' | '/home' | '/about' | '/contact' | '/projects' | '/resume';
export type Icon =
  | ' \udb83\udd84 '
  | ' \udb84\udcf6 '
  | ' \udb84\udcdc '
  | ' \udb84\udcd6 '
  | ' \udb84\udcf8 '
  | ' \ue601 '
  | null;
