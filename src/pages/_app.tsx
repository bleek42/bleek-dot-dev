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
import { GlobalStyle, theme } from '@/components/common/Theme';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default App;
