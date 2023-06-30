import { useId } from 'react';
import { type DefaultTheme, type StyledComponent } from 'styled-components';

import { Header as Wrapper } from './Header';
import { LgTxt, MdTxt } from '@/components/global/Text';
import Navbar from '@/components/Navbar';
import { type HeaderComponent } from '@/interfaces/Component';

type HeaderProps = StyledComponent<
	'header' | keyof JSX.IntrinsicElements,
	DefaultTheme,
	HeaderComponent,
	string | number | symbol
>;

export default function Header(props: HeaderProps) {
	console.log('Header component:', props);
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
				{props?.title ?? 'untitled'}
			</MdTxt>
			{props?.children ?? <Navbar />}
		</Wrapper>
	);
}
