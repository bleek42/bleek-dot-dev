import Link from 'next/link';
import { MouseEvent, useState } from 'react';

import { menuData } from '../utils/menuData';
import styles from '../styles/NavMenu.module.scss';

const NavMenu = (): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleClick = (ev: MouseEvent<HTMLButtonElement>): void => {
		ev.preventDefault();
		setToggle(!toggle);
	};

	return (
		<div className={styles.container}>
			<form className={styles.toggle} onMouseLeave={() => setToggle(false)}>
				<label className={styles.label} htmlFor="btn">
					<button className={styles.btn} onClick={handleClick}>
						{toggle ? 'open' : 'close'}
					</button>
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
