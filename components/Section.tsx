import type { SectionProps } from '../types/props/section.props';

import Image from 'next/image';
import type { FC } from 'react';
import { ProjectItem } from '../types/interfaces/ProjectItem';
import SectionDetails from './SectionDetails';

const Section: FC<SectionProps> = ({ key, item, icon }: SectionProps): JSX.Element => {
  return (
    <section className={item?.title ? item.title : 'unknown-section'}>
      <span>{icon ? icon : null}</span>
      <h3>{item?.title || 'some title'}</h3>
      <p>{item?.description}</p>
      <ul>
        <li key={item?.id || key}>
          <span>{icon}</span>
          <p>{item}</p>
        </li>
      </ul>
    </section>
  );
};

export default Section;
