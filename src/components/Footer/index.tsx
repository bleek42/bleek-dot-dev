import { Footer as Wrapper } from './Footer';
import { SmTxt } from '@/components/universal/Text';

// import type { BaseComponentProps } from '@prop-types/base.component.props';

// type FooterProps = ;
type FooterProps = {
	id: string;
	name: string;
	icon?: '\ue456' | '\ue677';
};

export default function Footer({ id, name, icon }: FooterProps) {
	console.log('Footer:', id, name, icon);

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Wrapper>
	);
}
