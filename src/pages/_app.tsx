import { type AppProps } from 'next/app';

import { type MetaComponent } from '@/interfaces/Component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/common';
import Meta from '@/components/common/Meta';
import PageLayout from '@/lib/PageLayout';
import LandingPage from './index';
import { Fragment } from 'react';

function App({ Component, pageProps }: AppProps<MetaComponent>) {
	// console.log();

	return (
		<ThemeProvider theme={theme}>
			{Component !== LandingPage ? (
				<PageLayout id={pageProps.id}>
					<Component {...pageProps} />
				</PageLayout>
			) : (
				<Fragment>
					<Meta id={pageProps.id} />
					<GlobalStyle />
					<Component {...pageProps} />
				</Fragment>
			)}
		</ThemeProvider>
	);
}

export default App;
