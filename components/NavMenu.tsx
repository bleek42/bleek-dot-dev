import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

import { menuData } from '../utils/menuData';
import styles from '../styles/NavMenu.module.scss';

const NavMenu = (): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);
	const router = useRouter();

	return (
		<div className={styles.container}>
			<form className={styles.toggle}>
				<label className={styles.label} htmlFor="btn">
					{toggle ? 'open' : 'close'}
					<input
						className={styles.btn}
						type="button"
						onMouseOver={() => setToggle(!toggle)}
						onMouseLeave={() => setToggle(!toggle)}
					/>
				</label>
				<nav className={toggle ? styles.open : styles.close}>
					<ul onMouseLeave={() => setToggle(!toggle)}>
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
