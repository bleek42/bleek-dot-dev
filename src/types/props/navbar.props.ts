import type {
  AnyStyledComponent,
  DefaultTheme,
  StyledComponentProps,
  ThemedStyledFunction,
  ThemedStyledProps,
} from 'styled-components';
import type { ComponentType, Key } from 'react';
// import type { PageLink, PageTitle } from '@/interfaces/PageLink';

// import type { PageLink, PageTitle } from '@/interfaces/PageLink';
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

export type ToggleProps = StyledComponentProps<
  typeof Link | AnyStyledComponent,
  DefaultTheme,
  { toggle: boolean },
  string | number | symbol
>;

// type NavLinkComponentBase = StyledComponentBase<AnyStyledComponent | typeof Link>;

export type NextLinkProps = StyledComponentProps<
  typeof Link | AnyStyledComponent,
  DefaultTheme,
  LinkProps,
  string | number | symbol
>;

// export type StyledNextLinkProps<NextLinkProps> = {
//   id: Key | string | number | symbol;
//   icon: string | null
//   NextLinkProps,
//   className?: string;
// };

// export type StyledNextLinkProps = StyledComponentProps<
//   typeof Link | AnyStyledComponent,
//   DefaultTheme,
//   ToggleProps,
//   string | number | symbol
// >;
