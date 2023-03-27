import { Footer as Wrapper } from './Footer';
import { BlkTxt } from '../global';
import type { ComponentProps } from '../../types/props/component.props';

type FooterProps = ComponentProps;

export default function Footer({ id, name, icon }: FooterProps) {
	console.log('Footer:', id, name, icon);

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<BlkTxt>version 0.4.4 by bleek42</BlkTxt>
		</Wrapper>
	);
}
