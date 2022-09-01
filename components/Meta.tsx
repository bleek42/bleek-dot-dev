import type { MetaProps } from '@props/meta.props';

import Head from 'next/head';

const Meta = ({ title, description, keywords, image }: MetaProps): JSX.Element => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image ? image : undefined} />
		</Head>
	);

};

Meta.defaultProps = {
  title: 'bleek.tech',
  description: 'Brandon Leek - Full Stack Developer',
  keywords:
    'web development, application development, software, programming, html, css, javascript, react, node.js, sql, typescript',
  image: null,
};

export default Meta;
