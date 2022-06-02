import { ReactNodeArray } from 'react';
import { ProjectItem } from '../ProjectItem';

export type SectionProps = {
  key: number;
  item?: ProjectItem;
  icon?: ReactNodeArray;
  name: string;
};
