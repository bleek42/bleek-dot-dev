import { useRouter } from 'next/router';
import { useState } from 'react';

import { menuData } from '../utils/menuData';

const NavMenu = (): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);
	const router = useRouter();

	return (
		<div className="nav-menu">
			<form className="toggle">
				<label htmlFor="toggle-btn">
					<input
						className="toggle-btn"
						type="button"
						onMouseOver={() => setToggle(!!toggle)}
					>
						{toggle ? 'open' : 'close'}
					</input>
				</label>
				<nav
					className={toggle ? 'nav-open' : 'nav-close'}
					onMouseLeave={() => setToggle(!!toggle)}
				>
					<ul>
						{menuData.map((item, idx) => {
							return (
								<li key={idx}>
									<a href={item.path}>
										<span>{item.icon}</span>
										<span>{item.title}</span>
									</a>
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
