'use client';

import { useRef } from 'react';
import request, { RequestExtendedOptions, Variables } from 'graphql-request';
import { GraphQLError } from 'graphql';
import { type QueryClientProviderProps } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export default function ReactQueryProvider({ children }: QueryClientProviderProps) {
	const ref = useRef<QueryClient>();
	const queryClient: QueryClient = new QueryClient();
	let vars: Variables;
	let document: TypedDocumentNode<
		Record<string | symbol, RequestExtendedOptions>,
		Variables
	>;
	// const config: QueryClientConfig = {
	// 	defaultOptions: {
	// 		queries: {
	// 			queryKey: ['projects'],

	// 		},
	// 	},
	// };
	// if (!ref.current) ref.current = new QueryClient(config);

	ref?.current?.setDefaultOptions({
		queries: {
			queryKey: ['projects'],
			queryFn: () =>
				request<typeof document, typeof vars>({
					url: process.env.NEXT_PUBLIC_HYGRAPH_CDN_URL as string,
					document,
				}),
			initialData: () => ref?.current?.prefetchQuery(['projects']),
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
