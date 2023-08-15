import { useState } from 'react';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon, NavTxt } from './Navbar';
import { LgTxt } from '@/components/common';

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = (evt: React.SyntheticEvent<HTMLElement>) => {
		// evt.preventDefault();
		console.log(evt?.currentTarget, toggle);
		setToggle(!toggle);
	};

	return (
		<NavBar toggle={toggle}>
			<NavTxt>Menu</NavTxt>
				<ToggleBtn
					toggle={toggle}
					onClick={toggleMenu}
					// onMouseOver={toggleMenu}
					/*onTouchStart={toggleMenu}*/
				>
					{'\uef65'}
				</ToggleBtn>
			{toggle && (
				<>
				{/* onMouseLeave={toggleMenu} */}
					<NavList toggle={toggle}>
						<NavItem>
							<NavIcon>{'\ue617 '}</NavIcon>
							<NextLink href="/home">Home</NextLink>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\uf415 '}
								<NextLink href="/about">About</NextLink>
							</NavIcon>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\ueA8A '}
								<NextLink href="/projects">Projects</NextLink>
							</NavIcon>
						</NavItem>
						<NavItem>
							<NavIcon>
								{'\ueff3 '}
								<NextLink href="/contact">Contact</NextLink>
							</NavIcon>
						</NavItem>
					</NavList>
				</>
			)}
		</NavBar>
	);
}
