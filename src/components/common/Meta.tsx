import Head from 'next/head';

import { type MetaComponent } from '@/interfaces/Component';
import {
	DefaultTemplateString,
	TemplateString,
} from 'next/dist/lib/metadata/types/metadata-types';
// import { Birdman, Oxanium, MonocraftNF } from '@/components/common';

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

type MetaProps = MetaComponent;

Meta.defaultProps = {
	title: {
		default: 'bleekDotDev',
		template: 'bleekDotDev:[%s]',
	},
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev, brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, us, nj, nc, ny, pa, phila, mobile, professional, tech, developer, web, development, application, software, programming,  functional,  object,  oriented,  terminal,  react, nodejs, npm, rest, api, ajax, async, orm, knex, express, docker, container, virtual, machine, microsoft, windows, linux,  wsl,debian,  ubuntu,  arch,android, ios, sales, sql, mysql, postgresql,  nosql, mongodb, graphql, open-source, FOSS, debug, solution,  shell,  scripting,  bash, zsh, fish, hacker, crypto, shopify, wordpress, cms, jquery,  json, music, festival, volunteer, harm, reduction, advocacy, consult, ambition,  business, creator, maintainer, growth,  detail, team, effort',
	icons: '\ue553',
	locale: 'en_US',
};
