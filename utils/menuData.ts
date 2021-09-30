import { ReactSVGElement } from 'react';
import { RiBracesFill } from 'react-icons/si';

interface IMenuData {
	name: string;
	path: string;
	icon: ReactSVGElement;
}

export const MenuData: IMenuData = [
	{
		name: 'Home',
		path: '/home',
		icon: <RiBraceFill />,
	},
];
