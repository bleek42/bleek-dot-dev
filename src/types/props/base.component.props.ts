import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps } from 'styled-components';

export type BaseComponentProps = StyledComponentProps<
  keyof JSX.IntrinsicElements | ComponentType<unknown>,
  DefaultTheme,
  Record<string, unknown>,
  string | number | symbol
> & {
  id: string | number;
  name: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
  image?: Array<URL | string> | URL | string;
};
