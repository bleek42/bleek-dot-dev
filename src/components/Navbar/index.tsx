import { useState } from 'react';

import type { NavBarProps } from '@props/navbar.props';
import { Nav, Toggle, ToggleBtn, NavLink, NavList, NavItem } from './Navbar';
import { CyLg } from '@components/global/Text';

export default function Navbar({ pageLinks }: NavBarProps) {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = () => setToggle(!!toggle);

	return (
		<Nav onMouseLeave={toggleMenu}>
			<NavList>
				<CyLg>Menu</CyLg>
				{toggle ? (
					<Toggle toggle={toggle}>
						{pageLinks.map((link, idx) => (
							<NavItem key={link.id}>
								<NavLink key={idx} href={link.path} passHref>
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
