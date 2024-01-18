import { type SectionComponent } from '@/interfaces/Component';
import PageSection from '@/components/PageSection';

type HomeProps = SectionComponent;

export default function Page(props: HomeProps) {
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
		"Welcome to bleekDotDev - I'm Brandon Leek! Thanks for checking out my website and what I have been iterating on, lately! I hope you find it rather unique, creative, and easy to naviagate as you look around!",
		'The technology stack I used to create bleekDotDev includes, but is not limited to: ReactJS/Next, GraphQL via Hygraph CMS, Styled Components (CSS-in-JS), TypeScript, Jest/Testing Library, "NerdFonts" containing special dev-themed unicode icons. Some modern-contemporary features reusable, type-safe components & props, hover/click event animations, custom application state hooks, and much more for all to see.',
		'Click or press on the navigation menu above to take a look around, and you can click on the footer text below from any page to see this codebase on GitHub!',
	],
};
