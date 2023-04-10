import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Meta from '@components/global/Meta';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),

					// enhanceComponent: (Component) => Component,
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	// render() {
	// 	return (
	// 		<Html lang="en">
	// 			<Meta />
	// 			<body>
	// 				<Main />
	// 				<NextScript />
	// 			</body>
	// 		</Html>
	// 	);
	// }
}
