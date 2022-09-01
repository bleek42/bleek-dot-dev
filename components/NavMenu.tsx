import Link from 'next/link';
import { useState } from 'react';
import type { NavMenuProps } from '../types/props/navMenu.props';

import styles from '../styles/NavMenu.module.scss';
import { NavMenuItem } from '../types/interfaces/NavMenuItem';

export default function NavMenu({ items }: NavMenuProps) {
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
}
