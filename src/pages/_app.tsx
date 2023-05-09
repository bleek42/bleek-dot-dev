import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/react-query';

import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GraphQLError } from 'graphql';
import {
	Hydrate,
	HydrateProps,
	QueryClientProvider,
	dehydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme, { GlobalStyle } from '@global/theme';
import { config } from '@utils/query-client';

function MyApp({ Component, pageProps }: AppProps) {
	const ref = useRef<QueryClient>();
	if (!ref.current) ref.current = new QueryClient(config);

	return (
		<QueryClientProvider client={ref.current}>
			<ThemeProvider theme={theme}>
				<Hydrate state={pageProps.dehydratedState}>
					<GlobalStyle />
					<Component {...pageProps} />
				</Hydrate>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} position="top-left" />
		</QueryClientProvider>
	);
}
export default MyApp;
