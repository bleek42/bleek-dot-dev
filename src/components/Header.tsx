import { FC, ReactSVGElement } from 'react';
import NavMenu from './NavMenu';

import styles from '../styles/Header.module.scss';
import React from 'react';

type HeaderProps = JSX.IntrinsicElements['header' & 'i'] & {
	readonly id: 0 | 1 | 2 | 3 | 4 | 5 | 404 | 500;
	readonly name:
		| null
		| 'Home'
		| 'About'
		| 'Projects'
		| 'Resume'
		| 'Contact'
		| 'Blog'
		| 'Not Found'
		| 'Internal Server Error';
	content?: string;
	icon?: ReactSVGElement | string;
};

Header.defaultProps = {};

export default function Header({ id, name, content, icon }: HeaderProps): JSX.Element {
	console.log('header:', id, name, content, icon);

	return (
		<header id={id ?? `header-${id}`}>
			{icon && <i>{icon}</i>}
			<h1>Brandon Leek</h1>
			<h2>bleek.dev</h2>
			<NavMenu />
			<span className='page-header'>
				<h6>{name || 'unknown header'}</h6>
				<p>{content || 'no header content'} </p>
			</span>
		</header>
	);
}
