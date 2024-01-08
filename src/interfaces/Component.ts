/* eslint-disable @typescript-eslint/no-empty-interface */
import { type AssetWhereUniqueQuery, type ProjectWhereUniqueQuery } from '@/graphql/queries/hygraph';
import { type Metadata } from 'next';
import {
  // type TemplateString,
  // type DefaultTemplateString,
  type Icons,
  type IconURL,
} from 'next/dist/lib/metadata/types/metadata-types';
import { type Key, type ReactNode } from 'react';
import { type AnyStyledComponent } from 'styled-components';
export interface Component {
  id?: Key | null;
  // className?: string | null;
  name?: string;
  title?: string | string[];
  description?: string | string[];
  icons?: string | string[];
  images?:
  | AssetWhereUniqueQuery['asset']
  | AssetWhereUniqueQuery['asset'][]
  | string
  | URL
  | Array<URL | string>;
  locale?: 'en' | 'en_US' | 'es_MX';
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
  id: 'tty0' | 'tty1' | 'tty2' | 'tty3';
  name: '/dev/tty0' | '/dev/tty1' | '/dev/tty2' | '/dev/tty3';
  prompt: symbol | '[visitor@bleek.dev]λ->>';
  isExec: boolean | null;
  stdin: string | null;
  stdio: string | null;
  stderr: string | null;
}

export interface MetaComponent extends Metadata {
  id: Key;
  title: string;
  description?: string | null;
  keywords: string | string[];
  icons?: IconURL | Icons | null;
  locale: 'en_US' | 'en' | 'es';
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
  description?: string | string[];
  images?:
  | AssetWhereUniqueQuery['asset']
  | AssetWhereUniqueQuery['asset'][]
  | string
  | URL
  | Array<URL | string>;
  children: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[];
}

export interface SectionComponent extends Component {
  name: string;
  description: string | string[];
  content?: string | string[];
  title?: string | string[];
  icons?: string | string[];
  images?:
  | AssetWhereUniqueQuery['asset']
  | AssetWhereUniqueQuery['asset'][]
  | string
  | URL
  | Array<URL | string>;
  locale?: 'en' | 'en_US' | 'es_MX';
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[];
}

export interface ListComponent extends Component { }

export interface FooterComponent extends Component {
  name: string;
  description: string | string[];
  icons?: string | string[];
  content?: string | string[];
  title?: string | string[];
  children?: ReactNode | ReactNode[] | AnyStyledComponent | AnyStyledComponent[];
}

export type PageID = 1 | 2 | 3 | 4 | 5;
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
