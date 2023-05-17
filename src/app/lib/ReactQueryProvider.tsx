'use client';

import type { QueryClientProviderProps } from '@tanstack/react-query';
import {
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRef } from 'react';
import request from 'graphql-request';
import { GraphQLError } from 'graphql';

export default function ReactQueryProvider({ children }: QueryClientProviderProps) {
	const ref = useRef<QueryClient>(new QueryClient());
	const config: QueryClientConfig = {};

	// if (!ref.current) ref.current = new QueryClient(config);
	ref.current.setDefaultOptions({
		queries: {
			queryKey: ['projects'],
			initialData: () => ref.current.prefetchQuery(['projects']),
			cacheTime: 100000,
			staleTime: 300000,
		},
	});
	console.log(ref.current);

	return (
		<QueryClientProvider client={ref.current}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} position="top-right" />
		</QueryClientProvider>
	);
}

// errorTypes={[
// 	{
// 		name: 'GraphQL Error',
// 		initializer: (
// 			query = {
// 				queryKey: ['projects'],
// 				state: { data: request(), dataUpdatedAt: new Date().toLocaleDateString(), error:  },
// 			}
// 		) => new GraphQLError('GraphQL caught an unknown error...'),
// 	},
// ]}
