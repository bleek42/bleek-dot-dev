import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { menuData } from '../utils/menuData';
import styles from '../styles/NavMenu.module.scss';

const NavMenu: NextPage = (): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<form className={styles.toggle} onMouseOver={() => setToggle(true)}>
				<label className={styles.label} htmlFor="btn">
					<button className={styles.btn}>Menu</button>
				</label>
				<nav
					className={toggle ? styles.open : styles.close}
					onMouseLeave={() => setToggle(false)}
				>
					<ul>
						{menuData.map((item, idx) => {
							return (
								<li key={idx}>
									<Link href={item.path}>
										<a>
											{item.icon} {item.title}
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
