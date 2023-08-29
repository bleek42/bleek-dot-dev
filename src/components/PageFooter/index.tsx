import { type FooterProps, Footer } from './Footer';
import { type FooterComponent } from '@/interfaces/Component';
import { SmTxt, Icon } from '@/components/common';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function PageFooter(props: FooterProps & FooterComponent) {
	// console.log({ 'FooterProps': { props } });

	return (
		<Footer>
			<Icon $colorPalette="primary" $color="neon" $shadow="black" $size="32px">
				{'\ue5fb \ue5fa'}
				<SmTxt $colorPalette="primary" $color="green">
					by:bleek42 (v1.0.5)
				</SmTxt>
			</Icon>
		</Footer>
	);
}
