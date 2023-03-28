import type { StyledComponentProps } from 'styled-components';
// import type { PageLink, PageTitle } from '@interfaces/PageLink';
import Link, { LinkProps } from 'next/link';

export type PageId = 1 | 2 | 3 | 4 | 5 | number;
export type PageTitle = 'Home' | 'About' | 'Contact' | 'Projects' | 'Resume' | string;
export type PagePath = '/' | '/home' | '/about' | '/contact' | '/projects' | '/resume' | string;
export type PageIcon =
  | ' \udb83\udd84 '
  | ' \udb84\udcf6 '
  | ' \udb84\udcdc '
  | ' \udb84\udcd6 '
  | ' \udb84\udcf8 '
  | ' \ue601 '
  | null;

export interface PageLink extends LinkProps {
  id: PageId;
  title: PageTitle;
  path: PagePath;
  icon?: PageIcon;
}

export type ToggleProps = {
  toggle: boolean;
};

export type NavBarProps = StyledComponentProps<
  keyof JSX.IntrinsicElements,
  typeof Link,
  {},
  never
> & {
  pageLinks: PageLink[];
};
