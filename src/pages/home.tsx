import { type NextPage } from 'next';

import { type SectionComponent } from '@/interfaces/Component';
import PageSection from '@/components/PageSection';

type HomeProps = SectionComponent;

export default function Home(props: HomeProps) {
	return (
		<PageSection
			id={props.id}
			name={props.name}
			description={props.description}
			content={props.content}
		/>
	);
}

Home.defaultProps = {
	id: 'home-section',
	name: 'Home',
	content: [
		'Welcome, and thanks for checking me out here at bleek.dev! I hope you find my latest iterations here as a web developer rather unique & creative, yet still modern-contemporary, and not to mention a pleasure to use as you explore using the navigation menu on the top-right!',
		'The technology stack I used to create bleekDotDev includes, but is not limited to: ReactJS/Next, GraphQL via Hygraph CMS, Styled Components (CSS-in-JS), TypeScript, Jest/Testing Library, "NerdFonts" containing special dev-themed unicode icons, and features reusable, type-safe components & props, hover/click event animations, custom application state hooks, and much more for all to see.',
		'Just scroll to the footer below & click on the text!',
	],
};
