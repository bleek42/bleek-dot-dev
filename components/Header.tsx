import type { FC } from 'react';
import type { HeaderProps } from '../types/props/header.props';

import styles from '../styles/Header.module.scss';

const Header: FC<HeaderProps> = ({ title, info, icon }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>{undefined}</span>
      <h2>{title ? title : 'some title'}</h2>
      <h3>{info ? info : 'some info'}</h3>
    </div>
  );
};

export default Header;
