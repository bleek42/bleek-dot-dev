import type { NextLinkProps } from '@/props/navbar.props';

import { useState } from 'react';

import { Nav, Toggle, ToggleBtn, NavList, NavItem, NextLink, Icon } from './Navbar';
import { LgTxt } from '@global/Text';

export default function Navbar() {
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
						<NavItem>
							<Icon>
								{'\udb83\udd84'}
								<NextLink href="/home">Home</NextLink>
							</Icon>
							<Icon>
								{'\udb84\udcf6'}
								<NextLink href="/about">About</NextLink>
							</Icon>
							<Icon>
								{'\udb84\udcdc'}
								<NextLink href="/projects">Projects</NextLink>
							</Icon>
							<Icon>
								{'\udb84\udcd6'}
								<NextLink href="/contact">Contact</NextLink>
							</Icon>
						</NavItem>
						{/* {NextpageLinks.map((Nextlink, idx: number) => (
							<NavItem key={Nextlink.id}>
								<NextNavLink key={idx} href={Nextlink.href} passHref>
									{Nextlink.title}
								</NextNavLink>
							</NavItem>
						))} */}
					</Toggle>
				) : (
					<Toggle toggle={toggle}>
						<ToggleBtn
							onMouseOver={toggleMenu}
							onClick={toggleMenu}></ToggleBtn>
					</Toggle>
				)}
			</NavList>
		</Nav>
	);
}
