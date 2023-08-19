import { type FooterProps, Footer } from './Footer';
import { type FooterComponent } from '@/interfaces/Component';
import { SmTxt, Icon } from '@/components/common';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function PageFooter(props: FooterProps & FooterComponent) {
	console.log({ 'FooterProps': { props } });

	return (
		<Footer>
			<Icon></Icon>
			<SmTxt>version 0.4.4 by bleek42</SmTxt>
		</Footer>
	);
}
