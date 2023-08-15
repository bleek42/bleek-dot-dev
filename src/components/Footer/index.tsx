import { Footer as Wrapper } from './Footer';
import { SmTxt } from '@/components/common/Text';

import type { BaseComponentProps } from '@/props/base.component.props';

type FooterProps = BaseComponentProps<'footer'>;

export default function Footer({ id, name, icon }: FooterProps) {
	console.log('Footer:', id, name, icon);

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Wrapper>
	);
}
