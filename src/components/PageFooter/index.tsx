import { Footer, type FooterProps } from './Footer';
import { SmTxt } from '@/components/common/Text';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function PageFooter(props: FooterProps) {
	console.log({ 'FooterProps': { props } });

	return (
		<Footer>
			<i>{'<NoIcon />'}</i>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Footer>
	);
}
