import type { ComponentType } from 'react';
import type { StyledComponent } from 'styled-components';

export type SectionProps = StyledComponent<keyof JSX.IntrinsicElements | any, {}> & {
  id: string | number;
  name: string;
  content?: string | string[];
  icon?: string | null;
};
