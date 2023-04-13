import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '@global/theme';
import GlobalStyle from '@global/styles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
