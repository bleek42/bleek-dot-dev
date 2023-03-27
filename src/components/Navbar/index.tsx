import type { StyledComponentProps } from 'styled-components';
import type { PageLink } from 'types/interfaces/PageLink';
import type { NavBarProps, ToggleProps } from 'types/props/navbar.props';

import { useState } from 'react';
import Link from 'next';

import { Nav, Toggle, ToggleBtn, ToggleTxt, NavList, NavItem } from './Navbar';

export default function Navbar({ pageLinks }: NavBarProps) {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => setToggle(!!toggle);

	return (
		<Nav onMouseLeave={toggleMenu}>
			<NavList>
				<ToggleTxt>Menu</ToggleTxt>
				{toggle ? (
					<Toggle toggled={toggle}>
						{pageLinks.map((link) => (
							<NavItem key={link.id}>
								<Link to={link.path}>{link.title}</Link>
							</NavItem>
						))}
					</Toggle>
				) : (
					<Toggle toggled={toggle}>
						<ToggleBtn onMouseOver={toggleMenu} onClick={toggleMenu}></ToggleBtn>
					</Toggle>
				)}
			</NavList>
		</Nav>
	);
}
// <nav>
// </nav>

{
	/* <div className={toggle ? 'nav-open' : 'nav-close'}>
	<ul onMouseLeave={toggleMenu}>
		{links.map((link, idx) => (
			<li
				key={link.id || idx}
				id={`${link.title.toLowerCase()}-${link.id}`}
				className="nav-link">
			</li>
		))}
	</ul>
</div> */
}
