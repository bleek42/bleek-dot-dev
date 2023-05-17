'use client';

import { useState } from 'react';

import type { NextLinkProps } from '@/props/navbar.props';

import { NavBar, Toggle, ToggleBtn, NavList, NavItem, NextLink, Icon } from './Navbar';
import { LgTxt } from '@/components/global/Text';

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleMenu = () => setToggle(!!toggle);

	return (
		<NavBar onMouseLeave={toggleMenu}>
			<LgTxt font="Birdman" color="neon" shadow="steel">
				Menu
			</LgTxt>
			<NavList>
				<Toggle toggle={toggle}>
					{toggle && (
						<>
							<ToggleBtn
								onMouseOver={toggleMenu}
								onTouchStart={toggleMenu}
							></ToggleBtn>
							<NavItem>
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
						</>
					)}
					{!toggle && (
						<>
							<ToggleBtn
								onMouseOver={toggleMenu}
								onTouchStart={toggleMenu}
							></ToggleBtn>
						</>
					)}
				</Toggle>
			</NavList>
		</NavBar>
	);
}

{
	/* {NextpageLinks.map((Nextlink, idx: number) => (
							<NavItem key={Nextlink.id}>
								<NextNavLink key={idx} href={Nextlink.href} passHref>
									{Nextlink.title}
								</NextNavLink>
							</NavItem>
						))} */
}
