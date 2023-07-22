import { useId } from 'react';
import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type HeaderComponent } from '@/interfaces/Component';
import { Header } from './Header';
import { LgTxt, MdTxt, SmTxt, theme } from '@/components/common';
import Navbar from '@/components/Navbar';

type HeaderProps = StyledComponentProps<
	'header',
	DefaultTheme,
	HeaderComponent,
	string | number | symbol
> &
	HeaderComponent;

export default function PageHeader(props: HeaderProps) {
	console.log({ 'Header component': { props } });

	return (
		<Header>
			<LgTxt font={'--font-Birdman'} color="green" shadow="black">
				Brandon Leek
			</LgTxt>
			<MdTxt font={'--font-Birdman'} color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			<MdTxt font={'--font-Oxanium'} color="red" shadow="steel">
				{props.title ?? 'untitled'}
			</MdTxt>
			<SmTxt
				font={'--font-MonocraftNF'}
				colorPalette={'secondary'}
				color={'neon'}
				size={'18px'}
				shadow={'red'}
			>
				small text
			</SmTxt>
			<Navbar />
		</Header>
	);
}
