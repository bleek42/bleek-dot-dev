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
		'Welcome & thanks for checking out the results of what I have been iterating on as a web developer rather unique & creative, yet still modern-contemporary, and easy to naviagte as you look around!',
		'The technology stack I used to create bleekDotDev includes, but is not limited to: ReactJS/Next, GraphQL via Hygraph CMS, Styled Components (CSS-in-JS), TypeScript, Jest/Testing Library, "NerdFonts" containing special dev-themed unicode icons, and features reusable, type-safe components & props, hover/click event animations, custom application state hooks, and much more for all to see.',
		'Just scroll to the footer below & click on the text!',
	],
};
