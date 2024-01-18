import { type SectionComponent } from '@/interfaces/Component';

import PageSection from '@/components/PageSection';

// export type ContactRecord = Record<
// 	'email' | 'linkedin' | 'github' | string | symbol,
// 	{ 'icon': string; 'text': string }
// >;

type ContactProps = SectionComponent;

export default function Page(props: ContactProps) {
	// const { profile, loading, error, msg } = useRequest()

	return (
		<PageSection
			name={props.name}
			description={props.description}
			content={props.content}
			icons={props.icons}
		/>
	);
}

Page.defaultProps = {
	name: 'contact',
	description: 'contact section',
	content: [
		'brandonleek42@yahoo.com',
		'https://linkedin.com/in/brandonl42',
		'https://github.com/bleek42',
	],
	icons: [' \uf092 ', ' \uf08c ', ' \ue708 '],
};
