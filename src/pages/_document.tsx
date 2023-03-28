import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class StyledDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<Fragment>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>
				),
			};
		} 
		catch (err) {
			console.error('Error loading server-side StyledDocument:', err?.toString());
		} 
		finally {
			sheet.seal();
		}
	}
}
