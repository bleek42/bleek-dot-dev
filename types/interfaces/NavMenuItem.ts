import { IconBaseProps, IconTree, IconType } from 'react-icons';

export interface NavMenuItem {
  id: number;
  title: string;
  path: string;
  icon: (tree: IconTree) => (props: IconBaseProps) => IconType;
}
