import Head from 'next/head';

import { type MetaComponent } from 'src/interfaces/Component';
// import { Birdman, Oxanium, MonocraftNF } from '@/components/common';

type MetaProps = MetaComponent;

export default function Meta(props: MetaProps) {
	return (
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
			<meta property="og:title" content={props.title as string} />
			<meta property="og:image" content={props.icons as string} />

			<title>{props.title.toString()}</title>
		</Head>
	);
}
