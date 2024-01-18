import { Fragment } from 'react';

import { type AppProps } from 'next/app';
import { type MetaComponent } from '@/interfaces/Component';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/components/common';
import Meta from '@/components/common/Meta';
import PageLayout from '@/lib/PageLayout';
import LandingPage from './index';

function App({ Component, pageProps }: AppProps<MetaComponent>) {
	// console.log();

	return (
		<ThemeProvider theme={theme}>
			{Component !== LandingPage ? (
				<PageLayout id={pageProps.id} name={pageProps.name ?? 'bldev-unknown-pg'}>
					<Component {...pageProps} />
				</PageLayout>
			) : (
				<Fragment>
					<Meta
						id={pageProps.id}
						title={pageProps.title}
						description={pageProps.description}
						keywords={pageProps.keywords}
						locale={pageProps.locale}
					/>
					<GlobalStyle />
					<Component {...pageProps} />
				</Fragment>
			)}
		</ThemeProvider>
	);
}

export default App;
