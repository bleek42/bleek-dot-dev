import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps } from 'styled-components';

export type SectionProps = StyledComponentProps<
  'section' | ComponentType<any>,
  DefaultTheme,
  {},
  string | number | symbol
> & {
  id: string | number;
  name: string;
  title?: string;
  content?: string | string[];
  icon?: string | null;
};
