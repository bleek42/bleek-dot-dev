import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GraphQLError } from 'graphql';

import theme, { GlobalStyle } from '@global/theme';
import client, { dehydratedQueryState } from '@utils/query-client';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<Hydrate state={dehydratedQueryState}>
					<GlobalStyle />
					<Component {...pageProps} />
				</Hydrate>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} position="top-left" />
		</QueryClientProvider>
	);
}
export default MyApp;
