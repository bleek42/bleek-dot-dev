import type { IconBaseProps, IconType } from 'react-icons';

export interface HeaderProps {
  key: number;
<<<<<<< HEAD:types/props/header.props.ts
  name: string;
  info: string;
  icon?: (props: IconBaseProps) => IconType;
=======
  title: string;
  info?: string;
  icon?: IconType;
>>>>>>> 5dd0523dae0c85d1572b6858819ba0781664b823:types/interfaces/header.props.ts
};
