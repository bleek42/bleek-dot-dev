import type { FC } from 'react';

import type { HeaderProps } from '@/types/interfaces/header.props';

const Heading: FC<HeaderProps> = ({ key, title, info, icon }: HeaderProps): JSX.Element => {
  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <span>{icon && <icon />}</span>
      <h2>{title ? title : 'some title'}</h2>
      <h3>{info ? info : 'some info'}</h3>
    </div>
=======
    <header key={key} id={`${title}-heading`} className={`heading ${title}`}>
      <span className="icon-span heading">{icon ?? icon}</span>
      <h2 className="heading">{title}</h2>
      <h4 className={info ? `info-${title} heading` : 'hidden'}>{info ? info : null}</h4>
    </header>
>>>>>>> 5dd0523dae0c85d1572b6858819ba0781664b823
  );
}




export default Heading;
