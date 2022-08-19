import type { NextPage } from 'next';

import Link from 'next/link';
import { useState } from 'react';


import navList from '@constants/navList';
import styles from '@styles/NavMenu.module.scss';

import type { NavItem } from '@types/NavItem';

const NavMenu: NextPage = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <form className={styles.toggle} onMouseOver={() => setToggle(true)}>
        <label className={styles.label} htmlFor="btn">
          <input className={styles.btn} name="btn" type="button">Menu</input>
        </label>
        <nav className={toggle ? styles.open : styles.close} onMouseLeave={() => setToggle(false)}>
          <ul>
            {navList.map(({ id, title, path, icon, url }: NavItem) => {
              return (
                <li key={id}>
                  <Link  href={path}>
                    <a>
                      {icon} {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </form>
    </div>
  );
};

export default NavMenu;
