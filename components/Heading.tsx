import type { FC } from 'react';

import type { BaseProps } from '@interfaces/BaseProps';

type HeadingProps = BaseProps;

const Heading: FC<HeadingProps> = ({ key, title, description, icon }: HeadingProps) => {
  console.log(description, icon)
  return (
    <header key={key} id={`${title}-heading`} className={`heading ${title}`}>
      <span className="icon-span heading">{}</span>
      <h2 className="heading">{title}</h2>
      <h4 className={description ? `desc-${title} heading` : 'hidden'}>{description ? description : null}</h4>
    </header>

  );
}

Heading.defaultProps = {
  key: 0,
  title: 'Welcome to bLeekDotDev!',
  description: '<landing page description goes here>',
  icon: undefined
}

export default Heading;
