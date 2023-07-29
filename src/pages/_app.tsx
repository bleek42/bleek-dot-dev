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
		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest, api, ajax, async, typeorm, relational, mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json, music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
	icons: '\ue553',
	locale: 'en_US',
};

export { defaultMetaProps };

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Meta {...defaultMetaProps} />
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
