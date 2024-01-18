import Head from 'next/head';
import { Fragment } from 'react';

import { type MetaComponent } from '@/interfaces/Component';
import { GlobalStyle } from './theme';

type MetaProps = MetaComponent;

export default function Meta(props: MetaProps) {
	return (
		// <head>
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<meta
					rel="viewport"
					name="viewport"
					content="initial-scale=1, width=device-width"
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
						Array.isArray(props.keywords)
							? props.keywords.join(' ').toLowerCase()
							: props.keywords?.toLowerCase()
					}
				/>
				<meta property="og:title" title={props.title} />
				<meta property="og:locale" content={props.locale} />
				{/* <GlobalStyle /> */}
				<title>{props.title}</title>
			</Head>
		</Fragment>
		// </head>
	);
}

// Meta.defaultProps = {
// 	id: 'meta-bleek_0',
// 	title: 'bleekDotDev',
// 	description: 'Brandon Leek: Full-Stack Web Dev',
// 	keywords:
// 		'bleek, dev, brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, us, nj, nc, ny, pa, phila, mobile, professional, tech, developer, web, development, application, software, programming,  functional,  object,  oriented,  terminal,  react, nodejs, npm, rest, api, ajax, async, orm, knex, express, docker, container, virtual, machine, microsoft, windows, linux,  wsl,debian,  ubuntu,  arch,android, ios, sales, sql, mysql, postgresql,  nosql, mongodb, graphql, open-source, FOSS, debug, solution,  shell,  scripting,  bash, zsh, fish, hacker, crypto, shopify, wordpress, cms, jquery,  json, music, festival, volunteer, harm, reduction, advocacy, consult, ambition,  business, creator, maintainer, growth,  detail, team, effort',
// 	icons: '\ue553',
// 	locale: 'en_US',
// };
