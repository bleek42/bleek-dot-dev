import type { IconBaseProps, IconType } from 'react-icons';

export type HeaderProps = {
  key: number;
  name: string;
  info: string;
  icon?: (props: IconBaseProps) => IconType;
};
