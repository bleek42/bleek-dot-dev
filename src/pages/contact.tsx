import PageSection from '@/components/PageSection';
import { type SectionComponent } from '@/interfaces/Component';
import { type NextPage } from 'next';
// export type ContactRecord = Record<
// 	'email' | 'linkedin' | 'github' | string | symbol,
// 	{ 'icon': string; 'text': string }
// >;

type ContactProps = SectionComponent;

const contactPageProps: ContactProps = {
	name: 'contact',
	description: 'contact section',
	content: [
		'brandonleek42@yahoo.com',
		'https://linkedin.com/in/brandonl42',
		'https://github.com/bleek42',
	],
	icons: [' \uf092 ', ' \uf08c ', ' \ue708 '],
};
export default function Contact(props: ContactProps = contactPageProps) {
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
