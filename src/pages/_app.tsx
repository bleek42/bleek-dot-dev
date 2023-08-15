import { type AppProps } from 'next/app';

import { type MetaComponent } from '@/interfaces/Component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/common/Theme';
import PageLayout from './lib/PageLayout';
import LandingPage from './index';
import Meta from '@/components/Meta';

const defaultMetaProps: MetaComponent = {
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

function App({ Component, pageProps }: AppProps) {
	console.log(Component.displayName);
	return (
		<ThemeProvider theme={theme}>
			<Meta {...defaultMetaProps} />
			<GlobalStyle />
			{Component !== LandingPage ? (
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			) : (
				<Component {...pageProps} />
			)}
		</ThemeProvider>
	);
}

export default App;
