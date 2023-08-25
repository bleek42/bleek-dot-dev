import { Fragment, useRef, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon } from './Navbar';
import { MdTxt } from '@/components/common';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import useToggle from '@/hooks/useToggle';

export default function Navbar() {
	const { toggle, handleToggle, setToggle } = useToggle();
	const portal = useRef<Element | DocumentFragment>();
	const timeout = useRef<NodeJS.Timeout | null>();

	useIsomorphicEffect(() => {
		let elem = document.querySelector('#nav-list');
		portal.current = elem ?? document.body;
	}, [portal.current]);

	const handleHoverIn = (evt: SyntheticEvent<HTMLElement>): void => {
		console.log(evt);
		// evt.preventDefault();
		timeout.current = setTimeout(() => {
			setToggle(true);
		}, 500);
	};

	const handleHoverOut = (evt: SyntheticEvent<HTMLElement>): void => {
		console.log(evt);
		// evt.preventDefault();
		timeout.current = setTimeout(() => setToggle(false), 500);
		console.log(timeout.current);

		if (!timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
	};

	return (
		<NavBar id="nav-bar">
			<MdTxt
				$colorPalette="secondary"
				$color="green"
				$shadow="black"
				$align="center"
				$font="MonocraftNF"
				$size="2em"
			>
				{'\uf969'} Menu
			</MdTxt>
			<ToggleBtn
				id="toggle-btn"
				tabIndex={0}
				onMouseOver={handleHoverIn}
				onMouseLeave={handleHoverOut}
				onClick={handleToggle}
			>
				{toggle ? '\uf63B' : '\uf0c9'}
			</ToggleBtn>
			<NavList
				id="nav-list"
				onMouseOver={handleHoverIn}
				onMouseLeave={handleHoverOut}
			>
				{toggle &&
					portal.current &&
					createPortal(
						<Fragment>
							<NavItem id="nav-home" tabIndex={0}>
								<NavIcon>{'\ue617 '}</NavIcon>
								<NextLink href="/home">Home</NextLink>
							</NavItem>
							<NavItem id="nav-about" tabIndex={0}>
								<NavIcon>{'\uf415 '}</NavIcon>
								<NextLink href="/about">About</NextLink>
							</NavItem>
							<NavItem id="nav-about" tabIndex={0}>
								<NavIcon>{'\ueA8A '}</NavIcon>
								<NextLink href="/projects">Projects</NextLink>
							</NavItem>
							<NavItem id="nav-about" tabIndex={0}>
								<NavIcon>{'\uf2bc '}</NavIcon>
								<NextLink href="/contact"> Contact</NextLink>
							</NavItem>
						</Fragment>,
						portal.current,
					)}
			</NavList>
		</NavBar>
	);
}
