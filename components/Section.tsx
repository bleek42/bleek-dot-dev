import type { SectionProps } from '../types/props/section.props';
import Image from 'next/image';
import { FC } from 'react';
import { ProjectItem } from '../types/ProjectItem';
import SectionDetails from './SectionDetails';

const Section: FC<SectionProps> = ({ key, name, item, icon }: SectionProps): JSX.Element => {
  return (
    <section className={item?.title ? item.title : 'unknown-section'}>
      <span>{icon ? icon : null}</span>
      <h3>{item?.title || 'some title'}</h3>
      <p>{item?.description}</p>
      <SectionDetails key={item?.id} screenShots={item?.screenShots} />
    </section>
  );
};

export default Section;
