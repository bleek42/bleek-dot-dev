import { useState } from 'react';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon } from './Navbar';
import { LgTxt } from '@/components/common';

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = (evt: React.SyntheticEvent<HTMLElement>) => {
		// evt.preventDefault();
		console.log(evt?.currentTarget, toggle);
		setToggle((toggle) => !!toggle);
	};

	return (
		<NavBar toggle={toggle}>
			<LgTxt flex="">Menu</LgTxt>
			{!toggle && (
				<ToggleBtn
					toggle={toggle}
					onMouseOver={toggleMenu}
					onClick={toggleMenu} /*onTouchStart={toggleMenu}*/
				>
					+
				</ToggleBtn>
			)}

			{toggle && (
				<>
					<NavList toggle={toggle} onMouseLeave={toggleMenu}>
						<NavItem>
							<NavIcon>{'\udb83\udd84'}</NavIcon>
							<NextLink href="/home">Home</NextLink>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\udb84\udcf6'}
								<NextLink href="/about">About</NextLink>
							</NavIcon>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\udb84\udcdc'}
								<NextLink href="/projects">Projects</NextLink>
							</NavIcon>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\udb84\udcd6'}
								<NextLink href="/contact">Contact</NextLink>
							</NavIcon>
						</NavItem>
					</NavList>
				</>
			)}
		</NavBar>
	);
}
