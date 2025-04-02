import { Fragment } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
import { GlobalStyle, PageBg } from '@/components/common';
import Meta from '@/components/common/Meta';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

type RootLayoutProps = LayoutComponent & MetaComponent;

const defaultProps: RootLayoutProps = {
	id: 'layout-bleek_0',
	name: 'bleekDotDev',
	title: '{ bleekDotDev }',
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
	children: [],
};
export default function PageLayout(props: LayoutComponent = defaultProps) {
	// console.log({ 'page-layout': props });

	return (
		<Fragment key={props.id}>
			<Meta
				id={'bldev-meta_0'}
				title={props.title ?? ''}
				keywords={props.keywords ?? []}
				locale={'en_US'}
			/>
			<PageHeader name={'page-header'} />
			<PageBg>{props.children}</PageBg>
			<PageFooter
				name="page-footer"
				description="bleekDotDev base page footer"
				content="https://github.com/bleek42/bleek-dot-dev"
			/>
		</Fragment>
	);
}
