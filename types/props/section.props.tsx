import type { IconType } from 'react-icons';
import { ProjectItem } from '../interfaces/ProjectItem';

export type SectionProps<IconBaseProps> = {
  key: number;
  name: string;
  title: string;
  description: string;
  icon?: (props: IconBaseProps) => IconType;
  item?: ProjectItem;
};
