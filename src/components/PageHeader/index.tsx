import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type HeaderComponent } from '@/interfaces/Component';
import Navbar from '@/components/Navbar';
import { Header, HeaderLgTxt, HeaderMdTxt } from './Header';

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
			<HeaderLgTxt color="green">Brandon Leek</HeaderLgTxt>
			<HeaderMdTxt font="Oxanium" color="neon" shadow="steel">
				bleekDotDev
			</HeaderMdTxt>
			{/* <MdTxt font="MonocraftNF" color="red" shadow="steel">
				{props.title ?? 'untitled'}
			</MdTxt> */}
			<Navbar />
		</Header>
	);
}
