import type {
  AnyStyledComponent,
  DefaultTheme,
  StyledComponentProps,
  ThemedStyledFunction,
  ThemedStyledProps,
} from 'styled-components';
import type { ComponentType } from 'react';
// import type { PageLink, PageTitle } from '@interfaces/PageLink';
import type Link from 'next/link';
import type { LinkProps } from 'next/link';

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

export interface ToggleProps {
  toggle: boolean;
}

export type NavLinkProps<LinkProps> = {
  [Property in keyof LinkProps]: Property;
};

export type NavBarProps = StyledComponentProps<
  AnyStyledComponent,
  DefaultTheme,
  ToggleProps,
  string | number | symbol
>;
