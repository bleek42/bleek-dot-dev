import type { IconType } from 'react-icons';
import { ProjectItem } from '../ProjectItem.type';

export interface SectionProps<IconBaseProps> {
  key: number;
  name: string;
  content?: string;
  icon?: (props: IconBaseProps) => IconType;
  item?: ProjectItem;
};
