import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type HeaderComponent } from '@/interfaces/Component';
import Navbar from '@/components/Navbar';
import { Header } from './Header';
import { LgTxt, MdTxt } from '@/components/common';

type HeaderProps = StyledComponentProps<
	'header',
	DefaultTheme,
	object,
	string | number | symbol
>;

export default function PageHeader(props: HeaderProps & HeaderComponent) {
	console.log({ 'Header component': { props } });

	return (
		<Header>
			<LgTxt $flex="1 0 auto" $colorPalette="primary" $color="green">
				Brandon Leek
			</LgTxt>
			<MdTxt $flex="1 0 auto" $colorPalette="primary" $color="neon" $shadow="steel">
				bleekDotDev
			</MdTxt>
			{/* <MdTxt font="MonocraftNF" color="red" shadow="steel">
				{props.title ?? 'untitled'}
			</MdTxt> */}
			<Navbar />
		</Header>
	);
}
