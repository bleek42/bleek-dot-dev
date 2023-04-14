import type { BaseComponentProps } from '@props/base.component.props';

import Navbar from '@components/Navbar';
import { pageLinks } from '@constants/page-links';
import { Header as Wrapper } from './Header';
import { LgTxt, MdTxt } from '@global/Text';

type HeaderProps = BaseComponentProps;

export default function Header({ id, name, title }: HeaderProps) {
	console.log('Header component:', id, name, title);

	return (
		<Wrapper>
			<LgTxt font="Birdman" color="green" shadow="black">
				Brandon Leek
			</LgTxt>
			<MdTxt font="Birdman" color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			<MdTxt font="Birdman" color="red" shadow="steel">
				{title}
			</MdTxt>
			<Navbar pageLinks={pageLinks} />
		</Wrapper>
	);
}
