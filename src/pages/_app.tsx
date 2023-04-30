import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme, { GlobalStyle } from '@global/theme';
import client from '@utils/query-client';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} position="top-left" />
		</QueryClientProvider>
	);
}
export default MyApp;
