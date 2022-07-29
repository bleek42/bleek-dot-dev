import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { navMenuData } from '../constants/navMenuData;';
import styles from '../styles/NavMenu.module.scss';
import { NavMenuItem } from '../types/interfaces/NavMenuItem';

const NavMenu: NextPage = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <form className={styles.toggle} onMouseOver={() => setToggle(true)}>
        <label className={styles.label} htmlFor="btn">
          <button className={styles.btn}>Menu</button>
        </label>
        <nav className={toggle ? styles.open : styles.close} onMouseLeave={() => setToggle(false)}>
          <ul>
            {navMenuData.map(({ title, path, icon }: NavMenuItem, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={path}>
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
