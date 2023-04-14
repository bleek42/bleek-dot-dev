import { useState } from 'react';

import type { NavBarProps } from '@prop-types/navbar.props';
import { Nav, Toggle, ToggleBtn, NavLink, NavList, NavItem } from './Navbar';
import { LgTxt } from '@components/global/Text';

export default function Navbar({ pageLinks }) {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = () => setToggle(!!toggle);

	return (
		<Nav onMouseLeave={toggleMenu}>
			<NavList>
				<LgTxt font="Birdman" color="neon" shadow="steel">
					Menu
				</LgTxt>
				{toggle ? (
					<Toggle toggle={toggle}>
						{pageLinks.map((link, idx: number) => (
							<NavItem key={link.id}>
								<NavLink key={idx} href={link.href} passHref>
									{link.title}
								</NavLink>
							</NavItem>
						))}
					</Toggle>
				) : (
					<Toggle toggle={toggle}>
						<ToggleBtn onMouseOver={toggleMenu} onClick={toggleMenu}></ToggleBtn>
					</Toggle>
				)}
			</NavList>
		</Nav>
	);
}
