import {
	Fragment,
	useState,
	useRef,
	type RefObject,
	type MutableRefObject,
	useLayoutEffect,
	useEffect,
	SyntheticEvent,
} from 'react';
import { createPortal } from 'react-dom';

import { type Component } from '@/interfaces/Component';
import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon, NavTxt } from './Navbar';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import useToggle from '@/hooks/useToggle';
// import useTimeout from '@/hooks/useTimeout';

export default function Navbar() {
	const { toggle, handleToggle, setToggle } = useToggle();
	const portal = useRef<Element>();
	const timeout = useRef<NodeJS.Timeout | null>();
	useIsomorphicEffect(() => {
		let elem = document.querySelector('#nav-list');
		portal.current = elem ?? document.body;
	}, [portal]);

	const handleHoverIn = (evt: SyntheticEvent<HTMLElement>): void => {
		console.log(evt);
		evt.preventDefault();
		timeout.current = setTimeout(() => {
			setToggle(true);
		}, 500);
	};
	const handleHoverOut = (evt: SyntheticEvent<HTMLElement>): void => {
		console.log(evt);
		evt.preventDefault();
		timeout.current = setTimeout(() => setToggle(false), 500);
		console.log(timeout.current);

		if (!timeout.current) {
			clearTimeout(timeout.current); // cancel scheduled hiding of tooltip
			timeout.current = null;
		}
	};

	return (
		<NavBar id="nav-bar">
			<NavTxt $colorPalette="primary" $color="cyan">
				Menu
			</NavTxt>
			<ToggleBtn
				onMouseOver={handleHoverIn}
				onMouseLeave={handleHoverOut}
				onClick={handleToggle}
			>
				{toggle ? '\uf63B' : '\uf673'}
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
							<NavItem>
								<NavIcon>{'\ue617 '}</NavIcon>
								<NextLink href="/home">Home</NextLink>
							</NavItem>
							<NavItem>
								<NavIcon>{'\uf415 '}</NavIcon>
								<NextLink href="/about">About</NextLink>
							</NavItem>
							<NavItem>
								<NavIcon>{'\ueA8A '}</NavIcon>
								<NextLink href="/projects">Projects</NextLink>
							</NavItem>
							<NavItem>
								<NavIcon>{'\ueff3 '}</NavIcon>
								<NextLink href="/contact">Contact</NextLink>
							</NavItem>
						</Fragment>,
						portal.current,
					)}
			</NavList>
		</NavBar>
	);
}

// <Fragment>
// 	<nav>
// 		<p>nav-portal</p>
// 	</nav>
// </Fragment>
