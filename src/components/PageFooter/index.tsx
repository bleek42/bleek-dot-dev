import { type FooterProps, Footer as Wrapper } from './Footer';
import { SmTxt } from '@/components/common/Text';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function PageFooter(props: FooterProps) {
	console.log({ 'FooterProps': { props } });

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Wrapper>
	);
}
