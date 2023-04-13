import type { StyledComponentProps } from 'styled-components';
import type { ComponentType } from 'react';
// import type { PageLink, PageTitle } from '@interfaces/PageLink';
import type Link from 'next/link';
import type { PageLink } from '@interfaces/PageLink';

export type ToggleProps = {
  toggle: boolean;
};

export type NavBarProps = StyledComponentProps<
  keyof JSX.IntrinsicElements | ComponentType<unknown>,
  typeof Link,
  Record<string, unknown>,
  never
> & {
  pageLinks: PageLink[];
};
