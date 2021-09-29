import { useRouter } from 'next/router';
import { ReactSVGElement, useState } from 'react';

type NavMenuProps = {
	name: string;
	path: string;
	icon: ReactSVGElement;
};

const NavMenu = ({ name, path, icon }: NavMenuProps): JSX.Element => {
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
						<li>
							<a href={path}>
								<span>{icon}</span>
								<span>{name}</span>
							</a>
						</li>
					</ul>
				</nav>
			</form>
		</div>
	);
};

export default NavMenu;
