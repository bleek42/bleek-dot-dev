import type { IconBaseProps, IconType } from 'react-icons';

export interface NavLink {
	readonly id: number;
  readonly title: string;
  readonly path: string;
  readonly icon?: (props: IconBaseProps) => IconType;
	readonly url: string | URL;
}
