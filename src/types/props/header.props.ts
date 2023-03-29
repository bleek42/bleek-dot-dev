import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps } from 'styled-components';

export type HeaderProps = StyledComponentProps<
  'header' | ComponentType<any>,
  DefaultTheme,
  {},
  string | number | symbol
> & {
  id: number | string;
  name: string;
  title: string;
  content?: string | string[];
  icon?: string;
  image?: Array<URL | string> | URL | string;
};
