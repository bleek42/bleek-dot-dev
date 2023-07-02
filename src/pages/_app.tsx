import { type NextComponentType, type NextPageContext, type NextPage } from 'next';

import {
	type AppProps,
	type AppInitialProps,
	type AppContext,
	type AppType,
} from 'next/app';

// import StyledProvider from './lib/StyledProvider';
// import PageLayout from './lib/PageLayout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/global/Theme';
import ReactQueryClientProvider from './lib/ReactQueryProvider';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<ReactQueryClientProvider>
				<Component {...pageProps} />
			</ReactQueryClientProvider>
		</ThemeProvider>
	);
}
export default App;
