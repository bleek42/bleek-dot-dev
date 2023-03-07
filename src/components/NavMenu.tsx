import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { RiBracesFill } from 'react-icons/ri';
import { FcNfcSign } from 'react-icons/fc';
import {
	VscSymbolArray,
	VscCommentDiscussion,
	VscCode,
	VscArchive,
	VscFoldUp,
	VscMenu,
} from 'react-icons/vsc';

import { NavLink } from '../types/interfaces/NavLInk';

import styles from '../styles/NavMenu.module.scss';

type NavMenuProps = JSX.IntrinsicElements['div' & 'nav' & 'label' & 'button'] & {
	links: NavLink[];
};

NavMenu.defaultProps = {
	links: [
		{
			id: 0,
			name: null,
			path: '/',
			icon: null,
		},
		{
			id: 1,
			name: 'Home',
			path: '/home',
			icon: <RiBracesFill />,
		},
		{
			id: 1,
			name: 'About',
			path: '/about',
			icon: <VscSymbolArray />,
		},
		{
			id: 2,
			name: 'Contact',
			path: '/contact',
			icon: <VscCommentDiscussion />,
		},
		{
			id: 3,
			name: 'Projects',
			path: '/projects',
			icon: <VscCode />,
		},
		{
			id: 4,
			name: 'Resume',
			path: '/resume',
			icon: null,
		},
		{
			id: 5,
			name: 'Blog',
			path: '/blog',
			icon: <VscArchive />,
		},
		{
			id: 404,
			name: 'Not Found',
			path: '/not-found',
			icon: <FcNfcSign />,
		},
		{
			id: 500,
			name: 'Internal Error',
			path: '/internal-error',
			icon: null,
		},
	],
};

export default function NavMenu({ links }: NavMenuProps) {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = (): void => setToggle(!!toggle);

	return (
		<nav>
			<div className='toggle-form'>
				<label htmlFor='toggle-btn'>Menu</label>
				<button onMouseOver={toggleMenu} className='toggle-btn'>
					{toggle ? <VscFoldUp /> : <VscMenu />}
				</button>
			</div>
			<div className={toggle ? 'nav-open' : 'nav-close'}>
				<ul onMouseLeave={toggleMenu}>
					{links.map((link, idx) => (
						<li
							key={link.id || idx}
							id={`${link.name.toLowerCase()}-${link.id}`}
							className='nav-link'>
							<Link to={link.path}>
								<i>{link.icon}</i>
								<pre title={link.title}>{link.title}</pre>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
