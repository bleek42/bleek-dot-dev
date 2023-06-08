// import type {
// 	DocumentContext,
// 	DocumentInitialProps,
// 	Html,
// 	Main,
// 	NextScript,
// } from 'next/document';

// import Document from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class StyledDocument extends Document {
// 	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
// 		const sheet = new ServerStyleSheet();
// 		const originalRenderPage = ctx.renderPage;

// 		try {
// 			ctx.renderPage = () =>
// 				originalRenderPage({
// 					enhanceApp: (App) => (props) =>
// 						sheet.collectStyles(<App {...props} />),
// 				});

// 			const initialProps = await Document.getInitialProps(ctx);

// 			return {
// 				...initialProps,
// 				styles: (
// 					<>
// 						{initialProps.styles}
// 						{sheet.getStyleElement()}
// 					</>
// 				),
// 			};
// 			// eslint-disable-next-line prettier/prettier
// 		} finally {
// 			sheet.seal();
// 		}
// 	}

// 	// render() {
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
