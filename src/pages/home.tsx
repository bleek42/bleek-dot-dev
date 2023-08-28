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
		'Welcome, and thanks for visiting! I hope you find my latest iterations as a web developer here rather unique, yet still modern/contemporary, and not to mention a pleasure to use as you navigate around using the toggle menu above! Tech stack includes React/NextJS, GraphQL, Hygraph CMS, Styled Components (CSS-in-JS) all from scratch with custom props & animations, and more that you can examine for yourself in the source code linked below!',
		'https://github.com/bleek42/bleek-dot-dev',
	],
};
