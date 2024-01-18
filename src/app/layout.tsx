import { type Metadata } from 'next';
import { type Component } from '@/interfaces/Component';

import Meta from '@/components/common/Meta';

type RootLayoutProps = Component & Metadata;

export const metadata: RootLayoutProps = {
	id: 'meta-bleek_0',
	name: 'bleekDotDev',
	title: '[bleekDotDev]',
	description: 'Brandon Leek: Web/Mobile Apps, DevSecOps, SysAdmin',
	keywords: [
		'bleek',
		'dev',
		'brandon',
		'leek',
		'js',
		'ts',
		'javascript',
		'typescript',
		'html',
		'css',
		'engineer',
		'usa',
		'us',
		'nj',
		'nc',
		'ny',
		'pa',
		'phila',
		'web',
		'mobile',
		'professional',
		'tech',
		'dev',
		'developer',
		'development',
		'application',
		'software',
		'programming',
		'functional',
		'object',
		'oriented',
		'terminal',
		'react',
		'nodejs',
		'npm',
		'rest',
		'api',
		'ajax',
		'async',
		'orm',
		'knex',
		'express',
		'docker',
		'container',
		'virtual',
		'machine',
		'microsoft',
		'windows',
		'linux',
		'wsl',
		'debian',
		'ubuntu',
		'arch',
		'android',
		'ios',
		'sql',
		'mysql',
		'postgresql',
		'nosql',
		'mongodb',
		'graphql',
		'free',
		'open-source',
		'FOSS',
		'free',
		'open',
		'source',
		'debug',
		'sysadmin',
		'system',
		'administration',
		'info',
		'tech',
		'information',
		'technology',
		'solution',
		'shell',
		'scripting',
		'bash',
		'zsh',
		'fish',
		'hacker',
		'crypto',
		'shopify',
		'wordpress',
		'cms',
		'jquery',
		'json',
		'music',
		'festival',
		'volunteer',
		'harm',
		'reduction',
		'advocacy',
		'consult',
		'ambition',
		'business',
		'creator',
		'maintainer',
		'growth',
		'detail',
		'team',
		'effort',
	],
	icons: '\ue553',
	locale: 'en_US',
};

export default function RootLayout(props: RootLayoutProps) {
	console.log({ rootLayoutProps: { ...props } }, props.metadataBase?.toJSON());
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					rel="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					rel="description"
					name="description"
					content={props.description ?? 'no description...'}
				/>
				<meta
					rel="keyuwords"
					name="keywords"
					content={
						props.keywords && Array.isArray(props.keywords)
							? props.keywords.join('')
							: undefined
					}
				/>
				{props.icons && (
					<meta property="og:image" content={props.icons.toString()} />
				)}
				<meta property="og:title" title={props.title?.toString()} />
				<meta property="og:locale" content={props.locale} />
				<title>Document</title>
			</head>
			<body>{props.children}</body>
		</html>
	);
}
