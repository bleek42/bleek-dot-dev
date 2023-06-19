import { useId } from 'react';

import { Header as Wrapper } from './Header';
import { LgTxt, MdTxt } from '@/components/global/Text';
import Navbar from '@/components/Navbar';
import { DefaultTheme, StyledComponent, StyledComponentProps } from 'styled-components';
import { Component } from '@/interfaces/Component';

type HeaderProps = StyledComponentProps<
	'header',
	DefaultTheme,
	Component,
	string | number | symbol
> &
	Component;

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
			{!children ? <Navbar /> : children}
		</Wrapper>
	);
}
