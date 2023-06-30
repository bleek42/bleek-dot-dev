import Head from 'next/head';

import { type MetaComponent } from '@/interfaces/Component';

type MetaProps = MetaComponent;

export default function Meta({ title, description, keywords, image }: MetaProps) {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta
				name="keywords"
				content={Array.isArray(keywords) ? keywords.join(' ') : keywords}
			/>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image?.toString()} />
			<title>{title}</title>
		</Head>
	);
}

