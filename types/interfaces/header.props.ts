import type { IconType } from 'react-icons';

export interface HeaderProps {
  key: number;
  title: string;
  info?: string;
  icon?: IconType;
};
