import {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class StyledDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			console.log(initialProps.styles);
			return {
				styles: [sheet.getStyleElement()],
				...initialProps,
			};

			// eslint-disable-next-line prettier/prettier
		} catch (err: any) {
			console.error(err);
			throw new Error(err ?? 'next styled doc error...');
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang={'en_US'}>
				<Head />
				<NextScript />
				<body>
					<Main />
				</body>
			</Html>
		);
	}
}

// 	// render() {

// Document.defaultProps = {
// 	title: 'bleekDotDev',
// 	description: 'Brandon Leek - Full Stack Web Developer',
// 	keywords:
// 		'bleek, dev brandon, leek, js, ts, javascript, typescript, html, css, engineer, usa, nj, nc, mobile, professional, tech, developer, web, development, application, software,   programming,  functional,  object,  oriented,  terminal,  react,  nodejs,  npm, rest,api,ajax,async,  typeorm,  relational,  mapping,  knex,expressjs,  sequelize,  docker,  container,  virtual,  microsoft,  windows,  linux,  wsl,debian,  ubuntu,  arch,android,  ios,sales,  sql,mysql,  postgres,  nosql,  mongodb,  graphql,  open-source,  debugging,  solutions,  shell,  scripting,  bash,zsh,fish,hacker,  crypto,  shopify,  wordpress,  jquery,  json,music,  festivals,  volunteer,  harm,reduction,  advocacy,  management,  ambition,  business,  creator,  maintain,  skateboard,   self,improvement,  growth,  courage,  strength,  open,accepting,  detail,  team, effort',
// 	image: undefined,
// };
// 	// 	return (
// 	// 		<Html lang="en">
// 	// 			<Meta />
// 	// 			<body>
// 	// 				<Main />
// 	// 				<NextScript />
// 	// 			</body>
// 	// 		</Html>
// 	// 	);
// 	// }
// }
