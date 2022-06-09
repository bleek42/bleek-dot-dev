import type { IconType } from 'react-icons';
import { ProjectItem } from '../interfaces/ProjectItem';

export type SectionProps = {
  key: number;
  name: string;
  icon?: IconType;
  item?: ProjectItem;
};
