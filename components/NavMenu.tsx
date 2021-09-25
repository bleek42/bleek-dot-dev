import { Fragment, ReactSVGElement, useState } from 'react';

type NavMenuProps = {
	title: string;
	path: string;
	icon: ReactSVGElement;
	className: string;
};

const NavMenu = ({
	title,
	path,
	icon,
	className,
}: NavMenuProps): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<Fragment>
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
				<nav className={toggle ? 'nav-open' : 'nav-close'}>
					<ul>
						<li className={className}>
							<a href={path}>
								<span>{icon}</span>
								<span>{title}</span>
							</a>
						</li>
					</ul>
				</nav>
			</form>
		</Fragment>
	);
};
