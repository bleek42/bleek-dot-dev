import { Fragment, useRef, useLayoutEffect, type SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

import useToggle from '@/hooks/useToggle';

import { NavBar, ToggleBtn, NavList, NavItem, NavIcon, NavLink } from './Navbar';
import { MdTxt } from '@/components/common';

export default function Navbar() {
	const { toggle, handleToggle, setToggle } = useToggle();
	const portal = useRef<Element | DocumentFragment>();
	const timeout = useRef<NodeJS.Timeout | null>();

	useLayoutEffect(() => {
		// let elem = document.querySelector('#nav-list');
		if (typeof window !== undefined) {
			const navListElem = document.querySelector('#nav-list');
			portal.current = navListElem ?? portal.current;
		}
	}, [portal.current]);

	const handleHoverIn = (evt: SyntheticEvent<HTMLElement>): void => {
		// console.log(evt);
		evt.preventDefault();
		timeout.current = setTimeout(() => {
			setToggle(true);
		}, 500);
	};

	const handleHoverOut = (evt: SyntheticEvent<HTMLElement>): void => {
		// console.log(evt);
		evt.preventDefault();
		timeout.current = setTimeout(() => setToggle(false), 500);
		// console.log(timeout.current);

		if (!timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
	};

	return (
		<NavBar
			id="nav-bar"
			// onMouseLeave={handleHoverOut}
		>
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
				onClick={handleToggle}
			>
				{toggle ? '\uf63B' : '\uf0c9'}
			</ToggleBtn>
			<NavList
				id="nav-list"
				ref={portal}
				onMouseOver={handleHoverIn}
				onMouseLeave={handleHoverOut}
			>
				{toggle &&
					portal.current &&
					createPortal(
						<Fragment>
							<NavItem id="nav-home" tabIndex={0}>
								<NavIcon>{'\ue617 '}</NavIcon>
								<NavLink href="/home">Home</NavLink>
							</NavItem>
							<NavItem id="nav-about" tabIndex={0}>
								<NavIcon>{'\uf415 '}</NavIcon>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							<NavItem id="nav-projects" tabIndex={0}>
								<NavIcon>{'\ueA8A '}</NavIcon>
								<NavLink href="/projects">Projects</NavLink>
							</NavItem>
							<NavItem id="nav-contact" tabIndex={0}>
								<NavIcon>{'\uf2bc '}</NavIcon>
								<NavLink href="/contact"> Contact</NavLink>
							</NavItem>
						</Fragment>,
						portal.current,
					)}
			</NavList>
		</NavBar>
	);
}
