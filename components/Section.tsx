import type { FC } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FcAbout } from 'react-icons/fc';
import type { SectionProps } from '../types/props/section.props';

const Section: FC<SectionProps<IconBaseProps>> = ({
  key,
  item,
  icon,
}: SectionProps<IconBaseProps>): JSX.Element => {
  return (
    <section className={title}>
      {icon && (
        <span>
          <FcAbout />
        </span>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li key={id}>
          <span>{<FcAbout />}</span>
          <p>{<FcAbout />}</p>
        </li>
      </ul>
    </section>
  );
};

export default Section;
