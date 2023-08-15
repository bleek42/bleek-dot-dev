// import { Birdman, MonocraftNF, Oxanium } from '@/components/common';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	type DocumentContext,
	type DocumentInitialProps,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

<<<<<<< HEAD
//@ts-expect-error (known issue with DocumentContext)
=======
// import Head from 'next/head';
import { render } from 'react-dom';

>>>>>>> origin/main
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
<<<<<<< HEAD
			// eslint-disable-next-line prettier/prettier
		} catch (err: unknown) {
			if (err) throw err;
			// eslint-disable-next-line prettier/prettier
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						key="font-birdman-1"
						rel="preload"
						href="fonts/birdman/birdman.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						key="font-Oxanium-1"
						rel="preload"
						href="fonts/Oxanium/Oxanium.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						key="font-MonocraftNF"
						rel="preload"
						href="fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
=======
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
>>>>>>> origin/main
				</body>
			</Html>
		);
	}
}

<<<<<<< HEAD
//   @font-face{
// 	${Birdman.style.fontFamily}
// 	${Birdman.style.fontStyle}
// 	${Birdman.style.fontWeight}
//   }
=======
>>>>>>> origin/main

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
