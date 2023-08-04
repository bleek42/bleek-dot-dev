// import { type NextComponentType, type NextPageContext, type NextPage } from 'next';

import {
	type AppProps,
	type AppInitialProps,
	type AppContext,
	type AppType,
} from 'next/app';

import { type MetaComponent } from '@/interfaces/Component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/common/Theme';
import PageLayout from './lib/PageLayout';
import LandingPage from './index';
import Meta from '@/components/Meta';

let defaultMetaProps: MetaComponent = {
	title: 'bleekDotDev',
	description: 'Brandon Leek: Full-Stack Web Dev',
	keywords:
		'bleek, dev, brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, us, nj, nc, ny, pa, phila, mobile, professional, tech, developer, web, development, application, software, programming,  functional,  object,  oriented,  terminal,  react, nodejs, npm, rest, api, ajax, async, orm, knex, express, docker, container, virtual, machine, microsoft, windows, linux,  wsl,debian,  ubuntu,  arch,android, ios, sales, sql, mysql, postgresql,  nosql, mongodb, graphql, open-source, FOSS, debug, solution,  shell,  scripting,  bash, zsh, fish, hacker, crypto, shopify, wordpress, cms, jquery,  json, music, festival, volunteer, harm, reduction, advocacy, consult, ambition,  business, creator, maintainer, growth,  detail, team, effort',
	icons: '\ue553',
	locale: 'en_US',
};

export { defaultMetaProps };

function App({ Component, pageProps }: AppProps) {
	console.log();
	return (
		<>
			<Meta {...defaultMetaProps} />
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{Component !== LandingPage ? (
					<PageLayout>
						<Component {...pageProps} />
					</PageLayout>
				) : (
					<Component {...pageProps} />
				)}
			</ThemeProvider>
		</>
	);
}

export default App;
