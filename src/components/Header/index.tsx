import { useId } from 'react';
import {
	type DefaultTheme,
	type StyledComponent,
	type StyledComponentProps,
} from 'styled-components';

import { Header as Wrapper } from './Header';
import { LgTxt, MdTxt, SmTxt, theme } from '@/components/common';
import Navbar from '@/components/Navbar';
import { type HeaderComponent } from '@/interfaces/Component';

type HeaderProps = HeaderComponent;
/* &
	StyledComponentProps<
		'header',
		DefaultTheme,
		HeaderComponent,
		string | number | symbol
	>; */

export default function Header(props: HeaderProps) {
	console.log('Header component:', { props });
	const pageId = useId();

	return (
		<Wrapper id={`header-${pageId}`}>
			<LgTxt font="Birdman" color="green" shadow="black">
				Brandon Leek
			</LgTxt>
			<MdTxt font="Birdman" color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			<MdTxt font="Birdman" color="red" shadow="steel">
				{props.title ?? 'untitled'}
			</MdTxt>
			<SmTxt
				font={'MonocraftNF'}
				colorPalette={'secondary'}
				color={'neon'}
				size={'18px'}
				shadow={'red'}
			>
				small text
			</SmTxt>
			<Navbar />
		</Wrapper>
	);
}
