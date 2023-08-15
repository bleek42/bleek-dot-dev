import Document, {
	Html,
	Head,
	Main,
	NextScript,
	type DocumentContext,
	type DocumentInitialProps,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

//@ts-expect-error (known issue with DocumentContext)
export default class StyledDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps: Awaited<DocumentInitialProps> =
				await Document.getInitialProps(ctx);
			// console.log(initialProps);
			// initialProps.disableVendorPrefixes = true;

			return {
				...initialProps,

				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		}

		// eslint-disable-next-line prettier/prettier
		catch (err) {
			if (err) throw err
		}

		// eslint-disable-next-line prettier/prettier
		finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					{' '}
					<Main /> <NextScript />{' '}
				</body>
			</Html>
		);
	}
}


//   @font-face{
// 	${Oxanium.style.fontFamily}
// 	${Oxanium.style.fontStyle}
// 	${Oxanium.style.fontWeight}
//   }
//   @font-face{
// 	${MonocraftNF.style.fontFamily}
// 	${MonocraftNF.style.fontStyle}
// 	${MonocraftNF.style.fontWeight}

//   }
