import { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

import { Header } from './Header';
import Navbar from '@/components/Navbar';
import { LgTxt, MdTxt } from '@/components/common';

type HeaderProps = HeaderComponent;

export default function PageHeader(props: HeaderComponent) {
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
