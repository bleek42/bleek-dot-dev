import React from 'react';
import { FcNfcSign } from 'react-icons/fc';
import { RiBracesFill } from 'react-icons/ri';
import {
	VscSymbolArray,
	VscCommentDiscussion,
	VscCode,
	VscArchive,
} from 'react-icons/vsc';
import { NavLink } from '../types/interfaces/NavLInk';

export const navLinks: Array<NavLink> = [
	{
		id: 0,
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
];
