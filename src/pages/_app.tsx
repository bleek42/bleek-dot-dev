import type { AppProps } from 'next/app';
import {
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GraphQLError } from 'graphql';

import theme, { GlobalStyle } from '@global/theme';
import { hygraphClient } from '@utils/gql-client';

function App({ Component, pageProps }: AppProps) {
	const ref = useRef<QueryClient>();
	const config: QueryClientConfig = {
		defaultOptions: {
			queries: {
				queryKey: ['projects'],
				initialData: ref?.current?.prefetchQuery(['projects']),
				cacheTime: 100000,
				staleTime: 300000,
			},
		},
	};

	if (!ref.current) ref.current = new QueryClient(config);
	console.log(ref.current);

	return (
		<QueryClientProvider client={ref.current}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} position="top-left" />
		</QueryClientProvider>
	);
}
export default App;
