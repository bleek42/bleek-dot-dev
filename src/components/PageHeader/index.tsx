import { type HeaderComponent } from '@/interfaces/Component';

import { Header, LambdaSVG } from './Header';
import Navbar from '@/components/Navbar';
import { LgTxt, MdTxt } from '@/components/common';

type HeaderProps = HeaderComponent;
export default function PageHeader(props: HeaderProps) {
	// // console.log({ 'Header component': { props } });
	return (
		<Header>
			<LambdaSVG
				src="/svgs/green_lambda.svg"
				alt="green_lambda.svg"
				width={100}
				height={100}
			/>
			<LgTxt $colorPalette="primary" $color="neon" $shadow="black" $size="2em">
				Brandon Leek
			</LgTxt>
			<MdTxt $colorPalette="secondary" $color="neon" $shadow="black" $size="1.8em">
				bleekDotDev
			</MdTxt>
			{props.children ?? <Navbar />}
		</Header>
	);
}
