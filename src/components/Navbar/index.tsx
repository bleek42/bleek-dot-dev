import { Fragment, useState } from 'react';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon, NavTxt } from './Navbar';

export default function Navbar() {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleHover = (evt: React.SyntheticEvent<HTMLElement>) => {
		evt.preventDefault();
		console.log({ toggle, evt });
		setTimeout(() => {
			setToggle(!toggle);
			if (evt.currentTarget) {
				console.log(evt.currentTarget);
			}
		}, 600);
	};

	return (
		<NavBar toggle={toggle} onMouseLeave={handleHover}>
			<NavTxt>Menu</NavTxt>
			<ToggleBtn
				toggle={toggle}
				onClick={(evt: React.SyntheticEvent<HTMLElement>) => {
					console.log({ 'click': evt });
					evt.preventDefault();
					setToggle(!toggle);
				}}
				onMouseOver={handleHover}
				// onMouseLeave={(evt: React.SyntheticEvent<HTMLElement>) => {
				// 	evt.preventDefault();
				// 	setTimeout(() => setToggle(false), 450);
				// }}
				/*onTouchStart={toggleMenu}*/
			>
				{'\uef65'}
			</ToggleBtn>
			{toggle && (
				<Fragment>
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
				</Fragment>
			)}
		</NavBar>
	);
}
