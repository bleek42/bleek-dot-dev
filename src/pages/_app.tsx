// import { type NextComponentType, type NextPageContext, type NextPage } from 'next';

import {
	type AppProps,
	type AppInitialProps,
	type AppContext,
	type AppType,
} from 'next/app';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/common/Theme';
import PageLayout from './lib/PageLayout';
import LandingPage from '.';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{Component !== LandingPage ? (
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			) : (
				<Component {...pageProps} />
			)}
		</ThemeProvider>
	);
}

export default App;
