import type { FC } from 'react';

import type { HeaderProps } from '@/types/interfaces/header.props';

const Heading: FC<HeaderProps> = ({ key, title, info, icon }: HeaderProps): JSX.Element => {
  return (
    <header key={key} id={`${title}-heading`} className={`heading ${title}`}>
      <span className="icon-span heading">{icon ?? icon}</span>
      <h2 className="heading">{title}</h2>
      <h4 className={info ? `info-${title} heading` : 'hidden'}>{info ? info : null}</h4>
    </header>
  );
}




export default Heading;
