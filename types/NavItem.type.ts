import type { IconBaseProps, IconType } from 'react-icons';

export type NavItem = {
	readonly id: number;
  readonly title: string;
  readonly path: string;
  readonly icon: (props: IconBaseProps) => IconType;
	readonly url: string | URL;
}
