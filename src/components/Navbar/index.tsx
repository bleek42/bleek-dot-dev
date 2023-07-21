import { useState } from 'react';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, Icon } from './Navbar';
import { LgTxt } from '@/components/common/Text';

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = (evt: React.SyntheticEvent) => {
		console.log(evt?.currentTarget, toggle);
		setToggle(!toggle);
	};

	return (
		<NavBar onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
			<LgTxt font="Birdman" color="neon" shadow="steel">
				Menu
			</LgTxt>
			{!toggle && (
				<ToggleBtn
					toggle={toggle}
					// onMouseOver={toggleMenu}
					// onTouchStart={toggleMenu}
				></ToggleBtn>
			)}

			{toggle && (
				<>
					<NavList>
						<NavItem onMouseLeave={toggleMenu}>
							<Icon>
								{'\udb83\udd84'}
								<NextLink href="/home">Home</NextLink>
							</Icon>
						</NavItem>
						<NavItem>
							<Icon>
								{'\udb84\udcf6'}
								<NextLink href="/about">About</NextLink>
							</Icon>
						</NavItem>
						<NavItem>
							<Icon>
								{'\udb84\udcdc'}
								<NextLink href="/projects">Projects</NextLink>
							</Icon>
						</NavItem>
						<NavItem>
							<Icon>
								{'\udb84\udcd6'}
								<NextLink href="/contact">Contact</NextLink>
							</Icon>
						</NavItem>
					</NavList>
				</>
			)}
		</NavBar>
	);
}
