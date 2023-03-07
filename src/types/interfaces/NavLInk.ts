import type { IconBaseProps, IconType } from 'react-icons';

export interface NavLink {
  readonly id: 0 | 1 | 2 | 3 | 4 | 5 | 404 | 500 | undefined;
  readonly name: string;
  readonly path: string;
  readonly icon?: (props: IconBaseProps) => IconType;
}
