import { useId } from 'react';

import type { BaseComponentProps } from '@/props/base.component.props';

import { Header as Wrapper } from './Header';
import { LgTxt, MdTxt } from '@/components/global/Text';
import Navbar from '@/components/Navbar';

type HeaderProps = BaseComponentProps<'header'>;

export default function Header({ id, name, title, children }: HeaderProps) {
	console.log('Header component:', id, name, title);
	// const pageId = useId();
	return (
		<Wrapper id={`header-${name || 'noname'}${id}`}>
			<LgTxt font="Birdman" color="green" shadow="black">
				Brandon Leek
			</LgTxt>
			<MdTxt font="Birdman" color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			<MdTxt font="Birdman" color="red" shadow="steel">
				{title}
			</MdTxt>
			{children}
		</Wrapper>
	);
}
