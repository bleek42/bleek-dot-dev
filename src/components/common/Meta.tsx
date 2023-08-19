import Head from 'next/head';

import { type MetaComponent } from '@/interfaces/Component';
import {
	DefaultTemplateString,
	TemplateString,
} from 'next/dist/lib/metadata/types/metadata-types';
// import { Birdman, Oxanium, MonocraftNF } from '@/components/common';

type MetaProps = MetaComponent;

export default function Meta(props: MetaProps) {
	console.log({ 'meta-props': props });

	return (
		<>
			<Head key={'meta-bleek-0'}>
				<meta charSet="utf-8" />
				<meta
					rel="viewport"
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<meta
					rel="description"
					name="description"
					content={props.description?.toString()}
				/>
				<meta
					rel="keyuwords"
					name="keywords"
					content={
						Array.isArray(props.keywords)
							? props.keywords.join(' ').toLowerCase()
							: props.keywords
					}
				/>
				<meta property="og:title" {...props.title} />
				{props.icons && (
					<meta property="og:image" content={props.icons as string} />
				)}

				<title>{props.title.toString()}</title>
			</Head>
		</>
	);
}
