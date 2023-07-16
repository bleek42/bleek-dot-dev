import {  Footer as Wrapper, type StyledFooterProps } from './Footer';
import { SmTxt } from '@/components/common/Text';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function Footer({ id, name, icon }: StyledFooterProps) {
	console.log('Footer:', id, name, icon);

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Wrapper>
	);
}
