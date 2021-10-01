import { ReactSVGElement } from 'react';
import { IconType } from 'react-icons/lib';
import { RiBracesFill } from 'react-icons/ri';

interface IMenuData {
	[index: number]: {
		name: string;
		path: string;
		icon: IconType;
	};
}

export const MenuData: IMenuData = [
	{
		name: 'Home',
		path: '/home',
		icon: <RiBracesFill />,
	},
];
