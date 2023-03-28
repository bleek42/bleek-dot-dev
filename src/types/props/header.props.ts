import type { ComponentType } from 'react';
import type { StyledComponent } from 'styled-components';

export type HeaderProps = StyledComponent<keyof JSX.IntrinsicElements | ComponentType<any>, {}> & {
  id: number | string;
  name: string;
  title?: string;
  content?: string | string[];
  keywords?: string;
  icon?: string;
  image?: Array<URL | string> | URL | string;
};
