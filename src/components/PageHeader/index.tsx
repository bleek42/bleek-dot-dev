import { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

import { Header } from './Header';
import Navbar from '@/components/Navbar';
import { LgTxt, MdTxt } from '@/components/common';
import { Fragment } from 'react';

type HeaderProps = HeaderComponent;

export default function PageHeader(props: HeaderProps) {
	// console.log({ 'Header component': { props } });
	return (
		<Header>
			<LgTxt $colorPalette="primary" $color="neon" $shadow="black" $size="2em">
				Brandon Leek
			</LgTxt>
			<MdTxt $colorPalette="secondary" $color="neon" $shadow="black" $size="1.8em">
				bleekDotDev
			</MdTxt>
			{props.children ? props.children : <Navbar />}
		</Header>
	);
}
