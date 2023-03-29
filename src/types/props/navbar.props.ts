import type { StyledComponentProps } from 'styled-components';
// import type { PageLink, PageTitle } from '@interfaces/PageLink';
import Link, { LinkProps } from 'next/link';
import { PageLink } from '@interfaces/PageLink';

export type ToggleProps = {
  toggle: boolean;
};

export type NavBarProps = StyledComponentProps<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  typeof Link,
  {},
  never
> & {
  pageLinks: PageLink[];
};
