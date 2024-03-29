import { Footer } from './Footer';
import { type FooterComponent } from '@/interfaces/Component';
import { SmTxt, Icon, ExtLink } from '@/components/common';

// import { type FooterComponent } from '@/interfaces/Component';

// type FooterProps = FooterComponent;

export default function PageFooter(props?: FooterComponent) {
	// console.log({ 'FooterProps': { props } });

	return (
		<Footer>
			<ExtLink href={props?.content}>
				<Icon $colorPalette="primary" $color="neon" $shadow="black" $size="32px">
					{'\ue5fb \ue5fa'}
					<SmTxt $colorPalette="primary" $color="green">
						by:bleek42 (v1.0.5)
					</SmTxt>
				</Icon>
			</ExtLink>
		</Footer>
	);
}
