import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type HeaderComponent } from '@/interfaces/Component';
import { Header } from './Header';
import { LgTxt, MdTxt, SmTxt } from '@/components/common';
import Navbar from '@/components/Navbar';

type HeaderProps = StyledComponentProps<
	'header',
	DefaultTheme,
	object,
	string | number | symbol
> &
	HeaderComponent;

export default function PageHeader(props: HeaderProps) {
	console.log({ 'Header component': { props } });

	return (
		<Header>
			<LgTxt font="Birdman" color="green">
				Brandon Leek
			</LgTxt>
			<MdTxt font="Oxanium" color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			{/* <MdTxt font="MonocraftNF" color="red" shadow="steel">
				{props.title ?? 'untitled'}
			</MdTxt> */}
			<Navbar />
		</Header>
	);
}
