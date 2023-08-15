import { Fragment, useState } from 'react';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon, NavTxt } from './Navbar';

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
				onMouseOver={setTimeout(() => toggleMenu, 450)}
				/*onTouchStart={toggleMenu}*/
			>
				{'\uef65'}
			</ToggleBtn>
			{toggle && (
				<Fragment>
					<NavList toggle={toggle} onMouseLeave={toggleMenu}>
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
				</Fragment>
			)}
		</NavBar>
	);
}
