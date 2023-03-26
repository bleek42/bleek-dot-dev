import type { IconBaseProps, IconType } from 'react-icons';

export interface BaseProps {
	key: number;
  title: string;
  description?: string;
	keywords?: string;
  icon?: (props: IconBaseProps) => IconType | null;
}
