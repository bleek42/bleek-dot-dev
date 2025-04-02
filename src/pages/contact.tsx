// import { useRequest } from '../hooks/useRequest';
// import Meta from '@components/universal/Meta';
import Section from '@/components/Section';
import { type SectionComponent } from '@/interfaces/Component';
import { type NextPage } from 'next';
import { Fragment, useId } from 'react';
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

	// const { profile, loading, error, msg } = useRequest();
	const pageId = useId();

	const linkedInIcon = ' \uf08c ';
	const commentIcon = ' \udb80\udd7b ';
	const githubIcon = ' \uf092 ';

	return (
		<Fragment>
			<Section
				name={props.name}
				description={props.description}
				content={props.content}
				icons={props.icons}
			/>
		</Fragment>
	);
}
