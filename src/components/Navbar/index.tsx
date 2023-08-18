import {
	Fragment,
	useState,
	useRef,
	type RefObject,
	type MutableRefObject,
	useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';

import { NavBar, ToggleBtn, NavList, NavItem, NextLink, NavIcon, NavTxt } from './Navbar';
import { useEventListener } from '@/hooks/useEventListener';
import useTimeout from '@/hooks/useTimeout';
import useToggle from '@/hooks/useToggle';
import { Component } from '@/interfaces/Component';

export function NavPortal({ children, id }: Component) {
	// if (ref.current)
}

export default function Navbar() {
	const { toggle, handleToggle, setToggle } = useToggle();

	const ref = useRef<HTMLElement>();
	useLayoutEffect(() => {
		let elem = document.getElementById('nav-list');
		if (document && elem) ref.current = elem;
	}, []);
	// const documentRef = useRef(document);

	// const ref = useRef<HTMLUListElement | null>();
	const handleHoverIn = () => setToggle(true);
	const handleHoverOut = () => setToggle(false);

	// useEventListener('mouseenter', handleToggle, ref);
	// useEventListener('mouseleave', handleToggle, ref);
	// useTimeout(handleHoverIn, 575);
	// useTimeout(handleHoverOut, 425);

	return (
		<NavBar id="nav-bar">
			<NavTxt $colorPalette="primary" $color="cyan">
				Menu
			</NavTxt>
			<ToggleBtn
				onMouseOver={() => handleHoverIn}
				onMouseLeave={() => handleHoverOut}
				onClick={handleToggle}
			>
				{toggle ? '\uf63B' : '\uf673'}
			</ToggleBtn>
			<NavList id="nav-list">
				{toggle &&
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
						ref.current,
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
