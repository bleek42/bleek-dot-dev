/* eslint-disable @typescript-eslint/no-empty-interface */
import { type Metadata } from 'next';
import {
  type DefaultTemplateString,
  type Icons,
  type IconURL,
} from 'next/dist/lib/metadata/types/metadata-types';
import { type Key, type ReactNode } from 'react';
import { type AnyStyledComponent } from 'styled-components';
export interface Component {
  id?: Key | null;
  // className?: string | null;
  name?: string | unknown;
  title?: string | string[] | unknown;
  description?: string | string[] | unknown;
  icon?: string | unknown;
  image?: string | URL | Array<URL | string> | unknown;
  locale?: string | 'en' | 'en_US' | 'es_MX';
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[];
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
  prompt: string | symbol | '[visitor@bleek.dev]λ->>';
  isExec: boolean | null;
  stdin: string | null;
  stdio: string | null;
  stderr: string | null;
}

export interface MetaComponent extends Metadata {
  title: string | DefaultTemplateString | 'bleekDotDev';
  description?: string | null;
  keywords: string | string[];
  icons?: IconURL | Icons | null;
  locale: string | 'en_US' | 'en' | 'es';
}

export interface LayoutComponent extends Component {
  children: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[] | null;
}
export interface HeaderComponent extends Component {
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[];
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