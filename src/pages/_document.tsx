// import { Birdman, MonocraftNF, Oxanium } from '@/components/common';
import Document, {
	type DocumentContext,
	type DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
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
			// eslint-disable-next-line prettier/prettier
		} 
		catch (err: unknown) {
			if (err) throw err;
			// eslint-disable-next-line prettier/prettier
		}
		finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <style
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
					  :root {
						--font-MonocraftNF: MonocraftNF;
					    --font-Oxanium: __Oxanium_5aa400;
						--font-Birdman: __Birdman_17cb25;
						--font-Oxanium-lt: __Oxanium_5aa400
					  }

					`,
						}}
					/> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

//   @font-face{
// 	${Birdman.style.fontFamily}
// 	${Birdman.style.fontStyle}
// 	${Birdman.style.fontWeight}
//   }

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
