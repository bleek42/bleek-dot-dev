import type { HTMLProps } from 'react';
import type { IconBaseProps, IconType } from 'react-icons';

export type ComponentBaseProps = JSX.IntrinsicElements['div'] & {
  id: number;
  name: string;
  keywords?: string;
  icon?: (iconProps: IconBaseProps) => IconType;
};
